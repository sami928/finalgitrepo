/**
 * Build-time renderer. scripts/prerender-body.mjs imports the SSR build of this
 * file and writes each route's rendered HTML into dist/, so crawlers that don't
 * run JavaScript (Bing, AI search crawlers, link previews) see the full page
 * text, not an empty <div id="root">. The browser then hydrates it in main.tsx.
 */
import { StrictMode } from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { Writable } from 'node:stream';
import App from './App';
import { setServerPath } from './lib/router';

export { allRoutes, disabledRoutes } from './lib/seoMeta';

export function render(path: string): Promise<string> {
  setServerPath(path);
  return new Promise((resolve, reject) => {
    let html = '';
    const sink = new Writable({
      write(chunk, _enc, cb) {
        html += chunk.toString();
        cb();
      },
      final(cb) {
        resolve(html);
        cb();
      },
    });
    // onAllReady waits for lazy() pages to load, so the output holds the real
    // page rather than the Suspense spinner.
    const stream = renderToPipeableStream(
      <StrictMode>
        <App />
      </StrictMode>,
      {
        onAllReady() {
          stream.pipe(sink);
        },
        onError(err) {
          reject(err);
        },
      },
    );
  });
}
