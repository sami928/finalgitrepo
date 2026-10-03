import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import { migrateHashUrl } from '@/lib/router';
import './index.css';

// Rewrite any legacy '/#/route' URL to '/route' before the first render,
// so old bookmarks and shared links land on the right page.
migrateHashUrl();

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Pages built by scripts/prerender-body.mjs arrive with their content already
// in #root: hydrate it in place so there's no flash. The dev server and any
// unknown URL arrive empty, so render from scratch.
if (container.hasChildNodes()) hydrateRoot(container, app);
else createRoot(container).render(app);
