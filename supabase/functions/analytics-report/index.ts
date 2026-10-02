// Weekly analytics report for homesbycatherine.io.
//
// Combines two sources and emails the result to Catherine via Resend:
//   1. Leads from the `leads` table (always available), with attribution.
//   2. Traffic from the GA4 Data API (when GA4_PROPERTY_ID and
//      GA4_SERVICE_ACCOUNT_JSON are set; the section is skipped otherwise).
//
// Triggered weekly by pg_cron (see supabase/migrations/*_weekly_analytics_report.sql).
// Auth: `x-report-token` header must match the Vault-held token.
//
// POST body (all optional):
//   { "days": 7, "dry_run": false }
// dry_run returns the report JSON + HTML without sending email.

import { createClient } from "npm:@supabase/supabase-js@2";

const SITE = "homesbycatherine.io";
const DEFAULT_RECIPIENT = "catherine@homesbycatherine.io";
const TZ = "America/Los_Angeles";
const TRACKED_EVENTS = ["generate_lead", "click_call", "click_email", "file_download"];

type Lead = {
  name: string;
  email: string;
  phone: string | null;
  interest: string | null;
  price_range: string | null;
  source: string | null;
  landing_page: string | null;
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  created_at: string;
};

type Ga4Report = {
  totals: { metric: string; current: number; previous: number }[];
  channels: { label: string; value: number }[];
  pages: { label: string; value: number }[];
  events: { label: string; value: number }[];
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  if (req.method !== "POST") return json({ error: "POST only" }, 405);

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    { auth: { persistSession: false } },
  );

  const { data: expected, error: tokenError } = await supabase.rpc("analytics_report_token");
  const provided = req.headers.get("x-report-token") ?? "";
  if (tokenError || !expected || !timingSafeEqual(provided, expected as string)) {
    return json({ error: "Unauthorized" }, 401);
  }

  let body: { days?: number; dry_run?: boolean } = {};
  try {
    body = await req.json();
  } catch {
    // Empty body: use defaults.
  }
  const days = Math.min(Math.max(Math.floor(Number(body.days) || 7), 1), 90);

  const now = new Date();
  const start = new Date(now.getTime() - days * 86_400_000);
  const prevStart = new Date(start.getTime() - days * 86_400_000);

  // --- Leads ---------------------------------------------------------------
  const { data: leads, error: leadsError } = await supabase
    .from("leads")
    .select("name,email,phone,interest,price_range,source,landing_page,referrer,utm_source,utm_medium,utm_campaign,created_at")
    .gte("created_at", start.toISOString())
    .order("created_at", { ascending: false });
  if (leadsError) {
    console.error("[analytics-report] leads query failed:", leadsError);
    return json({ error: `Leads query failed: ${leadsError.message}` }, 500);
  }

  const { count: prevLeadCount } = await supabase
    .from("leads")
    .select("id", { count: "exact", head: true })
    .gte("created_at", prevStart.toISOString())
    .lt("created_at", start.toISOString());

  const leadRows = (leads ?? []) as Lead[];
  const leadSummary = {
    count: leadRows.length,
    previous: prevLeadCount ?? 0,
    byForm: tally(leadRows, (l) => l.source || "unknown"),
    byInterest: tally(leadRows, (l) => l.interest || "Not specified"),
    byChannel: tally(leadRows, leadChannel),
  };

  // --- GA4 -----------------------------------------------------------------
  let ga4: Ga4Report | null = null;
  let ga4Note: string | null = null;
  const propertyId = Deno.env.get("GA4_PROPERTY_ID");
  const serviceAccount = Deno.env.get("GA4_SERVICE_ACCOUNT_JSON");
  if (propertyId && serviceAccount) {
    try {
      ga4 = await fetchGa4(propertyId, JSON.parse(serviceAccount), days);
    } catch (err) {
      console.error("[analytics-report] GA4 failed:", err);
      ga4Note = `Google Analytics data unavailable this week: ${(err as Error).message}`;
    }
  } else {
    ga4Note = "Google Analytics traffic is not connected yet (GA4_PROPERTY_ID / GA4_SERVICE_ACCOUNT_JSON secrets not set).";
  }

  // --- Render + send -------------------------------------------------------
  const period = `${fmtDate(start)} – ${fmtDate(now)}`;
  const report = { period, days, leads: leadSummary, ga4, ga4Note };
  const html = renderHtml(report, leadRows);
  const subject = `${SITE} weekly report: ${leadSummary.count} lead${leadSummary.count === 1 ? "" : "s"}` +
    (ga4 ? `, ${fmtNum(metric(ga4, "activeUsers"))} visitors` : "") + ` (${period})`;

  if (body.dry_run) return json({ report, subject, html });

  const resendKey = Deno.env.get("RESEND_API_KEY");
  if (!resendKey) {
    console.log("[analytics-report] No RESEND_API_KEY; report:", JSON.stringify(report));
    return json({ success: true, sent: false, message: "RESEND_API_KEY not configured", report });
  }

  const recipients = (Deno.env.get("REPORT_RECIPIENTS") || DEFAULT_RECIPIENT)
    .split(",").map((s) => s.trim()).filter(Boolean);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Homes by Catherine <noreply@homesbycatherine.io>",
      to: recipients,
      subject,
      html,
      text: renderText(report, leadRows),
    }),
  });
  if (!res.ok) {
    const detail = await res.text();
    console.error("[analytics-report] Resend error:", res.status, detail);
    return json({ success: false, error: `Email service returned ${res.status}` }, 502);
  }
  return json({ success: true, sent: true, recipients: recipients.length, report });
});

