import type { Guide } from './types';

const guide: Guide = {
  slug: 'goose-hollow',
  number: '07',
  category: 'portland-neighborhoods',
  title: 'Goose Hollow',
  eyebrow: 'Portland · Neighborhood Guide',
  summary:
    'Southwest Portland neighborhood between downtown and the West Hills, on a filled-in creek gulch, with Providence Park and housing from 1890s King’s Hill mansions to recent towers.',
  lede:
    'Goose Hollow is the most urban neighborhood in Southwest Portland, located between downtown and the West Hills on a filled-in creek gulch. It contains Providence Park, on the same block since 1893, and housing ranging from 1890s mansions on King’s Hill to towers built in the last decade; two MAX stations make living without a car practical.',
  hero: { slot: 'providence-park', caption: 'Providence Park, 1844 SW Morrison · Timbers and Thorns' },
  stats: [
    { value: '1845', label: "Lownsdale's tannery, the first claim here" },
    { value: '2', label: 'MAX stations: Providence Park and Goose Hollow / SW Jefferson' },
    { value: '24,686', label: 'Seats at Providence Park, on the block since 1893' },
    { value: '1,579', label: 'Students at Lincoln High, rebuilt and reopened 2023' },
  ],
  sections: [
    {
      id: 'history',
      heading: 'History',
      blocks: [
        {
          type: 'p',
          text: 'Daniel Lownsdale filed the first claim in 1845 and built a tannery roughly where the stadium now stands. For a few years it was the only tannery north of Mexico and west of the Rockies; he sold it in 1848. The tannery gave Tanner Creek its name, and the creek formed the hollow: a ravine twenty blocks long, fifty feet deep and two blocks wide, running toward the river. It was piped underground and filled in around the turn of the century, which explains the abrupt change from level ground to steep slopes.',
        },
        {
          type: 'p',
          text: 'The name comes from geese that residents let run loose in the gulch, and from the resulting dispute, the "War about Geese" of the 1870s, a phrase coined by a police chief and printed in the Oregonian. The name fell out of use until 1967, when Bud Clark, later mayor, bought Ann’s Tavern and renamed it the Goose Hollow Inn. In the 1960s, construction of Interstate 405 removed large parts of the neighborhood.',
        },
        {
          type: 'timeline',
          items: [
            { year: '1890', text: 'A cable car trestle through Cable Car Canyon carries passengers up the hill until 1905.' },
            { year: '1926', text: 'Multnomah Stadium opens on 9 October, on a field in use since 1893. After five name changes, it is now Providence Park.' },
            { year: '1960s', text: 'I-405 is built along the eastern edge, and Canyon Road is raised onto a structure above the old route.' },
            { year: '2019', text: "An $85 million expansion adds three decks of seats over the stadium's east end." },
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
            { title: 'The building, not just the unit.', text: 'Most homes sold here are condominiums. Review the HOA financials, reserve study and meeting minutes.' },
            { title: 'Match-day impact.', text: 'Street closures, parking restrictions and noise vary considerably by block. Visit on a match day and on a non-match day.' },
            { title: 'Slope, fill and drainage.', text: 'The gulch was filled and the hills are steep. Older houses above the flat ground warrant a close structural inspection.' },
            { title: 'Freeway and tunnel noise.', text: 'I-405 and the US 26 approach are often closer than listing photos suggest.' },
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
          text: "Three types of housing sit within a few blocks of each other. King's Hill and the streets rising toward Vista have the oldest: large 1890s and early-1900s houses, some subdivided, several on the National Register. Mid-century and 1970s apartment blocks occupy the flat ground below. Since the 2000s, towers and mid-rise condominiums have been built along the I-405 edge and around the stadium.",
        },
        {
          type: 'p',
          text: 'Goose Hollow has long been majority-renter, so the for-sale market is smaller than the population suggests and consists mostly of condominiums. As a result, HOA documents, reserve studies and building history are more significant to buyers than lot lines.',
        },
        { type: 'image', slot: 'kings-hill', caption: "A King's Hill street — historic houses, or the Vista approach" },
      ],
    },
    {
      id: 'getting-around',
      heading: 'Getting around',
      blocks: [
        {
          type: 'p',
          text: 'Two MAX stations are in the neighborhood, Providence Park and Goose Hollow / SW Jefferson St, a few minutes from downtown. US 26 leaves through the Vista Ridge Tunnels toward the westside, and I-405 runs along the eastern boundary.',
        },
        {
          type: 'p',
          text: 'Walking is practical on the flat ground but steep uphill; the neighborhood rises from the valley floor to the Tualatin Mountains over a short distance. Washington Park forms the western boundary, so the Rose Garden, the arboretum and the zoo are within walking distance, uphill.',
        },
        { type: 'image', slot: 'max-platform', caption: 'Goose Hollow MAX platform, or a streetscape with the train' },
      ],
    },
    {
      id: 'daily-life',
      heading: 'Daily life',
      blocks: [
        {
          type: 'p',
          text: 'The Timbers and Thorns both play at Providence Park. On match days the neighborhood fills, streets close and bars run at capacity. The Multnomah Athletic Club is next to the stadium, and Lincoln High School, founded in 1869, reopened in a new building in 2023.',
        },
        { type: 'image', slot: 'west-hills-view', caption: 'Vista Bridge, the West Hills slope, or a Goose Hollow rooftop view' },
        {
          type: 'p',
          text: 'The Goose Hollow Inn remains in business on the same corner. Most other everyday shopping and services are downtown or in Nob Hill, both within walking distance, and the neighborhood is quiet between matches.',
        },
      ],
    },
  ],
  disclaimer:
    "Neighborhood boundaries and school assignments vary by address and change over time; verify for a specific property. Goose Hollow's for-sale market is small and mostly condominiums, so published neighborhood medians swing sharply on low sale volume and should not be read as a trend.",
};

export default guide;
