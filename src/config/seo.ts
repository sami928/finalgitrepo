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

import { site } from './site';

export const seo = {
  /** TODO: Replace with your production domain — used for canonical URLs, sitemap, OG, JSON-LD. */
  siteUrl: 'https://homesbycatherine.io',

  /** GA4 Measurement ID, e.g. 'G-ABCDEF1234'. Leave '' to disable analytics. */
  googleAnalyticsId: 'G-EDMG6FDXHV',

  /** TODO: Google Search Console verification token (the content attr value). Leave '' to skip. */
  googleSiteVerification: '',

  /** TODO: Path or URL to 1200x630 social-share image. Place the file in public/. */
  ogImage: '/og-image.jpg',

  /** Twitter handle (e.g. '@homesbykaty'). Leave '' if none. */
  twitterHandle: '',

  /** NAP / local business data used in JSON-LD structured data. */
  business: {
    name: 'Catherine Redmond - Engel & Völkers',
    /** The brokerage shop this agent works out of. */
    brokerage: 'Engel & Völkers Portland Rose City',
    brokerageUrl: 'https://www.evrealestate.com/en/shops/portlandrosecity',
    streetAddress: '511 SW 10th Avenue, Suite 104',
    addressLocality: 'Portland',
    addressRegion: 'OR',
    postalCode: '97205',
    addressCountry: 'US',
    telephone: '+15038875879',
    email: 'catherine@homesbycatherine.io',
    /**
     * Only real, specific profile URLs belong here — `sameAs` is how Google
     * confirms this is one business across the web, so a bare domain points it
     * at that site's homepage and weakens the match instead of helping.
     * TODO: add the Facebook page, LinkedIn profile, and Google Business
     * Profile URLs once confirmed, then submit the GBP listing.
     */
    sameAs: [
      'https://instagram.com/_homesbycatherine_',
      'https://www.evrealestate.com/en/shops/portlandrosecity',
      site.social.linkedin,
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
  /** Set true to mark this page "noindex" (e.g. staging or thin pages). */
  noindex?: boolean;
}> = {
  '/': {
    path: '/',
    title: 'Catherine Redmond | Portland Metro Real Estate Broker',
    description:
      'Search Greater Portland Metro homes with Catherine Redmond, a local Engel & Völkers broker. Live listings, neighborhood guides and a tailored home plan.',
  },
  '/listings': {
    path: '/listings',
    title: 'Portland Metro Home Listings | Catherine Redmond',
    description:
      'Browse homes for sale across the Greater Portland Metro by city, price, beds and type, or ask Catherine for a custom MLS search with instant alerts.',
  },
  '/testimonials': {
    path: '/testimonials',
    title: 'Client Reviews | Catherine Redmond, Portland Realtor',
    description:
      'Read what buyers, sellers, and first-time homeowners say about working with Catherine Redmond across the Greater Portland Metro. ',
  },
  '/resources': {
    path: '/resources',
    title: 'Portland Neighborhood Guides | Catherine Redmond',
    description:
      'Free Portland, westside and Oregon relocation and neighborhood guides: history, housing, schools and what to check before buying. Read online or as a PDF.',
  },
  '/home-value': {
    path: '/home-value',
    title: 'Portland Home Value Estimator | Catherine Redmond',
    description:
      'See what your Portland Metro home is worth with an instant online estimate, then get a free, detailed market analysis from Catherine Redmond.',
  },
  '/mls-search': {
    path: '/mls-search',
    title: 'Portland MLS Search | Catherine Redmond',
    description:
      'Search live Portland Metro MLS listings. Filter active and sold homes by price, beds, baths, location, and property type. Interactive map view available.',
    noindex: true,
  },
  '/contact': {
    path: '/contact',
    title: 'Contact Catherine Redmond | Portland Real Estate Broker',
    description:
      'Get in touch with Catherine Redmond, Portland Metro real estate broker. Call, text, email or send a message, and Catherine will reply promptly.',
  },
};

export type RouteSeo = typeof routeSeo[string];
