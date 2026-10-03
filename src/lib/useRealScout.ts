import { useEffect, useRef, useState } from 'react';
import { afterInteraction } from './afterInteraction';

const REALSCOUT_SCRIPT_SRC = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';

/**
 * Loads the RealScout web-components bundle only when the calling
 * component's container scrolls into view (or is about to), and not before
 * the visitor's first interaction or 3 s after load. The bundle is ~200 KB
 * of script; on the home page the widget is in the first screen, so without
 * the wait it ran during startup and blocked the main thread on phones.
 *
 * Returns a ref to attach to the widget's outer container and a boolean
 * indicating whether the script has been injected.
 */
export function useRealScout<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (document.getElementById('realscout-web-components')) {
      setLoaded(true);
      return;
    }

    let cancelWait: (() => void) | undefined;
    const inject = () => {
      if (!document.getElementById('realscout-web-components')) {
        const script = document.createElement('script');
        script.id = 'realscout-web-components';
        script.src = REALSCOUT_SCRIPT_SRC;
        script.type = 'module';
        document.body.appendChild(script);
      }
      setLoaded(true);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          observer.disconnect();
          cancelWait = afterInteraction(inject, 3000);
        }
      },
      { rootMargin: '200px' },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelWait?.();
    };
  }, []);

  return { ref, loaded };
}
