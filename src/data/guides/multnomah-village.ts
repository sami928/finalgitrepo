import type { Guide } from './types';

const guide: Guide = {
  slug: 'multnomah-village',
  number: '06',
  category: 'portland-neighborhoods',
  title: 'Multnomah Village',
  eyebrow: 'Southwest Portland · Neighborhood Guide',
  summary:
    'Four walkable blocks of century-old storefronts on SW Capitol Highway, wrapped in quiet residential streets and Gabriel Park.',
  lede:
    'A railway stop that became a small town, and then found itself inside a city. Multnomah Village is the commercial heart of the Multnomah neighborhood — four walkable blocks of century-old storefronts on SW Capitol Highway, wrapped in quiet residential streets and one of the largest parks in Southwest Portland. People buy here for the village and stay for the trees.',
  hero: { slot: 'village-center', caption: 'SW Capitol Highway · the village blocks' },
  stats: [
    { value: '1907', label: 'Oregon Electric Railway opened the station' },
    { value: '1950', label: 'Annexed by the City of Portland' },
    { value: '89.7 acres', label: 'Gabriel Park, thirty of them left natural' },
    { value: '$574,964', label: 'Typical home value, down 2.4% year on year' },
  ],
  statsNote:
    'Home value is the Zillow Home Value Index for the Multnomah neighborhood as of 31 July 2026 — a modelled figure covering the whole neighborhood, not a median of closed sales in the village blocks. Ask for a like-for-like analysis before pricing against it.',
  sections: [
    {
      id: 'history',
      heading: 'How it came to be here',
      blocks: [
        {
          type: 'p',
          text: 'The Oregon Electric Railway put a station here in 1907 and named it Multnomah. A commercial strip grew up around the depot, thrived through the 1920s, and struggled through the Depression. Passenger service ended in 1933 and freight in 1945; the rail corridor became Multnomah Boulevard, which is why that road runs at such a confident diagonal through an otherwise irregular street grid.',
        },
        {
          type: 'p',
          text: 'Portland annexed the neighborhood on 7 November 1950. What saved the village from being flattened into another arterial was neglect — the old buildings simply stayed up. From the 1970s, antique dealers and independent shops moved into them, and the district has been trading on that continuity ever since. It marked a hundred years as a business district in 2009.',
        },
        {
          type: 'timeline',
          items: [
            { year: '1913', text: "Multnomah School and the Nelson Thomas building go up — both still standing, now the Arts Center and Marco's Cafe." },
            { year: '1978', text: "Annie Bloom's Books opens. Thinker Toys follows in 1994; both are still trading on Capitol Highway." },
            { year: '1982', text: 'The Multnomah Arts Center opens in the former elementary school after the district closed it in 1979.' },
            { year: '2023', text: 'A $30 million rebuild of SW Capitol Highway finishes, adding a mile of sidewalks where there were none.' },
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
            { title: 'School assignment.', text: 'Boundaries in this part of Southwest do not follow the neighborhood line, and they change. Verify for the specific address.' },
            { title: 'Sidewalks and stormwater.', text: 'The Capitol Highway work did not extend to every side street; many still have none, and drainage varies lot to lot.' },
            { title: 'Slope and trees.', text: 'Grading, retaining walls and mature-tree roots drive real costs here. Worth a look before the inspection contingency runs.' },
            { title: 'Freeway proximity.', text: 'I-5 is the southern boundary. Sound carries further than the map suggests.' },
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
          text: 'Mostly detached houses on modest lots, and the stock runs older than the westside average — 1920s and 1930s bungalows and cottages near the village, then a band of post-war ranches and split-levels as you move out toward SW 45th and Capitol Hill Road. Lots are irregular because the terrain is, and several streets end without warning.',
        },
        {
          type: 'p',
          text: 'Newer infill appears where a large lot has been divided, and a handful of condominium and townhouse projects sit within walking distance of Capitol Highway. Two houses on the same block can differ by forty years and a full renovation, so comparables here need to be chosen carefully rather than pulled by radius.',
        },
        { type: 'image', slot: 'housing-street', caption: 'A residential street near the village, mature trees' },
      ],
    },
    {
      id: 'getting-around',
      heading: 'Getting around',
      blocks: [
        {
          type: 'p',
          text: "This is a car neighborhood that has been working hard at not being one. The 2023 rebuild of SW Capitol Highway added continuous sidewalks, a protected bike lane and a multi-use path along a mile that previously had none, plus four rain gardens to deal with stormwater. TriMet's line 44 runs the corridor.",
        },
        {
          type: 'p',
          text: "Downtown is a short drive north on Barbur or I-5, and the freeway forms the neighborhood's southern edge — convenient, and worth listening for on the streets closest to it. There is no light rail. OHSU and the westside employment centers are both reachable, in different directions, which is part of the appeal.",
        },
        { type: 'image', slot: 'capitol-highway', caption: 'The rebuilt Capitol Highway corridor, sidewalk and bike lane' },
      ],
    },
    {
      id: 'parks-daily-life',
      heading: 'Parks and daily life',
      blocks: [
        {
          type: 'p',
          text: 'Gabriel Park covers 89.7 acres immediately west of the village, about thirty of them left as natural area with a free-flowing stretch of Vermont Creek and a pollinator meadow. The rest holds sports fields, tennis and pickleball courts, a fenced off-leash dog area, a 10,000-square-foot skatepark, a community center, and a community garden and orchard. Spring Garden Park and A Park fill in nearby.',
        },
        { type: 'image', slot: 'gabriel-park', caption: 'Gabriel Park — open field, trail, or the natural area' },
        {
          type: 'p',
          text: "The Multnomah Arts Center, at 7688 SW Capitol Highway, runs ceramics, woodshop, metal arts, textiles, dance, theatre and music out of the old elementary school. The village itself carries Annie Bloom's Books, Thinker Toys, Fat City Cafe, Marco's, Tastebud and a short row of taprooms and bottle shops, and closes for Multnomah Days each summer.",
        },
      ],
    },
  ],
  disclaimer:
    'Neighborhood boundaries and school assignments vary by address and change over time; verify for a specific property. Market figures are as dated and move quickly.',
};

export default guide;
