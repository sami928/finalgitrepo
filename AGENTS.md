# Base44 Setup Notes

## Project Overview
Vite + React + TypeScript real estate agent website (Engel & Völkers / Catherine Redmond). Single-page app with client-side routing (custom History API router in `src/lib/router.ts`).

**Routing depends on a server rewrite.** Routes are real paths (`/listings`, not `/#/listings`) so each is crawlable and carries its own metadata via `src/lib/useSEO.ts`. This requires the host to serve `index.html` for unmatched paths — `public/.htaccess` does that on Apache/Hostinger. On any other host (Netlify, Vercel, nginx, S3) the equivalent rewrite must be configured or every deep link will 404.

## Stack
- **Frontend:** Vite 5.4 + React 18 + TypeScript + Tailwind CSS
- **Backend:** Supabase (remote, hosted) — used for lead form submissions
- **No local backend server** — the app is a static SPA; Supabase is called directly from the browser

## Running the App
```bash
docker compose -f docker-compose.base44.yml up -d
```
- Vite dev server runs on port 5173 inside the container, mapped to host port 3000
- `npm install` runs at container startup (node_modules in an anonymous volume to avoid clobbering)
- Live reload is active (Vite HMR)

## Configuration
- Supabase URL and anon key have hardcoded defaults in `src/lib/supabase.ts` — no env vars required to boot
- MLS search, testimonials, and resources pages are disabled via feature flags in `src/config/site.ts`
- The Supabase Edge Function (`supabase/functions/send-lead-email/`) runs on Supabase's platform, not locally — it uses Resend for email but gracefully degrades without a `RESEND_API_KEY`

## No External Secrets Required
The app boots without any credentials. Supabase defaults are embedded in the source code.

## Vite Config
`vite.config.ts` has `server.allowedHosts: true` to accept the preview's external hostname.

## Analytics & Weekly Report
- **GA4** (`G-EDMG6FDXHV`, set in `src/config/seo.ts`): page views from `src/components/Analytics.tsx`; custom events from `src/lib/analytics.ts`: `generate_lead`, `lead_form_error`, `click_call`, `click_email`. Enhanced measurement covers PDF downloads/outbound links. Mark `generate_lead`, `click_call`, `click_email` as **Key events** in GA4 Admin → Events.
- **Lead attribution:** first page, referrer host and UTM tags of the session are saved on each `leads` row (`landing_page`, `referrer`, `utm_*`).
- **Weekly report:** Edge Function `supabase/functions/analytics-report/` runs Mondays 15:00 UTC via pg_cron (`supabase/migrations/*_weekly_analytics_report.sql`) and emails Catherine (or `REPORT_RECIPIENTS`, comma-separated) via Resend. Auth is an `x-report-token` header checked against a Vault secret, so the job needs no manual secret wiring.
- **Edge Function secrets** (Supabase dashboard → Edge Functions → Secrets):
  - `RESEND_API_KEY`: required to actually send; without it the report is only logged.
  - `GA4_PROPERTY_ID` (numeric, GA4 Admin → Property details) + `GA4_SERVICE_ACCOUNT_JSON` (Google Cloud service-account key with the Analytics Data API enabled; add its email as a **Viewer** on the GA4 property). Without these the report covers leads only.
- **Manual run / preview** (SQL editor): `select net.http_post(url := 'https://czsktqnbnuzzwjcxzbux.supabase.co/functions/v1/analytics-report', headers := jsonb_build_object('Content-Type','application/json','x-report-token',(select decrypted_secret from vault.decrypted_secrets where name='analytics_report_token')), body := '{"days":7,"dry_run":true}'::jsonb);` then read `net._http_response`. Drop `dry_run` to send.
