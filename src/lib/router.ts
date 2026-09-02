import { useEffect, useState } from 'react';

/** Simple hash-based router. Returns the current path (e.g. '/', '/listings'). */
export function useRoute(): string {
  const [path, setPath] = useState(() => normalize(window.location.hash));

  useEffect(() => {
    const onChange = () => setPath(normalize(window.location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return path;
}

function normalize(hash: string): string {
  const clean = hash.replace(/^#/, '');
  if (!clean || clean === '/') return '/';
  return clean.startsWith('/') ? clean : `/${clean}`;
}

export function navigate(path: string) {
  const target = path.startsWith('/') ? path : `/${path}`;
  if (window.location.hash === `#${target}`) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.location.hash = target;
  }
}
