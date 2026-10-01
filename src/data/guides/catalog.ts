/**
 * Lightweight guide catalog: categories, titles, summaries and URLs.
 *
 * The router, SEO, navbar and Resources page only need this much, so it ships
 * in the main bundle. Full guide text lives in the per-guide files and is only
 * loaded with the guide page (see ./index.ts). When adding or retitling a
 * guide, update its entry here too — index.ts warns in dev if the two disagree.
 */
import type { CategoryId, ImageSlot } from './types';
import imageManifest from './images.json';

export type { CategoryId } from './types';

export type GuideMeta = {
  slug: string;
  number: string;
  category: CategoryId;
  title: string;
  summary: string;
};

export const RESOURCES_PATH = '/resources';

/** Order here is the order categories appear on the Resources page. */
export const guideCategories: { id: CategoryId; title: string; blurb: string }[] = [
  {
    id: 'relocation',
    title: 'Relocation Guides',
    blurb: 'Moving to Portland or to Oregon from out of state — what to know before you choose where to land.',
  },
  {
    id: 'area-overviews',
    title: 'Area Overviews',
    blurb: 'Quick-view comparisons: several neighborhoods or cities side by side.',
  },
  {
    id: 'portland-neighborhoods',
    title: 'Portland Neighborhoods',
    blurb: 'Deep dives on individual neighborhoods inside the City of Portland.',
  },
  {
    id: 'washington-county',
    title: 'Washington County',
    blurb: 'Unincorporated westside communities with Portland mailing addresses and Beaverton schools.',
  },
  {
    id: 'clackamas-county',
    title: 'Clackamas County',
    blurb: 'Lake Oswego, West Linn and the cities south of Portland along the Willamette.',
  },
];

export const catalog: GuideMeta[] = [
  {
    slug: 'relocating-to-portland',
    number: '01',
    category: 'relocation',
    title: 'Relocating to Portland',
    summary:
      'An overview of Portland, Oregon, for buyers relocating to the city: its neighborhoods, housing market, cost of living and daily life.',
  },
  {
    slug: 'relocating-to-oregon',
    number: '02',
    category: 'relocation',
    title: 'Relocating to Oregon',
    summary:
      "An overview of Oregon's regions, taxes, climate and housing costs, and the thirty-day deadlines that apply to new residents after arrival.",
  },
  {
    slug: 'southwest-portland-at-a-glance',
    number: '03',
    category: 'area-overviews',
    title: 'Southwest Portland at a Glance',
    summary:
      'An overview of twenty-five Southwest Portland neighborhoods, grouped by character: hilltop and view, village and walkable, wooded residential, and close-in urban.',
  },
  {
    slug: 'goose-hollow-maplewood-garden-home-west-slope',
    number: '04',
    category: 'area-overviews',
    title: 'Four Neighborhoods, Two Jurisdictions',
    summary:
      'Goose Hollow, Maplewood, Garden Home and West Slope lie within about six miles of one another, split by the Multnomah–Washington county line into two jurisdictions.',
  },
  {
    slug: 'lake-oswego-beaverton-highland',
    number: '05',
    category: 'area-overviews',
    title: 'Lake Oswego, Beaverton & Highland',
    summary:
      'Lake Oswego and Beaverton are separate cities with their own school districts; Highland, also marketed as Hyland Hills, is a wooded residential neighborhood inside Beaverton.',
  },
  {
    slug: 'multnomah-village',
    number: '06',
    category: 'portland-neighborhoods',
    title: 'Multnomah Village',
    summary:
      "The commercial center of Southwest Portland's Multnomah neighborhood: four blocks of early-1900s storefronts on SW Capitol Highway, surrounded by residential streets and next to Gabriel Park.",
  },
  {
    slug: 'goose-hollow',
    number: '07',
    category: 'portland-neighborhoods',
    title: 'Goose Hollow',
    summary:
      'Southwest Portland neighborhood between downtown and the West Hills, on a filled-in creek gulch, with Providence Park and housing from 1890s King’s Hill mansions to recent towers.',
  },
  {
    slug: 'council-crest',
    number: '08',
    category: 'portland-neighborhoods',
    title: 'Council Crest',
    summary:
      "A summit, park and hillside residential area in Portland's Southwest Hills, site of an amusement park for twenty-two years, with views of five Cascade peaks on a clear day.",
  },
  {
    slug: 'bridlemile',
    number: '09',
    category: 'portland-neighborhoods',
    title: 'Bridlemile',
    summary:
      'Bridlemile is a mostly residential postwar neighborhood on the west slope above Fanno Creek in Southwest Portland, with two city parks and land in three jurisdictions.',
  },
  {
    slug: 'sylvan-highlands',
    number: '10',
    category: 'portland-neighborhoods',
    title: 'Sylvan Highlands',
    summary:
      'Sylvan-Highlands is a steep, wooded neighborhood on the west face of the hills around the Sylvan interchange, with forty-seven percent tree cover and US 26 through the middle.',
  },
  {
    slug: 'forest-heights',
    number: '11',
    category: 'portland-neighborhoods',
    title: 'Forest Heights',
    summary:
      'Forest Heights is a 601-acre master-planned hillside development inside Portland’s Northwest Heights neighborhood, with its own homeowners association, trails and private shuttle.',
  },
  {
    slug: 'west-slope',
    number: '12',
    category: 'washington-county',
    title: 'West Slope',
    summary:
      'An unincorporated area of Washington County, about a square mile and a half between the Sunset Highway and Beaverton-Hillsdale Highway, served by special districts rather than a city.',
  },
  {
    slug: 'raleigh-hills',
    number: '13',
    category: 'washington-county',
    title: 'Raleigh Hills',
    summary:
      'An unincorporated commercial area of Washington County at the junction of Beaverton-Hillsdale Highway and Scholls Ferry Road, where the county is drawing a town center boundary.',
  },
  {
    slug: 'lake-oswego',
    number: '14',
    category: 'clackamas-county',
    title: 'Lake Oswego',
    summary:
      'A city about seven miles south of Portland, built around a privately controlled lake of roughly 415 acres, with a State Street downtown and revival and modernist housing.',
  },
  {
    slug: 'west-linn',
    number: '15',
    category: 'clackamas-county',
    title: 'West Linn',
    summary:
      'A city on bluffs above the Willamette, formed from separate older neighborhoods by annexation, where landslide and river regulations constrain lots more than zoning does.',
  },
];

