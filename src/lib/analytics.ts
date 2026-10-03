/**
 * Conversion tracking and lead attribution.
 *
 * GA4 records page views on its own (see src/components/Analytics.tsx) and its
 * enhanced measurement catches PDF downloads and outbound links. These are the
 * events it can't see:
 *
 *   generate_lead     lead form saved to Supabase (mark as a Key Event in GA4)
 *   lead_form_error   lead form failed: validation, permissions or network
 *   click_call        any tel: link
 *   click_email       any mailto: link
 *
 * Attribution: the landing page, referrer and UTM tags of a visitor's first
 * page are kept for the session and saved with the lead, so the weekly report
 * can say where leads came from without needing GA4 access.
 */

type Params = Record<string, string | number | boolean | null | undefined>;

export function track(event: string, params: Params = {}): void {
  // The gtag stub exists from idle-time init (a second or two after load) and
  // queues until gtag.js arrives; anything earlier, or with GA off, is a no-op.
  window.gtag?.('event', event, params);
}

export type Attribution = {
  landing_page: string | null;
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
};

const ATTRIBUTION_KEY = 'hbc_attribution';

/** Records the first page of the session. Later calls are no-ops. */
export function captureAttribution(): void {
  try {
    if (sessionStorage.getItem(ATTRIBUTION_KEY)) return;
    const params = new URLSearchParams(window.location.search);
    // Host only: a full referrer URL can carry other sites' query strings.
    const refHost = document.referrer ? new URL(document.referrer).host : '';
    const referrer = refHost && refHost !== window.location.host ? refHost : null;
    const attribution: Attribution = {
      landing_page: window.location.pathname,
      referrer,
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
    };
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
  } catch {
    // Storage blocked (private mode, strict settings): leads still submit.
  }
}

export function getAttribution(): Attribution {
  const empty: Attribution = {
    landing_page: null,
    referrer: null,
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
  };
  try {
    const raw = sessionStorage.getItem(ATTRIBUTION_KEY);
    return raw ? { ...empty, ...JSON.parse(raw) } : empty;
  } catch {
    return empty;
  }
}

/**
 * One document-level listener covers every tel:/mailto: link on the site,
 * including ones added later, without wiring each component.
 */
export function trackContactClicks(): () => void {
  const onClick = (e: MouseEvent) => {
    const link = (e.target as Element | null)?.closest?.('a[href]');
    if (!link) return;
    const href = link.getAttribute('href') || '';
    const params = { page_path: window.location.pathname };
    if (href.startsWith('tel:')) track('click_call', params);
    else if (href.startsWith('mailto:')) track('click_email', params);
  };
  document.addEventListener('click', onClick, { capture: true });
  return () => document.removeEventListener('click', onClick, { capture: true });
}
