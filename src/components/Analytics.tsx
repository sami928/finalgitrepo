import { useEffect, useRef } from 'react';
import { seo } from '@/config/seo';

/**
 * Google Analytics 4 (GA4) loader — deferred.
 *
 * The gtag script is injected after the page becomes interactive
 * (via requestIdleCallback) so it never blocks initial render or
 * enters the critical request chain.
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

    if ('requestIdleCallback' in window) {
      (window as Window).requestIdleCallback(loadGtag, { timeout: 3000 });
    } else {
      setTimeout(loadGtag, 1500);
    }
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
