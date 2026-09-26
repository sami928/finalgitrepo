import type { Guide } from './types';

const guide: Guide = {
  slug: 'west-slope',
  number: '12',
  category: 'washington-county',
  title: 'West Slope',
  eyebrow: 'Unincorporated Washington County · Neighborhood Guide',
  summary:
    'A square mile and a half of unincorporated Washington County between the Sunset Highway and Beaverton-Hillsdale, governed by a stack of independent special districts rather than a city.',
  lede:
    'The mail says Portland. The schools say Beaverton. The jurisdiction is neither. West Slope is unincorporated Washington County — a square mile and a half between the Sunset Highway and Beaverton-Hillsdale, governed by a county board and a stack of independent districts, each with its own elected officers and its own levy. There is no city hall.',
  hero: { slot: 'west-slope-aerial', caption: 'West Slope · between the Sunset Highway and Beaverton-Hillsdale' },
  stats: [
    { value: '1922', label: 'The West Slope Water District was formed' },
    { value: '1.62 sq mi', label: 'Area, with a 2020 population of 7,223' },
    { value: '68.8%', label: 'Of plan-area acreage zoned R-5, detached single-family' },
    { value: '$719,689', label: 'Median sale, ZIP 97225, August 2026' },
  ],
  statsNote:
    'The price is Redfin\'s August 2026 median for ZIP 97225 across 93 sales — used because it has the volume, though the ZIP also covers Raleigh Hills and part of Cedar Hills. Redfin\'s West Slope figure rests on four sales and is not usable. Ask for an address-level analysis.',
  sections: [
    {
      id: 'history',
      heading: 'How it came to be here',
      blocks: [
        {
          type: 'p',
          text: 'The districts came before the houses. Neighbours formed the West Slope Water District as an Oregon municipal corporation in 1922, and it still buys and distributes water today under its own elected board. A rural fire protection district followed in 1949, and in 1950 the Century Club for Women founded a community library in donated bank space.',
        },
        {
          type: 'p',
          text: 'Postwar subdivision filled in the ground between them, and the special districts consolidated as it did — the fire district merged with Beaverton Rural and Cedar Mill in 1972, becoming what is now Tualatin Valley Fire & Rescue. What never arrived was a city, and that is still the defining fact about buying here.',
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
      heading: 'What to check before you buy here',
      blocks: [
        {
          type: 'list',
          items: [
            { title: 'Which plan and subarea apply.', text: 'West Slope has no community plan of its own; it is split between two county plans. Subarea assignment drives density and any Area of Special Concern overlay — several cover forested steep slopes.' },
            { title: 'Whether the lot is inside THPRD.', text: 'Not every Washington County property is. Outside the park district you pay non-resident rates, and voluntary annexation opens only in the fall of even-numbered years.' },
            { title: 'Septic or sewer.', text: 'Clean Water Services requires connection when a property within 300 feet of a line redevelops or an old system fails. Order a county Existing System Evaluation before closing.' },
            { title: 'The tax code stack, and annexation.', text: 'Pull the parcel\'s tax code area and confirm which districts it pays into. Under 2016 state law a city must annex on a unanimous owner petition, without an election.' },
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
          text: 'Low-density and largely built out. Just under 69 percent of plan-area acreage carries the county\'s R-5 designation — detached single-family, four to five units an acre, on a 5,500 square foot minimum lot — and the county describes the area as largely developed with relatively few vacant parcels left.',
        },
        {
          type: 'p',
          text: 'Census figures put owner occupancy at 57.6 percent and the median value of owner-occupied units at $755,300, from the 2020–2024 five-year estimates. That is a self-reported value across five years, not a sale price, so it sits well behind the market and should not be read against a closing figure.',
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
          text: 'US 26 forms the northern edge and Beaverton-Hillsdale Highway the southern, with SW Canyon Road through the middle. Sunset Transit Center sits just north across the highway — Blue and Red line light rail, 622 parking spaces, and TriMet\'s busiest park-and-ride.',
        },
        { type: 'image', slot: 'sunset-transit', caption: 'Sunset Transit Center, or US 26 at the Canyon Road interchange' },
        {
          type: 'p',
          text: 'For buses, line 54 runs Beaverton Transit Center to downtown along Beaverton-Hillsdale. The published weekday timetable gives about 25 minutes from Beaverton-Hillsdale and Oleson to SW 6th and Salmon in the morning peak, and 24 midday. Bikeways in this part of the county are limited.',
        },
      ],
    },
    {
      id: 'parks-daily-life',
      heading: 'Parks and daily life',
      blocks: [
        {
          type: 'p',
          text: 'Raleigh Park and the Raleigh Swim Center sit at 3500 SW 78th, run by the Tualatin Hills Park & Recreation District — a six-lane outdoor pool with a slide, plus playground, tennis, pickleball, volleyball, horseshoes, a soccer field and trails. The pool is seasonal and currently closed until summer 2027.',
        },
        { type: 'image', slot: 'raleigh-park', caption: 'Raleigh Park — field, trail or the swim centre' },
        {
          type: 'p',
          text: 'Hall Creek through the park was reshaped in summer 2024 and replanted the following spring, with a loop path added in summer 2025. The West Slope Community Library at 3678 SW 78th has been run by a nonprofit association rather than the county since July 2025. Shops are along Canyon Road and Beaverton-Hillsdale.',
        },
      ],
    },
  ],
};

export default guide;
