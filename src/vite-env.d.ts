/// <reference types="vite/client" />

/** Globals injected by the Google Analytics (gtag.js) snippet. */
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export {};
