import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { site } from '@/config/site';
import { navigate } from '@/lib/router';

const footerNav = [
  { label: 'Home', path: '/' },
  { label: 'Listings', path: '/listings' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Resources', path: '/resources' },
  { label: 'Contact', path: '/contact' },
].filter(
  (item) =>
    (site.testimonialsEnabled || item.path !== '/testimonials') &&
    (site.resourcesEnabled || item.path !== '/resources')
);

export function Footer() {
  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-black">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="[&_div]:text-black [&_.text-ink-500]:text-ink-600 [&_.text-ink-900]:text-black">
              <Logo />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-600">
              Helping buyers and sellers move confidently across the{' '}
              {site.area}. Personalized, pressure-free, and deeply local.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Instagram, href: site.social.instagram, label: 'Instagram' },
                { Icon: Facebook, href: site.social.facebook, label: 'Facebook' },
                { Icon: Linkedin, href: site.social.linkedin, label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-ink-100 text-black transition-colors hover:bg-gold-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-black">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => go(item.path)}
                    className="text-sm text-black transition-colors hover:text-gold-600"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-black">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2.5 text-black hover:text-gold-600"
                >
                  <Phone className="h-4 w-4 text-gold-500" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-2.5 text-black hover:text-gold-600"
                >
                  <Mail className="h-4 w-4 text-gold-500" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-black">
                <MapPin className="h-4 w-4 text-gold-500" />
                {site.area}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-black">
              Ready to move?
            </h4>
            <p className="mt-4 text-sm text-ink-600">
              Book a free, no-obligation consultation. Tell me what you're
              looking for and I'll build a plan.
            </p>
            <button
              onClick={() => go('/contact')}
              className="mt-4 inline-flex items-center rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-600"
            >
              Get in touch
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-200 pt-6 text-xs text-black sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.agentName}, {site.brokerage}. All
            rights reserved.
          </p>
          <p>
            Licensed {site.licenseNo} · Equal Housing Opportunity
          </p>
        </div>
      </div>
    </footer>
  );
}
