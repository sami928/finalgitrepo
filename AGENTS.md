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
