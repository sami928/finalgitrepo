import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface LeadData {
  name: string;
  email: string;
  phone?: string | null;
  interest?: string | null;
  price_range?: string | null;
  message?: string | null;
  source?: string | null;
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const lead: LeadData = await req.json();

    // Validate required fields
    if (!lead.name || !lead.email) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: name and email" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Email recipient — Catherine receives the notification
    const recipientEmail = "catherine@homesbycatherine.io";

    // Format the submission date
    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Build a nicely formatted HTML email
    const rows: Array<{ label: string; value: string }> = [
      { label: "Name", value: lead.name },
      { label: "Email", value: lead.email },
      { label: "Phone", value: lead.phone || "Not provided" },
      { label: "Interested in", value: lead.interest || "Not specified" },
      { label: "Price range", value: lead.price_range || "Not specified" },
      { label: "Source", value: lead.source || "Unknown" },
    ];

    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <div style="background: #18181b; border-radius: 12px 12px 0 0; padding: 24px 32px;">
          <h1 style="color: #ffffff; font-size: 22px; margin: 0; font-weight: 600;">New Lead Submission</h1>
          <p style="color: #a1a1aa; font-size: 14px; margin: 8px 0 0;">A new contact form was submitted on your website</p>
        </div>

        <div style="background: #ffffff; border: 1px solid #e4e4e7; border-radius: 0 0 12px 12px; padding: 32px;">
          <p style="color: #71717a; font-size: 13px; margin: 0 0 24px;">
            <strong>Submitted:</strong> ${submittedAt}
          </p>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            ${rows
              .map(
                (row) => `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; width: 40%;">
                  <span style="color: #71717a; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">${row.label}</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5;">
                  <span style="color: #18181b; font-size: 15px;">${escapeHtml(row.value)}</span>
                </td>
              </tr>
            `
              )
              .join("")}
          </table>

          ${
            lead.message
              ? `
            <div style="margin-top: 8px;">
              <p style="color: #71717a; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 8px;">Message</p>
              <div style="background: #fafafa; border: 1px solid #e4e4e7; border-radius: 8px; padding: 16px;">
                <p style="color: #27272a; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${escapeHtml(lead.message)}</p>
              </div>
            </div>
          `
              : ""
          }

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e4e4e7;">
            <a href="mailto:${encodeURIComponent(lead.email)}" style="display: inline-block; background: #dc2626; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; padding: 12px 24px; border-radius: 8px;">
              Reply to ${escapeHtml(lead.name)}
            </a>
          </div>
        </div>

        <p style="color: #a1a1aa; font-size: 12px; text-align: center; margin: 24px 0 0;">
          This notification was sent automatically from homesbycatherine.io
        </p>
      </div>
    `;

    // Plain text fallback
    const textBody = [
      `NEW LEAD SUBMISSION`,
      `Submitted: ${submittedAt}`,
      ``,
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      `Phone: ${lead.phone || "Not provided"}`,
      `Interested in: ${lead.interest || "Not specified"}`,
      `Price range: ${lead.price_range || "Not specified"}`,
      `Source: ${lead.source || "Unknown"}`,
      ``,
      lead.message ? `Message:\n${lead.message}` : "",
      ``,
      `Reply directly: mailto:${lead.email}`,
    ]
      .filter(Boolean)
      .join("\n");

    // Send email via Resend API
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      // If no Resend key is configured, log the lead and return success
      // so the frontend doesn't error — the lead is still saved in the DB
      console.log("[send-lead-email] No RESEND_API_KEY configured. Lead data:", JSON.stringify(lead));
      return new Response(
        JSON.stringify({
          success: true,
          message: "Lead recorded but email not sent (RESEND_API_KEY not configured)",
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Homes by Catherine <noreply@homesbycatherine.io>",
        to: [recipientEmail],
        reply_to: lead.email,
        subject: `New Lead: ${lead.name} — ${lead.interest || lead.source || "Website inquiry"}`,
        html: htmlBody,
        text: textBody,
      }),
    });

    if (!emailResponse.ok) {
      const errorBody = await emailResponse.text();
      console.error("[send-lead-email] Resend API error:", emailResponse.status, errorBody);
      return new Response(
        JSON.stringify({
          success: false,
          error: `Email service returned error: ${emailResponse.status}`,
        }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailData = await emailResponse.json();

    return new Response(
      JSON.stringify({ success: true, messageId: emailData.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("[send-lead-email] Error:", err.message);
    return new Response(
      JSON.stringify({ error: err.message || "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
