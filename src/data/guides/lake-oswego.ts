import type { Guide } from './types';

const guide: Guide = {
  slug: 'lake-oswego',
  number: '14',
  category: 'clackamas-county',
  title: 'Lake Oswego',
  eyebrow: 'Clackamas County · Neighborhood Guide',
  summary:
    'A lake town built around 415 acres of privately controlled water, with a walkable State Street downtown and housing ranging from 1930s revival styles to Northwest Regional modernism.',
  lede:
    'An iron town that became a lake town. Lake Oswego wraps roughly 415 acres of private water about seven miles south of Portland, with a walkable downtown on State Street and a housing stock that runs from 1930s revival styles to Northwest Regional modernism. The lake is privately controlled, and access does not come with the address.',
  hero: { slot: 'oswego-lake', caption: 'Oswego Lake · the shoreline and the downtown edge' },
  stats: [
    { value: '1867', label: 'The first charcoal iron smelter on the Pacific coast fired here' },
    { value: '1928', label: 'Lakewood Bay was created by flooding the old Duck Pond marsh' },
    { value: '1960', label: "Residents voted to change the city's name from Oswego" },
    { value: '$1,049,306', label: 'Median sale, three months to August 2026, on 200 sales' },
  ],
  statsNote:
    "The price is Redfin's median closed sale across the three months to August 2026, on 200 sales — enough volume to be meaningful. Zillow's index for the same city reads $884,631; that is a modelled value across all homes rather than a sale median, so the two are not in conflict and should not be blended.",
  sections: [
    {
      id: 'history',
      heading: 'How it came to be here',
      blocks: [
        {
          type: 'p',
          text: "Albert Alonzo Durham settled here in 1847 and named the place Oswego after his New York birthplace. Twenty years later the Oregon Iron Company fired the first charcoal iron smelter on the Pacific coast, in what is now George Rogers Park — the stack still stands, and the city's iron heritage trail is built around it.",
        },
        {
          type: 'p',
          text: 'The lake is substantially engineered. A concrete dam replaced the wooden ones in 1921, letting the level be controlled precisely, and in 1928 the marsh known as the Duck Pond was flooded and a canal cut to create Lakewood Bay. Annexation brought the whole lake inside city limits in 1959, and in 1960 residents voted to rename the city Lake Oswego.',
        },
        {
          type: 'timeline',
          items: [
            { year: '1867', text: "The Oregon Iron Company's smelter goes into production, the first on the Pacific coast." },
            { year: '1921', text: 'A concrete dam replaces the wooden dams in place since 1860, allowing precise control of the lake level.' },
            { year: '1928', text: 'Lakewood Bay is created by flooding the Duck Pond marsh and cutting a connecting canal.' },
            { year: '1960', text: "After annexing part of Lake Grove, residents vote to change the city's name from Oswego to Lake Oswego." },
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
            { title: 'Lake rights — verify by address.', text: "The lake is owned by a private corporation. Waterfront, deeded easement and no access are three different things, and a house a block from an easement lot may have none. Use the corporation's address lookup, not the listing." },
            { title: 'What the access actually costs.', text: "Corporation fees for 2026 run $228 swim-only to $1,566 for a power boat, on top of the individual easement association's own dues, which range widely. Eligibility is also not a slip — ask the board about waitlists." },
            { title: 'Tree removal.', text: 'A permit is required to remove any tree six inches in diameter or more. On a wooded lot that constrains clearing, siting and views before you start.' },
            { title: 'Sensitive lands and historic status.', text: 'Four overlay types can encumber a lot, and the city has itself commissioned map corrections. A historic designation can only be removed by whoever owned the property when it was imposed — not by a later buyer.' },
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
          text: 'Two clear waves. Pre-war plats from about 1932 brought Mediterranean, Tudor and Colonial Revival and Arts & Crafts houses, with early lakeside lots averaging around three quarters of an acre on curving streets that follow the topography rather than a grid. More than 400 of the surviving pre-war houses went up after 1935.',
        },
        {
          type: 'p',
          text: 'Post-war brought over a hundred new plats, Palisades entirely among them and Blue Heron Bay platting 1,211 parcels in the early 1960s — Northwest Regional, Minimal Traditional, ranch, split level and International. Richard Sundeleaf, Pietro Belluschi, John Yeon and Van Evera Bailey all built here. First Addition, platted for iron workers, is the one true grid, with alleys.',
        },
        { type: 'image', slot: 'lake-oswego-house', caption: 'A pre-war revival or a Northwest Regional house' },
      ],
    },
    {
      id: 'getting-around',
      heading: 'Getting around',
      blocks: [
        {
          type: 'p',
          text: 'There is no light rail. Bus service was restructured on 23 August 2026: line 37 folded into line 96 on Boones Ferry, line 38 into line 97, and line 153 was eliminated outright for low ridership. Line 35 runs the Macadam corridor. Confirm current service before relying on it.',
        },
        {
          type: 'p',
          text: 'By car it is Highway 43 north along the river, or I-5 by way of Kruse Way. One curiosity worth knowing: the old Jefferson Street rail right-of-way behind the waterfront is publicly owned and still unbuilt. A streetcar extension along it was suspended indefinitely in 2012; a seasonal trolley still runs the corridor.',
        },
        { type: 'image', slot: 'state-street', caption: 'State Street downtown, or Highway 43 along the river' },
      ],
    },
    {
      id: 'parks-daily-life',
      heading: 'Parks and daily life',
      blocks: [
        {
          type: 'p',
          text: 'George Rogers Park holds the waterfront and the 1867 smelter stack. Millennium Plaza Park anchors downtown, with Foothills, Rossman, Westlake, Iron Mountain and Luscher Farm spread across the city, plus two swim parks and a water sports centre. The city counts five main pathway loops totalling 23.7 miles and over 460 acres of natural-character parkland.',
        },
        { type: 'image', slot: 'george-rogers-park', caption: 'George Rogers Park, the smelter stack, or Millennium Plaza' },
        {
          type: 'p',
          text: "Downtown runs along State Street between roughly A and B Avenues, with Lake View Village at State and A, The Windward's 290,000 square feet from 2018, the Lakewood Center for the Arts and the Gallery Without Walls. The Foothills district below State Street is still in planning, constrained by floodplain and a single access road.",
        },
      ],
    },
  ],
};

export default guide;
