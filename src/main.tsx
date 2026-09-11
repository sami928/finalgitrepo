import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { migrateHashUrl } from '@/lib/router';
import './index.css';

// Rewrite any legacy '/#/route' URL to '/route' before the first render,
// so old bookmarks and shared links land on the right page.
migrateHashUrl();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
