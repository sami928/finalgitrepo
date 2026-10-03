import type { Guide } from './types';

const guide: Guide = {
  slug: 'sylvan-highlands',
  number: '10',
  category: 'portland-neighborhoods',
  title: 'Sylvan Highlands',
  eyebrow: 'Southwest Portland · Neighborhood Guide',
  summary:
    "A steep, wooded neighborhood on the west face of Portland's hills around the Sylvan interchange, with forty-seven percent tree cover and US 26 through it.",
  lede:
    'Sylvan-Highlands is a steep, wooded neighborhood on the west face of the hills around the Sylvan interchange, about three miles from downtown Portland through the Vista Ridge Tunnels. US 26 runs through it, tree cover is forty-seven percent, and it is named after a former post office; it is sometimes incorrectly called Sylvan Hills.',
  hero: { slot: 'sylvan-hillside', caption: 'The west face of the hills · Sylvan-Highlands above the Sunset Highway' },
  stats: [
    { value: '1890', label: 'Sylvan post office opened; closed 1906' },
    { value: '47%', label: 'Tree canopy cover' },
    { value: '1.26 sq mi', label: 'Area; 543 households in 2020' },
    { value: '1970', label: 'Westbound Vista Ridge Tunnel opened, a year after the eastbound' },
  ],
  statsNote:
    'No price figure is given. Redfin logged seven sales in August 2026 at a $780,000 median, while twelve active listings had a median asking price of $1.35 million. Seven sales are too few for a stable median. A twelve-month, address-level data pull is more reliable.',
  sections: [
    {
      id: 'history',
      heading: 'History',
      blocks: [
        {
          type: 'p',
          text: 'Nathan B. Jones settled along Tanner Creek in 1850 and founded a settlement he called Zion Town. When a post office opened in 1890, that name was already in use elsewhere in Oregon, so it was named Sylvan, after Silvanus, the Roman god of woodland. Jones was killed in a robbery in 1894, and the post office closed in 1906.',
        },
        {
          type: 'p',
          text: 'The area became a commuter neighborhood with the Vista Ridge Tunnels, which opened eastbound in 1969 and westbound in 1970. They replaced a two-way bore from 1920 and put downtown roughly three miles away. They are now the busiest tunnels in Oregon, and the neighborhood sits directly above the approach.',
        },
        {
          type: 'timeline',
          items: [
            { year: '1850', text: 'Nathan B. Jones settles along Tanner Creek and founds Zion Town.' },
            { year: '1890', text: 'A post office opens at the interchange and is named Sylvan, for the Roman woodland god Silvanus.' },
            { year: '1906', text: 'The Sylvan post office closes.' },
            { year: '1970', text: 'The westbound Vista Ridge Tunnel opens, a year after the eastbound bore.' },
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
            { title: 'Highway noise.', text: 'US 26 runs through the neighborhood and carries the busiest tunnel traffic in the state. Exposure varies sharply by parcel; checking the lot at rush hour is advisable.' },
            { title: 'Landslide hazard.', text: 'One storm in February 1996 set off hundreds of West Hills slides. Code 33.632 requires geotechnical reports on slopes averaging thirty percent or more.' },
            { title: 'Trees.', text: 'Canopy is forty-seven percent and overlays cover the hillside. A permit is needed to remove trees over twelve inches, or over six inches inside a conservation or protection overlay.' },
            { title: 'Street access.', text: 'Streets are narrow and often end without through access. Confirm public or private ownership, fire apparatus access, and any shared-driveway maintenance agreement.' },
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
          text: 'Housing was built across the whole twentieth century and into the twenty-first, with no dominant decade. The 1950s are the largest single cohort. Types include bungalows and Old Portland houses, Cape Cods, foursquares and newer condominiums. About three quarters of the stock is detached.',
        },
        {
          type: 'p',
          text: 'Lots are wooded and cut into the hillside, on narrow lanes that often end without through access. Listing material attributes a 1953 Northwest Regional house here to John Yeon; such attributions should be verified, as a listing description is not provenance.',
        },
        { type: 'image', slot: 'sylvan-street', caption: 'A narrow winding lane under Douglas firs' },
      ],
    },
    {
      id: 'getting-around',
      heading: 'Getting around',
      blocks: [
        {
          type: 'p',
          text: 'US 26 is the main route, with access at the Sylvan interchange at Skyline and Scholls Ferry. Downtown is reached east through the Vista Ridge Tunnels, three lanes each way, whose portals open in Goose Hollow about half a mile from the city center.',
        },
        {
          type: 'p',
          text: 'Bus service is limited. Lines 20 and 58 are cited as serving the neighborhood, but TriMet changed service across the system on 23 August 2026, so current stops and hours should be confirmed. There is no light rail.',
        },
        { type: 'image', slot: 'vista-ridge', caption: 'The Vista Ridge Tunnels or US 26 through the hills' },
      ],
    },
    {
      id: 'parks-daily-life',
      heading: 'Parks and amenities',
      blocks: [
        {
          type: 'p',
          text: 'The western portion of Washington Park is inside the neighborhood, including the Hoyt Arboretum (232 acres, more than a thousand species of trees and shrubs), the World Forestry Center and the Vietnam Veterans Memorial. The Oregon Zoo is within or immediately adjacent to the neighborhood.',
        },
        { type: 'image', slot: 'hoyt-arboretum', caption: 'Hoyt Arboretum or Washington Park under trees' },
        {
          type: 'p',
          text: 'Forest Park borders the neighborhood to the north, with 5,172 acres and more than eighty miles of trail, including the twenty-seven-mile Wildwood Trail. Everyday shopping is at the interchange or requires a drive. Portland Fire Station 16 on SW Skyline hosts the neighborhood association’s meetings every other month.',
        },
      ],
    },
  ],
};

export default guide;
