// Drop new or replacement photos into guide image slots.
//
//   npm run guide-photos -- <folder> [--guide <slug>] [--dry-run]
//
// Matching (forgiving, like the PDF project's place_photos.py):
//   <folder>/<guide-slug>/<slot-id>.jpg     → that guide's slot
//   <folder>/<slot-id>.jpg  --guide <slug>  → that guide's slot
//   <folder>/<slot-id>.jpg                  → the slot, if the id exists in only one guide
// "02 - Gabriel_Park (1).JPG", "gabriel park final.png" all normalise to "gabriel-park".
//
// Photos are copied to public/guides/images/<guide>/<slot>.<ext> and images.json is updated.
// The page crops to each slot's aspect ratio with CSS, so any reasonably sized photo works,
// but the script warns when one is smaller than the slot's print minimum or far off-aspect.
import fs from 'node:fs';
import path from 'node:path';

const MANIFEST = 'src/data/guides/images.json';
const EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);
const args = process.argv.slice(2);
const dry = args.includes('--dry-run');
const gi = args.indexOf('--guide');
const onlyGuide = gi >= 0 ? args[gi + 1] : null;
const folder = args.find((a, i) => !a.startsWith('--') && args[i - 1] !== '--guide');
if (!folder || !fs.existsSync(folder)) {
  console.log('Usage: npm run guide-photos -- <folder> [--guide <slug>] [--dry-run]');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
if (onlyGuide && !manifest[onlyGuide]) {
  console.log(`Unknown guide "${onlyGuide}". Guides: ${Object.keys(manifest).join(', ')}`);
  process.exit(1);
}

function normalize(name) {
  let s = path.parse(name).name.toLowerCase();
  s = s.replace(/^[\s\d]+[-_.)\]]+\s*/, '').replace(/\(\s*\d+\s*\)\s*$/, '');
  s = s.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const stop = /-(copy|final|edit|edited|retouched|small|large|web|hires|hi-res|orig|original)(?=-|$)/g;
  let prev;
  do { prev = s; s = s.replace(stop, ''); } while (s !== prev);
  return s.replace(/^-|-$/g, '');
}

// Width/height from the file header (JPEG, PNG, WebP) — no image library needed.
function dimensions(file) {
  const b = fs.readFileSync(file);
  if (b[0] === 0x89 && b.toString('ascii', 1, 4) === 'PNG') return [b.readUInt32BE(16), b.readUInt32BE(20)];
  if (b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') {
    const fmt = b.toString('ascii', 12, 16);
    if (fmt === 'VP8X') return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)];
    if (fmt === 'VP8 ') return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
    if (fmt === 'VP8L') { const n = b.readUInt32LE(21); return [1 + (n & 0x3fff), 1 + ((n >> 14) & 0x3fff)]; }
  }
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i < b.length) {
      if (b[i] !== 0xff) { i++; continue; }
      const m = b[i + 1];
      if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m)) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)];
      i += 2 + b.readUInt16BE(i + 2);
    }
  }
  return null;
}

const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (EXTS.has(path.extname(e.name).toLowerCase()) && !e.name.startsWith('.')) files.push(p);
  }
})(folder);

let placed = 0;
for (const file of files) {
  const token = normalize(path.basename(file));
  const parent = path.basename(path.dirname(file));
  const guideHint = onlyGuide || (manifest[parent] ? parent : null);
  const candidates = Object.entries(manifest)
    .filter(([slug]) => !guideHint || slug === guideHint)
    .filter(([, g]) => g.slots[token])
    .map(([slug]) => slug);

  if (candidates.length === 0) { console.log(`  ?  ${file} — no slot named "${token}"${guideHint ? ` in ${guideHint}` : ''}`); continue; }
  if (candidates.length > 1) {
    console.log(`  ?  ${file} — "${token}" exists in ${candidates.join(', ')}; put it in a folder named after the guide or pass --guide`);
    continue;
  }
  const slug = candidates[0];
  const slot = manifest[slug].slots[token];
  const ext = path.extname(file).toLowerCase().replace('.jpeg', '.jpg');
  const dest = `public/guides/images/${slug}/${token}${ext}`;

  const dims = dimensions(file);
  const notes = [];
  if (dims) {
    const [w, h] = dims;
    const [mw, mh] = (slot.minPx || '').split('×').map(Number);
    if (mw && (w < mw || h < mh)) notes.push(`smaller than print minimum ${slot.minPx} (fine for web, soft in print)`);
    const off = Math.abs(w / h - slot.aspect) / slot.aspect;
    if (off > 0.25) notes.push(`aspect ${(w / h).toFixed(2)}:1 vs slot ${slot.aspect}:1 — page will crop noticeably`);
  }
  console.log(`  ✓  ${slug}/${token}  ←  ${file}${dims ? `  (${dims.join('×')})` : ''}`);
  notes.forEach((n) => console.log(`       note: ${n}`));

  if (!dry) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    // Remove an older copy with a different extension so only one file backs the slot.
    for (const e of EXTS) {
      const old = `public/guides/images/${slug}/${token}${e}`;
      if (old !== dest && fs.existsSync(old)) fs.unlinkSync(old);
    }
    fs.copyFileSync(file, dest);
    slot.src = `/guides/images/${slug}/${token}${ext}`;
  }
  placed++;
}

if (!dry) fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
const all = Object.values(manifest).flatMap((g) => Object.entries(g.slots));
const empty = Object.entries(manifest).flatMap(([slug, g]) => Object.entries(g.slots).filter(([, s]) => !s.src).map(([id]) => `${slug}/${id}`));
console.log(`\n${dry ? '[dry run] ' : ''}${placed} photo(s) placed · ${all.length - empty.length}/${all.length} slots filled`);
if (empty.length) console.log(`Still empty:\n  ${empty.join('\n  ')}`);
console.log(dry ? '' : 'Refresh the dev server, or rebuild with `npm run build`.');
