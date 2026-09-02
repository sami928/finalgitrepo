import { Star, Quote } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { testimonials } from '@/data/testimonials';
import { navigate } from '@/lib/router';
import { images } from '@/config/images';

const heroImg = images.testimonialsHero;

const summary = [
  { value: '4.9', label: 'Average rating' },
  { value: '180+', label: 'Verified reviews' },
  { value: '98%', label: 'Would recommend' },
  { value: '420+', label: 'Homes closed' },
];

export function TestimonialsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Client stories"
        title={<>What Catherine's clients say</>}
        subtitle="Real words from buyers, sellers, and first-time homeowners across the Greater Portland Metro."
        image={heroImg}
      />

      {/* Summary bar */}
      <section className="border-b border-ink-100 bg-ink-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-8 lg:grid-cols-4 lg:px-8">
          {summary.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-semibold text-ink-900">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-ink-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 transition-shadow hover:shadow-md">
                <Quote className="h-8 w-8 text-gold-200" />
                <div className="mt-3 flex gap-0.5 text-gold-400">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold-400" />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-700">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-semibold text-ink-900">
                      {t.name}
                    </div>
                    <div className="text-xs text-ink-500">
                      {t.role} · {t.location}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-16">
          <div className="rounded-2xl bg-gradient-to-br from-ink-900 to-ink-800 px-6 py-12 text-center sm:px-12">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Ready to write your own story?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-300">
              Whether you're buying, selling, or just exploring, let's talk about
              your goals. No pressure, ever.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button onClick={() => navigate('/contact')}>
                Start the conversation
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white"
                onClick={() => navigate('/listings')}
              >
                Browse listings
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
