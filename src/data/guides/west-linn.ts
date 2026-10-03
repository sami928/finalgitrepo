import type { Guide } from './types';

const guide: Guide = {
  slug: 'west-linn',
  number: '15',
  category: 'clackamas-county',
  title: 'West Linn',
  eyebrow: 'Clackamas County · Neighborhood Guide',
  summary:
    'A city on bluffs above the Willamette, formed from older neighborhoods by annexation, where landslide and river rules shape lots more than zoning.',
  lede:
    'West Linn is a city on bluffs above two rivers, at the site of the first long-distance transmission of electricity in the United States. It was formed from separate older neighborhoods (Willamette, Bolton, Robinwood, Cedaroak) joined by annexation and later by the freeway, and geology and river regulations constrain lot use more than zoning does.',
  hero: { slot: 'west-linn-bluff', caption: 'West Linn · the bluffs above the Willamette' },
  stats: [
    { value: '1889', label: 'First long-distance transmission of electricity in the United States' },
    { value: '1913', label: 'West Linn incorporated, consolidating four settlements' },
    { value: '27,601', label: 'Population, Portland State estimate for 2025' },
    { value: '$842,442', label: 'Median sale, three months to August 2026, on 124 sales' },
  ],
  statsNote:
    "The price is Redfin's median closed sale for the three months to August 2026, on 124 sales. Population is the Portland State Population Research Center estimate for 2025; the city's tourism pages still cite a figure several thousand lower. Pricing should be verified for a specific address.",
  sections: [
    {
      id: 'history',
      heading: 'History',
      blocks: [
        {
          type: 'p',
          text: 'Robert Moore settled the Willamette side in the 1840s, and the town on his claim was renamed Linn City in 1845 after Senator Lewis F. Linn. Linn City and neighboring Multnomah City were both destroyed by fire and flood in 1861.',
        },
        {
          type: 'p',
          text: 'In 1889 the Willamette Falls Electric Company ran a fourteen-mile line to Portland, the first long-distance transmission of electrical energy in the United States, and a pulp and paper mill opened the same year. West Linn incorporated in 1913, consolidating West Oregon City, Bolton, Sunset and Willamette Heights; the town of Willamette merged in 1916 over water supply.',
        },
        {
          type: 'timeline',
          items: [
            { year: '1845', text: "Robert Moore's settlement is renamed Linn City; fire and flood destroy it in 1861." },
            { year: '1889', text: 'A fourteen-mile line to Portland carries the first long-distance transmission of electricity in the United States.' },
            { year: '1913', text: 'West Linn incorporates, consolidating four separate settlements plus the mill lands.' },
            { year: '1967', text: 'Cedaroak, Robinwood and Marylhurst are annexed, having been platted in the 1920s to 1940s.' },
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
            { title: 'Slope and landslide hazard.', text: 'The city sits on bluffs, and state landslide mapping covers it across three quadrangles. West Linn strengthened geotechnical and surface-water review by ordinance in 2017. Confirm thresholds with the planning department before design.' },
            { title: 'River overlays.', text: 'Flood management, river greenway and water resource area permits can all apply to one lot. The published water resource map is not suitable for site-specific decisions; boundaries require a staff visit.' },
            { title: 'Historic district review.', text: 'The Willamette Historic District was listed on the National Register in 2009. Any exterior alteration inside it needs city approval, and demolition is governed by its own chapter of the code.' },
            { title: 'Tree permits.', text: 'Thresholds depend on species: six inches for Oregon white oak, Pacific madrone and Pacific dogwood; twelve for all others. On wooded bluff lots these rules overlap with the erosion and river rules.' },
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
          text: 'Willamette was platted in 1893 as a fully modern town, wired for electricity, with sewers and indoor plumbing from construction. Its Stick, Queen Anne and bungalow houses sit close together on a grid with detached garages. Bolton was platted in 1896.',
        },
        { type: 'image', slot: 'willamette-house', caption: 'A Willamette district Queen Anne or bungalow on the grid' },
        {
          type: 'p',
          text: 'Holly Grove and the Moody subdivisions followed in the 1920s and 1930s with bungalows, English cottages and early ranches; Cedaroak, Robinwood and Marylhurst brought attached garages and auto-oriented layouts. Interstate 205 in the early 1970s brought the largest wave of building, and development pressure along Willamette Drive has since led to conversion and demolition of older houses.',
        },
      ],
    },
    {
      id: 'getting-around',
      heading: 'Getting around',
      blocks: [
        {
          type: 'p',
          text: 'Highway 43 runs along the riverbank and is two lanes through much of the city, which is the main constraint on commuting. I-205 crosses the east side, and the 1922 Oregon City Bridge carries Highway 43 traffic across the river. There is no light rail.',
        },
        { type: 'image', slot: 'highway-43', caption: 'Highway 43 along the river, or the Oregon City Bridge' },
        {
          type: 'p',
          text: 'Bus service was reduced on 23 August 2026. Line 153 through Stafford and Salamo was eliminated for low ridership, leaving the hillside neighborhoods off Salamo Road without bus service; line 35 still runs the Highway 43 corridor serving Bolton, Robinwood and Cedaroak. References to line 154 are out of date.',
        },
      ],
    },
    {
      id: 'parks-daily-life',
      heading: 'Parks and amenities',
      blocks: [
        {
          type: 'p',
          text: 'The city has thirty-one park sites. Mary S. Young State Recreation Area covers about 128 acres on the Willamette, donated in 1973, with more than five miles of trail and an off-leash area. Camassia Nature Preserve is 22.5 acres owned by The Nature Conservancy, on a rocky plateau scoured by the Missoula Floods, with rare plants.',
        },
        { type: 'image', slot: 'mary-s-young', caption: 'Mary S. Young park, Camassia Preserve, or Historic Willamette Main Street' },
        {
          type: 'p',
          text: 'Wilderness Park covers 51.4 acres and Willamette Park 22.5 acres at the river confluence. Historic Willamette Main Street on Willamette Falls Drive is the walkable commercial district and is in the middle of a streetscape project. The falls, the largest in the northwest by volume, are best seen from the Oregon City side; the locks have been closed since 2011.',
        },
      ],
    },
  ],
};

export default guide;
