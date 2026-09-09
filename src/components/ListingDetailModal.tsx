import { useEffect, useState } from 'react';
import { X, Bed, Bath, Square, MapPin, Calendar, Home, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import type { MlsListing } from '@/lib/mlsTypes';

function formatPrice(price: number): string {
  return `$${price.toLocaleString()}`;
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

const statusColors: Record<string, string> = {
  Active: 'bg-green-100 text-green-700',
  Pending: 'bg-amber-100 text-amber-700',
  Closed: 'bg-blue-100 text-blue-700',
  Sold: 'bg-blue-100 text-blue-700',
};

export function ListingDetailModal({
  listing,
  onClose,
}: {
  listing: MlsListing | null;
  onClose: () => void;
}) {
  const [photoIdx, setPhotoIdx] = useState(0);

  useEffect(() => {
    setPhotoIdx(0);
  }, [listing]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (listing) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [listing, onClose]);

  if (!listing) return null;

  const photos = listing.photoUrls?.length ? listing.photoUrls : listing.photoUrl ? [listing.photoUrl] : [];
  const currentPhoto = photos[photoIdx] ?? 'https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg?auto=compress&cs=tinysrgb&h=600&w=900';

  const facts: Array<{ label: string; value: string | undefined }> = [
    { label: 'MLS #', value: listing.mlsNumber },
    { label: 'Status', value: listing.status },
    { label: 'Price', value: formatPrice(listing.price) },
    { label: 'Bedrooms', value: listing.bedrooms?.toString() },
    { label: 'Bathrooms', value: listing.bathrooms?.toString() },
    { label: 'Square Feet', value: listing.squareFeet?.toLocaleString() },
    { label: 'Lot Size', value: listing.lotSizeAcres ? `${listing.lotSizeAcres} acres` : listing.lotSize ? `${listing.lotSize.toLocaleString()} sqft` : undefined },
    { label: 'Year Built', value: listing.yearBuilt?.toString() },
    { label: 'Garage', value: listing.garageSpaces ? `${listing.garageSpaces} spaces` : undefined },
    { label: 'Property Type', value: listing.propertyType },
    { label: 'Neighborhood', value: listing.neighborhood },
    { label: 'Days on Market', value: listing.daysOnMarket?.toString() },
    { label: 'Listed', value: formatDate(listing.listDate) },
    { label: 'Closed', value: formatDate(listing.closeDate) },
  ];

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-start justify-center overflow-y-auto bg-ink-950/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative my-8 w-full max-w-4xl rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink-700 shadow-sm transition-colors hover:bg-white hover:text-ink-900"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Photo gallery */}
        <div className="relative h-80 overflow-hidden rounded-t-2xl bg-ink-100 sm:h-96">
          <img
            src={currentPhoto}
            alt={listing.address}
            className="h-full w-full object-cover"
            fetchPriority="high"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg?auto=compress&cs=tinysrgb&h=600&w=900';
            }}
          />
          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${statusColors[listing.status] ?? 'bg-ink-100 text-ink-700'}`}
          >
            {listing.status}
          </span>
          <span className="absolute bottom-4 left-4 rounded-full bg-ink-900/80 px-4 py-1.5 text-lg font-bold text-white backdrop-blur-sm">
            {formatPrice(listing.price)}
          </span>

          {photos.length > 1 && (
            <>
              <button
                onClick={() => setPhotoIdx((i) => (i - 1 + photos.length) % photos.length)}
                className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-ink-700 transition-colors hover:bg-white"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setPhotoIdx((i) => (i + 1) % photos.length)}
                className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-ink-700 transition-colors hover:bg-white"
                aria-label="Next photo"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <span className="absolute bottom-4 right-4 rounded-full bg-ink-900/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {photoIdx + 1} / {photos.length}
              </span>
            </>
          )}
        </div>

        {/* Content */}
        <div className="max-h-[50vh] overflow-y-auto p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-ink-900 sm:text-2xl">
            {listing.address}
          </h2>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-500">
            <MapPin className="h-4 w-4" />
            {listing.city}, {listing.state} {listing.zipCode}
          </p>

          {/* Quick stats */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { icon: Bed, label: 'Bedrooms', value: listing.bedrooms ?? '—' },
              { icon: Bath, label: 'Bathrooms', value: listing.bathrooms ?? '—' },
              { icon: Square, label: 'Sq Ft', value: listing.squareFeet ? listing.squareFeet.toLocaleString() : '—' },
              { icon: Home, label: 'Type', value: listing.propertyType ?? '—' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-lg bg-ink-50 p-3 text-center">
                <Icon className="mx-auto h-5 w-5 text-ink-400" />
                <p className="mt-1.5 text-sm font-semibold text-ink-900">{value}</p>
                <p className="text-xs text-ink-500">{label}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          {listing.description && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">
                Description
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {listing.description}
              </p>
            </div>
          )}

          {/* Facts grid */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">
              Property Details
            </h3>
            <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
              {facts
                .filter((f) => f.value)
                .map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-xs text-ink-400">{label}</dt>
                    <dd className="mt-0.5 font-medium text-ink-800">{value}</dd>
                  </div>
                ))}
            </dl>
          </div>

          {/* Schools */}
          {(listing.elementarySchool || listing.middleSchool || listing.highSchool) && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">
                Schools
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {listing.elementarySchool && (
                  <span className="rounded-lg bg-ink-50 px-3 py-1.5 text-xs text-ink-700">
                    Elementary: {listing.elementarySchool}
                  </span>
                )}
                {listing.middleSchool && (
                  <span className="rounded-lg bg-ink-50 px-3 py-1.5 text-xs text-ink-700">
                    Middle: {listing.middleSchool}
                  </span>
                )}
                {listing.highSchool && (
                  <span className="rounded-lg bg-ink-50 px-3 py-1.5 text-xs text-ink-700">
                    High: {listing.highSchool}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Virtual tour link */}
          {listing.virtualTourUrl && (
            <a
              href={listing.virtualTourUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-600"
            >
              <ExternalLink className="h-4 w-4" />
              View Virtual Tour
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
