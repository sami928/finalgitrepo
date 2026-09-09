import { useState, useCallback, useEffect } from 'react';
import { Search, Loader2, AlertCircle, Map as MapIcon, LayoutGrid, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { ListingCard } from '@/components/ListingCard';
import { ListingMap } from '@/components/ListingMap';
import { ListingDetailModal } from '@/components/ListingDetailModal';
import { searchListings } from '@/lib/mlsClient';
import { isMlsConfigured } from '@/config/mls';
import { site } from '@/config/site';
import { images } from '@/config/images';
import { navigate } from '@/lib/router';
import type { MlsListing, MlsSearchFilters } from '@/lib/mlsTypes';
import { PROPERTY_TYPES, SORT_OPTIONS, STATUS_TABS } from '@/lib/mlsTypes';

type ViewMode = 'grid' | 'map';
type StatusTab = (typeof STATUS_TABS)[number]['value'];

export function MlsSearchPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [statusTab, setStatusTab] = useState<StatusTab>('Active');
  const [filters, setFilters] = useState({
    city: '',
    zipCode: '',
    priceMin: '',
    priceMax: '',
    bedroomsMin: '',
    bathroomsMin: '',
    squareFeetMin: '',
    propertyType: '',
  });
  const [sort, setSort] = useState<string>('newest');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const [listings, setListings] = useState<MlsListing[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(24);
  const [hasMore, setHasMore] = useState(false);
  const [selectedListing, setSelectedListing] = useState<MlsListing | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const doSearch = useCallback(
    async (pageNum: number, replace: boolean) => {
      setLoading(true);
      setError('');
      setHasSearched(true);

      const searchFilters: MlsSearchFilters = {
        status: statusTab as MlsSearchFilters['status'],
        city: filters.city || undefined,
        zipCode: filters.zipCode || undefined,
        priceMin: filters.priceMin ? Number(filters.priceMin) : undefined,
        priceMax: filters.priceMax ? Number(filters.priceMax) : undefined,
        bedroomsMin: filters.bedroomsMin ? Number(filters.bedroomsMin) : undefined,
        bathroomsMin: filters.bathroomsMin ? Number(filters.bathroomsMin) : undefined,
        squareFeetMin: filters.squareFeetMin ? Number(filters.squareFeetMin) : undefined,
        propertyType: filters.propertyType || undefined,
        sort: sort as MlsSearchFilters['sort'],
        page: pageNum,
        pageSize,
      };

      try {
        const result = await searchListings(searchFilters);
        setListings(replace ? result.listings : (prev) => [...prev, ...result.listings]);
        setTotal(result.total);
        setPage(result.page);
        setHasMore(result.hasMore);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Search failed. Please try again.');
        if (replace) setListings([]);
      } finally {
        setLoading(false);
      }
    },
    [filters, sort, statusTab, pageSize]
  );

  // Reset to page 1 when filters or sort change
  const handleSearch = () => doSearch(1, true);

  // Re-search when status tab changes
  useEffect(() => {
    if (hasSearched) doSearch(1, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusTab]);

  const updateFilter = (key: keyof typeof filters, value: string) =>
    setFilters((f) => ({ ...f, [key]: value }));

  const clearFilters = () => {
    setFilters({
      city: '',
      zipCode: '',
      priceMin: '',
      priceMax: '',
      bedroomsMin: '',
      bathroomsMin: '',
      squareFeetMin: '',
      propertyType: '',
    });
  };

  const hasActiveFilters = Object.values(filters).some((v) => v !== '');

  // Not configured state
  if (!isMlsConfigured) {
    return (
      <div>
        <PageHero
          eyebrow="MLS Search"
          title={<>Portland Metro MLS Search</>}
          subtitle="Search active and sold listings directly from the Regional MLS. This tool is being set up — check back soon."
          image={images.listingsHero}
        />
        <section className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-sm">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-ink-100">
              <Search className="h-6 w-6 text-ink-400" />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-ink-900">
              MLS search coming soon
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-600">
              The MLS search tool is being configured. In the meantime, you can
              browse Catherine's featured listings or request a custom search.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button onClick={() => navigate('/listings')}>View featured listings</Button>
              <Button variant="outline" onClick={() => navigate('/contact')}>
                Request a custom search
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-200';
  const selectClass = inputClass;

  return (
    <div>
      <PageHero
        eyebrow="MLS Search"
        title={<>Portland Metro MLS Search</>}
        subtitle="Search live active and sold listings directly from the Regional MLS. Filter by location, price, beds, baths, and more — then switch to map view to explore neighborhoods."
        image={images.listingsHero}
      />

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        {/* Search bar */}
        <Reveal>
          <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm sm:p-6">
            {/* Status tabs */}
            <div className="flex items-center gap-1 border-b border-ink-100 pb-4">
              {STATUS_TABS.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setStatusTab(tab.value)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    statusTab === tab.value
                      ? 'bg-ink-900 text-white'
                      : 'text-ink-600 hover:bg-ink-100 hover:text-ink-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Main search row */}
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <input
                type="text"
                value={filters.city}
                onChange={(e) => updateFilter('city', e.target.value)}
                placeholder="City (e.g. Portland)"
                className={inputClass}
              />
              <input
                type="text"
                value={filters.zipCode}
                onChange={(e) => updateFilter('zipCode', e.target.value)}
                placeholder="ZIP code"
                className={inputClass}
              />
              <select
                value={filters.propertyType}
                onChange={(e) => updateFilter('propertyType', e.target.value)}
                className={selectClass}
              >
                {PROPERTY_TYPES.map((pt) => (
                  <option key={pt.value} value={pt.value}>{pt.label}</option>
                ))}
              </select>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className={selectClass}
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Price range row */}
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-ink-400">$</span>
                <input
                  type="number"
                  value={filters.priceMin}
                  onChange={(e) => updateFilter('priceMin', e.target.value)}
                  placeholder="Min price"
                  className={`${inputClass} pl-7`}
                />
              </div>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-ink-400">$</span>
                <input
                  type="number"
                  value={filters.priceMax}
                  onChange={(e) => updateFilter('priceMax', e.target.value)}
                  placeholder="Max price"
                  className={`${inputClass} pl-7`}
                />
              </div>
              <select
                value={filters.bedroomsMin}
                onChange={(e) => updateFilter('bedroomsMin', e.target.value)}
                className={selectClass}
              >
                <option value="">Any beds</option>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>{n}+ beds</option>
                ))}
              </select>
              <select
                value={filters.bathroomsMin}
                onChange={(e) => updateFilter('bathroomsMin', e.target.value)}
                className={selectClass}
              >
                <option value="">Any baths</option>
                {[1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>{n}+ baths</option>
                ))}
              </select>
            </div>

            {/* Advanced toggle */}
            <button
              onClick={() => setShowAdvanced((v) => !v)}
              className="mt-3 flex items-center gap-1.5 text-sm font-medium text-ink-600 hover:text-ink-900"
            >
              <SlidersHorizontal className="h-4 w-4" />
              {showAdvanced ? 'Hide' : 'Show'} advanced filters
            </button>

            {showAdvanced && (
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-ink-400">≥</span>
                  <input
                    type="number"
                    value={filters.squareFeetMin}
                    onChange={(e) => updateFilter('squareFeetMin', e.target.value)}
                    placeholder="Min square feet"
                    className={`${inputClass} pl-7`}
                  />
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Button onClick={handleSearch} className={loading ? 'pointer-events-none opacity-70' : ''}>
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4" />
                    Search listings
                  </>
                )}
              </Button>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm font-medium text-ink-500 hover:text-ink-900"
                >
                  Clear filters
                </button>
              )}

              {/* View toggle */}
              <div className="ml-auto flex items-center gap-1 rounded-full border border-ink-200 p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                    viewMode === 'grid' ? 'bg-ink-900 text-white' : 'text-ink-600 hover:bg-ink-100'
                  }`}
                >
                  <LayoutGrid className="h-3.5 w-3.5" />
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                    viewMode === 'map' ? 'bg-ink-900 text-white' : 'text-ink-600 hover:bg-ink-100'
                  }`}
                >
                  <MapIcon className="h-3.5 w-3.5" />
                  Map
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Error */}
        {error && (
          <div className="mt-6 flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {error}
          </div>
        )}

        {/* Results */}
        <div className="mt-8">
          {/* Results count */}
          {hasSearched && !loading && !error && (
            <p className="mb-4 text-sm text-ink-500">
              {total > 0
                ? `${total.toLocaleString()} ${total === 1 ? 'listing' : 'listings'} found`
                : 'No listings matched your search. Try adjusting your filters.'}
            </p>
          )}

          {/* Grid view */}
          {viewMode === 'grid' && (
            <>
              {listings.length > 0 ? (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {listings.map((listing) => (
                    <ListingCard
                      key={listing.id}
                      listing={listing}
                      onClick={setSelectedListing}
                    />
                  ))}
                </div>
              ) : (
                !loading &&
                hasSearched &&
                !error && (
                  <div className="rounded-xl border border-dashed border-ink-200 py-16 text-center">
                    <p className="text-sm text-ink-500">
                      No listings found. Try widening your search criteria.
                    </p>
                  </div>
                )
              )}

              {/* Load more */}
              {hasMore && !loading && (
                <div className="mt-8 flex justify-center">
                  <Button variant="outline" onClick={() => doSearch(page + 1, false)}>
                    Load more listings
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}

              {/* Pagination */}
              {total > pageSize && !hasMore && listings.length > 0 && (
                <div className="mt-8 flex items-center justify-center gap-4 text-sm text-ink-500">
                  <button
                    onClick={() => page > 1 && doSearch(page - 1, true)}
                    disabled={page <= 1}
                    className="flex items-center gap-1 rounded-full px-3 py-1.5 font-medium transition-colors hover:bg-ink-100 disabled:opacity-40 disabled:hover:bg-transparent"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </button>
                  <span>Page {page}</span>
                  <button
                    onClick={() => hasMore && doSearch(page + 1, true)}
                    disabled={!hasMore}
                    className="flex items-center gap-1 rounded-full px-3 py-1.5 font-medium transition-colors hover:bg-ink-100 disabled:opacity-40 disabled:hover:bg-transparent"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </>
          )}

          {/* Map view */}
          {viewMode === 'map' && (
            <div className="grid gap-5 lg:grid-cols-[1fr_400px]">
              <ListingMap listings={listings} onSelectListing={setSelectedListing} />
              <div className="max-h-[600px] space-y-3 overflow-y-auto rounded-xl border border-ink-200 bg-white p-3 shadow-sm">
                {listings.length === 0 ? (
                  <p className="py-10 text-center text-sm text-ink-500">
                    {loading ? 'Searching...' : 'No listings to display. Run a search first.'}
                  </p>
                ) : (
                  listings.slice(0, 50).map((listing) => (
                    <button
                      key={listing.id}
                      onClick={() => setSelectedListing(listing)}
                      className="flex w-full gap-3 rounded-lg p-2 text-left transition-colors hover:bg-ink-50"
                    >
                      <img
                        src={listing.photoUrl ?? 'https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg?auto=compress&cs=tinysrgb&h=200&w=200'}
                        alt=""
                        className="h-16 w-16 shrink-0 rounded-lg object-cover"
                        fetchPriority="high"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg?auto=compress&cs=tinysrgb&h=200&w=200';
                        }}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-ink-900">
                          ${(listing.price / 1000).toFixed(0)}K
                        </p>
                        <p className="truncate text-xs text-ink-600">{listing.address}</p>
                        <p className="mt-0.5 text-xs text-ink-400">
                          {listing.bedrooms ?? '—'} bd | {listing.bathrooms ?? '—'} ba | {listing.squareFeet?.toLocaleString() ?? '—'} sqft
                        </p>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-ink-900 px-6 py-10 text-center sm:px-10">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Want alerts when new listings hit the market?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-300">
            Catherine can set up a custom search with instant email or text alerts
            the moment a matching home is listed.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button onClick={() => navigate('/contact')}>Set up custom alerts</Button>
          </div>
        </div>
      </section>

      <ListingDetailModal listing={selectedListing} onClose={() => setSelectedListing(null)} />
    </div>
  );
}
