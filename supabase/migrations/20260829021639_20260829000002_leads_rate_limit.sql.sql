/*
# Add per-email rate limiting for lead submissions

## Purpose
Prevents spam abuse by limiting how often the same email address can submit
a lead. A visitor can submit at most one lead per email per hour. This is
enforced at the database level, so it cannot be bypassed by crafting requests
outside the frontend form.

## Changes

### 1. Immutable helper function `hour_bucket_utc(ts timestamptz)`
- Converts a timestamptz to a UTC-based integer hour number by:
  casting to timestamp at UTC, extracting the epoch, and dividing by 3600.
- Marked IMMUTABLE so it can be used in index expressions. The timezone
  is hardcoded to UTC, removing the session-dependence that makes the
  built-in extract STABLE.

### 2. Unique index for rate limiting
- `leads_email_hour_rate_limit` — unique index on (email, hour_bucket_utc(created_at)).
- Only one row per email per hour is allowed. A second submission from the
  same email within the same hour is rejected with SQLSTATE 23505
  (unique_violation), which the frontend catches and surfaces as a
  friendly "already submitted" message.

## Security
- No changes to RLS or grants. This is purely a data-integrity constraint.

## Notes
1. Idempotent — function uses `CREATE OR REPLACE`, index uses `IF NOT EXISTS`.
2. Existing data is not modified.
3. The function is owned by the postgres role and is safe for public use —
   it only performs arithmetic on its input, no side effects.
*/

CREATE OR REPLACE FUNCTION hour_bucket_utc(ts timestamptz)
RETURNS bigint
LANGUAGE sql
IMMUTABLE
AS $$
  SELECT floor(extract(epoch FROM ts AT TIME ZONE 'UTC') / 3600)::bigint
$$;

CREATE UNIQUE INDEX IF NOT EXISTS leads_email_hour_rate_limit
  ON leads (email, hour_bucket_utc(created_at));
