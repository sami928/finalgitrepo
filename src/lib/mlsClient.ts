/**
 * MLS API client — fetches listings from the RMLS / RESO Web API.
 *
 * Supports two modes:
 *  1. Direct mode: browser calls the MLS API directly (key embedded in code).
 *  2. Proxy mode: browser calls a server-side proxy that adds the secret key.
 *
 * See src/config/mls.ts for setup instructions.
 */

import { mlsConfig, isMlsConfigured } from '@/config/mls';
import type { MlsListing, MlsSearchFilters, MlsSearchResult, ListingStatus } from './mlsTypes';

/** Map raw RESO API response items to our MlsListing shape. */
function mapListing(raw: Record<string, unknown>): MlsListing {
  const get = (key: string): string | undefined => {
    const v = raw[key];
    return v != null ? String(v) : undefined;
  };
  const getNum = (key: string): number | undefined => {
    const v = raw[key];
    if (v == null) return undefined;
    const n = Number(v);
    return Number.isFinite(n) ? n : undefined;
  };

  const lat = getNum('Latitude') ?? getNum('latitude');
  const lng = getNum('Longitude') ?? getNum('longitude');

  const photos = (raw['Media'] ?? raw['photos'] ?? raw['MediaURL']) as
    | Array<Record<string, unknown>>
    | string[]
    | undefined;

  let photoUrl: string | undefined;
  let photoUrls: string[] | undefined;

  if (Array.isArray(photos) && photos.length > 0) {
    if (typeof photos[0] === 'string') {
      photoUrls = photos as string[];
      photoUrl = photoUrls[0];
    } else {
      photoUrls = (photos as Array<Record<string, unknown>>)
        .map((p) => (p['MediaURL'] ?? p['url'] ?? p['MediaObjectURL']) as string)
        .filter(Boolean);
      photoUrl = photoUrls[0];
    }
  }

  const statusRaw = (raw['StandardStatus'] ?? raw['Status'] ?? raw['status']) as string | undefined;
  const status = (statusRaw ?? 'Active') as ListingStatus;

  return {
    id: (raw['ListingKey'] ?? raw['id'] ?? raw['ListingId']) as string,
    mlsNumber: (raw['ListingId'] ?? raw['MLSID'] ?? raw['ListingNumber'] ?? '') as string,
    status,
    price: getNum('ListPrice') ?? getNum('ClosePrice') ?? getNum('price') ?? 0,
    address: (raw['UnparsedAddress'] ?? raw['StreetAddress'] ?? raw['Address'] ?? raw['UnparsedFirstLineAddress']) as string,
    city: (raw['City'] ?? raw['city']) as string,
    state: (raw['StateOrProvince'] ?? raw['state']) as string,
    zipCode: (raw['PostalCode'] ?? raw['zipCode'] ?? raw['PostalCodePlus4']) as string,
    latitude: lat,
    longitude: lng,
    bedrooms: getNum('BedroomsTotal') ?? getNum('Bedrooms') ?? getNum('bedrooms'),
    bathrooms: getNum('BathroomsTotal') ?? getNum('BathroomsFull') ?? getNum('bathrooms'),
    squareFeet: getNum('LivingArea') ?? getNum('SquareFeetTotal') ?? getNum('sqft'),
    lotSize: getNum('LotSizeAreaSquareFeet') ?? getNum('LotSizeSquareFeet'),
    lotSizeAcres: getNum('LotSizeArea') ?? getNum('LotSizeAcres'),
    propertyType: (raw['PropertyType'] ?? raw['PropertySubType']) as string | undefined,
    daysOnMarket: getNum('DaysOnMarket') ?? getNum('DOM'),
    listDate: (raw['ListingDate'] ?? raw['listDate'] ?? raw['ModificationTimestamp']) as string | undefined,
    closeDate: (raw['CloseDate'] ?? raw['closeDate']) as string | undefined,
    photoUrl,
    photoUrls,
    description: (raw['PublicRemarks'] ?? raw['Remarks'] ?? raw['description']) as string | undefined,
    yearBuilt: getNum('YearBuilt'),
    garageSpaces: getNum('GarageSpaces') ?? getNum('ParkingSpaces'),
    neighborhood: (raw['SubdivisionName'] ?? raw['Neighborhood']) as string | undefined,
    elementarySchool: get('ElementarySchool'),
    middleSchool: get('MiddleSchool'),
    highSchool: get('HighSchool'),
    virtualTourUrl: (raw['VirtualTourURL'] ?? raw['VirtualTourURLUnbranded']) as string | undefined,
  };
}

