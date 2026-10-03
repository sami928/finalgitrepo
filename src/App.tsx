import { Suspense, lazy, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useRoute } from '@/lib/router';
import { useSEO } from '@/lib/useSEO';
import { Analytics } from '@/components/Analytics';
import { site } from '@/config/site';
import { HomePage } from '@/pages/HomePage';
import { matchResourceRoute } from '@/data/guides/catalog';

const ListingsPage = lazy(() => import('@/pages/ListingsPage').then((m) => ({ default: m.ListingsPage })));
const TestimonialsPage = lazy(() => import('@/pages/TestimonialsPage').then((m) => ({ default: m.TestimonialsPage })));
const ContactPage = lazy(() => import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const ResourcesPage = lazy(() => import('@/pages/ResourcesPage').then((m) => ({ default: m.ResourcesPage })));
const GuidePage = lazy(() => import('@/pages/GuidePage').then((m) => ({ default: m.GuidePage })));
const HomeValuePage = lazy(() => import('@/pages/HomeValuePage').then((m) => ({ default: m.HomeValuePage })));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));
const MlsSearchPage = lazy(() => import('@/pages/MlsSearchPage').then((m) => ({ default: m.MlsSearchPage })));

function PageFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold-200 border-t-gold-600" />
    </div>
  );
}

export default function App() {
  const route = useRoute();
  useSEO(route);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [route]);

  let page;
  switch (route) {
    case '/':
      page = <HomePage />;
      break;
    case '/listings':
      page = <ListingsPage />;
      break;
    case '/testimonials':
      page = site.testimonialsEnabled ? <TestimonialsPage /> : <NotFoundPage />;
      break;
    case '/home-value':
      page = <HomeValuePage />;
      break;
    case '/contact':
      page = <ContactPage />;
      break;
    case '/mls-search':
      page = site.mlsSearchEnabled ? <MlsSearchPage /> : <NotFoundPage />;
      break;
    default: {
      // /resources, /resources/<category>, /resources/<category>/<guide>
      const resource = site.resourcesEnabled ? matchResourceRoute(route) : null;
      if (resource?.kind === 'guide') page = <GuidePage slug={resource.guide.slug} />;
      else if (resource?.kind === 'category') page = <ResourcesPage category={resource.category} />;
      else if (resource) page = <ResourcesPage />;
      // Unknown or switched-off URLs get a real "not found" page (marked noindex by useSEO).
      else page = <NotFoundPage />;
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<PageFallback />}>{page}</Suspense>
      </main>
      <Footer />
      <Analytics route={route} />
    </div>
  );
}
