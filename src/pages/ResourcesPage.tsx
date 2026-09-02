import { useState } from 'react';
import {
  FileText,
  BookOpen,
  PenLine,
  Download,
  Clock,
  FileStack,
  ArrowRight,
  X,
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { resources, type Resource } from '@/data/resources';
import { navigate } from '@/lib/router';
import { images } from '@/config/images';

const heroImg = images.resourcesHero;

const categories = ['All', 'Buying', 'Selling', 'Portland Metro', 'Financing'] as const;
type Category = (typeof categories)[number];

const typeMeta: Record<Resource['type'], { icon: typeof FileText; label: string }> = {
  'PDF Guide': { icon: FileText, label: 'PDF Guide' },
  'Buyer Guide': { icon: BookOpen, label: 'Buyer Guide' },
  Article: { icon: PenLine, label: 'Article' },
};

export function ResourcesPage() {
  const [active, setActive] = useState<Category>('All');
  const [selected, setSelected] = useState<Resource | null>(null);

  const filtered =
    active === 'All'
      ? resources
      : resources.filter((r) => r.category === active);

  return (
    <div>
      <PageHero
        eyebrow="Resources"
        title={<>Buyer guides, downloads & articles</>}
        subtitle="Free, practical resources to help you buy, sell, and understand the Greater Portland Metro market. Download what you need — no email wall."
        image={heroImg}
      />

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === c
                  ? 'bg-ink-900 text-white'
                  : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Resource grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r, i) => {
            const meta = typeMeta[r.type];
            const isArticle = r.type === 'Article';
            return (
              <Reveal key={r.id} delay={(i % 3) * 80}>
                <button
                  onClick={() => setSelected(r)}
                  className="group flex h-full w-full flex-col rounded-2xl border border-ink-100 bg-white p-6 text-left transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold-100 text-gold-600">
                      <meta.icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <span className="rounded-full bg-ink-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ink-600">
                      {r.category}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug text-ink-900 group-hover:text-gold-700">
                    {r.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
                    {r.description}
                  </p>
                  <div className="mt-4 flex items-center gap-3 border-t border-ink-100 pt-4 text-xs text-ink-500">
                    <span className="flex items-center gap-1.5 font-medium">
                      {isArticle ? (
                        <>
                          <Clock className="h-3.5 w-3.5" />
                          {r.readTime} read
                        </>
                      ) : (
                        <>
                          <FileStack className="h-3.5 w-3.5" />
                          {r.pages} pages · {r.format}
                        </>
                      )}
                    </span>
                  </div>
                  <span className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-gold-600">
                    {isArticle ? 'Read article' : 'Download'}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal className="mt-16">
          <div className="overflow-hidden rounded-2xl bg-ink-900">
            <div className="grid items-center gap-6 p-8 sm:grid-cols-[1.4fr_1fr] sm:p-12">
              <div>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  Want a personalized buyer plan?
                </h2>
                <p className="mt-3 text-ink-300">
                  The guides are a great start. For a plan tailored to your
                  budget, timeline, and favorite neighborhoods, let's talk.
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

      {/* Detail modal */}
      {selected && (
        <ResourceModal resource={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

function ResourceModal({
  resource,
  onClose,
}: {
  resource: Resource;
  onClose: () => void;
}) {
  const isArticle = resource.type === 'Article';
  const meta = typeMeta[resource.type];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-ink-500 hover:bg-ink-100"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold-100 text-gold-600">
            <meta.icon className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <span className="rounded-full bg-ink-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ink-600">
            {resource.category}
          </span>
        </div>

        <h2 className="mt-5 text-2xl font-semibold leading-tight text-ink-900">
          {resource.title}
        </h2>
        <p className="mt-3 leading-relaxed text-ink-600">
          {resource.description}
        </p>

        {isArticle ? (
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-700">
            <p>
              This is a template article. Replace this copy with your own
              content — the Portland market is shifting, and local insight is
              what sets a great agent apart. Write about inventory trends, rate
              impacts, neighborhood spotlights, or anything that helps your
              clients make confident decisions.
            </p>
            <p>
              A few tips for strong articles: lead with the takeaway, use short
              paragraphs, and include one specific Portland example per piece.
              Aim for 3–6 minutes of reading.
            </p>
          </div>
        ) : (
          <div className="mt-6 rounded-xl bg-ink-50 p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-ink-900">
              <FileStack className="h-4 w-4 text-gold-600" />
              {resource.pages} pages · {resource.format}
            </div>
            <p className="mt-2 text-sm text-ink-600">
              Replace the download link in <code className="rounded bg-white px-1.5 py-0.5 text-xs text-ink-800">src/data/resources.ts</code> with your actual PDF URL to make this button deliver the file.
            </p>
          </div>
        )}

        <div className="mt-7 flex flex-wrap gap-3">
          {isArticle ? (
            <Button onClick={onClose}>Got it</Button>
          ) : (
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              <Button>
                <Download className="h-4 w-4" />
                Download {resource.format}
              </Button>
            </a>
          )}
          <Button variant="ghost" onClick={() => navigate('/contact')}>
            Ask Catherine about this
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
