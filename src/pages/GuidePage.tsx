import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Download, Mail, Phone } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { AppLink } from '@/components/AppLink';
import { ResourceTree } from '@/components/guides/ResourceTree';
import { GuideBlocks, GuideStats } from '@/components/guides/GuideBlocks';
import { GuideImage } from '@/components/guides/GuideImage';
import {
  categoryUrl,
  getCategory,
  catalogIn,
  guideUrl,
  pdfUrl,
  slotFor,
  RESOURCES_PATH,
} from '@/data/guides/catalog';
import { getGuide } from '@/data/guides';
import { navigate } from '@/lib/router';
import { images } from '@/config/images';
import { site } from '@/config/site';
import { seo } from '@/config/seo';

export function GuidePage({ slug }: { slug: string }) {
  const g = getGuide(slug)!;
  const cat = getCategory(g.category)!;
  const siblings = catalogIn(g.category);
  const idx = siblings.findIndex((s) => s.slug === g.slug);
  const prev = siblings[idx - 1];
  const next = siblings[idx + 1];

  // The hero photo becomes the page banner; an unfilled hero slot shows as a
  // placeholder in the body instead so it's obvious a photo is still wanted.
  const heroSrc = g.hero ? slotFor(g.slug, g.hero.slot)?.src : null;

  // Deep links like /resources/.../multnomah-village#housing: App scrolls to
  // the top on every route change, so jump to the section once it's rendered.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const t = window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'instant' }), 50);
    return () => window.clearTimeout(t);
  }, [g.slug]);

  return (
    <div>
      <PageHero eyebrow={g.eyebrow} title={g.title} subtitle={g.lede} image={heroSrc ?? images.resourcesHero}>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={pdfUrl(g)} download>
            <Button>
              <Download className="h-4 w-4" />
              Download the PDF
            </Button>
          </a>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:border-white hover:bg-white/10"
            onClick={() => navigate('/contact')}
          >
            Ask Catherine
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        {heroSrc && g.hero?.caption && (
          <p className="mt-8 text-xs uppercase tracking-wide text-ink-300">{g.hero.caption}</p>
        )}
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
          <AppLink to={RESOURCES_PATH} className="hover:text-gold-600">
            Resources
          </AppLink>
          <span aria-hidden="true">/</span>
          <AppLink to={categoryUrl(cat.id)} className="hover:text-gold-600">
            {cat.title}
          </AppLink>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-ink-800">
            {g.title}
          </span>
        </nav>

        <div className="mt-8 grid gap-12 lg:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pb-6 pr-2">
              <ResourceTree activeCategory={g.category} activeGuide={g} />
            </div>
          </aside>

          <article className="min-w-0 max-w-3xl space-y-14">
            {g.stats && g.stats.length > 0 && <GuideStats items={g.stats} note={g.statsNote} />}
            {!g.stats?.length && g.statsNote && <p className="text-xs leading-relaxed text-ink-500">{g.statsNote}</p>}

            {g.hero && !heroSrc && <GuideImage guide={g.slug} slot={g.hero.slot} caption={g.hero.caption} />}

            {g.sections.length > 2 && (
              <nav aria-label="In this guide" className="rounded-2xl bg-ink-50 p-6 lg:hidden">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">In this guide</p>
                <ol className="mt-3 space-y-1.5 text-sm">
                  {g.sections.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="text-ink-700 hover:text-gold-600">
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {g.sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                {s.kicker && (
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">{s.kicker}</p>
                )}
                <h2 className={`${s.kicker ? 'mt-3' : ''} text-2xl font-semibold leading-tight text-ink-900 sm:text-3xl`}>
                  {s.heading}
                </h2>
                <div className="mt-6">
                  <GuideBlocks blocks={s.blocks} guide={g.slug} />
                </div>
              </section>
            ))}

            <Reveal>
              <ContactCard />
            </Reveal>

            <p className="text-xs leading-relaxed text-ink-400">
              {site.agentName}, Licensed Real Estate Broker in the State of Oregon, License #201217068.{' '}
              {seo.business.brokerage}, {seo.business.streetAddress}, {seo.business.addressLocality},{' '}
              {seo.business.addressRegion} {seo.business.postalCode}. Each Engel &amp; Völkers shop is independently
              owned and operated. Equal Housing Opportunity. {g.disclaimer} Information deemed reliable but not
              guaranteed and subject to change.
            </p>

            <nav aria-label="More guides" className="flex flex-wrap justify-between gap-4 border-t border-ink-100 pt-6">
              {prev ? (
                <AppLink to={guideUrl(prev)} className="flex items-center gap-2 text-sm font-semibold text-ink-700 hover:text-gold-600">
                  <ArrowLeft className="h-4 w-4" />
                  {prev.title}
                </AppLink>
              ) : (
                <span />
              )}
              {next && (
                <AppLink to={guideUrl(next)} className="flex items-center gap-2 text-sm font-semibold text-ink-700 hover:text-gold-600">
                  {next.title}
                  <ArrowRight className="h-4 w-4" />
                </AppLink>
              )}
            </nav>
          </article>
        </div>
      </section>
    </div>
  );
}

function ContactCard() {
  return (
    <div className="overflow-hidden rounded-2xl bg-ink-900">
      <div className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
        <img
          src={images.agentPhoto}
          alt={site.agentName}
          loading="lazy"
          className="h-28 w-28 shrink-0 rounded-full object-cover ring-2 ring-white/20"
        />
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Questions about this area?</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">{site.agentName}</h2>
          <p className="text-sm text-ink-300">
            Licensed Real Estate Broker · {site.licenseNo} · {seo.business.brokerage}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href={site.phoneHref} className="flex items-center gap-2 font-semibold text-white hover:text-gold-300">
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
            <a href={site.emailHref} className="flex items-center gap-2 font-semibold text-white hover:text-gold-300">
              <Mail className="h-4 w-4" />
              {site.email}
            </a>
          </div>
        </div>
        <div className="sm:self-center">
          <Button onClick={() => navigate('/contact')}>
            Book a free consult
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
