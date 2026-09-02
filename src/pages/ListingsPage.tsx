import { Search } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { RealScoutListings } from '@/components/RealScoutListings';
import { navigate } from '@/lib/router';
import { images } from '@/config/images';

const heroImg = images.listingsHero;

export function ListingsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Home search"
        title={<>Greater Portland Metro listings</>}
        subtitle="Browse Catherine's active and sold listings across the metro. For the full live MLS feed with instant alerts, use the search on the home page or ask Catherine to set up a custom search."
        image={heroImg}
      />

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <Reveal>
          <RealScoutListings />
        </Reveal>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-ink-900 px-6 py-10 text-center sm:px-10">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Want the full live MLS feed?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-300">
            Catherine can set up a custom search with instant alerts the moment
            a matching home hits the market.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button onClick={() => navigate('/')}>
              <Search className="h-4 w-4" />
              Use the home search
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white"
              onClick={() => navigate('/contact')}
            >
              Request a custom search
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
