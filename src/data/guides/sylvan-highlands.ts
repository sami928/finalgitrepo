import type { Guide } from './types';

const guide: Guide = {
  slug: 'sylvan-highlands',
  number: '10',
  category: 'portland-neighborhoods',
  title: 'Sylvan Highlands',
  eyebrow: 'Southwest Portland · Neighborhood Guide',
  summary:
    'A post office named for a Roman woodland god, a highway through the middle, and forty-seven percent tree cover on the west face of the hills around the Sylvan interchange.',
  lede:
    'A post office named for a Roman woodland god, a highway through the middle, and forty-seven percent tree cover. Sylvan-Highlands sits on the west face of the hills around the Sylvan interchange — wooded, steep, and about three miles from downtown through the Vista Ridge Tunnels. It is sometimes called Sylvan Hills, which is not its name.',
  hero: { slot: 'sylvan-hillside', caption: 'The west face of the hills · Sylvan-Highlands above the Sunset Highway' },
  stats: [
    { value: '1890', label: 'The Sylvan post office opened; it closed in 1906' },
    { value: '47%', label: 'Tree canopy cover across the neighborhood' },
    { value: '1.26 sq mi', label: 'Neighborhood area, 543 households in 2020' },
    { value: '1970', label: 'The westbound Vista Ridge Tunnel opened, a year after the eastbound' },
  ],
  statsNote:
    'No price figure here, deliberately. Redfin logged seven sales in August 2026 at a $780,000 median while twelve active listings asked a median $1.35 million. Seven sales cannot produce a stable median, and that gap says so. Ask for a twelve-month, address-level pull.',
  sections: [
    {
      id: 'history',
      heading: 'How it came to be here',
      blocks: [
        {
          type: 'p',
          text: 'Nathan B. Jones settled along Tanner Creek in 1850 and founded a settlement he called Zion Town. When a post office opened here in 1890 the name was already taken elsewhere in Oregon, so it was given Sylvan instead — after Silvanus, the Roman god of woodland. Jones was murdered in a robbery in 1894, and the post office closed in 1906.',
        },
        {
          type: 'p',
          text: 'What made this a commuter address was engineering. The Vista Ridge Tunnels opened eastbound in 1969 and westbound in 1970, replacing a two-way bore from 1920 and putting downtown roughly three miles away through the hill. They are now the busiest tunnels in Oregon, and the neighborhood sits directly above the approach.',
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
      heading: 'What to check before you buy here',
      blocks: [
        {
          type: 'list',
          items: [
            { title: 'Highway noise.', text: 'US 26 runs through the neighborhood and carries the busiest tunnel traffic in the state. Exposure varies sharply by parcel — stand on the lot at rush hour.' },
            { title: 'Landslide hazard.', text: 'One storm in February 1996 set off hundreds of West Hills slides. Code 33.632 requires geotechnical reports on slopes averaging thirty percent or more.' },
            { title: 'Trees.', text: 'With canopy at forty-seven percent and overlays across the hillside, a permit is needed over twelve inches, and over six inside a conservation or protection overlay.' },
            { title: 'The lane itself.', text: 'Streets are narrow and often end without through access. Confirm public or private ownership, fire apparatus access, and any shared-driveway maintenance agreement.' },
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
          text: 'No dominant decade. The housing runs across the whole twentieth century and into this one, with the 1950s the largest single cohort and meaningful numbers from every decade before and since — bungalows and Old Portland houses alongside Cape Cods, foursquares and newer condominiums. About three quarters of the stock is detached.',
        },
        {
          type: 'p',
          text: 'Lots are wooded and cut into the hillside, on narrow lanes that often end without through access. A 1953 Northwest Regional house here is attributed to John Yeon in listing material, which is worth verifying rather than assuming — the neighborhood has architecture of record, but a portal description is not provenance.',
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
          text: 'US 26 is the spine, and the Sylvan interchange at Skyline and Scholls Ferry is the access point. Downtown is reached east through the Vista Ridge Tunnels, whose portals open in Goose Hollow about half a mile short of the city center — three lanes each way, and the busiest in the state.',
        },
        {
          type: 'p',
          text: 'Bus service is thinner than the location suggests. Lines 20 and 58 are cited as serving the neighborhood, but TriMet made service changes across the system on 23 August 2026, so confirm the current stop and span rather than relying on an older map. There is no light rail here.',
        },
        { type: 'image', slot: 'vista-ridge', caption: 'The Vista Ridge Tunnels or US 26 through the hills' },
      ],
    },
    {
      id: 'parks-daily-life',
      heading: 'Parks and daily life',
      blocks: [
        {
          type: 'p',
          text: 'The western portion of Washington Park falls inside the neighborhood, which brings the Hoyt Arboretum and its 232 acres and more than a thousand species of trees and shrubs, the World Forestry Center and the Vietnam Veterans Memorial. The Oregon Zoo sits within or immediately adjacent.',
        },
        { type: 'image', slot: 'hoyt-arboretum', caption: 'Hoyt Arboretum or Washington Park under trees' },
        {
          type: 'p',
          text: 'Forest Park borders to the north — 5,172 acres and more than eighty miles of trail, including the twenty-seven-mile Wildwood. Day-to-day shopping means the interchange or a drive. Portland Fire Station 16 on SW Skyline doubles as the neighborhood association’s meeting room, every other month.',
        },
      ],
    },
  ],
};

export default guide;
