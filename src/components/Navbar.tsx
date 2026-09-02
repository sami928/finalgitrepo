import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { navigate, useRoute } from '@/lib/router';
import { site } from '@/config/site';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Listings', path: '/listings' },
  { label: 'Home Value', path: '/home-value' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Resources', path: '/resources' },
  { label: 'Contact', path: '/contact' },
].filter(
  (item) =>
    (site.testimonialsEnabled || item.path !== '/testimonials') &&
    (site.resourcesEnabled || item.path !== '/resources')
);

export function Navbar() {
  const route = useRoute();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [route]);

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-sm backdrop-blur'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <button onClick={() => go('/')} className="shrink-0">
          <Logo />
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => go(item.path)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                route === item.path
                  ? 'bg-ink-100 text-ink-900'
                  : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-ink-800 hover:text-gold-600"
          >
            <Phone className="h-4 w-4" strokeWidth={2} />
            {site.phone}
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full text-ink-800 hover:bg-ink-100 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-100 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => go(item.path)}
                className={`rounded-lg px-3 py-3 text-left text-base font-medium ${
                  route === item.path
                    ? 'bg-ink-100 text-ink-900'
                    : 'text-ink-700 hover:bg-ink-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={site.phoneHref}
              className="mt-2 flex items-center gap-2 rounded-lg bg-gold-500 px-3 py-3 text-base font-semibold text-white"
            >
              <Phone className="h-4 w-4" strokeWidth={2} />
              Call {site.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