/** Build the query string for the MLS API from search filters. */
function buildQueryParams(filters: MlsSearchFilters): Record<string, string> {
  const params: Record<string, string> = {};

  // RESO OData-style $filter
  const filterParts: string[] = [];

  if (filters.status && filters.status !== 'all') {
    const statusVal = filters.status === 'Sold' ? 'Closed,Sold' : filters.status;
    filterParts.push(`StandardStatus in ('${statusVal.split(',').join("','")}')`);
  }

  if (filters.priceMin != null) {
    filterParts.push(`ListPrice ge ${filters.priceMin}`);
  }
  if (filters.priceMax != null) {
    filterParts.push(`ListPrice le ${filters.priceMax}`);
  }
  if (filters.bedroomsMin != null) {
    filterParts.push(`BedroomsTotal ge ${filters.bedroomsMin}`);
  }
  if (filters.bathroomsMin != null) {
    filterParts.push(`BathroomsTotal ge ${filters.bathroomsMin}`);
  }
  if (filters.squareFeetMin != null) {
    filterParts.push(`LivingArea ge ${filters.squareFeetMin}`);
  }
  if (filters.squareFeetMax != null) {
    filterParts.push(`LivingArea le ${filters.squareFeetMax}`);
  }
  if (filters.zipCode) {
    filterParts.push(`PostalCode eq '${filters.zipCode}'`);
  }
  if (filters.city) {
    filterParts.push(`City eq '${filters.city}'`);
  }
  if (filters.propertyType) {
    filterParts.push(`PropertyType eq '${filters.propertyType}'`);
  }

  if (filterParts.length > 0) {
    params['$filter'] = filterParts.join(' and ');
  }

  // Sorting
  const sortMap: Record<string, string> = {
    newest: 'ListingDate desc',
    price_desc: 'ListPrice desc',
    price_asc: 'ListPrice asc',
    days_on_market: 'DaysOnMarket asc',
  };
  if (filters.sort) {
    params['$orderby'] = sortMap[filters.sort] ?? sortMap.newest;
  }

  // Pagination
  const page = filters.page ?? 1;
  const pageSize = filters.pageSize ?? mlsConfig.pageSize;
  params['$top'] = String(pageSize);
  params['$skip'] = String((page - 1) * pageSize);

  // Expand media for photos
  params['$expand'] = 'Media';

  return params;
}

/** Build the full request URL (direct or proxy mode). */
function buildUrl(filters: MlsSearchFilters): { url: string; headers: Record<string, string> } {
  const params = buildQueryParams(filters);
  const searchStr = new URLSearchParams(params).toString();

  if (mlsConfig.useProxy) {
    return {
      url: `${mlsConfig.proxyUrl}?${searchStr}`,
      headers: { 'Content-Type': 'application/json' },
    };
  }

  const base = mlsConfig.baseUrl.replace(/\/$/, '');
  const url = `${base}/Property?${searchStr}`;

  let headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (mlsConfig.authMode === 'header') {
    headers['Authorization'] = `Bearer ${mlsConfig.apiKey}`;
  } else {
    // query mode — append apiKey to URL
    const separator = searchStr ? '&' : '';
    return {
      url: `${url}${separator}apiKey=${encodeURIComponent(mlsConfig.apiKey)}`,
      headers,
    };
  }

  return { url, headers };
}

/**
 * Search listings from the MLS API.
 * Returns an empty result set (not an error) when the API is not configured.
 */
export async function searchListings(filters: MlsSearchFilters): Promise<MlsSearchResult> {
  if (!isMlsConfigured) {
    return { listings: [], total: 0, page: 1, pageSize: mlsConfig.pageSize, hasMore: false };
  }

  const { url, headers } = buildUrl(filters);

  const response = await fetch(url, { headers });

  if (!response.ok) {
    const body = await response.text().catch(() => '');
    throw new Error(`MLS API error: ${response.status} ${response.statusText}. ${body.slice(0, 200)}`);
  }

  const data = await response.json();

  // RESO OData responses use @odata.context, value; some APIs use value or listings
  const rawListings = (data.value ?? data.listings ?? data.properties ?? []) as Record<string, unknown>[];
  const total = (data['@odata.count'] ?? data.total ?? data.totalCount ?? rawListings.length) as number;

  const pageSize = filters.pageSize ?? mlsConfig.pageSize;
  const page = filters.page ?? 1;

  return {
    listings: rawListings.map(mapListing),
    total,
    page,
    pageSize,
    hasMore: page * pageSize < total,
  };
}

/** Fetch a single listing by its key/id. */
export async function getListing(id: string): Promise<MlsListing | null> {
  if (!isMlsConfigured) return null;

  const base = mlsConfig.baseUrl.replace(/\/$/, '');
  let url: string;
  let headers: Record<string, string> = { 'Content-Type': 'application/json' };

  if (mlsConfig.useProxy) {
    url = `${mlsConfig.proxyUrl}/${encodeURIComponent(id)}`;
  } else {
    url = `${base}/Property('${encodeURIComponent(id)}')?$expand=Media`;
    if (mlsConfig.authMode === 'header') {
      headers['Authorization'] = `Bearer ${mlsConfig.apiKey}`;
    } else {
      url += `&apiKey=${encodeURIComponent(mlsConfig.apiKey)}`;
    }
  }

  const response = await fetch(url, { headers });
  if (!response.ok) return null;

  const data = await response.json();
  const raw = (data.value?.[0] ?? data) as Record<string, unknown>;
  return raw ? mapListing(raw) : null;
}
