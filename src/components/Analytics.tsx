import { seo } from '@/config/seo';

/**
 * Google Analytics 4 (GA4) loader.
 *
 * It activates only if `googleAnalyticsId` is set in src/config/seo.ts
 * (format G-XXXXXXXXXX). Until then it renders nothing.
 *
 * To turn it on:
 *   1. Create a GA4 property at https://analytics.google.com.
 *   2. Copy the Measurement ID (G-XXXXXXXXXX).
 *   3. Paste it into `googleAnalyticsId` in src/config/seo.ts.
 * That's it — the script tag and pageview are injected here.
 */
export function Analytics() {
  const id = seo.googleAnalyticsId;
  if (!id) return null;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${id}', { send_page_view: true });
          `,
        }}
      />
    </>
  );
}
