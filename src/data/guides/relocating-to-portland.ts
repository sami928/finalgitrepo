import type { Guide } from './types';

const guide: Guide = {
  slug: 'relocating-to-portland',
  number: '01',
  category: 'relocation',
  title: 'Relocating to Portland',
  eyebrow: 'Portland, Oregon · Relocation Guide',
  summary:
    'An overview of Portland, Oregon, for buyers relocating to the city: its neighborhoods, housing market, cost of living and daily life.',
  lede:
    'Portland, known as the City of Roses, lies between the Willamette and Columbia Rivers, with Mount Hood visible on clear days. It is organized around distinct neighborhoods rather than a single downtown core.',
  hero: { slot: 'cover-portland', caption: 'Portland, Oregon' },
  stats: [
    { value: '652K+', label: 'City population' },
    { value: '95', label: 'Neighborhoods' },
    { value: 'Temperate', label: 'Wet winters, dry summers' },
    { value: 'PDX', label: "Direct int'l airport" },
  ],
  sections: [
    {
      id: 'welcome',
      heading: 'Overview',
      blocks: [
        {
          type: 'p',
          text: 'Each Portland neighborhood has its own main street and character, so location within the city is a major part of a relocation decision.',
        },
        {
          type: 'p',
          text: 'This guide summarizes the neighborhoods, the housing market and everyday life in Portland.',
        },
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Walkability',
              text: 'Compact blocks and a light-rail and streetcar network make car-free travel practical in most close-in neighborhoods.',
            },
            {
              title: 'No sales tax',
              text: 'Oregon has no statewide sales tax, which affects everyday spending and relocation budgets.',
            },
            {
              title: 'Nearby nature',
              text: 'Forest Park, the Columbia River Gorge, the Oregon Coast and Mount Hood are each under two hours from most of the city.',
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
      heading: 'Southwest and the West Hills',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              title: 'Multnomah Village',
              tag: 'Southwest',
              image: 'multnomah-village',
              text: 'A walkable village center with independent bookshops, cafes and pubs, surrounded by older homes on quiet streets.',
            },
            {
              title: 'Council Crest',
              tag: 'West Hills',
              image: 'council-crest',
              text: "Portland's highest point, with views of the Cascades from the summit park. Winding hillside streets and architect-designed homes, a few minutes from downtown.",
            },
            {
              title: 'Bridlemile',
              tag: 'Southwest',
              image: 'bridlemile',
              text: 'A wooded, quiet area with large lots, mature trees and a well-regarded neighborhood elementary school.',
            },
            {
              title: 'Sylvan Highlands',
              tag: 'West Hills',
              image: 'sylvan-highlands',
              text: 'A forested hillside neighborhood just off Highway 26, with quick access to downtown.',
            },
            {
              title: 'Forest Heights',
              tag: 'West Hills',
              image: 'forest-heights',
              text: 'A master-planned hillside community with newer construction, its own village center and trails through the surrounding woods.',
            },
            {
              title: 'Raleigh Hills',
              tag: 'Washington County',
              image: 'raleigh-hills',
              text: 'An established area along the Beaverton-Hillsdale corridor, with mature landscaping, mid-century and updated homes, and access to both Portland and the westside.',
            },
          ],
        },
      ],
    },
    {
      id: 'westside-south-metro',
      heading: 'Westside and south metro',
      blocks: [
        {
          type: 'cards',
          items: [
            {
              title: 'West Slope',
              tag: 'Washington County',
              image: 'west-slope',
              text: 'An unincorporated area between Portland and Beaverton, known for mid-century homes on large lots and mature tree cover. It has quick access to both cities and is generally less expensive than the hillside neighborhoods.',
            },
            {
              title: 'Lake Oswego',
              tag: 'Clackamas County',
              image: 'lake-oswego',
              text: 'An affluent lakeside city about eight miles south of downtown, with a village center along A Avenue, highly regarded schools and Willamette River frontage. Housing ranges from lakefront estates to wooded contemporary homes on cul-de-sacs.',
            },
            {
              title: 'West Linn',
              tag: 'Clackamas County',
              image: 'west-linn',
              text: 'A small city on the bluffs above the Willamette near the falls, with strong schools, wooded residential streets and large parks. Buyers often choose it for larger homes in exchange for a slightly longer commute.',
            },
          ],
        },
      ],
    },
    {
      id: 'close-in-portland',
      kicker: 'East Side & Northwest',
      heading: 'Close-in Portland',
      blocks: [
        {
          type: 'p',
          text: "Portland's east side and inner Northwest are dense and highly walkable, with much early-20th-century housing.",
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              title: 'The Pearl District',
              tag: 'Northwest',
              text: 'Converted warehouses, galleries and farm-to-table restaurants. Housing is mostly condominiums, on a compact, level street grid.',
            },
            {
              title: 'Nob Hill / NW District',
              tag: 'Northwest',
              text: "Restored Queen Anne and Victorian homes on tree-lined streets, near NW 23rd's boutiques and cafes. Highly walkable.",
            },
            {
              title: 'Irvington',
              tag: 'Northeast',
              text: 'One of the largest concentrations of early-20th-century architecture in the Pacific Northwest. A historic district close to downtown.',
            },
            {
              title: 'Alberta Arts District',
              tag: 'Northeast',
              text: 'A commercial strip of galleries, murals and international restaurants, surrounded by bungalows.',
            },
            {
              title: 'Sellwood-Moreland',
              tag: 'Southeast',
              text: 'A quieter riverside area of Victorian homes and antique shops, with access to the Springwater Corridor trail. Housing includes cottages, bungalows and condominiums on walkable blocks.',
            },
            {
              title: 'Hawthorne District',
              tag: 'Southeast',
              text: 'A commercial district known for vintage shops and independent bookstores.',
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
      heading: 'Housing market',
      blocks: [
        {
          type: 'stats',
          items: [
            { value: '$535,509', label: 'Median home sale price' },
            { value: '14 Days', label: 'Median time on market' },
            { value: '43%', label: 'Homes selling above list' },
          ],
          note: "Recent Redfin data for the Portland, OR metro area; illustrative as of this guide's printing. Neighborhood-level figures vary.",
        },
        {
          type: 'list',
          items: [
            'The market is competitive: the typical home receives about two offers and goes off the market in about two weeks.',
            'Homes sell for about 101% of list price on average; well-priced, move-in-ready listings draw the most competition.',
            'Price per square foot has held near $315, a benchmark for comparing neighborhoods.',
          ],
        },
      ],
    },
    {
      id: 'cost-of-living',
      heading: 'Cost of living',
      blocks: [
        {
          type: 'list',
          items: [
            'Oregon has no state sales tax, which for many households offsets a moderate state income tax.',
            "Property tax is based on Oregon's assessed-value system, which can make bills more predictable than in market-value states.",
            'Utilities and groceries are close to national averages. Housing is the main cost variable and differs widely by neighborhood.',
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
      heading: 'Daily life',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Climate',
              tag: 'Climate',
              text: 'Winters are mild and wet; summers are warm, dry and consistently sunny. Rain is frequent but rarely heavy.',
            },
            {
              title: 'Transit and cycling',
              tag: 'Getting Around',
              text: 'MAX light rail, the streetcar and an extensive bike network connect most close-in neighborhoods. Many residents of the Pearl, Northwest and inner Southeast drive little or not at all.',
            },
            {
              title: 'Outdoors',
              tag: 'Outdoors',
              text: "Forest Park's 80+ miles of trails are inside city limits. The Columbia River Gorge, Mount Hood and the Oregon Coast are all within about 90 minutes' drive.",
            },
            {
              title: 'Food and drink',
              tag: 'Food & Culture',
              text: 'Dining ranges from food carts to James Beard-recognized restaurants, and the city has an established coffee, craft beer and wine culture.',
            },
            {
              title: 'Schools',
              tag: 'Schools',
              text: 'Public school districts vary by neighborhood, and the metro area has many private schools.',
            },
            {
              title: 'Airport',
              tag: 'Airport',
              text: 'Portland International Airport (PDX) has direct domestic and international flights and is reachable from downtown by MAX.',
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
  ],
};

export default guide;
