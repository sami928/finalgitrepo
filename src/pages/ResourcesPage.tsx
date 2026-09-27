import { ArrowRight, MapPin } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { AppLink } from '@/components/AppLink';
import { ResourceTree } from '@/components/guides/ResourceTree';
import {
  guideCategories,
  catalogIn,
  guideUrl,
  categoryUrl,
  coverFor,
  getCategory,
  RESOURCES_PATH,
  type CategoryId,
  type GuideMeta,
} from '@/data/guides/catalog';
import { navigate } from '@/lib/router';
import { images } from '@/config/images';

/** /resources shows every category; /resources/<category> narrows to one. */
export function ResourcesPage({ category }: { category?: CategoryId }) {
  const current = category ? getCategory(category) : undefined;
  const shown = current ? [current] : guideCategories;

  return (
    <div>
      <PageHero
        eyebrow="Resources"
        title={current ? current.title : <>Relocation & neighborhood guides</>}
        subtitle={
          current?.blurb ??
          'Free, practical guides to Portland, the westside and Oregon — how each area came to be, what the housing is like, and what to check before you buy. Read online or download the PDF, no email wall.'
        }
        image={images.resourcesHero}
      />

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2">
          {[{ id: undefined, title: 'All' }, ...guideCategories].map((c) => {
            const active = c.id === category;
            return (
              <AppLink
                key={c.title}
                to={c.id ? categoryUrl(c.id) : RESOURCES_PATH}
                aria-current={active ? 'page' : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? 'bg-ink-900 text-white' : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
                }`}
              >
                {c.title}
              </AppLink>
            );
          })}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <ResourceTree activeCategory={category} />
            </div>
          </aside>

          <div className="space-y-14">
            {shown.map((c) => (
              <div key={c.id}>
                {!current && (
                  <Reveal>
                    <div className="flex flex-wrap items-end justify-between gap-3 border-b border-ink-100 pb-4">
                      <div>
                        <h2 className="text-2xl font-semibold text-ink-900">
                          <AppLink to={categoryUrl(c.id)} className="hover:text-gold-700">
                            {c.title}
                          </AppLink>
                        </h2>
                        <p className="mt-1 text-sm text-ink-600">{c.blurb}</p>
                      </div>
                    </div>
                  </Reveal>
                )}
                <div className={`${current ? '' : 'mt-6'} grid gap-6 sm:grid-cols-2 xl:grid-cols-3`}>
                  {catalogIn(c.id).map((g, i) => (
                    <Reveal key={g.slug} delay={(i % 3) * 80}>
                      <GuideCard guide={g} />
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Reveal className="mt-16">
          <div className="overflow-hidden rounded-2xl bg-ink-900">
            <div className="grid items-center gap-6 p-8 sm:grid-cols-[1.4fr_1fr] sm:p-12">
              <div>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  Not sure which neighborhood fits?
                </h2>
                <p className="mt-3 text-ink-300">
                  The guides are a great start. For a shortlist built around your
                  commute, budget and the way your week actually runs, let's talk.
                </p>
              </div>
              <div className="sm:justify-self-end">
                <Button onClick={() => navigate('/contact')}>
                  Book a free consult
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function GuideCard({ guide: g }: { guide: GuideMeta }) {
  const cover = coverFor(g.slug);
  return (
    <AppLink
      to={guideUrl(g)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-ink-900">
        {cover ? (
          <img
            src={cover}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="grid h-full place-items-center">
            <MapPin className="h-8 w-8 text-gold-400" strokeWidth={1.5} />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold leading-snug text-ink-900 group-hover:text-gold-700">
          {g.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{g.summary}</p>
        <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-gold-600">
          Read the guide
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </AppLink>
  );
}