const images = imageManifest as Record<string, { slots: Record<string, ImageSlot> }>;

type GuideRef = Pick<GuideMeta, 'slug' | 'number' | 'category'>;

export const guideUrl = (g: GuideRef) => `${RESOURCES_PATH}/${g.category}/${g.slug}`;
export const categoryUrl = (id: CategoryId) => `${RESOURCES_PATH}/${id}`;
export const pdfUrl = (g: GuideRef) => `/guides/pdfs/${g.number}-${g.slug}.pdf`;

export const getCategory = (id: string) => guideCategories.find((c) => c.id === id);
export const getMeta = (slug: string) => catalog.find((g) => g.slug === slug);
export const catalogIn = (id: CategoryId) => catalog.filter((g) => g.category === id);

export const slotFor = (guideSlug: string, slot: string): ImageSlot | null =>
  images[guideSlug]?.slots?.[slot] ?? null;

/** Card photo: the first filled slot (slots are listed in page order, hero first). */
export const coverFor = (slug: string): string | null =>
  Object.values(images[slug]?.slots ?? {}).find((s) => s.src)?.src ?? null;

/**
 * Parses a /resources/... path.
 *   /resources                          → { kind: 'index' }
 *   /resources/<category>               → { kind: 'category', category }
 *   /resources/<category>/<guide>       → { kind: 'guide', guide }
 * Returns null for anything that isn't a known category or guide.
 */
export function matchResourceRoute(route: string):
  | { kind: 'index' }
  | { kind: 'category'; category: CategoryId }
  | { kind: 'guide'; guide: GuideMeta }
  | null {
  if (route === RESOURCES_PATH) return { kind: 'index' };
  if (!route.startsWith(`${RESOURCES_PATH}/`)) return null;
  const [categoryId, slug, ...rest] = route.slice(RESOURCES_PATH.length + 1).split('/');
  if (rest.length) return null;
  const category = getCategory(categoryId);
  if (!category) return null;
  if (!slug) return { kind: 'category', category: category.id };
  const guide = getMeta(slug);
  return guide && guide.category === category.id ? { kind: 'guide', guide } : null;
}

/** Per-page metadata for guide and category routes (see useSEO). */
export function resourceRouteSeo(route: string) {
  const m = matchResourceRoute(route);
  if (!m || m.kind === 'index') return undefined;
  if (m.kind === 'category') {
    const c = getCategory(m.category)!;
    return {
      path: categoryUrl(c.id),
      title: `${c.title} | Portland Real Estate Guides | Catherine Redmond`,
      description: c.blurb,
    };
  }
  return {
    path: guideUrl(m.guide),
    title: `${m.guide.title} Guide | Catherine Redmond, Engel & Völkers`,
    description: m.guide.summary,
  };
}
