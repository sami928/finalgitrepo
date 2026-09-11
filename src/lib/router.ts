import { useEffect, useState } from 'react';

/**
 * Path-based router using the History API.
 *
 * Routes are real URLs (/listings, not /#/listings) so each one can be
 * crawled, indexed, and carry its own metadata. This requires the host to
 * serve index.html for unmatched paths — see public/.htaccess. Without that
 * rewrite every deep link returns 404.
 */

/** pushState doesn't fire popstate, so navigate() announces its own changes. */
const ROUTE_CHANGE = 'app:routechange';

/** Current path, e.g. '/' or '/listings'. */
export function useRoute(): string {
  const [path, setPath] = useState(() => normalize(window.location.pathname));

  useEffect(() => {
    const onChange = () => setPath(normalize(window.location.pathname));
    window.addEventListener('popstate', onChange); // back / forward
    window.addEventListener(ROUTE_CHANGE, onChange); // our own navigate()
    return () => {
      window.removeEventListener('popstate', onChange);
      window.removeEventListener(ROUTE_CHANGE, onChange);
    };
  }, []);

  return path;
}

/** '/contact/' and '/contact' are the same route; '' is '/'. */
function normalize(pathname: string): string {
  if (!pathname) return '/';
  const clean = pathname.replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
}

export function navigate(path: string) {
  const target = path.startsWith('/') ? path : `/${path}`;

  if (normalize(window.location.pathname) === normalize(target)) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  window.history.pushState({}, '', target);
  window.dispatchEvent(new Event(ROUTE_CHANGE));
}

/**
 * Rewrites legacy '/#/route' links to '/route'.
 *
 * A server can never redirect these: the browser strips everything after '#'
 * before sending the request, so the hash is only ever visible client-side.
 * Anyone holding a bookmarked or shared hash link has to be caught here.
 * Call once before the app renders.
 */
export function migrateHashUrl() {
  const { hash, pathname, search } = window.location;

  if (hash.startsWith('#/')) {
    const target = hash.slice(1);
    window.history.replaceState({}, '', target + search);
  } else if (hash === '#' || hash === '#/') {
    window.history.replaceState({}, '', pathname + search);
  }
}
