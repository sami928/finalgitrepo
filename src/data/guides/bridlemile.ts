import type { Guide } from './types';

const guide: Guide = {
  slug: 'bridlemile',
  number: '09',
  category: 'portland-neighborhoods',
  title: 'Bridlemile',
  eyebrow: 'Southwest Portland · Neighborhood Guide',
  summary:
    'A bridle path that became a subdivision on the west slope above Fanno Creek — quiet, green and almost entirely residential, and split across three jurisdictions.',
  lede:
    'A bridle path that became a subdivision, on the west slope of the hills above Fanno Creek. Bridlemile is quiet, green and almost entirely residential — postwar houses on generous lots, two substantial parks, and a commercial edge that belongs to the highway rather than the neighborhood. It is also split across three jurisdictions, which matters more than it sounds.',
  hero: { slot: 'bridlemile-street', caption: 'A residential street off SW Hamilton · postwar houses under mature trees' },
  stats: [
    { value: '1850', label: "Albert Kelly's 640-acre claim covered most of it" },
    { value: '1958', label: 'Bridlemile Elementary opened on 4 September' },
    { value: '11,761 sq ft', label: 'Median lot — roughly a quarter acre' },
    { value: '$800,500', label: 'Median sale across 2025, on 76 sales' },
  ],
  statsNote:
    "Portland Monthly's full-year 2025 median across 76 sales — the only figure with enough volume to be stable, though that publication does not disclose its data provider. Monthly medians here run on single-digit sale counts. The lot figure is from a listings aggregator, not the assessor.",
  sections: [
    {
      id: 'history',
      heading: 'How it came to be here',
      blocks: [
        {
          type: 'p',
          text: 'Albert Kelly, a circuit-riding Methodist preacher from Kentucky, filed a 640-acre donation land claim here in 1850, and for the next century this was pasture on the far side of the hills from Portland. The name came later, and from a plan: in the mid-1940s Dr. John H. Powell and Ruth M. Powell laid out a bridle path roughly a mile long — bridle, mile. The subdivisions arrived through the 1950s and 1960s, car-oriented from the start, with SW Hamilton and SW Dosch as the spines. Kelly’s granddaughter sold the city nine acres in 1956 on condition it carry her grandfather’s name. Bridlemile Elementary opened on 4 September 1958; before that, children here went to Robert Gray or Saint Thomas More.',
        },
        {
          type: 'timeline',
          items: [
            { year: '1850', text: 'Albert Kelly files a 640-acre donation land claim covering most of the present neighborhood.' },
            { year: '1955', text: 'Portland acquires Hamilton Park, 10.49 acres at SW 45th and Hamilton.' },
            { year: '1956', text: "Hildegarde Plummer Withers sells the city nine acres for $25,000, on condition it be named for her grandfather." },
            { year: '1958', text: 'Bridlemile Elementary opens its doors on 4 September.' },
          ],
        },
      ],
    },
    {
      id: 'before-you-buy',
      heading: 'What to check before you buy here',
      blocks: [
        {
          type: 'list',
          items: [
            { title: 'Which jurisdiction the lot is in.', text: 'The city line runs through the neighborhood along SW Thomas Street; north of it is unincorporated Multnomah County, and two areas fall in Washington County.' },
            { title: 'Sidewalks, and who pays.', text: 'Safe walking routes are limited, and frontage improvements are still commonly funded through local improvement districts in which owners share the cost.' },
            { title: 'The sewer lateral.', text: 'A failed private lateral released sewage into Bridlemile Creek in March 2025, and city documents record sagging, cracked pipe nearby. Scope it before closing.' },
            { title: 'Creek and slope overlays.', text: 'This is the Fanno Creek headwaters. Creek-adjacent and steeper northern lots can carry environmental overlays or sit in a mapped landslide hazard area.' },
          ],
        },
      ],
    },
    {
      id: 'housing',
      kicker: 'Living Here · Housing, getting around, and daily life',
      heading: 'The housing',
      blocks: [
        {
          type: 'p',
          text: 'Postwar, and consistent about it. The bulk of the stock went up in the 1950s and 1960s — ranches, split-levels, Colonial Revivals and midcentury houses on lots that are large by Portland standards, with a median around 11,761 square feet and a fair number running from half an acre to over an acre. The median year built is about 1966.',
        },
        {
          type: 'p',
          text: 'The southern edge along Beaverton-Hillsdale Highway carries the commercial and multi-family uses; north of it is detached houses almost throughout. Those lot sizes are the reason this area sees infill, so a large parcel next door is worth understanding before you buy. These figures come from a listings aggregator, not the assessor.',
        },
        { type: 'image', slot: 'bridlemile-house', caption: 'A postwar ranch or split-level on a large lot' },
      ],
    },
    {
      id: 'getting-around',
      heading: 'Getting around',
      blocks: [
        {
          type: 'p',
          text: 'Line 54 runs the southern edge along Beaverton-Hillsdale Highway between Beaverton Transit Center and downtown, on frequent service — every fifteen minutes or better most of the day. Line 56 connects to Marquam Hill and OHSU, and a branch of line 51 terminates at Hamilton and Dosch on the eastern side.',
        },
        {
          type: 'p',
          text: "Walking is the weak point. A thirty-foot sidewalk gap on SW Hamilton, on the approach to Bridlemile Elementary, went unrepaired for more than five years. Hamilton between 45th and 48th sits as a top-tier project in the city's Southwest In Motion plan, adopted in 2019, with the built scope cut back to plastic curbs, speed bumps and two crossings after funding fell short.",
        },
        { type: 'image', slot: 'hamilton-street', caption: 'SW Hamilton Street, or Beaverton-Hillsdale Highway' },
      ],
    },
    {
      id: 'parks-daily-life',
      heading: 'Parks and daily life',
      blocks: [
        {
          type: 'p',
          text: "Two substantial parks, both city-owned and both the legacy of one family's land. Hamilton Park runs to 10.49 acres at SW 45th and Hamilton, with a playground, paved paths, a soccer field and a softball field. Albert Kelly Park covers 12.09 acres at SW Dosch and Mitchell, with a creek through it, unpaved walking paths and two old Oregon oaks.",
        },
        { type: 'image', slot: 'albert-kelly-park', caption: 'Albert Kelly Park or Hamilton Park — field, path or the oaks' },
        {
          type: 'p',
          text: "The Fanno Creek Natural Area sits at SW 59th and Hamilton, and the Fanno Creek Greenway Trail runs through toward Washington County. Shops are the gap — commercial uses concentrate on the Beaverton-Hillsdale Highway edge, with Hillsdale's district the nearest walkable cluster, just southeast along the same corridor.",
        },
      ],
    },
  ],
};

export default guide;
