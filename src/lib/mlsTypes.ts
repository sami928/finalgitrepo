/**
 * MLS listing types — based on RESO Web API field names (the standard
 * used by RMLS and most modern MLS providers). Fields are optional since
 * not all listings populate every field.
 */

export type ListingStatus = 'Active' | 'Closed' | 'Pending' | 'Sold';

export interface MlsListing {
  id: string;
  mlsNumber: string;
  status: ListingStatus;
  price: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  latitude?: number;
  longitude?: number;
  bedrooms?: number;
  bathrooms?: number;
  squareFeet?: number;
  lotSize?: number;
  propertyType?: string;
  daysOnMarket?: number;
  listDate?: string;
  closeDate?: string;
  photoUrl?: string;
  photoUrls?: string[];
  description?: string;
  yearBuilt?: number;
  garageSpaces?: number;
  lotSizeAcres?: number;
  neighborhood?: string;
  elementarySchool?: string;
  middleSchool?: string;
  highSchool?: string;
  virtualTourUrl?: string;
}

export interface MlsSearchFilters {
  status?: ListingStatus | 'all';
  city?: string;
  zipCode?: string;
  priceMin?: number;
  priceMax?: number;
  bedroomsMin?: number;
  bathroomsMin?: number;
  squareFeetMin?: number;
  squareFeetMax?: number;
  propertyType?: string;
  sort?: 'price_asc' | 'price_desc' | 'newest' | 'days_on_market';
  page?: number;
  pageSize?: number;
}

export interface MlsSearchResult {
  listings: MlsListing[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export const PROPERTY_TYPES = [
  { value: '', label: 'All types' },
  { value: 'SFR', label: 'Single Family' },
  { value: 'MF', label: 'Multi-Family' },
  { value: 'TC', label: 'Townhouse' },
  { value: 'CON', label: 'Condominium' },
  { value: 'LAL', label: 'Lots & Land' },
  { value: 'MOBILE', label: 'Manufactured' },
];

export const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest listings' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'days_on_market', label: 'Days on market' },
] as const;

export const STATUS_TABS = [
  { value: 'Active', label: 'Active' },
  { value: 'Sold', label: 'Sold' },
  { value: 'all', label: 'All' },
] as const;
