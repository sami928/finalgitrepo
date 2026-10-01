import type { Guide } from './types';

const guide: Guide = {
  slug: 'multnomah-village',
  number: '06',
  category: 'portland-neighborhoods',
  title: 'Multnomah Village',
  eyebrow: 'Southwest Portland · Neighborhood Guide',
  summary:
    "The commercial center of Southwest Portland's Multnomah neighborhood: four blocks of early-1900s storefronts on SW Capitol Highway, next to Gabriel Park.",
  lede:
    'Multnomah Village is the commercial center of the Multnomah neighborhood in Southwest Portland: four blocks of early-1900s storefronts on SW Capitol Highway, surrounded by residential streets and next to Gabriel Park. It began as a railway stop and became part of the city in 1950.',
  hero: { slot: 'village-center', caption: 'SW Capitol Highway · the village blocks' },
  stats: [
    { value: '1907', label: 'Oregon Electric Railway station opened' },
    { value: '1950', label: 'Annexed by the City of Portland' },
    { value: '89.7 acres', label: 'Gabriel Park, about thirty of them natural area' },
    { value: '$574,964', label: 'Typical home value, down 2.4% year on year' },
  ],
  statsNote:
    'Home value is the Zillow Home Value Index for the Multnomah neighborhood as of 31 July 2026. It is a modeled figure for the whole neighborhood, not a median of closed sales in the village blocks; use like-for-like comparable sales for pricing.',
  sections: [
    {
      id: 'history',
      heading: 'History',
      blocks: [
        {
          type: 'p',
          text: 'The Oregon Electric Railway opened a station here in 1907 and named it Multnomah. A commercial strip grew around the depot, did well through the 1920s and declined during the Depression. Passenger service ended in 1933 and freight in 1945. The rail corridor became Multnomah Boulevard, which is why that road runs diagonally through an otherwise irregular street grid.',
        },
        {
          type: 'p',
          text: 'Portland annexed the neighborhood on 7 November 1950. The original commercial buildings were not redeveloped, and from the 1970s antique dealers and independent shops occupied them. The district marked a hundred years as a business district in 2009.',
        },
        {
          type: 'timeline',
          items: [
            { year: '1913', text: "Multnomah School and the Nelson Thomas building are built. Both still stand, now the Arts Center and Marco's Cafe." },
            { year: '1978', text: "Annie Bloom's Books opens. Thinker Toys follows in 1994; both remain on Capitol Highway." },
            { year: '1982', text: 'The Multnomah Arts Center opens in the former elementary school, which the district closed in 1979.' },
            { year: '2023', text: 'A $30 million rebuild of SW Capitol Highway is completed, adding a mile of sidewalks where there were none.' },
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
            { title: 'School assignment.', text: 'Boundaries in this part of Southwest do not follow the neighborhood line, and they change. Verify for the specific address.' },
            { title: 'Sidewalks and stormwater.', text: 'The Capitol Highway work did not extend to every side street; many still have no sidewalks, and drainage varies by lot.' },
            { title: 'Slope and trees.', text: 'Grading, retaining walls and mature-tree roots can add significant cost. Assess them before the inspection contingency expires.' },
            { title: 'Freeway proximity.', text: 'I-5 is the southern boundary, and traffic noise carries further than the map suggests.' },
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
          text: 'Housing is mostly detached houses on modest lots, older than the westside average: 1920s and 1930s bungalows and cottages near the village, then post-war ranches and split-levels toward SW 45th and Capitol Hill Road. Lots are irregular because of the terrain, and several streets are dead ends.',
        },
        {
          type: 'p',
          text: 'Newer infill appears where large lots have been divided, and a few condominium and townhouse projects are within walking distance of Capitol Highway. Houses on the same block can differ by forty years and in renovation status, so comparables should be selected individually rather than by radius.',
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
          text: "The 2023 rebuild of SW Capitol Highway added continuous sidewalks, a protected bike lane and a multi-use path along a mile that previously had none, plus four rain gardens for stormwater. TriMet's line 44 runs along the corridor.",
        },
        {
          type: 'p',
          text: "Downtown is a short drive north on Barbur or I-5. The freeway forms the neighborhood's southern edge, and noise is noticeable on the closest streets. There is no light rail. OHSU and the westside employment centers are both reachable by road.",
        },
        { type: 'image', slot: 'capitol-highway', caption: 'The rebuilt Capitol Highway corridor, sidewalk and bike lane' },
      ],
    },
    {
      id: 'parks-daily-life',
      heading: 'Parks and amenities',
      blocks: [
        {
          type: 'p',
          text: 'Gabriel Park covers 89.7 acres immediately west of the village. About thirty acres are natural area, with a free-flowing stretch of Vermont Creek and a pollinator meadow. The rest holds sports fields, tennis and pickleball courts, a fenced off-leash dog area, a 10,000-square-foot skatepark, a community center, and a community garden and orchard. Spring Garden Park and A Park are nearby.',
        },
        { type: 'image', slot: 'gabriel-park', caption: 'Gabriel Park — open field, trail, or the natural area' },
        {
          type: 'p',
          text: "The Multnomah Arts Center, at 7688 SW Capitol Highway, offers ceramics, woodshop, metal arts, textiles, dance, theater and music classes in the former elementary school. Businesses in the village include Annie Bloom's Books, Thinker Toys, Fat City Cafe, Marco's, Tastebud and several taprooms and bottle shops. The street closes for Multnomah Days each summer.",
        },
      ],
    },
  ],
  disclaimer:
    'Neighborhood boundaries and school assignments vary by address and change over time; verify for a specific property. Market figures are as of the dates given and change quickly.',
};

export default guide;
