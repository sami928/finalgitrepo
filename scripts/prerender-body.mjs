/**
 * Writes each route's rendered page body into the HTML files that the
 * prerender-seo plugin (vite.config.ts) already created with the right <head>.
 *
 * Runs after both builds — see the "build" script in package.json:
 *   1. vite build                  → dist/ (client app + per-route <head>)
 *   2. vite build --ssr ...        → dist-ssr/entry-server.js
 *   3. node scripts/prerender-body → fills <div id="root"> in every dist page
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render, allRoutes, disabledRoutes } = await import(pathToFileURL(ssrEntry).href);

const fileFor = (route) =>
  route === '/' ? path.join(dist, 'index.html') : path.join(dist, '_pages', route, 'index.html');

const EMPTY_ROOT = '<div id="root"></div>';
const routes = [...allRoutes().map((r) => r.path), ...disabledRoutes()];
let done = 0;

for (const route of routes) {
  const file = fileFor(route);
  const html = fs.readFileSync(file, 'utf8');
  if (!html.includes(EMPTY_ROOT)) throw new Error(`prerender-body: no empty #root in ${file}`);
  const body = await render(route);
  fs.writeFileSync(file, html.replace(EMPTY_ROOT, `<div id="root">${body}</div>`));
  done++;
}

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`prerender-body: rendered ${done} pages`);
