import type { Guide } from './types';

const guide: Guide = {
  slug: 'relocating-to-portland',
  number: '01',
  category: 'relocation',
  title: 'Relocating to Portland',
  eyebrow: 'Portland, Oregon · Relocation Guide',
  summary:
    'Neighborhoods, market insight, and everyday life in the City of Roses — prepared for buyers considering a move to the Pacific Northwest.',
  lede:
    'Neighborhoods, market insight, and everyday life in the City of Roses — prepared for buyers considering a move to the Pacific Northwest.',
  hero: { slot: 'cover-portland', caption: 'Portland, Oregon' },
  stats: [
    { value: '652K+', label: 'City population' },
    { value: '95', label: 'Distinct neighborhoods' },
    { value: 'Temperate', label: 'Wet winters, dry summers' },
    { value: 'PDX', label: "Direct int'l airport" },
  ],
  sections: [
    {
      id: 'welcome',
      kicker: 'City of Roses',
      heading: 'Welcome to Portland',
      blocks: [
        {
          type: 'p',
          text: 'Tucked between the Willamette and Columbia Rivers and framed by Mount Hood on clear days, Portland has long drawn newcomers with a simple promise: a walkable, design-forward city where nature is never more than a bridge crossing away.',
        },
        {
          type: 'p',
          text: 'It is a city of neighborhoods rather than one downtown core — each with its own character, main street, and pace of life — which is why choosing where to live matters just as much as choosing whether to move here at all.',
        },
        {
          type: 'p',
          text: 'This guide is a starting point: a quick orientation to the neighborhoods, the market, and the everyday rhythms of life in Portland, so our first conversation can begin where the guidebooks leave off.',
        },
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Walkable by Design',
              text: 'Compact blocks and a light-rail and streetcar network make car-free days realistic in most close-in neighborhoods.',
            },
            {
              title: 'No Sales Tax',
              text: 'Oregon has no statewide sales tax, a detail that shapes both everyday spending and relocation budgeting.',
            },
            {
              title: 'Nature at the Edge',
              text: 'Forest Park, the Gorge, the Coast, and Mount Hood are each under two hours from most front doors.',
            },
          ],
        },
        {
          type: 'image',
          slot: 'portland-overview',
          caption: 'Downtown Portland and Mount Hood — autumn from the west side',
        },
      ],
    },
    {
      id: 'southwest-west-hills',
      kicker: 'Where I Focus',
      heading: 'Southwest & the West Hills',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              title: 'Multnomah Village',
              tag: 'Southwest',
              image: 'multnomah-village',
              text: "A walkable village center of independent bookshops, cafes, and pubs, wrapped in character homes on quiet streets. Small-town texture inside the city, and one of Southwest Portland's most sought-after addresses.",
            },
            {
              title: 'Council Crest',
              tag: 'West Hills',
              image: 'council-crest',
              text: "Portland's highest point, with Cascade views from the park at its summit. Winding hillside streets, architect-designed homes, and downtown only minutes down the hill.",
            },
            {
              title: 'Bridlemile',
              tag: 'Southwest',
              image: 'bridlemile',
              text: 'Wooded and quiet, with generous lots, mature trees, and a well-regarded neighborhood elementary school. A favorite for buyers who want space and greenery without leaving the city.',
            },
            {
              title: 'Sylvan Highlands',
              tag: 'West Hills',
              image: 'sylvan-highlands',
              text: 'A forested hillside enclave just off Highway 26, offering fast downtown access and a secluded, tucked-away feel that belies how central it actually is.',
            },
            {
              title: 'Forest Heights',
              tag: 'West Hills',
              image: 'forest-heights',
              text: 'A master-planned hillside community with newer construction, its own village center, and trails threading the surrounding woods. Appeals to buyers who want turnkey homes and amenities together.',
            },
            {
              title: 'Raleigh Hills',
              tag: 'Washington County',
              image: 'raleigh-hills',
              text: 'An established, convenient pocket along the Beaverton-Hillsdale corridor. Mature landscaping, mid-century and updated homes, and easy reach of both Portland and the westside.',
            },
          ],
        },
      ],
    },
    {
      id: 'westside-south-metro',
      kicker: 'Just Beyond the City',
      heading: 'Westside & South Metro',
      blocks: [
        {
          type: 'cards',
          items: [
            {
              title: 'West Slope',
              tag: 'Washington County',
              image: 'west-slope',
              text: 'A leafy unincorporated pocket sitting between Portland and Beaverton, known for mid-century homes on generous lots and mature tree cover. Quiet and established, with quick access in both directions — a practical choice for buyers who want westside convenience without a hillside price.',
            },
            {
              title: 'Lake Oswego',
              tag: 'Clackamas County',
              image: 'lake-oswego',
              text: 'An affluent lakeside city roughly eight miles south of downtown, with a polished village center along A Avenue, highly regarded schools, and a Willamette River frontage. Housing runs from lakefront estates to wooded contemporary homes on quiet cul-de-sacs.',
            },
            {
              title: 'West Linn',
              tag: 'Clackamas County',
              image: 'west-linn',
              text: 'Set on the bluffs above the Willamette near the falls, West Linn pairs strong schools with wooded residential streets, generous parks, and a genuine small-city feel. Popular with buyers trading a slightly longer commute for square footage and quiet.',
            },
          ],
        },
      ],
    },
    {
      id: 'close-in-portland',
      kicker: 'East Side & Northwest',
      heading: 'Close-In Portland',
      blocks: [
        {
          type: 'p',
          text: "Portland's east side and inner Northwest keep a different rhythm — denser, highly walkable, and rich in early-20th-century housing stock. If your search leads across the river, these are the districts worth knowing.",
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              title: 'The Pearl District',
              tag: 'Northwest',
              text: "Portland's most polished urban address: converted warehouses, galleries, and farm-to-table dining. Condo living in the middle of it all, on a compact and level street grid.",
            },
            {
              title: 'Nob Hill / NW District',
              tag: 'Northwest',
              text: "Restored Queen Anne and Victorian homes on leafy streets, steps from NW 23rd's boutiques and cafes. Charm with genuine walkability.",
            },
            {
              title: 'Irvington',
              tag: 'Northeast',
              text: 'One of the largest concentrations of early-20th-century architecture in the Pacific Northwest. A prestige historic address close to downtown.',
            },
            {
              title: 'Alberta Arts District',
              tag: 'Northeast',
              text: 'Galleries, murals, and globally-inspired restaurants along a creative, independent-minded strip. Bungalow character homes and a neighborhood-first culture.',
            },
            {
              title: 'Sellwood-Moreland',
              tag: 'Southeast',
              text: 'A quieter riverside pocket of Victorian homes and antique shops, with easy access to the Springwater Corridor trail. A mix of cottages, bungalows, and condominiums on walkable blocks.',
            },
            {
              title: 'Hawthorne District',
              tag: 'Southeast',
              text: "Portland's bohemian core — vintage shops, indie bookstores, and an easygoing, eclectic pace. Personality over polish.",
            },
          ],
        },
        {
          type: 'image',
          slot: 'close-in',
          caption: 'Downtown after rain — the transit mall at Pioneer Place',
        },
      ],
    },
    {
      id: 'market-character',
      kicker: 'Portland Metro',
      heading: 'The Market, In Brief',
      blocks: [
        {
          type: 'stats',
          items: [
            { value: '$535,509', label: 'Median home sale price' },
            { value: '14 Days', label: 'Median time on market' },
            { value: '43%', label: 'Homes selling above list' },
          ],
          note: "Market figures reflect recent Redfin data for the Portland, OR metro area and are illustrative as of this guide's printing. Ask Catherine for a current, neighborhood-level analysis prepared for your search.",
        },
        {
          type: 'list',
          items: [
            'Portland’s market remains competitive: the typical home receives roughly two offers and moves off market in about two weeks.',
            'Homes are selling at roughly 101% of list price on average, with well-priced, move-in-ready listings drawing the most competition.',
            'Price per square foot has held near $315, a helpful benchmark when comparing neighborhoods.',
          ],
        },
      ],
    },
    {
      id: 'cost-of-living',
      heading: 'Cost of Living Notes',
      blocks: [
        {
          type: 'list',
          items: [
            'Oregon levies no state sales tax, which offsets a moderate state income tax for many households.',
            "Property tax is calculated under Oregon's assessed-value system, which can keep bills more predictable than in market-value states.",
            'Utilities and groceries trend close to national averages; housing is the primary cost variable, and it varies widely by neighborhood.',
          ],
        },
        {
          type: 'image',
          slot: 'portland-market',
          caption: 'A summer farmers market downtown',
        },
      ],
    },
    {
      id: 'lifestyle-logistics',
      kicker: 'Day to Day',
      heading: 'Life in the City of Roses',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Four Real Seasons',
              tag: 'Climate',
              text: 'Mild, wet winters and warm, dry summers define the year. Rain is frequent but rarely heavy, and summer months are consistently sunny — ideal for the outdoor culture Portland is known for.',
            },
            {
              title: 'Transit & Bikeability',
              tag: 'Getting Around',
              text: "MAX light rail, the streetcar, and an extensive bike network connect most close-in neighborhoods. Many residents in the Pearl, Northwest, and inner Southeast go car-light or car-free entirely.",
            },
            {
              title: 'Nature Close at Hand',
              tag: 'Outdoors',
              text: "Forest Park's 80+ miles of trails sit inside city limits, while the Columbia River Gorge, Mount Hood, and the Oregon Coast are all within roughly 90 minutes' drive.",
            },
            {
              title: 'A Genuine Food City',
              tag: 'Food & Culture',
              text: "From food carts to James Beard-recognized kitchens, Portland's dining scene rivals cities many times its size — alongside a deep-rooted coffee, craft beer, and wine culture.",
            },
            {
              title: 'Education Options',
              tag: 'Schools',
              text: 'Public districts vary meaningfully by neighborhood, and the metro area includes a strong roster of private schools. We map your home search to school priorities from day one.',
            },
            {
              title: 'Easy In, Easy Out',
              tag: 'Airport',
              text: 'Portland International Airport (PDX) offers direct flights across the U.S. and internationally, and sits a quick MAX ride from downtown.',
            },
          ],
        },
        {
          type: 'image',
          slot: 'portland-lifestyle',
          caption: 'The Columbia River Gorge from the historic highway — thirty minutes east',
        },
      ],
    },
    {
      id: 'next-steps',
      kicker: 'Next Steps',
      heading: "Let's find your place in Portland.",
      blocks: [
        {
          type: 'p',
          text: 'Every neighborhood in this guide tells a different story — the right one for you depends on commute, budget, school priorities, and the kind of daily life you want to build. That conversation is where we start.',
        },
        {
          type: 'list',
          items: [
            'Personalized neighborhood shortlist',
            'Current market & pricing guidance',
            'School & commute mapping',
            'Remote & relocation buyer support',
          ],
        },
      ],
    },
  ],
};

export default guide;
