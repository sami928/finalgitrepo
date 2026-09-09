import { MapPin, Bed, Bath, Square, Calendar, Eye } from 'lucide-react';
import type { MlsListing } from '@/lib/mlsTypes';

function formatPrice(price: number): string {
  if (price >= 1_000_000) return `$${(price / 1_000_000).toFixed(price % 1_000_000 === 0 ? 0 : 1)}M`;
  if (price >= 1_000) return `$${(price / 1_000).toFixed(0)}K`;
  return `$${price.toLocaleString()}`;
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

const statusColors: Record<string, string> = {
  Active: 'bg-green-100 text-green-700',
  Pending: 'bg-amber-100 text-amber-700',
  Closed: 'bg-blue-100 text-blue-700',
  Sold: 'bg-blue-100 text-blue-700',
};

export function ListingCard({
  listing,
  onClick,
}: {
  listing: MlsListing;
  onClick?: (listing: MlsListing) => void;
}) {
  const photo = listing.photoUrl ?? 'https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg?auto=compress&cs=tinysrgb&h=400&w=600';

  return (
    <button
      onClick={() => onClick?.(listing)}
      className="group flex flex-col overflow-hidden rounded-xl border border-ink-200 bg-white text-left shadow-sm transition-all duration-200 hover:shadow-md hover:border-ink-300"
    >
      <div className="relative h-52 overflow-hidden bg-ink-100">
        <img
          src={photo}
          alt={listing.address}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          fetchPriority="high"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg?auto=compress&cs=tinysrgb&h=400&w=600';
          }}
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${statusColors[listing.status] ?? 'bg-ink-100 text-ink-700'}`}
        >
          {listing.status}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-ink-900/80 px-3 py-1 text-sm font-bold text-white backdrop-blur-sm">
          {formatPrice(listing.price)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-semibold leading-snug text-ink-900 line-clamp-2">
          {listing.address}
        </h3>
        <p className="mt-1 flex items-center gap-1 text-xs text-ink-500">
          <MapPin className="h-3 w-3" />
          {listing.city}, {listing.state} {listing.zipCode}
        </p>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-ink-600">
          {listing.bedrooms != null && (
            <span className="flex items-center gap-1">
              <Bed className="h-3.5 w-3.5 text-ink-400" />
              {listing.bedrooms} bd
            </span>
          )}
          {listing.bathrooms != null && (
            <span className="flex items-center gap-1">
              <Bath className="h-3.5 w-3.5 text-ink-400" />
              {listing.bathrooms} ba
            </span>
          )}
          {listing.squareFeet != null && (
            <span className="flex items-center gap-1">
              <Square className="h-3.5 w-3.5 text-ink-400" />
              {listing.squareFeet.toLocaleString()} sqft
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between pt-3 text-xs text-ink-400">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {listing.status === 'Active' || listing.status === 'Pending'
              ? `Listed ${formatDate(listing.listDate)}`
              : `Sold ${formatDate(listing.closeDate)}`}
          </span>
          {listing.daysOnMarket != null && (
            <span>{listing.daysOnMarket} DOM</span>
          )}
        </div>

        <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-gold-600 opacity-0 transition-opacity group-hover:opacity-100">
          <Eye className="h-3.5 w-3.5" />
          View details
        </div>
      </div>
    </button>
  );
}
