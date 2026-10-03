import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';
import { navigate } from '@/lib/router';
import { site } from '@/config/site';

/** Shown for unknown URLs and pages switched off in src/config/site.ts (useSEO marks it noindex). */
export function NotFoundPage() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start px-5 pb-24 pt-36 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">Page not found</p>
      <h1 className="mt-3 text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
        This page doesn't exist
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600">
        The link may be out of date or mistyped. Try the home page or the neighborhood guides, or call{' '}
        <a href={site.phoneHref} className="font-semibold text-ink-900 hover:text-gold-600">
          {site.phone}
        </a>
        .
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button onClick={() => navigate('/')}>Go to the home page</Button>
        {site.resourcesEnabled && (
          <Button variant="outline" onClick={() => navigate('/resources')}>
            Neighborhood guides
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </section>
  );
}
