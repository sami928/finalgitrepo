import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

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

export default defineConfig({
  plugins: [react(), inlineCssPlugin()],
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
