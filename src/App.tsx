import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useRoute } from '@/lib/router';
import { useSEO } from '@/lib/useSEO';
import { Analytics } from '@/components/Analytics';
import { site } from '@/config/site';
import { HomePage } from '@/pages/HomePage';
import { ListingsPage } from '@/pages/ListingsPage';
import { TestimonialsPage } from '@/pages/TestimonialsPage';
import { ContactPage } from '@/pages/ContactPage';
import { ResourcesPage } from '@/pages/ResourcesPage';
import { HomeValuePage } from '@/pages/HomeValuePage';

export default function App() {
  const route = useRoute();
  useSEO(route);

  // Scroll to top on route change (smooth, except initial load)
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [route]);

  let page;
  switch (route) {
    case '/listings':
      page = <ListingsPage />;
      break;
    case '/testimonials':
      page = site.testimonialsEnabled ? <TestimonialsPage /> : <HomePage />;
      break;
    case '/home-value':
      page = <HomeValuePage />;
      break;
    case '/contact':
      page = <ContactPage />;
      break;
    case '/resources':
      page = site.resourcesEnabled ? <ResourcesPage /> : <HomePage />;
      break;
    default:
      page = <HomePage />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{page}</main>
      <Footer />
      <Analytics />
    </div>
  );
}
