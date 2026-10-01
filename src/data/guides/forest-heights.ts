import type { Guide } from './types';

const guide: Guide = {
  slug: 'forest-heights',
  number: '11',
  category: 'portland-neighborhoods',
  title: 'Forest Heights',
  eyebrow: 'Northwest Portland · Neighborhood Guide',
  summary:
    'Forest Heights is a 601-acre master-planned hillside development inside Portland’s Northwest Heights neighborhood, with its own homeowners association, trails and private shuttle.',
  lede:
    'Forest Heights is a 601-acre master-planned development on the northwest hillside of Portland, built over about fifteen years. It is not an official Portland neighborhood but a private development inside the Northwest Heights neighborhood, with its own homeowners association, trails and shuttle bus.',
  hero: { slot: 'forest-heights-hillside', caption: 'Forest Heights · the hillside above the Sunset corridor' },
  stats: [
    { value: '601 acres', label: 'Total area, 215 of them HOA common area' },
    { value: '1,126', label: 'Single-family lots, plus 684 higher-density units' },
    { value: '1988', label: 'Nauru Phosphate Royalties bought the land for $13.3M' },
    { value: '$898', label: 'Master HOA assessment for 2026, before sub-association dues' },
  ],
  statsNote:
    'No median sale price is given. Redfin logged one closed sale in July 2026, and a one-sale median is simply that sale\'s price. Redfin\'s area boundary matches neither the association\'s nor the Northwest Heights neighborhood\'s. A twelve-month data pull by parcel is more reliable.',
  sections: [
    {
      id: 'history',
      heading: 'History',
      blocks: [
        {
          type: 'p',
          text: 'The project was proposed in 1969. Environmental and planning litigation delayed it until the Oregon Court of Appeals cleared construction in 1983. In 1988 the 601 acres were sold to Nauru Phosphate Royalties, funded by the Pacific island republic of Nauru, which was seeking an alternative homeland as its phosphate reserves declined.',
        },
        {
          type: 'p',
          text: 'Renamed Forest Heights, the development was built from the early 1990s through the mid-2000s under design and landscaping guidelines set at the outset; lot sales were completed in 2007. Nauru donated the land for Forest Park Elementary. The mill pond at the center of the development dates from the Jones Lumber Mill, which closed in 1892.',
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
      heading: 'Before buying',
      blocks: [
        {
          type: 'list',
          items: [
            { title: 'Two layers of HOA.', text: 'The master assessment is $449 twice yearly for 2026. Owners in any of the fourteen sub-associations also pay sub-association dues. Review both budgets and both reserve studies.' },
            { title: 'Road access.', text: 'A landslide on 1 March 2022 closed NW Thompson and NW Miller at the same time; Miller is the only main road through. Check the parcel\'s landslide status.' },
            { title: 'Wildfire and insurance.', text: 'Redfin estimates twenty-three percent of properties here are at wildfire risk over thirty years. Confirm the hazard zone and whether insurance is available, and at what price.' },
            { title: 'Private roads and architectural review.', text: 'Some streets are HOA-maintained private roads. Exterior changes require architectural review, and on-site stormwater facilities carry recorded maintenance obligations.' },
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
          text: 'Most houses were built between the early 1990s and the mid-2000s and range from about 1,600 to 5,000 square feet. The development comprises 1,126 single-family lots, 684 higher-density units across fourteen self-managed sub-associations, 160 apartments and a small retail center, so housing types vary considerably by address.',
        },
        {
          type: 'p',
          text: 'Styles range from traditional Cape Cod to contemporary, and include custom houses by individual contractors as well as production builders. The original design and landscaping guidelines remain in force, and exterior plans require approval before work begins.',
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
          text: 'No TriMet route enters Forest Heights. The homeowners association runs a private fourteen-seat shuttle to the Sunset Transit Center on weekday mornings and afternoons, first come first served; a resident ID is required, and guest passes cost a dollar. The city required the shuttle as a condition of development approval.',
        },
        { type: 'image', slot: 'miller-road', caption: 'NW Miller Road, or the shuttle at Sunset Transit Center' },
        {
          type: 'p',
          text: 'By car, US 26 is reached via NW Cornell or NW Barnes, and NW Miller Road is the only main road through the development. Downtown is roughly five miles away. Fire Station 27 on NW Skyline, opened in 2006, serves the area and has a brush unit and a four-wheel-drive vehicle for off-road access.',
        },
      ],
    },
    {
      id: 'parks-daily-life',
      heading: 'Parks and amenities',
      blocks: [
        {
          type: 'p',
          text: 'Forest Heights Park, city-owned since 1995, covers 2.93 acres on NW Miller Road, with an accessible play area on engineered mulch, sensory play elements, a plaza and paved paths. Mill Pond Park, on the site of the 1892 mill, is private to the development. The association maintains four miles of trail through its 215 acres of common area.',
        },
        { type: 'image', slot: 'mill-pond', caption: 'Mill Pond Park, Forest Heights Park, or an HOA trail' },
        {
          type: 'p',
          text: 'Forest Park, with 5,172 acres and more than eighty miles of trail, is a short distance east. Everyday shopping is at the Village at Forest Heights on NW Miller Road, a small retail center that also houses the association office. Larger stores require a drive.',
        },
      ],
    },
  ],
};

export default guide;
