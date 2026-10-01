import type { Guide } from './types';

const guide: Guide = {
  slug: 'west-slope',
  number: '12',
  category: 'washington-county',
  title: 'West Slope',
  eyebrow: 'Unincorporated Washington County · Neighborhood Guide',
  summary:
    'An unincorporated area of Washington County, about a square mile and a half between the Sunset Highway and Beaverton-Hillsdale Highway, served by special districts rather than a city.',
  lede:
    'West Slope is an unincorporated area of Washington County covering about a square mile and a half between the Sunset Highway and Beaverton-Hillsdale Highway. It has Portland mailing addresses and Beaverton schools, and is governed by the county board and several independent districts, each with its own elected officers and levy; there is no city government.',
  hero: { slot: 'west-slope-aerial', caption: 'West Slope · between the Sunset Highway and Beaverton-Hillsdale' },
  stats: [
    { value: '1922', label: 'West Slope Water District formed' },
    { value: '1.62 sq mi', label: 'Area, with a 2020 population of 7,223' },
    { value: '68.8%', label: 'Of plan-area acreage zoned R-5, detached single-family' },
    { value: '$719,689', label: 'Median sale, ZIP 97225, August 2026' },
  ],
  statsNote:
    'The price is Redfin\'s August 2026 median for ZIP 97225 across 93 sales. The ZIP also covers Raleigh Hills and part of Cedar Hills; Redfin\'s West Slope figure rests on four sales and is not usable. Values should be verified for a specific address.',
  sections: [
    {
      id: 'history',
      heading: 'History',
      blocks: [
        {
          type: 'p',
          text: 'The special districts predate most of the housing. Residents formed the West Slope Water District as an Oregon municipal corporation in 1922; it still buys and distributes water under its own elected board. A rural fire protection district followed in 1949, and in 1950 the Century Club for Women founded a community library in donated bank space.',
        },
        {
          type: 'p',
          text: 'Postwar subdivision filled in the area, and the districts consolidated: in 1972 the fire district merged with Beaverton Rural and Cedar Mill, forming what is now Tualatin Valley Fire & Rescue. The area was never incorporated as a city.',
        },
        {
          type: 'timeline',
          items: [
            { year: '1922', text: 'The West Slope Water District is formed as an Oregon municipal corporation.' },
            { year: '1949', text: 'The West Slope Rural Fire Protection District is created.' },
            { year: '1950', text: 'The Century Club for Women founds a community library in donated bank space.' },
            { year: '1972', text: 'The fire district merges with Beaverton Rural and Cedar Mill, becoming today\'s Tualatin Valley Fire & Rescue.' },
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
            { title: 'Plan and subarea.', text: 'West Slope has no community plan of its own; it is split between two county plans. Subarea assignment sets density and any Area of Special Concern overlay; several overlays cover forested steep slopes.' },
            { title: 'Park district boundary.', text: 'Not every Washington County property is inside THPRD. Properties outside it pay non-resident rates, and voluntary annexation opens only in the fall of even-numbered years.' },
            { title: 'Septic or sewer.', text: 'Clean Water Services requires connection when a property within 300 feet of a line redevelops or an old system fails. A county Existing System Evaluation should be ordered before closing.' },
            { title: 'Tax code area and annexation.', text: 'Check the parcel\'s tax code area to confirm which districts it pays into. Under 2016 state law a city must annex on a unanimous owner petition, without an election.' },
          ],
        },
      ],
    },
    {
      id: 'housing',
      heading: 'Housing',
      blocks: [
        {
          type: 'p',
          text: 'Housing is low-density and largely built out. Just under 69 percent of plan-area acreage carries the county\'s R-5 designation (detached single-family, four to five units an acre, 5,500 square foot minimum lot), and the county describes the area as largely developed with relatively few vacant parcels.',
        },
        {
          type: 'p',
          text: 'Census 2020–2024 five-year estimates put owner occupancy at 57.6 percent and the median value of owner-occupied units at $755,300. This is a self-reported value across five years, not a sale price, and should not be compared with closing figures.',
        },
        { type: 'image', slot: 'west-slope-street', caption: 'A single-family street on a generous lot' },
      ],
    },
    {
      id: 'getting-around',
      heading: 'Getting around',
      blocks: [
        {
          type: 'p',
          text: 'US 26 forms the northern edge and Beaverton-Hillsdale Highway the southern, with SW Canyon Road through the middle. Sunset Transit Center is just north across the highway, with Blue and Red line light rail and 622 parking spaces; it is TriMet\'s busiest park-and-ride.',
        },
        { type: 'image', slot: 'sunset-transit', caption: 'Sunset Transit Center, or US 26 at the Canyon Road interchange' },
        {
          type: 'p',
          text: 'Bus line 54 runs from Beaverton Transit Center to downtown along Beaverton-Hillsdale. The published weekday timetable gives about 25 minutes from Beaverton-Hillsdale and Oleson to SW 6th and Salmon in the morning peak, and 24 midday. Bikeways in this part of the county are limited.',
        },
      ],
    },
    {
      id: 'parks-daily-life',
      heading: 'Parks and amenities',
      blocks: [
        {
          type: 'p',
          text: 'Raleigh Park and the Raleigh Swim Center, at 3500 SW 78th, are run by the Tualatin Hills Park & Recreation District. Facilities include a six-lane outdoor pool with a slide, a playground, tennis, pickleball, volleyball, horseshoes, a soccer field and trails. The pool is seasonal and closed until summer 2027.',
        },
        { type: 'image', slot: 'raleigh-park', caption: 'Raleigh Park — field, trail or the swim center' },
        {
          type: 'p',
          text: 'Hall Creek through the park was reshaped in summer 2024 and replanted the following spring, and a loop path was added in summer 2025. The West Slope Community Library at 3678 SW 78th has been run by a nonprofit association rather than the county since July 2025. Shops are along Canyon Road and Beaverton-Hillsdale.',
        },
      ],
    },
  ],
};

export default guide;
