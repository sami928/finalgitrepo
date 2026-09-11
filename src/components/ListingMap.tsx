import { useEffect, useRef, useState } from 'react';
import { MapPin, X } from 'lucide-react';
import type { MlsListing } from '@/lib/mlsTypes';

/**
 * Interactive map view for MLS listings.
 *
 * Uses Leaflet + OpenStreetMap (free, no API key needed) to render
 * listing markers on an interactive map. Each marker is clickable to
 * show a mini popup with the listing summary.
 *
 * Leaflet is loaded dynamically from CDN so it doesn't bloat the main
 * bundle — it's only fetched when the user switches to map view.
 */

// Inline types for the dynamically loaded Leaflet
type LeafletMap = {
  setView: (latlng: [number, number], zoom: number) => void;
  remove: () => void;
  fitBounds: (bounds: [[number, number], [number, number]], opts?: unknown) => void;
};
type LeafletMarker = { bindPopup: (html: string) => void; addTo: (map: LeafletMap) => void };

const LEAFLET_CSS = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
const LEAFLET_JS = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';

let leafletLoaded = false;

async function loadLeaflet(): Promise<typeof window.L> {
  if (leafletLoaded && window.L) return window.L;

  // Load CSS
  if (!document.querySelector(`link[href="${LEAFLET_CSS}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = LEAFLET_CSS;
    document.head.appendChild(link);
  }

  // Load JS
  if (!window.L) {
    await new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = LEAFLET_JS;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load map library'));
      document.head.appendChild(script);
    });
  }

  leafletLoaded = true;
  return window.L;
}

function formatPrice(price: number): string {
  if (price >= 1_000_000) return `$${(price / 1_000_000).toFixed(1)}M`;
  if (price >= 1_000) return `$${(price / 1_000).toFixed(0)}K`;
  return `$${price.toLocaleString()}`;
}

export function ListingMap({
  listings,
  onSelectListing,
}: {
  listings: MlsListing[];
  onSelectListing?: (listing: MlsListing) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<LeafletMarker[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    loadLeaflet()
      .then((L) => {
        if (cancelled || !containerRef.current) return;
        if (mapRef.current) {
          mapRef.current.remove();
          mapRef.current = null;
        }

        const map: LeafletMap = L.map(containerRef.current).setView([45.5152, -122.6784], 11);
        mapRef.current = map;

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
          maxZoom: 19,
        }).addTo(map as never);

        // Add markers for listings with coordinates
        const validListings = listings.filter(
          (l) => l.latitude != null && l.longitude != null
        );

        markersRef.current = validListings.map((listing) => {
          const marker: LeafletMarker = L.marker([listing.latitude!, listing.longitude!])
            .bindPopup(`
              <div style="min-width: 200px; font-family: Inter, sans-serif;">
                <img src="${listing.photoUrl ?? ''}" fetchpriority="high" style="width:100%;height:120px;object-fit:cover;border-radius:8px;margin-bottom:8px;" onerror="this.style.display='none'" />
                <div style="font-weight:700;font-size:14px;color:#18181b;">${formatPrice(listing.price)}</div>
                <div style="font-size:12px;color:#71717a;margin-top:2px;">${listing.address}</div>
                <div style="font-size:12px;color:#52525b;margin-top:4px;">
                  ${(listing.bedrooms ?? '—')} bd | ${(listing.bathrooms ?? '—')} ba | ${(listing.squareFeet ?? '—').toLocaleString?.() ?? '—'} sqft
                </div>
                <div style="margin-top:8px;">
                  <a href="/mls-search" data-listing-id="${listing.id}" style="color:#dc2626;font-size:12px;font-weight:600;text-decoration:none;">View details →</a>
                </div>
              </div>
            `)
            .addTo(map);
          return marker;
        });

        if (validListings.length > 0) {
          const lats = validListings.map((l) => l.latitude!);
          const lngs = validListings.map((l) => l.longitude!);
          map.fitBounds(
            [
              [Math.min(...lats), Math.min(...lngs)],
              [Math.max(...lats), Math.max(...lngs)],
            ],
            { padding: [40, 40] }
          );
        }

        setLoading(false);
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message || 'Could not load map');
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [listings]);

  // Handle popup click events via delegation
  useEffect(() => {
    const handler = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('[data-listing-id]') as HTMLElement | null;
      if (link) {
        const id = link.dataset.listingId;
        const listing = listings.find((l) => l.id === id);
        if (listing) onSelectListing?.(listing);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [listings, onSelectListing]);

  if (error) {
    return (
      <div className="flex h-[500px] items-center justify-center rounded-xl border border-ink-200 bg-ink-50 text-sm text-ink-500">
        {error}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-ink-200 bg-white shadow-sm">
      {loading && (
        <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-ink-200 border-t-gold-500" />
            <p className="text-sm text-ink-500">Loading map...</p>
          </div>
        </div>
      )}
      <div ref={containerRef} className="h-[600px] w-full" />
      {!loading && listings.filter((l) => l.latitude != null).length === 0 && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="pointer-events-auto rounded-lg bg-white/95 px-4 py-3 text-sm text-ink-500 shadow-md">
            No listings with location data to display on map
          </div>
        </div>
      )}
    </div>
  );
}

// Global Leaflet type augmentation
declare global {
  interface Window {
    L: {
      map: (el: HTMLElement) => LeafletMap;
      tileLayer: (url: string, opts?: Record<string, unknown>) => { addTo: (map: LeafletMap) => void };
      marker: (latlng: [number, number]) => LeafletMarker;
    };
  }
}

export { formatPrice };
