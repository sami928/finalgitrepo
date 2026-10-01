import { useEffect } from 'react';
import { seo } from '@/config/seo';
import { pageMeta, agentJsonLd, absUrl, SITE_NAME, type PageMeta } from '@/lib/seoMeta';

/**
 * Syncs document <head> meta tags with the active route so each page has its
 * own title, description, canonical URL, Open Graph, and JSON-LD structured
 * data. Call once from App with the current route path.
 *
 * The same metadata is written into static HTML at build time (see the
 * prerender plugin in vite.config.ts), so this mostly keeps the head correct
 * as visitors navigate between pages client-side.
 */
export function useSEO(route: string) {
  useEffect(() => {
    applyMeta(pageMeta(route));
  }, [route]);
}

function setMeta(attr: 'name' | 'property', key: string, content: string | undefined) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (content === undefined) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string | undefined) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (href === undefined) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id: string, data: unknown) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (data === undefined) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function applyMeta(meta: PageMeta) {
  const url = absUrl(meta.path);
  const size = (n?: number) => (n === undefined ? undefined : String(n));

  document.title = meta.title;
  // No keywords tag: Google has ignored it since 2009, and it published the
  // target keyword list to anyone viewing source.
  setMeta('name', 'description', meta.description);
  setMeta('name', 'robots', meta.noindex ? 'noindex, follow' : 'index, follow');
  setLink('canonical', meta.noCanonical ? undefined : url);

  setMeta('property', 'og:site_name', SITE_NAME);
  setMeta('property', 'og:locale', 'en_US');
  setMeta('property', 'og:type', meta.type);
  setMeta('property', 'og:title', meta.title);
  setMeta('property', 'og:description', meta.description);
  setMeta('property', 'og:url', url);
  setMeta('property', 'og:image', meta.image);
  setMeta('property', 'og:image:alt', meta.imageAlt);
  setMeta('property', 'og:image:width', size(meta.imageWidth));
  setMeta('property', 'og:image:height', size(meta.imageHeight));

  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', meta.title);
  setMeta('name', 'twitter:description', meta.description);
  setMeta('name', 'twitter:image', meta.image);
  setMeta('name', 'twitter:site', seo.twitterHandle || undefined);

  setJsonLd('seo-jsonld-agent', agentJsonLd());
  setJsonLd('seo-jsonld-page', meta.jsonLd.length ? meta.jsonLd : undefined);
}
