/*
# Create leads table for real estate lead capture

1. New Tables
- `leads`
  - `id` (uuid, primary key)
  - `name` (text, not null) — lead's full name
  - `email` (text, not null) — lead's email address
  - `phone` (text, nullable) — lead's phone number
  - `message` (text, nullable) — optional message / what they're looking for
  - `source` (text, nullable) — which page/form the lead came from (e.g. 'home', 'contact')
  - `interest` (text, nullable) — buying / selling / both / just browsing
  - `price_range` (text, nullable) — approximate budget range
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `leads`.
- This is a single-tenant marketing site with no sign-in screen, so anon writes
  the lead form. SELECT/UPDATE/DELETE are NOT exposed to anon (leads are private
  to the agent, reviewed in the Supabase dashboard) — only INSERT is allowed
  for anon/authenticated. This prevents visitors from scraping other people's
  lead submissions while still allowing the public lead form to submit.
3. Notes
- Only INSERT is public (anon + authenticated). The agent reads/manages leads
  directly in the Supabase dashboard with the service role / their own auth.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text,
  source text,
  interest text,
  price_range text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon) to submit a lead. INSERT-only.
DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads"
  ON leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- No SELECT/UPDATE/DELETE for anon — leads are private to the agent.
