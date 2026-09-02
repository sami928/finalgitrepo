import { TrendingUp, Mail, Phone } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { RealScoutHomeValue } from '@/components/RealScoutHomeValue';
import { Button } from '@/components/Button';
import { navigate } from '@/lib/router';
import { site } from '@/config/site';
import { images } from '@/config/images';

const heroImg = images.homeValueHero;

const valuePoints = [
  {
    title: 'Real-time market data',
    desc: 'Your estimate draws from recent Portland Metro sales and active listings, not a national average.',
  },
  {
    title: 'Local expertise, not an algorithm',
    desc: 'I refine the number with on-the-ground knowledge of your neighborhood, street, and home features.',
  },
  {
    title: 'No obligation, no pressure',
    desc: 'Get the number first. If you want to talk strategy, you reach out when you are ready.',
  },
];

export function HomeValuePage() {
  return (
    <div>
      <PageHero
        eyebrow="Home valuation"
        title={<>What's your Portland home worth?</>}
        subtitle="Enter your address below for an instant estimated value. For a precise, no-pressure valuation tailored to your home, Catherine will follow up with a comparative market analysis."
        image={heroImg}
      />

      {/* Widget + value props */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <Reveal>
            <RealScoutHomeValue />
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                Why get a valuation
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
                A number you can actually use
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-600">
                Online estimates are a starting point. Catherine pairs that data
                with local insight to give you a value that reflects what your
                home would really sell for today.
              </p>

              <div className="mt-8 space-y-5">
                {valuePoints.map((p) => (
                  <div key={p.title} className="flex gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gold-100 text-gold-600">
                      <TrendingUp className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-ink-900">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-600">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-950 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Ready for a detailed market analysis?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-300">
            Catherine will walk you through the comps, share her pricing
            recommendation, and answer any questions — no obligation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button onClick={() => navigate('/contact')}>
              <Mail className="h-4 w-4" />
              Request a CMA
            </Button>
            <a href={site.phoneHref}>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white"
              >
                <Phone className="h-4 w-4" />
                Call {site.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
