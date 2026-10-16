import { GetCashItem, SmartObjectiveElement, PeelFrameworkElement } from '@/types/curriculum';

export const GET_CASH_ITEMS: GetCashItem[] = [
  {
    letter: 'G',
    factorTitle: 'Growth',
    definition: '**Capital appreciation**; growing the ==market equity value== of the enterprise beyond *initial setup investment* to <u>maximize enterprise valuation</u>.',
    examPhrasing: 'Aiming for **capital growth** and ==enterprise value appreciation== upon *future sale or IPO*.',
    realWorldVignette: 'A software engineer reinvests all operating cash flows for 5 years to build a $50M enterprise valuation before an acquisition.',
    speedMatchQuote: 'I built this company from zero so that its equity value would make me financially free when I sell.'
  },
  {
    letter: 'E',
    factorTitle: 'Earnings',
    definition: 'Generating **financial returns and operational profits** that <u>substantially exceed</u> traditional *salaried employee wages* through ==direct equity ownership==.',
    examPhrasing: 'The expectation that prospective ==net profits== will exceed <u>corporate employee remuneration</u>.',
    realWorldVignette: 'A senior commercial lawyer resigns from a corporate firm to establish her own boutique partnership, capturing 100% of client fees.',
    speedMatchQuote: 'Why take a capped monthly wage when my own business can generate three times that in profit?'
  },
  {
    letter: 'T',
    factorTitle: 'Transference & Inheritance',
    definition: 'Building a **lasting commercial family asset** that can be <u>transferred to generational heirs</u>, ensuring ==intergenerational wealth continuity== for *future descendants*.',
    examPhrasing: 'Creating a *generational asset* to ==transfer wealth and business legacy== to children.',
    realWorldVignette: 'A master baker establishes an artisanal French bakery with the explicit goal of handing operational ownership to his children.',
    speedMatchQuote: 'I am working 14 hours a day to build a family business that my daughters will inherit.'
  },
  {
    letter: 'C',
    factorTitle: 'Challenge',
    definition: 'The **psychological thrill**, intellectual demand, and *personal fulfillment* of <u>overcoming business obstacles</u> to achieve ==creative market breakthroughs==.',
    examPhrasing: 'The personal motivation and ==psychological satisfaction== of <u>solving complex market problems</u>.',
    realWorldVignette: 'A serial entrepreneur launches a sustainable packaging company purely out of passion for solving complex supply chain bottlenecks.',
    speedMatchQuote: 'I thrive on the adrenaline of solving market problems and building something against all odds.'
  },
  {
    letter: 'A',
    factorTitle: 'Autonomy',
    definition: '**Complete independence**, self-direction, and <u>freedom from answering to corporate superiors</u> ("*being one\'s own boss*") through ==unilateral decision-making==.',
    examPhrasing: 'Desire for ==self-direction, personal independence==, and *unilateral operational decision-making*.',
    realWorldVignette: 'A digital product designer leaves an agency to set her own hours, choose client projects, and work remotely from anywhere.',
    speedMatchQuote: 'I was sick of corporate managers telling me what hours to work and micromanaging my creative decisions.'
  },
  {
    letter: 'S',
    factorTitle: 'Security',
    definition: 'Creating **personal job stability** and <u>shielding oneself from corporate downsizing</u> to ensure ==long-term financial security== free from *external managerial control*.',
    examPhrasing: 'Escaping the vulnerability of corporate layoffs to secure ==self-determined employment stability==.',
    realWorldVignette: 'An automotive plant manager laid off during corporate restructuring uses redundancy pay to open an independent mechanical repair center.',
    speedMatchQuote: 'After getting laid off twice during corporate mergers, I decided I would never let a boss fire me again.'
  },
  {
    letter: 'H',
    factorTitle: 'Hobbies',
    definition: '**Monetizing a personal recreation**, creative talent, or *athletic passion* into a <u>viable commercial enterprise</u> that generates ==sustainable market revenues==.',
    examPhrasing: 'Commercializing a *personal creative interest* into a ==viable revenue-generating business==.',
    realWorldVignette: 'A passionate home brewer turns a weekend craft-beer hobby into a commercial microbrewery and taproom.',
    speedMatchQuote: 'I loved baking sourdough bread on weekends so much that I decided to turn my passion into a living.'
  }
];

