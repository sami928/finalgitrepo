import {
  Search,
  Star,
  ArrowRight,
  MapPin,
  ShieldCheck,
  HeartHandshake,
  TrendingUp,
  Phone,
} from 'lucide-react';
import { Button } from '@/components/Button';
import { LeadForm } from '@/components/LeadForm';
import { RealScoutWidget } from '@/components/RealScoutWidget';
import { Reveal } from '@/components/Reveal';
import { site } from '@/config/site';
import { navigate } from '@/lib/router';
import { testimonials } from '@/data/testimonials';
import { images } from '@/config/images';

const heroImg = images.homeHero;
const agentPhoto = images.agentPhoto;
const familyImg = images.homeFamily;

const stats = [
  { value: '420+', label: 'Homes sold' },
  { value: '12 yrs', label: 'In Portland metro' },
  { value: '$480M', label: 'In closed volume' },
  { value: '4.9★', label: 'Average rating' },
];

const services = [
  {
    icon: Search,
    title: 'Buyer representation',
    desc: 'A guided, no-pressure search with off-market access and sharp negotiation on your behalf.',
  },
  {
    icon: TrendingUp,
    title: 'Seller strategy',
    desc: 'Data-driven pricing, pro staging, and a marketing plan built to attract the strongest offers.',
  },
  {
    icon: ShieldCheck,
    title: 'Relocation help',
    desc: 'Moving to the Portland metro? I handle neighborhood matching, schools, and timelines.',
  },
  {
    icon: HeartHandshake,
    title: 'First-time buyers',
    desc: 'Patient, jargon-free guidance from pre-approval to keys — so you never feel rushed.',
  },
];

export function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 pt-24">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Portland skyline over the Willamette River"
            className="h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/70 to-ink-950" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-300 backdrop-blur">
              <MapPin className="h-3.5 w-3.5" />
              {site.area}
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] text-white text-balance sm:text-5xl lg:text-6xl">
              Find your place in the{' '}
              <span className="text-gold-400">Greater Portland Metro</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-200">
              I'm {site.agentName}, a local broker who helps buyers and sellers
              move with confidence. Search live listings, get a tailored home
              plan, and never feel pressured.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                onClick={() => {
                  document
                    .getElementById('search-widget')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Search className="h-4 w-4" />
                Search homes now
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white"
                onClick={() => navigate('/contact')}
              >
                Talk to Catherine
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-semibold text-white">
                    {s.value}
                  </div>
                  <div className="text-xs uppercase tracking-wide text-ink-300">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center" id="search-widget">
            <RealScoutWidget />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-ink-100 bg-ink-50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-5 text-sm font-medium text-ink-500 lg:px-8">
          {site.testimonialsEnabled && (
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
              4.9 average across 180+ reviews
            </span>
          )}
          {site.testimonialsEnabled && (
            <span className="hidden h-4 w-px bg-ink-200 sm:block" />
          )}
          <span>Licensed {site.licenseNo}</span>
          <span className="hidden h-4 w-px bg-ink-200 sm:block" />
          <span>Equal Housing Opportunity</span>
          <span className="hidden h-4 w-px bg-ink-200 sm:block" />
          <span>{site.area} local realtor since 2014</span>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={agentPhoto}
                  alt={site.agentName}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-white p-5 shadow-lg ring-1 ring-ink-100 sm:block">
                <div className="flex items-center gap-1 text-gold-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-400" />
                  ))}
                </div>
                <p className="mt-1.5 text-sm font-semibold text-ink-900">
                  Trusted by 400+ families
                </p>
                <p className="text-xs text-ink-500">across the Portland metro</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                Meet your agent
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
                Hi, I'm {site.agentName}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-600">
                For over a decade in real estate, I have
had the privilege of advocating for
buyers and sellers throughout the
Portland metro area.
I have built my business on genuine
relationships and exceptional results.
Everyone deserves a personalized
approach, honest guidance,
unwavering support and an enduring
partnership.

Whether you are a first-time home-
buyer, upgrading to your dream home,

or preparing to sell, I bring a calm,
confident presence to every
interaction.
              </p>
              <p className="mt-4 leading-relaxed text-ink-600">
                My approach is simple: listen first, educate often, and never
                push. Whether you're buying your first condo or selling a
                forever home, you'll get straight answers and a plan built
                around your life.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button onClick={() => navigate('/contact')}>
                  Work with me
                  <ArrowRight className="h-4 w-4" />
                </Button>
                {site.testimonialsEnabled && (
                  <Button variant="ghost" onClick={() => navigate('/testimonials')}>
                    Read client stories
                  </Button>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              How I help
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink-900 sm:text-4xl">
              Full-service, deeply local
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              Every client gets a customized plan. Here's what that looks like.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-ink-100 bg-white p-6 transition-shadow hover:shadow-md">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-100 text-gold-600">
                    <s.icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured testimonials */}
      {site.testimonialsEnabled && (
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              Client stories
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink-900 sm:text-4xl">
              People love working with Catherine
            </h2>
          </div>
          <Button variant="ghost" onClick={() => navigate('/testimonials')}>
            See all reviews
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6">
                <div className="flex gap-0.5 text-gold-400">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold-400" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
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
      </section>
      )}

      {/* Lead capture CTA */}
      <section className="bg-ink-950 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={familyImg}
                  alt="A family receiving keys to their new home"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                  Start your search
                </p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Let's find your next home
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-200">
                  Tell me what you're looking for. Within 24 hours you'll get a
                  personalized plan, saved searches, and a real conversation —
                  not a sales pitch.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={site.phoneHref}>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white">
                      <Phone className="h-4 w-4" />
                      {site.phone}
                    </Button>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="mt-10">
            <LeadForm source="home" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
