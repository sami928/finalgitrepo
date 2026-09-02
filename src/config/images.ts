/**
 * Central image registry.
 *
 * Uses Vite's import.meta.glob to auto-detect any file in
 * src/assets/photos/ at build time. If a matching file exists, it's
 * used; otherwise we fall back to the stock Pexels photo.
 *
 * To replace an image, just drop a file into src/assets/photos/
 * with the matching name (see README.md in that folder).
 */

// Eagerly import all files in the photos folder so they're available
// at runtime (not lazy-loaded). Keys are like "./home-hero.jpg".
// Photos live in src/assets/photos/ — two levels up from this file (src/config/).
// Glob only image extensions so README.md and other non-image files are skipped.
const uploaded = import.meta.glob('../assets/photos/*.{jpg,jpeg,png,webp,gif,svg,avif}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

function lookup(name: string): string | undefined {
  // Glob keys look like "../assets/photos/agent-photo.jpg".
  // Match the final path segment (filename without extension).
  const target = `${name.toLowerCase()}.`;
  for (const key of Object.keys(uploaded)) {
    const filename = key.split('/').pop()!.toLowerCase();
    if (filename.startsWith(target)) {
      return uploaded[key];
    }
  }
  return undefined;
}

/** Return the uploaded file for a slot, or fall back to the stock URL. */
function slot(name: string, fallback: string): string {
  return lookup(name) ?? fallback;
}

// --- Hero / page images ---------------------------------------------------
const hero = (name: string, fb: string) => slot(name, fb);

export const images = {
  homeHero: hero('home-hero',
    'https://images.pexels.com/photos/38661701/pexels-photo-38661701.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1600'),
  agentPhoto: hero('agent-photo',
    'https://images.pexels.com/photos/8292786/pexels-photo-8292786.jpeg?auto=compress&cs=tinysrgb&h=900&w=700'),
  homeFamily: hero('home-family',
    'https://images.pexels.com/photos/7415055/pexels-photo-7415055.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200'),
  listingsHero: hero('listings-hero',
    'https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg?auto=compress&cs=tinysrgb&h=800&w=1600'),
  testimonialsHero: hero('testimonials-hero',
    'https://images.pexels.com/photos/7642037/pexels-photo-7642037.jpeg?auto=compress&cs=tinysrgb&h=800&w=1600'),
  resourcesHero: hero('resources-hero',
    'https://images.pexels.com/photos/710908/pexels-photo-710908.jpeg?auto=compress&cs=tinysrgb&h=800&w=1600'),
  contactHero: hero('contact-hero',
    'https://images.pexels.com/photos/38661693/pexels-photo-38661693.jpeg?auto=compress&cs=tinysrgb&h=800&w=1600'),
  homeValueHero: hero('home-value-hero',
    'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&h=800&w=1600'),
};

// --- Listing images -------------------------------------------------------
const listingFallbacks: Record<string, string> = {
  'pdx-001': 'https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  'pdx-002': 'https://images.pexels.com/photos/8082322/pexels-photo-8082322.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  'pdx-003': 'https://images.pexels.com/photos/5524164/pexels-photo-5524164.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  'pdx-004': 'https://images.pexels.com/photos/19119702/pexels-photo-19119702.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  'pdx-005': 'https://images.pexels.com/photos/12558848/pexels-photo-12558848.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  'pdx-006': 'https://images.pexels.com/photos/31737859/pexels-photo-31737859.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  'pdx-007': 'https://images.pexels.com/photos/27604148/pexels-photo-27604148.png?auto=compress&cs=tinysrgb&h=600&w=900',
  'pdx-008': 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
};

/** Returns the listing image — uploaded file or stock fallback. */
export function listingImage(id: string): string {
  const num = id.replace(/^pdx-0*/, '');
  return slot(`listing-${String(num).padStart(2, '0')}`, listingFallbacks[id] ?? listingFallbacks['pdx-001']);
}

// --- Testimonial avatars --------------------------------------------------
const avatarFallbacks: string[] = [
  'https://images.pexels.com/photos/7415055/pexels-photo-7415055.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
  'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
  'https://images.pexels.com/photos/7642037/pexels-photo-7642037.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
  'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
  'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
];

/** Returns the testimonial avatar — uploaded file or stock fallback. */
export function testimonialAvatar(index: number): string {
  const num = String(index + 1).padStart(2, '0');
  return slot(`testimonial-${num}`, avatarFallbacks[index] ?? avatarFallbacks[0]);
}
