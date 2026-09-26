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
      'Neighborhoods, market insight, and everyday life in the City of Roses — prepared for buyers considering a move to the Pacific Northwest.',
  },
  {
    slug: 'relocating-to-oregon',
    number: '02',
    category: 'relocation',
    title: 'Relocating to Oregon',
    summary:
      'One state, several very different regions — what the taxes actually cost you, where the rain really falls, and the thirty-day clock that starts the day you arrive.',
  },
  {
    slug: 'southwest-portland-at-a-glance',
    number: '03',
    category: 'area-overviews',
    title: 'Southwest Portland at a Glance',
    summary:
      'Twenty-five Southwest Portland neighborhoods grouped by character rather than alphabetically, because that is how buyers actually choose.',
  },
  {
    slug: 'goose-hollow-maplewood-garden-home-west-slope',
    number: '04',
    category: 'area-overviews',
    title: 'Four Neighborhoods, Two Jurisdictions',
    summary:
      'Goose Hollow, Maplewood, Garden Home and West Slope sit within about six miles of one another, but the Multnomah–Washington county line splits them into two different jurisdictions.',
  },
  {
    slug: 'lake-oswego-beaverton-highland',
    number: '05',
    category: 'area-overviews',
    title: 'Lake Oswego, Beaverton & Highland',
    summary:
      'Lake Oswego and Beaverton are separate cities with their own school districts and character, while Highland — also sold as Hyland Hills — is a wooded residential neighborhood inside Beaverton.',
  },
  {
    slug: 'multnomah-village',
    number: '06',
    category: 'portland-neighborhoods',
    title: 'Multnomah Village',
    summary:
      'Four walkable blocks of century-old storefronts on SW Capitol Highway, wrapped in quiet residential streets and Gabriel Park.',
  },
  {
    slug: 'goose-hollow',
    number: '07',
    category: 'portland-neighborhoods',
    title: 'Goose Hollow',
    summary:
      'The most urban address in Southwest Portland — a filled-in creek gulch below a stadium that has stood on the same block since 1893, with housing running from 1890s King’s Hill mansions to towers built last decade.',
  },
  {
    slug: 'council-crest',
    number: '08',
    category: 'portland-neighborhoods',
    title: 'Council Crest',
    summary:
      "Portland's high ground and, for twenty-two years, its amusement park — a summit, a park, and a stretch of hillside streets in the Southwest Hills selling elevation and five Cascade peaks on a clear day.",
  },
  {
    slug: 'bridlemile',
    number: '09',
    category: 'portland-neighborhoods',
    title: 'Bridlemile',
    summary:
      'A bridle path that became a subdivision on the west slope above Fanno Creek — quiet, green and almost entirely residential, and split across three jurisdictions.',
  },
  {
    slug: 'sylvan-highlands',
    number: '10',
    category: 'portland-neighborhoods',
    title: 'Sylvan Highlands',
    summary:
      'A post office named for a Roman woodland god, a highway through the middle, and forty-seven percent tree cover on the west face of the hills around the Sylvan interchange.',
  },
  {
    slug: 'forest-heights',
    number: '11',
    category: 'portland-neighborhoods',
    title: 'Forest Heights',
    summary:
      'A 601-acre master-planned hillside development inside the Northwest Heights neighborhood, with its own homeowners association, private shuttle, and a layer of governance to understand before anything else.',
  },
  {
    slug: 'west-slope',
    number: '12',
    category: 'washington-county',
    title: 'West Slope',
    summary:
      'A square mile and a half of unincorporated Washington County between the Sunset Highway and Beaverton-Hillsdale, governed by a stack of independent special districts rather than a city.',
  },
  {
    slug: 'raleigh-hills',
    number: '13',
    category: 'washington-county',
    title: 'Raleigh Hills',
    summary:
      'The commercial junction of Beaverton-Hillsdale Highway and Scholls Ferry Road, unincorporated like West Slope and now the subject of a county town-centre boundary in progress.',
  },
  {
    slug: 'lake-oswego',
    number: '14',
    category: 'clackamas-county',
    title: 'Lake Oswego',
    summary:
      'A lake town built around 415 acres of privately controlled water, with a walkable State Street downtown and housing ranging from 1930s revival styles to Northwest Regional modernism.',
  },
  {
    slug: 'west-linn',
    number: '15',
    category: 'clackamas-county',
    title: 'West Linn',
    summary:
      'A city of separate old neighbourhoods stitched together by annexation and the freeway, on bluffs above the Willamette where river and landslide rules shape a lot more than zoning does.',
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
