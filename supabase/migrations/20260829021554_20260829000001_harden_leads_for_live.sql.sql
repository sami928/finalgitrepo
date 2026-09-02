/*
# Harden leads table for live production usage

## Purpose
Prepares the leads table for live traffic on homesbycatherine.io by adding
server-enforced input validation, tightening grants, and adding helpful
indexes. No data is lost — all existing rows are preserved.

## Changes

### 1. Input validation constraints
- `leads_name_length` — CHECK that name is between 1 and 200 characters
  (after the frontend trims, but the DB enforces it regardless of client).
- `leads_email_format` — CHECK that email matches a basic email pattern.
  This catches garbage that bypasses the frontend validation.
- `leads_message_length` — CHECK that message, when present, is at most
  5000 characters. Prevents abuse via oversized payloads.

### 2. Tightened column grants (defense-in-depth)
- Revoke SELECT, UPDATE, DELETE from the `anon` role on `leads`.
  These were inherited from the default table grants but are not needed —
  only INSERT is public. RLS already blocks these operations, but revoking
  the grants means even a misconfigured policy cannot expose lead data.
- Revoke UPDATE, DELETE from `authenticated` as well — leads are managed
  by the agent via the Supabase dashboard (service role), not by app users.
- Keep INSERT granted to anon + authenticated so the public form works.
- Keep SELECT granted to authenticated so the agent could query via an
  authenticated session if needed.

### 3. Index on created_at
- Add an index on `created_at DESC` so the agent can browse recent leads
  efficiently in the dashboard as the table grows.

## Security
- RLS remains enabled. The existing INSERT-only policy is unchanged.
- No new policies are added — the grant revocations are additive hardening
  on top of the existing RLS setup.

## Notes
1. This migration is idempotent — constraints use `IF NOT EXISTS` via DO
   blocks, the index uses `IF NOT EXISTS`, and grants are revoked
   conditionally.
2. Existing data is not modified or deleted.
3. The agent continues to manage leads via the Supabase dashboard using
   the service role key, which bypasses RLS entirely.
*/

-- 1. Input validation constraints (idempotent)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'leads_name_length'
  ) THEN
    ALTER TABLE leads ADD CONSTRAINT leads_name_length
      CHECK (length(name) >= 1 AND length(name) <= 200);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'leads_email_format'
  ) THEN
    ALTER TABLE leads ADD CONSTRAINT leads_email_format
      CHECK (email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$');
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'leads_message_length'
  ) THEN
    ALTER TABLE leads ADD CONSTRAINT leads_message_length
      CHECK (message IS NULL OR length(message) <= 5000);
  END IF;
END $$;

-- 2. Tightened grants — defense-in-depth on top of RLS
--    anon only needs INSERT (the public lead form).
REVOKE SELECT ON leads FROM anon;
REVOKE UPDATE ON leads FROM anon;
REVOKE DELETE ON leads FROM anon;

--    authenticated gets INSERT + SELECT (agent could use an authed session),
--    but not UPDATE or DELETE (those go through the service role in dashboard).
REVOKE UPDATE ON leads FROM authenticated;
REVOKE DELETE ON leads FROM authenticated;

-- 3. Index for browsing recent leads in the dashboard
CREATE INDEX IF NOT EXISTS leads_created_at_idx
  ON leads (created_at DESC);
