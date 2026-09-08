import { useEffect } from 'react';
import { seo, routeSeo, type RouteSeo } from '@/config/seo';

/**
 * Syncs document <head> meta tags with the active route so each page has its
 * own title, description, canonical URL, Open Graph, and JSON-LD structured
 * data. Call once from App with the current route path.
 *
 * No external library needed — it writes <meta> and <link> tags directly.
 */
export function useSEO(route: string) {
  useEffect(() => {
    const meta = routeSeo[route] ?? routeSeo['/'];
    applyMeta(meta);
  }, [route]);
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function applyMeta(meta: RouteSeo) {
  const url = `${seo.siteUrl}${meta.path}`;
  const ogImageUrl = seo.ogImage.startsWith('http')
    ? seo.ogImage
    : `${seo.siteUrl}${seo.ogImage}`;

  // Title
  document.title = meta.title;

  // Description + keywords
  setMeta('name', 'description', meta.description);
  setMeta('name', 'keywords', meta.keywords ? `${meta.keywords}, ${seo.keywords}` : seo.keywords);

  // Robots (noindex for marked pages)
  setMeta('name', 'robots', meta.noindex ? 'noindex, nofollow' : 'index, follow');

  // Canonical
  setLink('canonical', url);

  // Open Graph
  setMeta('property', 'og:title', meta.title);
  setMeta('property', 'og:description', meta.description);
  setMeta('property', 'og:url', url);
  setMeta('property', 'og:image', ogImageUrl);
  setMeta('property', 'og:type', 'website');

  // Twitter
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', meta.title);
  setMeta('name', 'twitter:description', meta.description);
  setMeta('name', 'twitter:image', ogImageUrl);
  if (seo.twitterHandle) {
    setMeta('name', 'twitter:site', seo.twitterHandle);
  }

  // JSON-LD structured data (RealEstateAgent schema)
  upsertJsonLd({
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: seo.business.name,
    url: seo.siteUrl,
    image: ogImageUrl,
    telephone: seo.business.telephone,
    email: seo.business.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: seo.business.addressLocality,
      addressRegion: seo.business.addressRegion,
      postalCode: seo.business.postalCode,
      streetAddress: seo.business.streetAddress,
    },
    areaServed: 'Greater Portland Metro, OR',
    sameAs: seo.business.sameAs,
  });
}

function upsertJsonLd(data: Record<string, unknown>) {
  const id = 'seo-jsonld-agent';
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}
