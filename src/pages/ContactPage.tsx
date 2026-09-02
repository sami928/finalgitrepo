import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { LeadForm } from '@/components/LeadForm';
import { site } from '@/config/site';
import { images } from '@/config/images';

const heroImg = images.contactHero;

export function ContactPage() {
  const contactCards = [
    {
      icon: Phone,
      label: 'Call or text',
      value: site.phone,
      href: site.phoneHref,
    },
    {
      icon: Mail,
      label: 'Email',
      value: site.email,
      href: site.emailHref,
    },
    {
      icon: MapPin,
      label: 'Service area',
      value: site.area,
    },
    {
      icon: Clock,
      label: 'Response time',
      value: 'Within 24 hours',
    },
  ];

  return (
    <div>
      <PageHero
        eyebrow="Get in touch"
        title={<>Let's talk about your move</>}
        subtitle="Buying, selling, or just have questions about the Portland market? Send a note and Catherine will personally reply within 24 hours."
        image={heroImg}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: contact info */}
          <Reveal>
            <div>
              <h2 className="text-2xl font-semibold text-ink-900">
                Direct contact
              </h2>
              <p className="mt-3 leading-relaxed text-ink-600">
                Prefer to reach out directly? Use any of the options below. For
                a detailed home search, the form is the fastest way to give me
                the full picture.
              </p>

              <div className="mt-8 space-y-4">
                {contactCards.map((c) => {
                  const content = (
                    <div className="flex items-center gap-4 rounded-xl border border-ink-100 bg-white p-4 transition-shadow hover:shadow-sm">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gold-100 text-gold-600">
                        <c.icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                          {c.label}
                        </div>
                        <div className="mt-0.5 text-sm font-semibold text-ink-900">
                          {c.value}
                        </div>
                      </div>
                    </div>
                  );
                  return c.href ? (
                    <a key={c.label} href={c.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={c.label}>{content}</div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-xl bg-ink-50 p-5">
                <h3 className="text-sm font-semibold text-ink-900">
                  Follow along
                </h3>
                <p className="mt-1 text-sm text-ink-600">
                  Portland market updates, new listings, and behind-the-scenes.
                </p>
                <div className="mt-4 flex gap-3">
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
                      className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink-700 ring-1 ring-ink-200 transition-colors hover:bg-gold-500 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={120}>
            <LeadForm
              source="contact"
              title="Send Catherine a message"
              subtitle="The more you share, the more helpful my first reply can be. Everything stays private."
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
