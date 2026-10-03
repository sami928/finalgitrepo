-- Where each lead came from, captured client-side by src/lib/analytics.ts.
-- All nullable: older leads, and visitors with storage blocked, have none.
alter table public.leads
  add column if not exists landing_page text,
  add column if not exists referrer text,
  add column if not exists utm_source text,
  add column if not exists utm_medium text,
  add column if not exists utm_campaign text;

-- Inserts come from anonymous browsers; cap lengths so the columns can't be
-- used to stuff arbitrary payloads into the table.
alter table public.leads
  add constraint leads_attribution_length check (
    coalesce(length(landing_page), 0) <= 500
    and coalesce(length(referrer), 0) <= 255
    and coalesce(length(utm_source), 0) <= 200
    and coalesce(length(utm_medium), 0) <= 200
    and coalesce(length(utm_campaign), 0) <= 200
  );
