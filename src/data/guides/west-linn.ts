import type { Guide } from './types';

const guide: Guide = {
  slug: 'west-linn',
  number: '15',
  category: 'clackamas-county',
  title: 'West Linn',
  eyebrow: 'Clackamas County · Neighborhood Guide',
  summary:
    'A city of separate old neighbourhoods stitched together by annexation and the freeway, on bluffs above the Willamette where river and landslide rules shape a lot more than zoning does.',
  lede:
    'Built on bluffs above two rivers, at the place where American long-distance electricity began. West Linn is a city of separate old neighbourhoods — Willamette, Bolton, Robinwood, Cedaroak — stitched together by annexation and then by the freeway. The geology and the river rules shape what you can do with a lot here more than the zoning does.',
  hero: { slot: 'west-linn-bluff', caption: 'West Linn · the bluffs above the Willamette' },
  stats: [
    { value: '1889', label: 'The first long-distance transmission of electricity in the United States' },
    { value: '1913', label: 'West Linn incorporated, consolidating four separate settlements' },
    { value: '27,601', label: 'Population, Portland State estimate for 2025' },
    { value: '$842,442', label: 'Median sale, three months to August 2026, on 124 sales' },
  ],
  statsNote:
    "The price is Redfin's median closed sale across the three months to August 2026, on 124 sales — enough volume to be stable. Population is the Portland State Population Research Center estimate for 2025; the city's own tourism pages still cite a figure several thousand lower. Ask for an address-level analysis before pricing.",
  sections: [
    {
      id: 'history',
      heading: 'How it came to be here',
      blocks: [
        {
          type: 'p',
          text: 'Robert Moore settled the Willamette side in the 1840s, and the town on his claim was renamed Linn City in 1845 after Senator Lewis F. Linn. It did not last: Linn City and neighbouring Multnomah City were both destroyed by fire and flood in 1861.',
        },
        {
          type: 'p',
          text: 'What rebuilt the place was the falls. In 1889 the Willamette Falls Electric Company ran a fourteen-mile line to Portland — the first long-distance transmission of electrical energy in the United States — and a pulp and paper mill opened the same year. West Linn incorporated in 1913, consolidating West Oregon City, Bolton, Sunset and Willamette Heights; the town of Willamette merged in 1916 over water supply.',
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
      heading: 'What to check before you buy here',
      blocks: [
        {
          type: 'list',
          items: [
            { title: 'Slope and landslide hazard.', text: 'The city sits on bluffs, and state landslide mapping covers it across three quadrangles. West Linn strengthened geotechnical and surface-water review by ordinance in 2017. Confirm the thresholds with planning before designing.' },
            { title: 'Three separate river overlays.', text: 'Flood management, river greenway and water resource area permits can all apply to one lot. The published water resource map is explicitly not suitable for site-specific decisions — boundaries need a staff visit.' },
            { title: 'Historic district review.', text: 'The Willamette Historic District was listed on the National Register in 2009. Inside it, any exterior alteration needs city approval, and demolition runs through its own chapter of the code.' },
            { title: 'Tree permits are species-dependent.', text: 'Six inches for Oregon white oak, Pacific madrone and Pacific dogwood; twelve for everything else. On a wooded bluff lot this collides directly with the erosion and river rules.' },
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
          text: 'Older and more varied than the suburban label suggests. Willamette was platted in 1893 as a fully modern town — wired for electricity, with sewers and indoor plumbing from construction — and its Stick, Queen Anne and bungalow houses sit close together on a firm grid with detached garages. Bolton was platted in 1896.',
        },
        { type: 'image', slot: 'willamette-house', caption: 'A Willamette district Queen Anne or bungalow on the grid' },
        {
          type: 'p',
          text: 'Holly Grove and the Moody subdivisions followed in the 1920s and 1930s with bungalows, English cottages and early ranches; Cedaroak, Robinwood and Marylhurst brought attached garages and auto-oriented layouts. Interstate 205 in the early 1970s drove the largest wave, and pressure along Willamette Drive has converted and demolished older houses since.',
        },
      ],
    },
    {
      id: 'getting-around',
      heading: 'Getting around',
      blocks: [
        {
          type: 'p',
          text: 'Highway 43 runs the riverbank and is two lanes through much of the city, which is the single most important commute fact here. I-205 crosses the east side, and the 1922 Oregon City Bridge carries Highway 43 traffic across the river. There is no light rail.',
        },
        { type: 'image', slot: 'highway-43', caption: 'Highway 43 along the river, or the Oregon City Bridge' },
        {
          type: 'p',
          text: 'Bus service thinned on 23 August 2026. Line 153 through Stafford and Salamo was eliminated for low ridership, which took the bus away from the hillside neighbourhoods off Salamo Road; line 35 still runs the Highway 43 corridor serving Bolton, Robinwood and Cedaroak. Any guide citing line 154 is out of date.',
        },
      ],
    },
    {
      id: 'parks-daily-life',
      heading: 'Parks and daily life',
      blocks: [
        {
          type: 'p',
          text: 'Thirty-one park sites. Mary S. Young State Recreation Area runs to about 128 acres on the Willamette, donated in 1973, with more than five miles of trail and an off-leash area. Camassia Nature Preserve is 22.5 acres owned by The Nature Conservancy on a rocky plateau scoured by the Missoula Floods, with rare plants.',
        },
        { type: 'image', slot: 'mary-s-young', caption: 'Mary S. Young park, Camassia Preserve, or Historic Willamette Main Street' },
        {
          type: 'p',
          text: 'Wilderness Park covers 51.4 acres and Willamette Park 22.5 at the river confluence. Historic Willamette Main Street on Willamette Falls Drive is the walkable commercial district, currently mid-streetscape project. The falls themselves — the largest in the northwest by volume — are best seen from the Oregon City side; the locks have been closed since 2011.',
        },
      ],
    },
  ],
};

export default guide;
