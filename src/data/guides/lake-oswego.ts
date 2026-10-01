import type { Guide } from './types';

const guide: Guide = {
  slug: 'lake-oswego',
  number: '14',
  category: 'clackamas-county',
  title: 'Lake Oswego',
  eyebrow: 'Clackamas County · Neighborhood Guide',
  summary:
    'A city about seven miles south of Portland, built around a privately controlled lake of roughly 415 acres, with a State Street downtown and revival and modernist housing.',
  lede:
    'Lake Oswego is a city about seven miles south of Portland, originally an iron-smelting town, built around roughly 415 acres of privately controlled lake. It has a walkable downtown on State Street and housing ranging from 1930s revival styles to Northwest Regional modernism; lake access is not included with an address.',
  hero: { slot: 'oswego-lake', caption: 'Oswego Lake · the shoreline and the downtown edge' },
  stats: [
    { value: '1867', label: 'First charcoal iron smelter on the Pacific coast fired here' },
    { value: '1928', label: 'Lakewood Bay created by flooding the Duck Pond marsh' },
    { value: '1960', label: "Residents voted to change the city's name from Oswego" },
    { value: '$1,049,306', label: 'Median sale, three months to August 2026, on 200 sales' },
  ],
  statsNote:
    "The price is Redfin's median closed sale for the three months to August 2026, on 200 sales. Zillow's index for the city reads $884,631; it is a modeled value across all homes rather than a sale median, so the two do not conflict and should not be blended.",
  sections: [
    {
      id: 'history',
      heading: 'History',
      blocks: [
        {
          type: 'p',
          text: "Albert Alonzo Durham settled here in 1847 and named the place Oswego after his New York birthplace. Twenty years later the Oregon Iron Company fired the first charcoal iron smelter on the Pacific coast, in what is now George Rogers Park. The stack still stands, and the city's iron heritage trail is built around it.",
        },
        {
          type: 'p',
          text: 'The lake is substantially engineered. A concrete dam replaced the wooden ones in 1921, allowing precise control of the level, and in 1928 the Duck Pond marsh was flooded and a canal cut to create Lakewood Bay. Annexation brought the whole lake inside city limits in 1959, and in 1960 residents voted to rename the city Lake Oswego.',
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
      heading: 'Before buying',
      blocks: [
        {
          type: 'list',
          items: [
            { title: 'Lake rights.', text: "The lake is owned by a private corporation. Waterfront, deeded easement and no access are three different situations, and a house a block from an easement lot may have no access. Verify by address using the corporation's address lookup rather than the listing." },
            { title: 'Cost of lake access.', text: "Corporation fees for 2026 range from $228 for swim-only to $1,566 for a power boat, in addition to the individual easement association's dues, which vary widely. Eligibility does not guarantee a boat slip; check waitlists with the board." },
            { title: 'Tree removal.', text: 'A permit is required to remove any tree six inches in diameter or more. On a wooded lot this constrains clearing, siting and views.' },
            { title: 'Sensitive lands and historic status.', text: 'Four overlay types can encumber a lot, and the city has commissioned map corrections. A historic designation can only be removed by whoever owned the property when it was imposed, not by a later buyer.' },
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
          text: 'Most housing dates from two periods. Pre-war plats from about 1932 brought Mediterranean, Tudor and Colonial Revival and Arts & Crafts houses, with early lakeside lots averaging around three quarters of an acre on curving streets that follow the topography. More than 400 of the surviving pre-war houses were built after 1935.',
        },
        {
          type: 'p',
          text: 'Post-war development brought over a hundred new plats, including all of Palisades, and Blue Heron Bay platted 1,211 parcels in the early 1960s. Styles include Northwest Regional, Minimal Traditional, ranch, split level and International. Richard Sundeleaf, Pietro Belluschi, John Yeon and Van Evera Bailey all built here. First Addition, platted for iron workers, is the only true grid, with alleys.',
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
          text: 'There is no light rail. Bus service was restructured on 23 August 2026: line 37 was folded into line 96 on Boones Ferry, line 38 into line 97, and line 153 was eliminated for low ridership. Line 35 runs the Macadam corridor. Current service should be verified.',
        },
        {
          type: 'p',
          text: 'By car, Highway 43 runs north along the river, and I-5 is reached by way of Kruse Way. The old Jefferson Street rail right-of-way behind the waterfront is publicly owned and unbuilt. A streetcar extension along it was suspended indefinitely in 2012; a seasonal trolley still runs the corridor.',
        },
        { type: 'image', slot: 'state-street', caption: 'State Street downtown, or Highway 43 along the river' },
      ],
    },
    {
      id: 'parks-daily-life',
      heading: 'Parks and amenities',
      blocks: [
        {
          type: 'p',
          text: 'George Rogers Park holds the waterfront and the 1867 smelter stack. Millennium Plaza Park is downtown, and Foothills, Rossman, Westlake, Iron Mountain and Luscher Farm are spread across the city, along with two swim parks and a water sports center. The city counts five main pathway loops totalling 23.7 miles and over 460 acres of natural-character parkland.',
        },
        { type: 'image', slot: 'george-rogers-park', caption: 'George Rogers Park, the smelter stack, or Millennium Plaza' },
        {
          type: 'p',
          text: "Downtown runs along State Street between roughly A and B Avenues and includes Lake View Village at State and A, The Windward (290,000 square feet, 2018), the Lakewood Center for the Arts and the Gallery Without Walls. The Foothills district below State Street is still in planning, constrained by floodplain and a single access road.",
        },
      ],
    },
  ],
};

export default guide;
