import type { Guide } from './types';

const guide: Guide = {
  slug: 'bridlemile',
  number: '09',
  category: 'portland-neighborhoods',
  title: 'Bridlemile',
  eyebrow: 'Southwest Portland · Neighborhood Guide',
  summary:
    'A mostly residential postwar neighborhood in Southwest Portland on the west slope above Fanno Creek, with two city parks and land in three jurisdictions.',
  lede:
    'Bridlemile is a mostly residential neighborhood on the west slope of the hills above Fanno Creek in Southwest Portland, made up largely of postwar houses on large lots, with two city parks and commercial uses along Beaverton-Hillsdale Highway. Its area is split across three jurisdictions.',
  hero: { slot: 'bridlemile-street', caption: 'A residential street off SW Hamilton · postwar houses under mature trees' },
  stats: [
    { value: '1850', label: "Albert Kelly's 640-acre claim covered most of it" },
    { value: '1958', label: 'Bridlemile Elementary opened on 4 September' },
    { value: '11,761 sq ft', label: 'Median lot, roughly a quarter acre' },
    { value: '$800,500', label: 'Median sale across 2025, on 76 sales' },
  ],
  statsNote:
    "The sale median is Portland Monthly's full-year 2025 figure across 76 sales, the only figure with enough volume to be stable; the publication does not disclose its data provider. Monthly medians here are based on single-digit sale counts. The lot figure is from a listings aggregator, not the assessor.",
  sections: [
    {
      id: 'history',
      heading: 'History',
      blocks: [
        {
          type: 'p',
          text: 'Albert Kelly, a circuit-riding Methodist preacher from Kentucky, filed a 640-acre donation land claim here in 1850. For the next century the area was pasture outside Portland.',
        },
        {
          type: 'p',
          text: 'The name comes from a bridle path roughly a mile long laid out in the mid-1940s by Dr. John H. Powell and Ruth M. Powell. Car-oriented subdivisions followed through the 1950s and 1960s, with SW Hamilton and SW Dosch as the main streets. In 1956 Kelly’s granddaughter sold the city nine acres on condition that the land carry her grandfather’s name. Bridlemile Elementary opened on 4 September 1958; before then, local children attended Robert Gray or Saint Thomas More.',
        },
        {
          type: 'timeline',
          items: [
            { year: '1850', text: 'Albert Kelly files a 640-acre donation land claim covering most of the present neighborhood.' },
            { year: '1955', text: 'Portland acquires Hamilton Park, 10.49 acres at SW 45th and Hamilton.' },
            { year: '1956', text: "Hildegarde Plummer Withers sells the city nine acres for $25,000, on condition it be named for her grandfather." },
            { year: '1958', text: 'Bridlemile Elementary opens on 4 September.' },
          ],
        },
      ],
    },
    {
      id: 'before-you-buy',
      heading: 'Before buying',
      blocks: [
        {
          type: 'list',
          items: [
            { title: 'Jurisdiction.', text: 'The city line runs through the neighborhood along SW Thomas Street. North of it is unincorporated Multnomah County, and two areas fall in Washington County. Confirm which jurisdiction a lot is in.' },
            { title: 'Sidewalks and cost-sharing.', text: 'Safe walking routes are limited. Frontage improvements are still commonly funded through local improvement districts, in which owners share the cost.' },
            { title: 'Sewer lateral.', text: 'A failed private lateral released sewage into Bridlemile Creek in March 2025, and city documents record sagging, cracked pipe nearby. A sewer scope before closing is advisable.' },
            { title: 'Creek and slope overlays.', text: 'The neighborhood is in the Fanno Creek headwaters. Creek-adjacent and steeper northern lots can carry environmental overlays or sit in a mapped landslide hazard area.' },
          ],
        },
      ],
    },
    {
      id: 'housing',
      kicker: 'Living Here · Housing, getting around, and daily life',
      heading: 'Housing',
      blocks: [
        {
          type: 'p',
          text: 'Most houses were built in the 1950s and 1960s: ranches, split-levels, Colonial Revivals and midcentury houses. Lots are large by Portland standards, with a median of about 11,761 square feet and a number running from half an acre to over an acre. The median year built is about 1966.',
        },
        {
          type: 'p',
          text: 'Commercial and multi-family uses are concentrated on the southern edge along Beaverton-Hillsdale Highway; the rest is almost entirely detached houses. The large lots make the area a target for infill, so the status of large neighboring parcels is worth checking. These figures come from a listings aggregator, not the assessor.',
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
          text: 'TriMet line 54 runs along the southern edge on Beaverton-Hillsdale Highway between Beaverton Transit Center and downtown, every fifteen minutes or better most of the day. Line 56 connects to Marquam Hill and OHSU, and a branch of line 51 ends at Hamilton and Dosch on the eastern side.',
        },
        {
          type: 'p',
          text: "Pedestrian infrastructure is limited. A thirty-foot sidewalk gap on SW Hamilton, on the approach to Bridlemile Elementary, went unrepaired for more than five years. Hamilton between 45th and 48th is a top-tier project in the city's Southwest In Motion plan, adopted in 2019; after funding fell short, the built scope was reduced to plastic curbs, speed bumps and two crossings.",
        },
        { type: 'image', slot: 'hamilton-street', caption: 'SW Hamilton Street, or Beaverton-Hillsdale Highway' },
      ],
    },
    {
      id: 'parks-daily-life',
      heading: 'Parks and amenities',
      blocks: [
        {
          type: 'p',
          text: "The neighborhood has two city-owned parks, both on land that came from one family. Hamilton Park covers 10.49 acres at SW 45th and Hamilton, with a playground, paved paths, a soccer field and a softball field. Albert Kelly Park covers 12.09 acres at SW Dosch and Mitchell, with a creek, unpaved walking paths and two old Oregon oaks.",
        },
        { type: 'image', slot: 'albert-kelly-park', caption: 'Albert Kelly Park or Hamilton Park — field, path or the oaks' },
        {
          type: 'p',
          text: "The Fanno Creek Natural Area is at SW 59th and Hamilton, and the Fanno Creek Greenway Trail runs through toward Washington County. There are few shops; commercial uses are on the Beaverton-Hillsdale Highway edge, and the nearest walkable business district is Hillsdale, to the southeast along the same corridor.",
        },
      ],
    },
  ],
};

export default guide;
