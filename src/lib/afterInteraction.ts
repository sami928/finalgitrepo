const EVENTS = ['pointerdown', 'keydown', 'touchstart', 'scroll'] as const;

/**
 * Runs `cb` once: on the visitor's first interaction, or `delayMs` after the
 * page's load event, whichever comes first. Used for heavy third-party scripts
 * (Google Analytics, RealScout) so they don't compete with the page's own
 * startup work on slow phones. Returns a cleanup that cancels a pending run.
 */
export function afterInteraction(cb: () => void, delayMs: number): () => void {
  let done = false;
  let timer: number | undefined;

  const run = () => {
    if (done) return;
    done = true;
    cleanup();
    cb();
  };

  const startTimer = () => {
    timer = window.setTimeout(run, delayMs);
  };

  const cleanup = () => {
    EVENTS.forEach((e) => window.removeEventListener(e, run, { capture: true }));
    window.removeEventListener('load', startTimer);
    if (timer !== undefined) window.clearTimeout(timer);
  };

  // Capture phase so this fires before the click/tap handlers it might serve
  // (e.g. a tel: link tracked by GA loads gtag first).
  EVENTS.forEach((e) => window.addEventListener(e, run, { once: true, passive: true, capture: true }));
  if (document.readyState === 'complete') startTimer();
  else window.addEventListener('load', startTimer, { once: true });

  return () => {
    done = true;
    cleanup();
  };
}
