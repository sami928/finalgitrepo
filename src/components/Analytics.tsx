import { useEffect, useRef } from 'react';
import { seo } from '@/config/seo';
import { captureAttribution, trackContactClicks } from '@/lib/analytics';
import { afterInteraction } from '@/lib/afterInteraction';

/**
 * Google Analytics 4 (GA4) loader — deferred.
 *
 * gtag.js is ~180 KB and was the largest source of main-thread blocking in
 * PageSpeed on mobile, so it loads on the visitor's first interaction, or
 * 5 s after the page's load event if they just read. Visits that leave
 * within those 5 s without touching the page aren't counted.
 *
 * Activates only if `googleAnalyticsId` is set in src/config/seo.ts.
 */
export function Analytics({ route }: { route: string }) {
  const id = seo.googleAnalyticsId;
  const firstRoute = useRef(true);

  useEffect(() => {
    if (!id) return;

    const loadGtag = () => {
      if (document.getElementById('gtag-script')) return;

      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', id, { send_page_view: true });

      const script = document.createElement('script');
      script.id = 'gtag-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      document.head.appendChild(script);
    };

    return afterInteraction(loadGtag, 5000);
  }, [id]);

  // Attribution is first-party (saved with leads), so it runs even without GA.
  useEffect(() => {
    captureAttribution();
    if (!id) return;
    return trackContactClicks();
  }, [id]);

  // gtag's `config` call sends one page_view on load. With History API
  // navigation there is no further page load, so every subsequent route would
  // go uncounted unless we send it explicitly.
  useEffect(() => {
    if (!id) return;
    if (firstRoute.current) {
      firstRoute.current = false; // already covered by config's send_page_view
      return;
    }
    window.gtag?.('event', 'page_view', {
      page_path: route,
      page_location: window.location.href,
    });
  }, [id, route]);

  return null;
}