// --- GA4 Data API -----------------------------------------------------------

async function fetchGa4(
  propertyId: string,
  sa: { client_email: string; private_key: string },
  days: number,
): Promise<Ga4Report> {
  const token = await googleAccessToken(sa);
  const run = async (request: Record<string, unknown>) => {
    const res = await fetch(
      `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify(request),
      },
    );
    if (!res.ok) throw new Error(`GA4 ${res.status}: ${(await res.text()).slice(0, 200)}`);
    return await res.json();
  };

  const current = { startDate: `${days}daysAgo`, endDate: "today" };
  const previous = { startDate: `${days * 2}daysAgo`, endDate: `${days + 1}daysAgo` };
  const totalMetrics = ["activeUsers", "sessions", "screenPageViews", "engagementRate"];

  const [totals, channels, pages, events] = await Promise.all([
    run({ dateRanges: [current, previous], metrics: totalMetrics.map((name) => ({ name })) }),
    run({
      dateRanges: [current],
      dimensions: [{ name: "sessionDefaultChannelGroup" }],
      metrics: [{ name: "sessions" }],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 8,
    }),
    run({
      dateRanges: [current],
      dimensions: [{ name: "pagePath" }],
      metrics: [{ name: "screenPageViews" }],
      orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
      limit: 10,
    }),
    run({
      dateRanges: [current],
      dimensions: [{ name: "eventName" }],
      metrics: [{ name: "eventCount" }],
      dimensionFilter: {
        filter: { fieldName: "eventName", inListFilter: { values: TRACKED_EVENTS } },
      },
    }),
  ]);

  // With two date ranges GA4 adds a `dateRange` dimension; rows are
  // labelled date_range_0 (current) and date_range_1 (previous).
  const byRange = new Map<string, number[]>();
  for (const row of totals.rows ?? []) {
    byRange.set(
      row.dimensionValues?.[0]?.value ?? "date_range_0",
      row.metricValues.map((v: { value: string }) => Number(v.value)),
    );
  }
  const cur = byRange.get("date_range_0") ?? [];
  const prev = byRange.get("date_range_1") ?? [];

  const rows = (r: { rows?: { dimensionValues: { value: string }[]; metricValues: { value: string }[] }[] }) =>
    (r.rows ?? []).map((row) => ({
      label: row.dimensionValues[0].value,
      value: Number(row.metricValues[0].value),
    }));

  return {
    totals: totalMetrics.map((m, i) => ({ metric: m, current: cur[i] ?? 0, previous: prev[i] ?? 0 })),
    channels: rows(channels),
    pages: rows(pages),
    events: TRACKED_EVENTS.map((name) => ({
      label: name,
      value: rows(events).find((e) => e.label === name)?.value ?? 0,
    })),
  };
}

/** Service-account JWT -> OAuth access token (no Google SDK needed in Deno). */
async function googleAccessToken(sa: { client_email: string; private_key: string }): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const enc = (obj: unknown) => b64url(new TextEncoder().encode(JSON.stringify(obj)));
  const unsigned = `${enc({ alg: "RS256", typ: "JWT" })}.${enc({
    iss: sa.client_email,
    scope: "https://www.googleapis.com/auth/analytics.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  })}`;

  const pem = sa.private_key.replace(/-----[^-]+-----/g, "").replace(/\s+/g, "");
  const key = await crypto.subtle.importKey(
    "pkcs8",
    Uint8Array.from(atob(pem), (c) => c.charCodeAt(0)),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key, new TextEncoder().encode(unsigned));

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsigned}.${b64url(new Uint8Array(sig))}`,
    }),
  });
  if (!res.ok) throw new Error(`Google auth ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return (await res.json()).access_token;
}

// --- Rendering --------------------------------------------------------------

type Report = {
  period: string;
  days: number;
  leads: {
    count: number;
    previous: number;
    byForm: [string, number][];
    byInterest: [string, number][];
    byChannel: [string, number][];
  };
  ga4: Ga4Report | null;
  ga4Note: string | null;
};

const METRIC_LABELS: Record<string, string> = {
  activeUsers: "Visitors",
  sessions: "Sessions",
  screenPageViews: "Page views",
  engagementRate: "Engagement rate",
};

const EVENT_LABELS: Record<string, string> = {
  generate_lead: "Lead form submissions",
  click_call: "Phone link taps",
  click_email: "Email link clicks",
  file_download: "Guide PDF downloads",
};

function renderHtml(r: Report, leads: Lead[]): string {
  const card = (label: string, value: string, change: string) => `
    <td style="padding:12px;border:1px solid #e4e4e7;border-radius:8px;width:25%;vertical-align:top;">
      <div style="color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:.05em;">${label}</div>
      <div style="color:#18181b;font-size:24px;font-weight:600;margin-top:4px;">${value}</div>
      <div style="color:#71717a;font-size:12px;margin-top:2px;">${change}</div>
    </td>`;

  const table = (title: string, rows: [string, number | string][]) =>
    rows.length === 0 ? "" : `
    <h3 style="color:#18181b;font-size:15px;margin:28px 0 8px;">${title}</h3>
    <table style="width:100%;border-collapse:collapse;">
      ${rows.map(([k, v]) => `
        <tr>
          <td style="padding:6px 0;border-bottom:1px solid #f4f4f5;color:#27272a;font-size:14px;">${esc(k)}</td>
          <td style="padding:6px 0;border-bottom:1px solid #f4f4f5;color:#18181b;font-size:14px;text-align:right;font-weight:600;">${esc(String(v))}</td>
        </tr>`).join("")}
    </table>`;

  const cards = [
    card("Leads", fmtNum(r.leads.count), vsPrev(r.leads.count, r.leads.previous)),
    ...(r.ga4?.totals ?? []).map((t) =>
      t.metric === "engagementRate"
        ? card(METRIC_LABELS[t.metric], fmtPct(t.current), `${fmtPct(t.previous)} prior period`)
        : card(METRIC_LABELS[t.metric], fmtNum(t.current), vsPrev(t.current, t.previous))
    ),
  ];
  // Two rows of cards at most; email clients ignore CSS grid.
  const cardRows = [cards.slice(0, 3), cards.slice(3)].filter((c) => c.length);

  const leadList = leads.length === 0 ? "" : `
    <h3 style="color:#18181b;font-size:15px;margin:28px 0 8px;">This period's leads</h3>
    <table style="width:100%;border-collapse:collapse;font-size:13px;">
      <tr style="color:#71717a;text-align:left;">
        <th style="padding:6px 4px 6px 0;">When</th><th style="padding:6px 4px;">Name</th>
        <th style="padding:6px 4px;">Interest</th><th style="padding:6px 0 6px 4px;">Came from</th>
      </tr>
      ${leads.map((l) => `
        <tr>
          <td style="padding:6px 4px 6px 0;border-top:1px solid #f4f4f5;color:#71717a;white-space:nowrap;">${esc(fmtDate(new Date(l.created_at)))}</td>
          <td style="padding:6px 4px;border-top:1px solid #f4f4f5;"><a href="mailto:${encodeURIComponent(l.email)}" style="color:#18181b;">${esc(l.name)}</a></td>
          <td style="padding:6px 4px;border-top:1px solid #f4f4f5;color:#27272a;">${esc([l.interest, l.price_range].filter(Boolean).join(", ") || "—")}</td>
          <td style="padding:6px 0 6px 4px;border-top:1px solid #f4f4f5;color:#27272a;">${esc(leadChannel(l))}${l.landing_page ? ` · ${esc(l.landing_page)}` : ""}</td>
        </tr>`).join("")}
    </table>`;

  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:640px;margin:0 auto;padding:24px;">
    <div style="background:#18181b;border-radius:12px 12px 0 0;padding:24px 32px;">
      <h1 style="color:#fff;font-size:22px;margin:0;font-weight:600;">Weekly website report</h1>
      <p style="color:#a1a1aa;font-size:14px;margin:8px 0 0;">${esc(SITE)} · ${esc(r.period)}</p>
    </div>
    <div style="background:#fff;border:1px solid #e4e4e7;border-radius:0 0 12px 12px;padding:28px 32px;">
      ${cardRows.map((row) => `<table style="width:100%;border-collapse:separate;border-spacing:8px;margin:0 -8px;"><tr>${row.join("")}</tr></table>`).join("")}
      ${r.ga4Note ? `<p style="color:#a16207;background:#fefce8;border-radius:8px;padding:10px 12px;font-size:13px;margin:16px 0 0;">${esc(r.ga4Note)}</p>` : ""}
      ${r.ga4 ? table("Conversions on the site", r.ga4.events.map((e) => [EVENT_LABELS[e.label] ?? e.label, fmtNum(e.value)])) : ""}
      ${table("Where leads came from", r.leads.byChannel)}
      ${table("Which form", r.leads.byForm)}
      ${table("Lead interest", r.leads.byInterest)}
      ${r.ga4 ? table("Traffic by channel (sessions)", r.ga4.channels.map((c) => [c.label, fmtNum(c.value)])) : ""}
      ${r.ga4 ? table("Top pages (views)", r.ga4.pages.map((p) => [p.label, fmtNum(p.value)])) : ""}
      ${leadList}
    </div>
    <p style="color:#a1a1aa;font-size:12px;text-align:center;margin:24px 0 0;">
      Sent automatically every Monday. Full detail: Google Analytics → Reports.
    </p>
  </div>`;
}

function renderText(r: Report, leads: Lead[]): string {
  const lines = [`WEEKLY WEBSITE REPORT — ${SITE}`, r.period, "", `Leads: ${r.leads.count} (${vsPrev(r.leads.count, r.leads.previous)})`];
  for (const t of r.ga4?.totals ?? []) {
    lines.push(`${METRIC_LABELS[t.metric]}: ${t.metric === "engagementRate" ? fmtPct(t.current) : fmtNum(t.current)}`);
  }
  if (r.ga4Note) lines.push("", r.ga4Note);
  if (r.ga4) {
    lines.push("", "Conversions:", ...r.ga4.events.map((e) => `  ${EVENT_LABELS[e.label] ?? e.label}: ${e.value}`));
  }
  if (r.leads.byChannel.length) lines.push("", "Lead sources:", ...r.leads.byChannel.map(([k, v]) => `  ${k}: ${v}`));
  if (leads.length) {
    lines.push("", "Leads:", ...leads.map((l) => `  ${fmtDate(new Date(l.created_at))}  ${l.name} <${l.email}>  ${l.interest ?? ""}  via ${leadChannel(l)}`));
  }
  return lines.join("\n");
}

// --- Helpers ----------------------------------------------------------------

function leadChannel(l: Lead): string {
  if (l.utm_source) return [l.utm_source, l.utm_medium].filter(Boolean).join(" / ");
  if (l.referrer) {
    const host = l.referrer.replace(/^www\./, "");
    if (/google\.|bing\.|duckduckgo\.|yahoo\./.test(host)) return `Search (${host})`;
    if (/facebook\.|instagram\.|linkedin\.|t\.co$|twitter\.|x\.com/.test(host)) return `Social (${host})`;
    return host;
  }
  if (l.landing_page) return "Direct";
  return "Unknown (before tracking)";
}

function tally<T>(items: T[], key: (item: T) => string): [string, number][] {
  const counts = new Map<string, number>();
  for (const item of items) counts.set(key(item), (counts.get(key(item)) ?? 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

function metric(ga4: Ga4Report, name: string): number {
  return ga4.totals.find((t) => t.metric === name)?.current ?? 0;
}

function vsPrev(cur: number, prev: number): string {
  if (prev === 0) return cur === 0 ? "no change" : "up from 0";
  const pct = Math.round(((cur - prev) / prev) * 100);
  return `${pct >= 0 ? "▲" : "▼"} ${Math.abs(pct)}% vs prior period`;
}

const fmtNum = (n: number) => Math.round(n).toLocaleString("en-US");
const fmtPct = (n: number) => `${Math.round(n * 100)}%`;
const fmtDate = (d: Date) => d.toLocaleDateString("en-US", { timeZone: TZ, month: "short", day: "numeric" });

function b64url(bytes: Uint8Array): string {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function esc(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
