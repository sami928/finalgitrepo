import { useEffect, useRef, useState } from 'react';

const REALSCOUT_SCRIPT_SRC = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';

/**
 * Loads the RealScout web-components bundle only when the calling
 * component's container scrolls into view (or is about to). This keeps
 * the 200 KB third-party script off the critical request path so it
 * doesn't delay first paint or LCP.
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

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          if (!document.getElementById('realscout-web-components')) {
            const script = document.createElement('script');
            script.id = 'realscout-web-components';
            script.src = REALSCOUT_SCRIPT_SRC;
            script.type = 'module';
            document.body.appendChild(script);
          }
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, loaded };
}
