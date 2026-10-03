-- Weekly analytics report: pg_cron calls the analytics-report Edge Function
-- every Monday morning (Pacific).
--
-- The function is public (verify_jwt = false), so it requires a token. The
-- token is generated here, kept in Vault, read by the cron job, and checked by
-- the function through a service-role-only RPC. No secret leaves the database
-- and nothing has to be copied into the dashboard by hand.

create extension if not exists pg_cron;
create extension if not exists pg_net;

do $$
begin
  if not exists (select 1 from vault.secrets where name = 'analytics_report_token') then
    perform vault.create_secret(
      encode(extensions.gen_random_bytes(32), 'hex'),
      'analytics_report_token',
      'Shared token: pg_cron -> analytics-report Edge Function'
    );
  end if;
end $$;

create or replace function public.analytics_report_token()
returns text
language sql
security definer
set search_path = ''
as $$
  select decrypted_secret from vault.decrypted_secrets where name = 'analytics_report_token';
$$;

revoke all on function public.analytics_report_token() from public, anon, authenticated;
grant execute on function public.analytics_report_token() to service_role;

-- 15:00 UTC Monday = 8:00 PDT / 7:00 PST.
select cron.unschedule('weekly-analytics-report')
where exists (select 1 from cron.job where jobname = 'weekly-analytics-report');

select cron.schedule(
  'weekly-analytics-report',
  '0 15 * * 1',
  $$
  select net.http_post(
    url := 'https://czsktqnbnuzzwjcxzbux.supabase.co/functions/v1/analytics-report',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-report-token', (select decrypted_secret from vault.decrypted_secrets where name = 'analytics_report_token')
    ),
    body := '{"days": 7}'::jsonb,
    timeout_milliseconds := 30000
  );
  $$
);
