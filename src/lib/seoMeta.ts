/**
 * Page metadata for every route, in one place.
 *
 * Used twice: by useSEO in the browser, and at build time by the prerender
 * step in vite.config.ts, which writes each route's <head> into static HTML so
 * crawlers and link previews (Facebook, LinkedIn, iMessage, Slack) that don't
 * run JavaScript still see the right title, description, image and canonical.
 * Keep this file free of browser-only code.
 */
import { seo, routeSeo } from '../config/seo';
import { site } from '../config/site';
import {
  catalog,
  categoryUrl,
  coverFor,
  getCategory,
  guideUrl,
  matchResourceRoute,
  RESOURCES_PATH,
} from '../data/guides/catalog';

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  /** Absolute image URL for social previews. */
  image: string;
  imageAlt: string;
  /** Only known for the default share image. */
  imageWidth?: number;
  imageHeight?: number;
  type: 'website' | 'article';
  noindex?: boolean;
  /** Omit the canonical link (used for "page not found"). */
  noCanonical?: boolean;
  /** Page-specific JSON-LD (breadcrumbs, article), in addition to the agent block. */
  jsonLd: Record<string, unknown>[];
};

export const SITE_NAME = 'Catherine Redmond | Engel & Völkers';
const BRAND = 'Catherine Redmond';

export const absUrl = (path: string) => (path.startsWith('http') ? path : `${seo.siteUrl}${path}`);

const defaultImage = {
  image: absUrl(seo.ogImage),
  imageAlt: 'Downtown Portland, the Vista Bridge and Mount Hood',
  imageWidth: 1200,
  imageHeight: 630,
};

/** Home page share image: Catherine at her desk. Other pages use defaultImage or a guide cover. */
const homeImage = {
  image: absUrl('/og-home.jpg'),
  imageAlt: `${site.agentName} at her desk`,
  imageWidth: 1200,
  imageHeight: 630,
};

/** Routes that exist in the app, with their on/off switches from site.ts. */
const staticRoutes: { path: string; enabled: boolean }[] = [
  { path: '/', enabled: true },
  { path: '/listings', enabled: true },
  { path: '/home-value', enabled: true },
  { path: '/contact', enabled: true },
  { path: '/testimonials', enabled: site.testimonialsEnabled },
  { path: '/mls-search', enabled: site.mlsSearchEnabled },
];

/** Every URL that renders a real page — prerendered at build time and listed in the sitemap. */
export function allRoutes(): { path: string; indexable: boolean }[] {
  const pages = staticRoutes
    .filter((r) => r.enabled)
    .map((r) => ({ path: r.path, indexable: !routeSeo[r.path]?.noindex }));
  if (site.resourcesEnabled) {
    pages.push({ path: RESOURCES_PATH, indexable: true });
    for (const c of new Set(catalog.map((g) => g.category))) pages.push({ path: categoryUrl(c), indexable: true });
    for (const g of catalog) pages.push({ path: guideUrl(g), indexable: true });
  }
  return pages;
}

/** Known routes switched off in site.ts — prerendered as "page not found" (noindex). */
export const disabledRoutes = () => staticRoutes.filter((r) => !r.enabled).map((r) => r.path);

const breadcrumbs = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: absUrl(it.path),
  })),
});

export const notFoundMeta = (path: string): PageMeta => ({
  path,
  title: `Page not found | ${BRAND}`,
  description: 'This page does not exist. Browse Portland homes, neighborhood guides, or get in touch.',
  ...defaultImage,
  type: 'website',
  noindex: true,
  noCanonical: true,
  jsonLd: [],
});

/** Metadata for a route; unknown and switched-off routes get the not-found metadata. */
export function pageMeta(route: string): PageMeta {
  const s = staticRoutes.find((r) => r.path === route);
  if (s) {
    if (!s.enabled) return notFoundMeta(route);
    const m = routeSeo[route];
    const image = route === '/' ? homeImage : defaultImage;
    return { path: m.path, title: m.title, description: m.description, ...image, type: 'website', noindex: m.noindex, jsonLd: [] };
  }

  const r = site.resourcesEnabled ? matchResourceRoute(route) : null;
  if (!r) return notFoundMeta(route);

  const home = { name: 'Home', path: '/' };
  const resources = { name: 'Resources', path: RESOURCES_PATH };

  if (r.kind === 'index') {
    const m = routeSeo[RESOURCES_PATH];
    return { path: m.path, title: m.title, description: m.description, ...defaultImage, type: 'website', jsonLd: [breadcrumbs([home, resources])] };
  }

  if (r.kind === 'category') {
    const c = getCategory(r.category)!;
    return {
      path: categoryUrl(c.id),
      title: `${c.title} | ${BRAND}`,
      description: c.blurb,
      ...defaultImage,
      type: 'website',
      jsonLd: [breadcrumbs([home, resources, { name: c.title, path: categoryUrl(c.id) }])],
    };
  }

  const g = r.guide;
  const c = getCategory(g.category)!;
  const base = g.seoTitle ?? `${g.title} Guide`;
  const branded = `${base} | ${BRAND}`;
  const title = branded.length <= 60 ? branded : base;
  const cover = coverFor(g.slug);
  const image = cover ? { image: absUrl(cover), imageAlt: g.title } : defaultImage;
  return {
    path: guideUrl(g),
    title,
    description: g.summary,
    ...image,
    type: 'article',
    jsonLd: [
      breadcrumbs([home, resources, { name: c.title, path: categoryUrl(c.id) }, { name: g.title, path: guideUrl(g) }]),
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: g.title,
        description: g.summary,
        image: image.image,
        url: absUrl(guideUrl(g)),
        mainEntityOfPage: absUrl(guideUrl(g)),
        inLanguage: 'en-US',
        author: { '@type': 'Person', name: site.agentName, url: seo.siteUrl },
        publisher: { '@type': 'Organization', name: seo.business.brokerage, url: seo.business.brokerageUrl },
      },
    ],
  };
}

/** The RealEstateAgent block shown on every page. */
export function agentJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: seo.business.name,
    url: seo.siteUrl,
    image: absUrl(seo.ogImage),
    telephone: seo.business.telephone,
    email: seo.business.email,
    parentOrganization: {
      '@type': 'Organization',
      name: seo.business.brokerage,
      url: seo.business.brokerageUrl,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: seo.business.streetAddress,
      addressLocality: seo.business.addressLocality,
      addressRegion: seo.business.addressRegion,
      postalCode: seo.business.postalCode,
      addressCountry: seo.business.addressCountry,
    },
    areaServed: 'Greater Portland Metro, OR',
    sameAs: seo.business.sameAs,
  };
}
