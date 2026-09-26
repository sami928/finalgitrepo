import type { Guide } from './types';

const guide: Guide = {
  slug: 'forest-heights',
  number: '11',
  category: 'portland-neighborhoods',
  title: 'Forest Heights',
  eyebrow: 'Northwest Portland · Neighborhood Guide',
  summary:
    'A 601-acre master-planned hillside development inside the Northwest Heights neighborhood, with its own homeowners association, private shuttle, and a layer of governance to understand before anything else.',
  lede:
    'Six hundred acres on the northwest hillside, planned as one thing and built over fifteen years. Forest Heights is not a Portland neighborhood — it is a private development inside the Northwest Heights neighborhood, with its own homeowners association, its own trails and its own shuttle bus, and a layer of governance a buyer needs to read before anything else.',
  hero: { slot: 'forest-heights-hillside', caption: 'Forest Heights · the hillside above the Sunset corridor' },
  stats: [
    { value: '601 acres', label: 'The development, 215 of them HOA common area' },
    { value: '1,126', label: 'Single-family lots, plus 684 higher-density units' },
    { value: '1988', label: 'Nauru Phosphate Royalties bought the land for $13.3M' },
    { value: '$898', label: 'Master HOA assessment for 2026, before sub-association dues' },
  ],
  statsNote:
    'No median sale price here. Redfin logged one closed sale in July 2026, and a one-sale median is just that sale\'s price. Redfin\'s boundary is a portal construct matching neither the association\'s nor the Northwest Heights neighborhood. Ask for a twelve-month pull by parcel.',
  sections: [
    {
      id: 'history',
      heading: 'How it came to be here',
      blocks: [
        {
          type: 'p',
          text: 'The idea dates to 1969 and took most of two decades to survive. Environmental and planning litigation held the project up for years until the Oregon Court of Appeals cleared construction in 1983. Five years later the land found an unlikely buyer: 601 acres sold in 1988 to Nauru Phosphate Royalties, funded by the Pacific island republic of Nauru, which was seeking an alternative homeland as its phosphate reserves ran down.',
        },
        {
          type: 'p',
          text: 'Renamed Forest Heights, it was built out from the early 1990s through the mid-2000s under design and landscaping guidelines set at the outset, with lot sales completed in 2007. Nauru donated the land for Forest Park Elementary. The mill pond at the centre of it is older than any of this — the Jones Lumber Mill closed in 1892 and left the water behind.',
        },
        {
          type: 'timeline',
          items: [
            { year: '1892', text: 'The Jones Lumber Mill closes; its pond survives as the private Mill Pond Park.' },
            { year: '1983', text: 'The Oregon Court of Appeals approves construction, ending a decade of litigation.' },
            { year: '1995', text: 'Portland Parks acquires Forest Heights Park, 2.93 acres on NW Miller Road.' },
            { year: '2006', text: 'Fire Station 27 opens on NW Skyline, covering the largest fire management area in the city.' },
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
            { title: 'Two layers of HOA, not one.', text: 'The master assessment is $449 twice yearly for 2026. Owners in any of the fourteen sub-associations pay their own dues on top. Get both budgets and both reserve studies.' },
            { title: 'Access can close.', text: 'A landslide on 1 March 2022 shut NW Thompson and NW Miller at once, and Miller is the only main road through. Check the parcel\'s landslide status.' },
            { title: 'Wildfire and insurance.', text: 'Redfin puts twenty-three percent of properties here at wildfire risk over thirty years. Confirm the hazard zone, and whether insurance is available and at what price.' },
            { title: 'Roads and architectural review.', text: 'Some streets are HOA-maintained private roads. Exterior changes run through architectural review, and on-site stormwater facilities carry recorded maintenance obligations.' },
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
          text: 'Master-planned and built mostly between the early 1990s and the mid-2000s, ranging from about 1,600 to 5,000 square feet. The composition is 1,126 single-family lots, 684 higher-density units across fourteen self-managed sub-associations, 160 apartments and a small retail centre — so a single address in Forest Heights can mean several quite different products.',
        },
        {
          type: 'p',
          text: 'Styles run from traditional Cape Cod to contemporary, including custom houses by individual contractors rather than production builders alone. Design and landscaping guidelines were strict from the outset and remain in force, which is why the hillside reads as one place, and why exterior plans need approval before they need a contractor.',
        },
        { type: 'image', slot: 'forest-heights-house', caption: 'A Forest Heights house — traditional or contemporary' },
      ],
    },
    {
      id: 'getting-around',
      heading: 'Getting around',
      blocks: [
        {
          type: 'p',
          text: 'No TriMet route enters Forest Heights. Instead the homeowners association runs a private shuttle to the Sunset Transit Center, weekday mornings and afternoons, fourteen seats, first come first served, with a resident ID required and guest passes at a dollar. It exists because the city required it as a condition of development approval — a mitigation obligation rather than an amenity.',
        },
        { type: 'image', slot: 'miller-road', caption: 'NW Miller Road, or the shuttle at Sunset Transit Center' },
        {
          type: 'p',
          text: 'By car, US 26 is reached by NW Cornell or NW Barnes, and NW Miller Road is the only main road through the development. Downtown is roughly five miles. Fire coverage comes from Station 27 on NW Skyline, opened in 2006, which carries a brush unit and a four-wheel-drive vehicle for off-road access.',
        },
      ],
    },
    {
      id: 'parks-daily-life',
      heading: 'Parks and daily life',
      blocks: [
        {
          type: 'p',
          text: 'Forest Heights Park runs to 2.93 acres on NW Miller Road, city-owned since 1995, with an accessible play area on engineered mulch, sensory play elements, a plaza and paved paths. Mill Pond Park, on the site of the 1892 mill, is private to the development. The association maintains four miles of trail through its 215 acres of common area.',
        },
        { type: 'image', slot: 'mill-pond', caption: 'Mill Pond Park, Forest Heights Park, or an HOA trail' },
        {
          type: 'p',
          text: 'Forest Park is a short distance east — 5,172 acres and more than eighty miles of trail. Day-to-day shopping is the Village at Forest Heights on NW Miller Road, a small retail centre that also houses the association office. Anything larger is a drive down the hill.',
        },
      ],
    },
  ],
};

export default guide;
