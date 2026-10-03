/**
 * Content model for the neighborhood & relocation guides.
 *
 * Each guide in this folder was transcribed from Catherine's printable PDF
 * (the PDFs themselves live in public/guides/pdfs/). Prose is kept verbatim;
 * the contact card and compliance footer are rendered by the page, not stored
 * per guide.
 */

export type CategoryId =
  | 'relocation'
  | 'area-overviews'
  | 'portland-neighborhoods'
  | 'washington-county'
  | 'clackamas-county';

export type Stat = { value: string; label: string };

export type ListItem = string | { title?: string; text: string };

export type Card = {
  id?: string;
  title: string;
  tag?: string;
  text: string;
  /** Image slot id from images.json. */
  image?: string;
  facts?: { label: string; value: string }[];
  href?: string;
};

export type Block =
  | { type: 'p'; text: string }
  | { type: 'list'; items: ListItem[] }
  | { type: 'image'; slot: string; caption?: string }
  | { type: 'timeline'; items: { year: string; text: string }[] }
  | { type: 'stats'; items: Stat[]; note?: string }
  | { type: 'cards'; columns?: 2 | 3; items: Card[] }
  | { type: 'table'; columns: string[]; rows: string[][]; note?: string }
  | { type: 'callout'; title?: string; text: string }
  | { type: 'steps'; items: { title?: string; text: string }[] };

export type Section = {
  /** Anchor id, unique within the guide. */
  id: string;
  /** Small label above the heading (a page or group name from the PDF). */
  kicker?: string;
  heading: string;
  blocks: Block[];
};

export type Guide = {
  slug: string;
  /** Two-digit guide number; also the PDF filename prefix. */
  number: string;
  category: CategoryId;
  title: string;
  eyebrow: string;
  /** One sentence, used on cards and as the meta description. */
  summary: string;
  lede?: string;
  hero: { slot: string; caption?: string } | null;
  stats?: Stat[];
  statsNote?: string;
  sections: Section[];
  /** Guide-specific data notes from the PDF footer. */
  disclaimer?: string;
};

/** One photo position. `src` is null until a photo is supplied. */
export type ImageSlot = {
  aspect: number;
  minPx: string;
  subject: string;
  src: string | null;
};
