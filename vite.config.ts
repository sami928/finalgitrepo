import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';
import { allRoutes, disabledRoutes, pageMeta, agentJsonLd, absUrl, SITE_NAME, type PageMeta } from './src/lib/seoMeta';

function inlineCssPlugin(): PluginOption {
  return {
    name: 'inline-css',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!ctx?.bundle) return html;
        for (const [key, asset] of Object.entries(ctx.bundle)) {
          if (!key.endsWith('.css') || !('source' in asset)) continue;
          const href = '/' + asset.fileName;
          const idx = html.indexOf(href);
          if (idx === -1) continue;
          let start = html.lastIndexOf('<link', idx);
          let end = html.indexOf('>', idx);
          if (start === -1 || end === -1) continue;
          html = html.slice(0, start) + '<style>\n' + asset.source + '\n</style>' + html.slice(end + 1);
        }
        return html;
      },
    },
  };
}

/**
 * Writes each route's <head> into static HTML after the build, from the same
 * metadata useSEO applies in the browser (src/lib/seoMeta.ts):
 *
 *   dist/index.html                       home page
 *   dist/_pages/<route>/index.html        every other route
 *   dist/sitemap.xml                      every indexable route
 *
 * public/.htaccess serves /_pages/<route>/index.html for /<route>, so link
 * previews and crawlers that don't run JavaScript get the right title,
 * description, image and canonical. Anything else still falls back to the app.
 */
function prerenderSeoPlugin(): PluginOption {
  let outDir = 'dist';
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const ld = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');

  const renderHead = (m: PageMeta) => {
    const url = absUrl(m.path);
    const tags = [
      `<title>${esc(m.title)}</title>`,
      `<meta name="description" content="${esc(m.description)}" />`,
      `<meta name="robots" content="${m.noindex ? 'noindex, follow' : 'index, follow'}" />`,
      m.noCanonical ? '' : `<link rel="canonical" href="${esc(url)}" />`,
      `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
      `<meta property="og:locale" content="en_US" />`,
      `<meta property="og:type" content="${m.type}" />`,
      `<meta property="og:title" content="${esc(m.title)}" />`,
      `<meta property="og:description" content="${esc(m.description)}" />`,
      `<meta property="og:url" content="${esc(url)}" />`,
      `<meta property="og:image" content="${esc(m.image)}" />`,
      `<meta property="og:image:alt" content="${esc(m.imageAlt)}" />`,
      m.imageWidth ? `<meta property="og:image:width" content="${m.imageWidth}" />` : '',
      m.imageHeight ? `<meta property="og:image:height" content="${m.imageHeight}" />` : '',
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${esc(m.title)}" />`,
      `<meta name="twitter:description" content="${esc(m.description)}" />`,
      `<meta name="twitter:image" content="${esc(m.image)}" />`,
      `<script type="application/ld+json" id="seo-jsonld-agent">${ld(agentJsonLd())}</script>`,
      m.jsonLd.length ? `<script type="application/ld+json" id="seo-jsonld-page">${ld(m.jsonLd)}</script>` : '',
    ];
    return tags.filter(Boolean).join('\n    ');
  };

  return {
    name: 'prerender-seo',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
      const marker = /<!-- seo:start[\s\S]*?<!-- seo:end -->/;
      if (!marker.test(template)) throw new Error('prerender-seo: seo markers missing from index.html');

      const routes = allRoutes();
      for (const { path: route } of routes) {
        const html = template.replace(marker, renderHead(pageMeta(route)));
        const file = route === '/' ? path.join(outDir, 'index.html') : path.join(outDir, '_pages', route, 'index.html');
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, html);
      }

      // Switched-off pages: static "not found" head, so crawlers see noindex without running JS.
      for (const route of disabledRoutes()) {
        const file = path.join(outDir, '_pages', route, 'index.html');
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, template.replace(marker, renderHead(pageMeta(route))));
      }

      const urls = routes
        .filter((r) => r.indexable)
        .map((r) => `  <url>\n    <loc>${absUrl(r.path)}</loc>\n  </url>`)
        .join('\n');
      fs.writeFileSync(
        path.join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<!-- Generated at build time from src/lib/seoMeta.ts (allRoutes). -->\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      );
      this.info?.(`prerendered ${routes.length} pages`);
    },
  };
}

export default defineConfig({
  plugins: [react(), inlineCssPlugin(), prerenderSeoPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true,
    allowedHosts: true,
  },
});
