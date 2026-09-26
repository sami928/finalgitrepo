import type { Guide } from './types';

const guide: Guide = {
  slug: 'goose-hollow',
  number: '07',
  category: 'portland-neighborhoods',
  title: 'Goose Hollow',
  eyebrow: 'Portland · Neighborhood Guide',
  summary:
    'The most urban address in Southwest Portland — a filled-in creek gulch below a stadium that has stood on the same block since 1893, with housing running from 1890s King’s Hill mansions to towers built last decade.',
  lede:
    'The most urban address in Southwest Portland, and the one with the steepest history. Goose Hollow sits in the crease between downtown and the West Hills — a filled-in creek gulch, a stadium that has been on the same block since 1893, and a housing stock that runs from 1890s mansions on King’s Hill to towers built last decade. It is the rare Portland neighborhood where you can live without a car and not feel like you are making a point.',
  hero: { slot: 'providence-park', caption: 'Providence Park, 1844 SW Morrison · Timbers and Thorns' },
  stats: [
    { value: '1845', label: "Lownsdale's tannery, the first claim here" },
    { value: '2', label: 'MAX stations — Providence Park and Goose Hollow / SW Jefferson' },
    { value: '24,686', label: 'Seats at Providence Park, on the block since 1893' },
    { value: '1,579', label: 'Students at Lincoln High, rebuilt and reopened 2023' },
  ],
  sections: [
    {
      id: 'history',
      heading: 'How it came to be here',
      blocks: [
        {
          type: 'p',
          text: 'Daniel Lownsdale filed the first claim in 1845 and built a tannery roughly where the stadium now stands — for a few years the only one north of Mexico and west of the Rockies. He sold it in 1848. The tannery gave Tanner Creek its name, and the creek carved the hollow: a ravine twenty blocks long, fifty feet deep and two blocks wide, running down toward the river. It was piped underground and filled in around the turn of the century, which is why the ground here reads flat until it suddenly does not.',
        },
        {
          type: 'p',
          text: 'The geese came from the residents who let them run loose in the gulch, and the name from the dispute that followed — the "War about Geese" of the 1870s, coined by a police chief and printed in the Oregonian. The name faded until 1967, when Bud Clark, later mayor, bought Ann’s Tavern and renamed it the Goose Hollow Inn. Between those two dates the neighborhood lost a great deal: Interstate 405 went through in the 1960s and took large pieces of it with them.',
        },
        {
          type: 'timeline',
          items: [
            { year: '1890', text: 'A cable car trestle runs through Cable Car Canyon, carrying the city up the hill until 1905.' },
            { year: '1926', text: 'Multnomah Stadium opens on 9 October, on a field in use since 1893. Five names later, it is Providence Park.' },
            { year: '1960s', text: 'I-405 is cut through the eastern edge and Canyon Road is lifted onto structure above the old route.' },
            { year: '2019', text: "An $85 million expansion stacks three decks of new seats over the stadium's east end." },
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
            { title: 'The building, not just the unit.', text: 'Most of what sells here is condominium. Read the HOA financials, the reserve study and the minutes.' },
            { title: 'Match-day impact.', text: 'Street closures, parking restrictions and noise vary enormously block to block. Visit once on a match day and once not.' },
            { title: 'Slope, fill and drainage.', text: 'The gulch was filled and the hills are steep. Older houses above the flat deserve a close structural look.' },
            { title: 'Freeway and tunnel noise.', text: 'I-405 and the US 26 approach are both closer than they look from the listing photos.' },
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
          text: "Three distinct stocks sit within a few blocks of each other. King's Hill and the streets climbing toward Vista carry the oldest of it — large 1890s and early-1900s houses, some subdivided, several on the National Register. Below them, mid-century and 1970s apartment blocks fill the flat ground. And since the 2000s, towers and mid-rise condominiums have gone up along the I-405 edge and around the stadium.",
        },
        {
          type: 'p',
          text: 'Goose Hollow has long been renter-majority, so the for-sale market is smaller than the population suggests and skews heavily to condominiums. That shapes everything downstream: HOA documents, reserve studies and building history matter more here than lot lines do.',
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
          text: 'Two MAX stations sit inside the neighborhood — Providence Park and Goose Hollow / SW Jefferson St — putting downtown a few minutes away without a car. US 26 leaves through the Vista Ridge Tunnels toward the westside, and I-405 runs along the eastern boundary.',
        },
        {
          type: 'p',
          text: 'Walking is genuinely practical on the flat, and genuinely a climb the moment you turn uphill; the neighborhood runs from valley floor to the Tualatin Mountains in a short horizontal distance. Washington Park is the western boundary, which means the Rose Garden, the arboretum and the zoo are close enough to reach on foot if you are willing to earn it.',
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
          text: 'Match days set the rhythm. The Timbers and Thorns both play at Providence Park, and on those afternoons the neighborhood fills, the streets close and the bars run at capacity — wonderful if that is what you came for, and worth understanding if it is not. The Multnomah Athletic Club sits alongside the stadium, and Lincoln High School, founded in 1869, reopened in a new building in 2023.',
        },
        { type: 'image', slot: 'west-hills-view', caption: 'Vista Bridge, the West Hills slope, or a Goose Hollow rooftop view' },
        {
          type: 'p',
          text: 'The Goose Hollow Inn still trades on the corner that gave the neighborhood its name back. Beyond it, most of what residents use day to day is downtown or in Nob Hill, both within walking distance, which is part of why this pocket stays quiet between matches.',
        },
      ],
    },
  ],
  disclaimer:
    "Neighborhood boundaries and school assignments vary by address and change over time; verify for a specific property. Goose Hollow's for-sale market is small and condominium-weighted, so published neighborhood medians swing sharply on low sale volume and should not be read as a trend.",
};

export default guide;