export const SMART_OBJECTIVES: SmartObjectiveElement[] = [
  {
    letter: 'S',
    term: 'Specific',
    definition: '**Focused, clear, and unambiguous**; defines <u>exact operational targets</u> with ==zero ambiguity==, avoiding *vague generalizations*.',
    goodExample: 'Increase sales of electric mountain bikes in the French market...',
    badExample: 'Do better in sales...'
  },
  {
    letter: 'M',
    term: 'Measurable',
    definition: '**Quantified with precise metrics**; tracking ==numerical KPIs== to ensure <u>progress is verified objectively</u> against *financial targets*.',
    goodExample: '...by 15% in unit sales volume...',
    badExample: '...sell a lot more bikes...'
  },
  {
    letter: 'A',
    term: 'Achievable',
    definition: '**Realistic given resource limits**; agreed upon by <u>departmental teams and managers</u> to maintain *high motivation* while ==remaining operationally feasible==.',
    goodExample: '...supported by expanding our certified dealer network by 10 outlets...',
    badExample: '...grow sales by 10,000% next week...'
  },
  {
    letter: 'R',
    term: 'Realistic / Relevant',
    definition: '**Strategically aligned with corporate mission**; adequately resourced with *financial capital* to ensure the <u>objective directly addresses</u> ==organizational strategic priorities==.',
    goodExample: '...funded by our €500k retained earnings marketing budget...',
    badExample: '...without spending any marketing money...'
  },
  {
    letter: 'T',
    term: 'Time-bound',
    definition: '**Anchored to an explicit completion deadline**; establishing a <u>clear chronological milestone</u> with ==firm target dates== to prevent *procrastination and project drift*.',
    goodExample: '...by 31 December 2026.',
    badExample: '...someday in the future.'
  }
];

export const PEEL_FRAMEWORK: PeelFrameworkElement[] = [
  {
    token: 'P',
    name: 'Point',
    colorCode: '#1E40AF', // blue
    description: '**Explicit statement** of the core ==business concept or analytical argument==, answering the <u>specific examination prompt</u> with *precise syllabus terminology*.',
    sentenceStarters: [
      'One major strategic advantage to EXP is...',
      'A primary reason for establishing clear objectives is...',
      'In the Ansoff Matrix, this strategy is classified as...'
    ]
  },
  {
    token: 'E1',
    name: 'Evidence',
    colorCode: '#065F46', // emerald
    description: '**Direct quotation, financial figure, or contextual fact** cited <u>directly from the stimulus case study</u> to ==substantiate the argument== with *empirical evidence*.',
    sentenceStarters: [
      'In the case of Lenovo, acquiring IBM\'s PC division...',
      'As demonstrated by EXP employing 12 workers and running near full capacity...',
      'Evidence from the case highlights that...'
    ]
  },
  {
    token: 'E2',
    name: 'Explanation',
    colorCode: '#92400E', // amber
    description: '**Theoretical chain of cause-and-effect** detailing the *operational mechanism*, <u>tracing business impacts</u> to reveal ==strategic consequences on performance==.',
    sentenceStarters: [
      'This occurs because...',
      'This leads to increased efficiency as...',
      'Consequently, the business is able to...'
    ]
  },
  {
    token: 'L',
    name: 'Link',
    colorCode: '#6B21A8', // purple
    description: '**Concluding synthesis** directly answering the prompt and <u>reinforcing the command term</u>, providing an ==evaluative conclusion== aligned with *overarching business goals*.',
    sentenceStarters: [
      'Therefore, this operational division of labor protects EXP\'s reputation for punctuality.',
      'This directly ensures the firm maintains long-term brand equity and customer loyalty.',
      'Hence, this strategy aligns with the overarching corporate objective of...'
    ]
  }
];
