/**
 * Central SEO configuration.
 *
 * ------------------------------------------------------------------
 * HOW TO WIRE THIS UP FOR GOOGLE
 * ------------------------------------------------------------------
 * 1. Replace `siteUrl` below with your live domain (e.g. https://homesbycatherine.io).
 *    This base URL is used to build absolute links in sitemap.xml, canonical
 *    tags, Open Graph URLs, and JSON-LD structured data.
 *
 * 2. Edit `googleAnalyticsId` with your GA4 Measurement ID (format G-XXXXXXXXXX).
 *    Create one at https://analytics.google.com → Admin → Create Property.
 *    Leave it as the empty string to disable GA until you have the ID.
 *
 * 3. Edit `googleSiteVerification` with the verification token Google Search
 *    Console gives you (Meta tag method). Create/verify a property at
 *    https://search.google.com/search-console. Leave empty to skip the tag.
 *
 * 4. Tweak per-route titles/descriptions in `routes` below to match your
 *    final copy. Each description should be 120-160 characters.
 *
 * 5. Replace the `ogImage` URL with a real 1200x630 social-share image hosted
 *    on your domain (e.g. /og-image.jpg placed in public/).
 *
 * 6. Submit your sitemap (https://<siteUrl>/sitemap.xml) inside Search Console
 *    once the site is live at that domain.
 * ------------------------------------------------------------------
 */

export const seo = {
  /** TODO: Replace with your production domain — used for canonical URLs, sitemap, OG, JSON-LD. */
  siteUrl: 'https://homesbycatherine.io',

  /** TODO: GA4 Measurement ID, e.g. 'G-ABCDEF1234'. Leave '' to disable analytics. */
  googleAnalyticsId: '',

  /** TODO: Google Search Console verification token (the content attr value). Leave '' to skip. */
  googleSiteVerification: '',

  /** TODO: Path or URL to 1200x630 social-share image. Place the file in public/. */
  ogImage: '/og-image.jpg',

  /** Default site-wide keywords (Google mostly ignores these, but harmless). */
  keywords: 'Portland real estate, Portland Metro realtor, homes for sale Portland, Catherine Redmond, Engel & Völkers Portland',

  /** Twitter handle (e.g. '@homesbykaty'). Leave '' if none. */
  twitterHandle: '',

  /** NAP / local business data used in JSON-LD structured data. */
  business: {
    name: 'Catherine Redmond - Engel & Völkers',
    streetAddress: '',
    addressLocality: 'Portland',
    addressRegion: 'OR',
    postalCode: '',
    telephone: '+15038875879',
    email: 'catherine@homesbycatherine.io',
    // TODO: Add your Google Business Profile review URL to surface star ratings in search.
    sameAs: [
      'https://instagram.com/homesbykaty',
      'https://facebook.com',
      'https://linkedin.com',
    ],
  },
};

export type SeoConfig = typeof seo;

/** Per-route metadata. Keyed by the path used in src/lib/router.ts. */
export const routeSeo: Record<string, {
  title: string;
  description: string;
  /** Path appended to siteUrl for the canonical link + OG url. */
  path: string;
  /** Extra keywords for this page. */
  keywords?: string;
  /** Set true to mark this page "noindex" (e.g. staging or thin pages). */
  noindex?: boolean;
}> = {
  '/': {
    path: '/',
    title: 'Catherine Redmond | Portland Metro Real Estate Broker',
    description:
      'Search Greater Portland Metro homes with Catherine Redmond, a trusted local broker. Live MLS search, buyer guides, and a personalized, pressure-free home search.',
    keywords: 'Portland real estate broker, homes for sale Portland Metro, buyer agent Portland',
  },
  '/listings': {
    path: '/listings',
    title: 'Portland Metro Home Listings | Catherine Redmond',
    description:
      'Browse available homes across the Greater Portland Metro. Filter by city, price, beds, and type — or ask Catherine for a custom live MLS search with instant alerts.',
    keywords: 'Portland homes for sale, Portland listings, MLS search Portland',
  },
  '/testimonials': {
    path: '/testimonials',
    title: 'Client Reviews & Testimonials | Catherine Redmond, Portland Realtor',
    description:
      'Read what buyers, sellers, and first-time homeowners say about working with Catherine Redmond across the Greater Portland Metro. 4.9 average across 180+ reviews.',
    keywords: 'Portland realtor reviews, Catherine Redmond testimonials, real estate agent reviews Portland',
  },
  '/resources': {
    path: '/resources',
    title: 'Buyer Guides, Downloads & Articles | Portland Real Estate Resources',
    description:
      'Free Portland home-buying and selling guides, downloadable PDFs, and local market articles. Practical resources to help you move with confidence — no email wall.',
    keywords: 'Portland buyer guide, home selling guide, Portland real estate resources',
  },
  '/home-value': {
    path: '/home-value',
    title: 'Portland Home Value Estimator | Catherine Redmond',
    description:
      'Find out what your Portland Metro home is worth with an instant online valuation, then get a detailed comparative market analysis from Catherine Redmond — no obligation.',
    keywords: 'Portland home value, home valuation Portland, what is my home worth Portland, CMA Portland',
  },
  '/contact': {
    path: '/contact',
    title: 'Contact Catherine Redmond | Portland Metro Real Estate Broker',
    description:
      'Get in touch with Catherine Redmond, Portland Metro real estate broker. Call, text, email, or send a message — personal replies within 24 hours.',
    keywords: 'contact Portland realtor, real estate agent Portland, Catherine Redmond contact',
  },
};

export type RouteSeo = typeof routeSeo[string];
