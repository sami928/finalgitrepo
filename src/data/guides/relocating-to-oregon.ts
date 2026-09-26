import type { Guide } from './types';

const guide: Guide = {
  slug: 'relocating-to-oregon',
  number: '02',
  category: 'relocation',
  title: 'Relocating to Oregon',
  eyebrow: 'A Guide for Out-of-State Buyers',
  summary:
    'One state, several very different regions — what the taxes actually cost you, where the rain really falls, and the thirty-day clock that starts the day you arrive.',
  lede:
    'One state, several very different regions. What the taxes actually cost you, where the rain really falls, and the thirty-day clock that starts the day you arrive.',
  hero: { slot: 'cover-oregon' },
  stats: [
    { value: '98,379', label: 'Square miles — 9th largest state' },
    { value: '~4.3M', label: 'Residents statewide' },
    { value: '363 mi', label: 'Of public coastline' },
    { value: '0%', label: 'State sales tax' },
  ],
  sections: [
    {
      id: 'why-oregon',
      kicker: '01 · Overview',
      heading: 'Why Oregon',
      blocks: [
        {
          type: 'p',
          text: "People move to Oregon for a specific trade: less sprawl, more access. A state the size of the United Kingdom holds fewer than four and a half million people, and almost all of the good parts — alpine, high desert, vineyard, rainforest, 363 miles of coastline — sit within a half-day's drive of one another.",
        },
        {
          type: 'p',
          text: 'What surprises newcomers is how little of Oregon resembles the picture they arrived with. The rainy, evergreen version is real, but it stops at the Cascade crest. East of that ridge the state is high desert, and Bend gets less annual rain than Phoenix gets in a wet year.',
        },
        {
          type: 'p',
          text: 'This guide is built for people deciding from a distance. It covers the regions, what the tax picture really looks like once you account for all three taxes, and what has to happen in your first thirty days.',
        },
        {
          type: 'cards',
          columns: 3,
          items: [
            { title: 'No Sales Tax', text: 'One of only five states without one. It changes how you budget for everything from a car to a sofa.' },
            { title: 'Every Beach is Public', text: 'The 1967 Beach Bill made the entire coastline public to the high-tide line. No private beaches, anywhere.' },
            { title: 'Two Climates', text: 'The Cascades split the state into wet west and dry east. Choosing a side is the first real decision.' },
          ],
        },
        {
          type: 'image',
          slot: 'oregon-overview',
          caption: 'Mount Hood from Trillium Lake — the Cascades, an hour from Portland',
        },
      ],
    },
    {
      id: 'the-regions',
      kicker: '02 · Orientation',
      heading: 'The Regions',
      blocks: [
        {
          type: 'p',
          text: 'Oregon is usually described in a handful of regions, and they differ from one another more than most states differ from their neighbors. The Cascade Range runs north to south down the middle and divides the wet, green, densely populated third from the dry, open two-thirds east of it.',
        },
        {
          type: 'p',
          text: 'County boundaries from the Bureau of Land Management, drawn on an Albers equal-area projection, so the area each region covers is shown true. Regional definitions vary between sources; county lines do not.',
        },
        {
          type: 'list',
          items: [
            { title: 'Portland Metro.', text: 'The economic center. Walkable neighborhoods, the largest job market, an international airport.' },
            { title: 'Northwest Oregon & the Willamette Valley.', text: 'Salem, Eugene, Corvallis. Farmland, wine country, the major universities — and the northern coast.' },
            { title: 'Columbia River Gorge.', text: 'Hood River and the waterfall corridor. A national scenic area an hour from Portland.' },
            { title: 'Central Oregon.', text: 'Bend and Redmond. High desert, dry and sunny, with skiing and rivers close by.' },
            { title: 'Southern Oregon.', text: 'Medford, Ashland, Grants Pass. Warmer summers, the Rogue Valley, and the southern coast.' },
            { title: 'Eastern Oregon.', text: 'Ranch country and wide horizons. The most land for the money anywhere in the state.' },
          ],
        },
        {
          type: 'p',
          text: 'The Oregon Coast — 363 miles, publicly owned end to end — is a landform rather than one of these regions: it runs the length of the state through both the Northwest and Southern groupings.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Start With Climate', text: 'Wet and green or dry and sunny is the decision everything else follows from, and it is the one people most often get wrong from a distance.' },
            { title: 'Then Access', text: 'How close you need to be to a major airport and a full-service hospital narrows the map faster than any other single question.' },
            { title: 'Then Budget', text: 'The same money buys very different homes across these regions. Sequence it last, once the first two have shortened the list.' },
          ],
        },
      ],
    },
    {
      id: 'west-of-the-cascades',
      kicker: '03 · Regions',
      heading: 'West of the Cascades',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              title: 'Portland Metro',
              tag: 'Northwest',
              image: 'portland-metro',
              text: "Roughly half the state's population and the bulk of its jobs. A city of distinct neighborhoods rather than one core, with light rail, a dense restaurant scene, and Forest Park inside the city limits.",
            },
            {
              title: 'Willamette Valley',
              tag: 'West Central',
              image: 'willamette-valley',
              text: 'The agricultural heart, and the reason the Oregon Trail ended here. Salem, Eugene and Corvallis anchor it; Pinot Noir country runs along the western edge. Lower prices than Portland, slower pace.',
            },
            {
              title: 'Oregon Coast',
              tag: 'West',
              image: 'oregon-coast',
              text: 'Every foot of it public, by law, since 1967. Astoria at the mouth of the Columbia down to Brookings near California. Cooler and far wetter than inland — Astoria averages over 70 inches of rain a year.',
            },
            {
              title: 'Columbia River Gorge',
              tag: 'North',
              image: 'columbia-gorge',
              text: 'A national scenic area where the Columbia cuts through the Cascades, producing waterfalls on the west end and windsurfing at Hood River. Close enough to Portland to commute, distinct enough to feel rural.',
            },
          ],
        },
        {
          type: 'callout',
          title: 'A Note on Commuting',
          text: "Oregon's mountain passes are genuine winter weather. If a shorter commute matters to you, the Cascade crest is a harder line than the mileage suggests — a 90-minute summer drive can double in January.",
        },
      ],
    },
    {
      id: 'east-of-the-cascades',
      kicker: '04 · Regions',
      heading: 'East of the Cascades',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Central Oregon',
              tag: 'Bend & Redmond',
              image: 'central-oregon',
              text: "High desert at 3,600 feet, with skiing at Mount Bachelor, a river running through town, and roughly a quarter of Portland's annual rainfall. The fastest-growing part of the state, and the most expensive — Bend's median sale price runs well above Portland's.",
            },
            {
              title: 'Southern Oregon',
              tag: 'Rogue Valley & Ashland',
              image: 'southern-oregon',
              text: "Warmer and drier than the Willamette Valley, with a long growing season and a real theatre town in Ashland. Medford is the commercial hub. Crater Lake sits at the region's northern edge.",
            },
            {
              title: 'Eastern Oregon',
              tag: 'Ranch Country',
              image: 'eastern-oregon',
              text: "Two-thirds of the state's land and a small fraction of its people. Pendleton, Baker City and the Wallowa Mountains. Land goes furthest here by a wide margin, with the trade-off being distance from major medical centers and airports.",
            },
          ],
        },
      ],
    },
    {
      id: 'tax-picture',
      kicker: '05 · Money',
      heading: 'The Tax Picture',
      blocks: [
        {
          type: 'p',
          text: '"No sales tax" is the fact everyone arrives knowing, and on its own it is misleading. Oregon funds itself through income tax instead. Whether that helps or hurts you depends almost entirely on your income and how much you spend.',
        },
        {
          type: 'p',
          text: 'Oregon vs. where buyers commonly move from: three separate measures, each on its own scale — they are not comparable to one another, only across states.',
        },
        {
          type: 'table',
          columns: ['State', 'Combined sales tax', 'Top income tax rate', 'Property tax'],
          rows: [
            ['Oregon', 'None', '9.90%', '0.79%'],
            ['California', '8.99%', '13.30%', '0.69%'],
            ['Washington', '9.51%', 'None on wages', '0.74%'],
            ['Texas', '8.20%', 'None', '1.25%'],
            ['Arizona', '8.52%', '2.50% flat', '0.43%'],
          ],
          note:
            'Combined sales tax is state plus average local rate; top income tax rate is the highest marginal bracket; property tax is the effective rate on home value. Sales and income tax rates: Tax Foundation, 2026. Effective property tax rate: Construction Coverage analysis of U.S. Census Bureau 2024 American Community Survey data. Washington levies no tax on wage income but does tax certain capital gains. Rates change; confirm your own position with a tax professional before you move.',
        },
        {
          type: 'callout',
          title: 'What This Means in Practice',
          text: 'If you are moving from Washington or Texas, you are trading no income tax for a top rate near 10 percent — usually the larger number. If you are coming from California, Oregon is likely a reduction on income and a wash on property. Retirees drawing down savings rather than earning wages tend to do well here, because the tax that bites is the one on income.',
        },
        {
          type: 'p',
          text: 'Three things the chart omits:',
        },
        {
          type: 'list',
          items: [
            { title: 'Estate tax.', text: 'Oregon taxes estates above $1 million — among the lowest thresholds in the country and far below the federal exemption. It does not pass automatically between spouses.' },
            { title: 'Local option levies.', text: 'Property tax varies by district, so two addresses a mile apart can carry different rates.' },
            { title: 'Vehicle fees.', text: 'Registration is priced partly on fuel economy, so an efficient car is cheaper to keep on the road.' },
          ],
        },
        {
          type: 'p',
          text: 'Who tends to come out ahead:',
        },
        {
          type: 'list',
          items: [
            'Retirees and anyone living on savings rather than wages — the tax that bites here is the one on earned income.',
            'Households arriving from California, who usually see income tax fall and property tax stay roughly flat.',
            'Anyone making a large purchase after arriving, where the absence of sales tax shows up immediately.',
          ],
        },
        {
          type: 'p',
          text: 'Estate tax is a planning matter rather than a real estate one — if it may apply to you, speak with an estate attorney before establishing Oregon residency, not after.',
        },
      ],
    },
    {
      id: 'climate',
      kicker: '06 · Climate',
      heading: 'Where the Rain Actually Falls',
      blocks: [
        {
          type: 'p',
          text: 'The reputation is earned on one side of the Cascades and largely wrong on the other. Astoria, on the coast, gets close to six feet of rain a year. Bend, inland and east of the crest, gets under eleven inches.',
        },
        {
          type: 'table',
          columns: ['City', 'Region', 'Avg. annual precipitation (in)'],
          rows: [
            ['Astoria', 'Coast', '70.3'],
            ['Portland', 'Metro', '43.7'],
            ['Eugene', 'W. Valley', '40.8'],
            ['Salem', 'W. Valley', '40.1'],
            ['Medford', 'Rogue Valley', '18.4'],
            ['Pendleton', 'East', '12.8'],
            ['Bend', 'Central', '10.6'],
          ],
          note:
            '1991–2020 normals, sorted wettest to driest; Portland shown as the metro baseline. Source: NOAA National Centers for Environmental Information 1991–2020 normals, via Current Results. Medford sits west of the Cascade crest but in the Siskiyou rain shadow — which is why it reads dry despite being on the "wet" side of the state.',
        },
        {
          type: 'p',
          text: 'Days with sun, annually:',
        },
        {
          type: 'list',
          items: [
            { title: 'Portland.', text: '68 clear days, 142 with some sun. The grey is real, and it is more persistent than heavy.' },
            { title: 'Medford.', text: '117 clear days, with hot dry summers and a genuine four-season feel.' },
            { title: 'Burns and Pendleton.', text: '120 and 101 clear days. Eastern Oregon is the sunniest part of the state.' },
          ],
        },
        {
          type: 'p',
          text: 'What newcomers get wrong:',
        },
        {
          type: 'list',
          items: [
            "Portland's rain arrives as drizzle spread across many days rather than downpours. By volume it rains less here than in Miami or Houston.",
            'Summers west of the Cascades are reliably dry and mild — July and August are close to rainless.',
            'Winter in Bend means snow and sun, not grey. It is a different climate, not a milder version of the same one.',
          ],
        },
        {
          type: 'image',
          slot: 'oregon-climate',
          caption: 'A valley river running high — the wet season, November to April',
        },
      ],
    },
    {
      id: 'what-homes-cost',
      kicker: '07 · Housing',
      heading: 'What Homes Cost',
      blocks: [
        {
          type: 'p',
          text: 'Oregon is not one housing market. The statewide median sits near half a million dollars, but Bend trades at a clear premium to Portland, and Eastern Oregon at a deep discount to both.',
        },
        {
          type: 'stats',
          items: [
            { value: '$507,600', label: 'Oregon statewide median' },
            { value: '$535,509', label: 'Portland metro median' },
            { value: '$698,538', label: 'Bend median' },
          ],
          note:
            'Statewide median via Houzeo; Portland and Bend medians via Redfin, three months ending August 2026. Housing figures move quickly — ask for a current, neighborhood-level analysis rather than relying on a printed number.',
        },
        {
          type: 'p',
          text: 'What moves the number:',
        },
        {
          type: 'list',
          items: [
            { title: 'Land supply.', text: "Oregon's urban growth boundaries limit outward sprawl, which supports values inside the line and constrains building outside it." },
            { title: 'In-migration.', text: 'Central Oregon has drawn buyers from higher-cost markets for a decade, and prices reflect it.' },
            { title: 'Distance to a major airport and a full-service hospital.', text: "The two amenities that most reliably separate Oregon's price tiers." },
          ],
        },
        {
          type: 'p',
          text: 'A property tax quirk worth knowing:',
        },
        {
          type: 'list',
          items: [
            'Oregon taxes an assessed value that usually sits well below market value and, by law, rises no more than 3 percent a year.',
            'It does not reset when a home sells, unlike California. Two near-identical neighbors can owe very different amounts.',
            'So never estimate a tax bill from the purchase price. Get the actual assessed value from the county before writing an offer.',
          ],
        },
        {
          type: 'callout',
          title: 'Before You Compare to Home',
          text: 'A like-for-like comparison has to carry all three taxes, insurance and commuting cost together. Buyers arriving from no-income-tax states are usually surprised on the income side and relieved on the property side. I can run those numbers against a specific address before you travel.',
        },
        {
          type: 'image',
          slot: 'oregon-homes',
          caption: "A craftsman bungalow — the Northwest's signature early-century house",
        },
      ],
    },
    {
      id: 'the-clock-starts-on-arrival',
      kicker: '08 · Logistics',
      heading: 'The Clock Starts on Arrival',
      blocks: [
        {
          type: 'p',
          text: "Two of Oregon's requirements are legal deadlines rather than suggestions, and both land at thirty days. The sequence matters: in two parts of the state an emissions test has to happen before you can register a vehicle.",
        },
        {
          type: 'steps',
          items: [
            { title: 'Before You Move', text: 'Check whether your new address falls inside a DEQ testing boundary. It changes your registration sequence.' },
            { title: 'Day 0 — You Arrive', text: 'Residency is established, and the thirty-day clock on both DMV items begins now — not when you get to it.' },
            { title: 'Day 30 — Two Legal Deadlines', text: '1. Oregon driver license. 2. Title and register every vehicle you brought. DEQ test first if you are in the Portland metro or Medford area.' },
            { title: 'Day 90 — Settling In', text: 'Voter registration, doctors, schools and establishing domicile for tax purposes.' },
          ],
        },
        {
          type: 'callout',
          text: 'Voter registration closes 21 days before any election — a separate deadline from the two above.',
        },
        {
          type: 'p',
          text: "Deadlines per the State of Oregon and Oregon DEQ. Emissions testing applies in the Portland metropolitan and Medford–Ashland areas only; use DEQ's boundary lookup to confirm a specific address. Requirements change — verify with DMV and DEQ before relying on this.",
        },
        {
          type: 'p',
          text: 'To register a vehicle you drove in:',
        },
        {
          type: 'list',
          items: [
            'The original out-of-state title, plus any lien releases or bills of sale from previous owners.',
            'A VIN inspection — required for out-of-state titles, and done at your DMV appointment.',
            'An odometer disclosure, where the vehicle requires one.',
            'A passing DEQ test first, if the address sits inside a testing boundary.',
          ],
        },
        {
          type: 'p',
          text: 'To prove you live here:',
        },
        {
          type: 'list',
          items: [
            'You must be a resident of, or domiciled in, Oregon to register a vehicle — proof can include tax returns or military documents.',
            'Title, registration and plate fees are due at the same visit; DMV publishes a fee calculator for passenger vehicles.',
            'Appointments fill up around Portland. Book before you arrive rather than after, or the thirty days disappear quickly.',
          ],
        },
        {
          type: 'callout',
          title: 'The One That Catches People',
          text: 'If you are moving into the Portland metro or the Medford–Ashland area, the emissions test is a prerequisite for registration, not a follow-up to it. Booking the DMV appointment first and discovering the test second is the most common way the thirty-day window gets missed.',
        },
      ],
    },
    {
      id: 'getting-set-up',
      kicker: '09 · Practicalities',
      heading: 'Getting Set Up',
      blocks: [
        {
          type: 'list',
          items: [
            { title: 'Emissions Testing.', text: 'Required in the Portland metro and Medford–Ashland areas, and it has to pass before a vehicle can be registered — then every two years after that. Outside those boundaries, no test is needed at all.' },
            { title: 'Someone Else Pumps It.', text: 'Oregon banned self-service fuel for decades. The rules have loosened, but across much of the state an attendant still fills the tank. It catches every newcomer exactly once.' },
            { title: 'Vote by Mail.', text: 'Oregon has run elections entirely by mail since 2000 and registers voters automatically through the DMV. Ballots arrive at home; registration closes 21 days before an election.' },
            { title: 'The Price Is the Price.', text: 'With no sales tax, the number on the tag is the number you pay. Buyers relocating from high-tax states notice it most on vehicles, appliances and furnishing a new home.' },
            { title: 'Mountain Passes.', text: 'If your commute or family visits cross the Cascades, traction devices and occasional winter closures become a real planning factor from November through March.' },
            { title: 'Establishing Domicile.', text: 'If you keep property in another state, the date you become an Oregon resident matters for that year\'s filing. Worth a conversation with an accountant before the move rather than after.' },
          ],
        },
        {
          type: 'image',
          slot: 'oregon-lifestyle',
          caption: 'Portland after dark from the West Hills',
        },
      ],
    },
    {
      id: 'next-steps',
      kicker: 'Next Steps',
      heading: 'Moving from out of state is a different kind of search.',
      blocks: [
        {
          type: 'p',
          text: 'You are choosing a region before you choose a house, often without having stood in either one. That changes the order of the work — and it is the part I do most. Tell me what your week needs to look like and we will narrow the map before you book a flight.',
        },
        {
          type: 'list',
          items: [
            'Region and climate shortlist',
            'All-in cost comparison against your current state',
            'Remote touring and video walkthroughs',
            'Lender, inspector and mover referrals',
            'A relocation trip planned around real listings',
            'Assessed-value check before every offer',
          ],
        },
      ],
    },
  ],
  disclaimer:
    'Tax, legal and regulatory details in this guide are general and current as of publication; verify with the relevant agency or a qualified professional before acting on them. Information deemed reliable but not guaranteed and subject to change.',
};

export default guide;
