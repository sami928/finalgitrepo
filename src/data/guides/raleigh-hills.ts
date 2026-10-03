import type { Guide } from './types';

const guide: Guide = {
  slug: 'raleigh-hills',
  number: '13',
  category: 'washington-county',
  title: 'Raleigh Hills',
  eyebrow: 'Unincorporated Washington County · Neighborhood Guide',
  summary:
    'An unincorporated commercial area of Washington County at the junction of Beaverton-Hillsdale Highway and Scholls Ferry Road.',
  lede:
    'Raleigh Hills is an unincorporated area of Washington County centered on the junction of Beaverton-Hillsdale Highway and Scholls Ferry Road, and the commercial center for a large part of the unincorporated county; the first New Seasons Market opened here. Like West Slope, it has no city government, and the county is drawing a town center boundary around it.',
  hero: { slot: 'raleigh-hills-junction', caption: 'The junction · Beaverton-Hillsdale Highway at Scholls Ferry Road' },
  stats: [
    { value: '1892', label: 'A post office named Raleigh opened, for resident Raleigh Robinson' },
    { value: '1914', label: 'The Red Electric interurban stopped here until 1929' },
    { value: '1999', label: 'New Seasons Market was founded; its first store is here' },
    { value: '$922,220', label: 'Zillow Home Value Index, 31 July 2026' },
  ],
  statsNote:
    'The figure is Zillow\'s modeled index for the Raleigh Hills area, not a median of closed sales; the two measures should not be compared directly. Redfin\'s local median rests on eight sales in a month. For a closed-sale benchmark with volume, ZIP 97225 had a median of $719,689 in August 2026 across 93 sales.',
  sections: [
    {
      id: 'history',
      heading: 'History',
      blocks: [
        {
          type: 'p',
          text: 'A post office called Raleigh opened in April 1892, named for a resident, Raleigh Robinson, and closed twelve years later. In 1914 Southern Pacific\'s Red Electric interurban established a stop here, which first made the junction a focus of development; the line ran until 1929.',
        },
        {
          type: 'p',
          text: 'In 1921 residents formed Raleigh Water Users, funded by property-owner shares rather than taxes; in 1947 it became a state-law water district with an elected board. Washington County adopted the community plan that still governs the area on 12 September 1978.',
        },
        {
          type: 'timeline',
          items: [
            { year: '1892', text: 'A post office named Raleigh opens in April, for resident Raleigh Robinson.' },
            { year: '1914', text: 'Southern Pacific\'s Red Electric interurban establishes a stop at Raleigh.' },
            { year: '1947', text: 'Raleigh Water Users becomes a state-law domestic water supply district with an elected board.' },
            { year: '1978', text: 'Washington County adopts the Raleigh Hills–Garden Home Community Plan on 12 September.' },
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
            { title: 'Jurisdiction.', text: 'Confirm the lot is still unincorporated. Two subareas of the plan have been annexed to Beaverton and one parcel to Portland. Jurisdiction determines the permit office, the police provider and the tax stack.' },
            { title: 'Water district.', text: 'Four separately elected districts serve the plan area (Metzger, Raleigh, West Slope and Tualatin Valley), with different rates. Raleigh buys Bull Run water wholesale from Portland.' },
            { title: 'Septic or sewer.', text: 'A county Existing System Evaluation should be ordered for any property on septic. A failure, or redevelopment within 300 feet of a sewer line, requires connection.' },
            { title: 'Town center designation.', text: 'The county\'s 2025–27 work program includes adopting a Raleigh Hills town center boundary. Such designations typically change allowed density and parking rules. Check where the draft boundary falls.' },
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
          text: 'Housing is predominantly low-density detached houses. R-5 covers just under 69 percent of plan-area acreage, at four to five units an acre on a 5,500 square foot minimum lot. Smaller shares carry R-9, R-15 and R-24 designations, and roughly 75 acres around the junction are community business district.',
        },
        {
          type: 'p',
          text: 'The county describes the area as largely developed with relatively few vacant parcels remaining. Census 2020–2024 five-year estimates put owner occupancy at 52.8 percent and the median value of owner-occupied units at $913,700, a self-reported value over five years rather than a closing price.',
        },
        { type: 'image', slot: 'raleigh-hills-street', caption: 'A detached single-family street' },
      ],
    },
    {
      id: 'getting-around',
      heading: 'Getting around',
      blocks: [
        {
          type: 'p',
          text: 'Oregon 10 and Oregon 210 meet at the junction, and Oregon 10 continues through Hillsdale to Capitol Highway, Barbur and downtown. Highway 217 is to the west and US 26 to the north. The county counts almost a dozen bus lines through the plan area.',
        },
        { type: 'image', slot: 'scholls-ferry', caption: 'Scholls Ferry Road or Beaverton-Hillsdale Highway' },
        {
          type: 'p',
          text: 'Beaverton-Hillsdale is a designated frequent bus route; Canyon, Garden Home and Oleson are regional routes. Line 54\'s published weekday schedule gives about 24 to 25 minutes from Beaverton-Hillsdale and Oleson to downtown. Bikeways are limited, mainly Scholls Ferry south of Raleigh Scholls Park and part of Garden Home Road.',
        },
      ],
    },
    {
      id: 'parks-daily-life',
      heading: 'Parks and amenities',
      blocks: [
        {
          type: 'p',
          text: 'New Seasons Market at 7300 SW Beaverton Hillsdale is the chain\'s original store, and Fred Meyer is a few hundred yards east at 7700. The park district runs Raleigh Scholls Park, Vista Brook Park, and Raleigh Park with its seasonal swim center.',
        },
        {
          type: 'p',
          text: 'Fanno Creek and its floodplain cross the plan area, and the abandoned Red Electric right-of-way between SW 92nd and Oleson is now a bridle path. Two libraries serve the area: West Slope on SW 78th, and Garden Home, which joined the county co-operative in July 1996 and expanded in spring 2019.',
        },
        { type: 'image', slot: 'fanno-creek-path', caption: 'Fanno Creek, the old Red Electric bridle path, or Vista Brook Park' },
      ],
    },
  ],
};

export default guide;
