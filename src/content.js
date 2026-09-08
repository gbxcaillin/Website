// All site copy lives here so it can be edited without touching components.
// Copy rule: no em dashes. Use commas, periods, en dashes or restructured sentences.

export const site = {
  name: 'GBX Professional Services',
  legalName: 'GBX PS Pty Ltd',
  tagline: 'Sharper operations.',
  taglineAccent: 'Stronger commercial outcomes.',
  city: 'Melbourne, Australia',
  email: 'admin@gbxps.com',
  address: '260 Spencer Street, Melbourne VIC 3000',
  abn: '45 674 252 905',
  copyright: 'Copyright GBX PS Pty Ltd 2025',
  // Replace with your real Formspree endpoint, e.g. https://formspree.io/f/abcdwxyz
  formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
}

// Primary navigation. Each item routes to a page.
export const nav = [
  { label: 'Services', to: '/services' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Approach', to: '/approach' },
  { label: 'Reach', to: '/reach' },
  { label: 'Contact', to: '/contact' },
]

export const hero = {
  eyebrow: 'Business performance and process improvement',
  heading: 'Sharper operations.',
  subheading: 'Stronger commercial outcomes.',
  body:
    'GBX PS is a boutique consultancy based in Melbourne. We help professional-services firms, advice practices and regulated businesses run more clearly, sell more confidently and grow with discipline.',
  primary: { label: 'Start a conversation', to: '/contact' },
  secondary: { label: 'Our services', to: '/services' },
  stats: [
    { value: 'AFSL', label: 'Compliance depth' },
    { value: '09', label: 'Cities served' },
    { value: '04', label: 'Stage method' },
  ],
}

export const services = {
  eyebrow: 'What we do',
  heading: 'Five disciplines, one operating view.',
  intro:
    'Each engagement draws on the capability it needs. Most clients start with one service and extend into the others as the operating picture becomes clearer.',
  items: [
    {
      number: '01',
      title: 'Business Analytics & Performance',
      body:
        'KPI frameworks, dashboards, conversion tracking, operational benchmarking, profitability analysis and data-led decision-making.',
      detail:
        'We turn scattered numbers into a clear operating picture. From a single source of truth we build the dashboards, benchmarks and reporting rhythm that let you see performance early and act on it with confidence.',
      includes: [
        'KPI frameworks and scorecards',
        'Dashboards and management reporting',
        'Conversion and funnel tracking',
        'Operational benchmarking',
        'Profitability and margin analysis',
      ],
    },
    {
      number: '02',
      title: 'Business Success Consulting',
      body:
        'Workflow improvement, offer structuring, client value propositions, CRM strategy, process automation and scalable practice growth.',
      detail:
        'We refine how the practice actually runs, so growth does not add friction. Working across workflow, offer and systems, we remove the bottlenecks that quietly cap capacity and margin.',
      includes: [
        'Workflow and process improvement',
        'Offer structuring and value propositions',
        'CRM strategy and setup',
        'Process automation',
        'Scalable operating models',
      ],
    },
    {
      number: '03',
      title: 'Sales Enablement & Lead Generation',
      body:
        'Compliant sales processes, funnels, paid media, referral systems, nurture journeys and conversion frameworks.',
      detail:
        'We build compliant, repeatable ways to win and keep clients. From first touch to referral, the sales system is documented, measurable and honest about what works.',
      includes: [
        'Compliant sales processes',
        'Funnels and nurture journeys',
        'Paid media and lead campaigns',
        'Referral and introducer systems',
        'Conversion frameworks',
      ],
    },
    {
      number: '04',
      title: 'Portfolio Construction & Investment Support',
      body:
        'Research-driven portfolio design, investment modelling, dynamic allocation, custom mandates and adviser-facing investment support.',
      detail:
        'We support advisers and firms with research-led portfolio thinking. From modelling to mandates, the work is rigorous, documented and built to sit comfortably within your compliance obligations.',
      includes: [
        'Research-driven portfolio design',
        'Investment modelling',
        'Dynamic asset allocation',
        'Custom mandates',
        'Adviser-facing investment support',
      ],
    },
    {
      number: '05',
      title: 'Financial Education & Compliance Training',
      body:
        'Financial education, training resources, documentation support, compliance-conscious process discipline and practical translation of technical concepts.',
      detail:
        'We make technical material usable. Complex investment, portfolio and compliance concepts become training, documentation and process discipline your team can apply day to day.',
      includes: [
        'Financial education programs',
        'Training resources and materials',
        'Documentation support',
        'Compliance-conscious processes',
        'Practical concept translation',
      ],
    },
  ],
}

export const leadership = {
  eyebrow: 'Leadership',
  heading: 'Three senior anchors.',
  intro:
    'Every engagement is led by a principal who stays close to the work. No hand-offs to junior teams, no layers between you and the people accountable for the outcome.',
  people: [
    {
      number: '1',
      name: 'Caillin Clyne',
      role: 'Strategy / Portfolio / Commercial',
      body:
        'Anchors strategic, investment and analytical capability, bringing portfolio thinking, commercial judgement and operating discipline to client engagements.',
      initials: 'CC',
    },
    {
      number: '2',
      name: 'Rose Sunny',
      role: 'Creative / Marketing / Brand',
      body:
        'Anchors creative and marketing capability, translating strategy into client-facing material, digital campaigns, brand assets and growth content.',
      initials: 'RS',
    },
    {
      number: '3',
      name: 'Patrick Gray',
      role: 'Financial Education / Investment / Training',
      body:
        'Anchors financial education and technical training capability, supported by an extensive education background and experience translating investment, portfolio and compliance concepts into practical learning.',
      initials: 'PG',
    },
  ],
}

export const approach = {
  eyebrow: 'How we work',
  heading: 'A four-stage method, applied with discipline.',
  intro:
    'The same structure underpins every engagement, from a two-week diagnostic to a multi-year operating partnership. It keeps the work honest and the outcomes measurable.',
  steps: [
    {
      number: '01',
      title: 'Health Check',
      body: 'Assess current state, uncover opportunities and define priorities.',
    },
    {
      number: '02',
      title: 'Scope',
      body: 'Shape a practical roadmap with clear deliverables and success metrics.',
    },
    {
      number: '03',
      title: 'Deliver',
      body: 'Execute with discipline, transparency and a focus on useful outcomes.',
    },
    {
      number: '04',
      title: 'Sustain',
      body: 'Embed capability, monitor outcomes and refine the system over time.',
    },
  ],
}

export const reach = {
  eyebrow: 'Global reach',
  heading: 'Melbourne-based. Working where our clients are.',
  intro:
    'We are headquartered in Melbourne and work with clients across Australia, Asia, the Middle East and the United States. Engagements run in person, remotely, or as a blend that suits the work.',
  cities: [
    { name: 'Melbourne', region: 'Australia', hq: true },
    { name: 'Sydney', region: 'Australia' },
    { name: 'Brisbane', region: 'Australia' },
    { name: 'Adelaide', region: 'Australia' },
    { name: 'Singapore', region: 'Asia' },
    { name: 'Hong Kong', region: 'Asia' },
    { name: 'Dubai', region: 'Middle East' },
    { name: 'Boston', region: 'United States' },
    { name: 'New York', region: 'United States' },
  ],
}

export const contact = {
  eyebrow: 'Contact',
  heading: 'Tell us what you are working on.',
  intro:
    'A short note is enough. We will reply within two business days with a view on whether we can help and what a first conversation might look like.',
  interests: [
    'Business analytics and performance',
    'Business success consulting',
    'Sales enablement and lead generation',
    'Portfolio construction and investment support',
    'Financial education and compliance training',
    'Not sure yet',
  ],
}

export const cta = {
  heading: 'Ready for sharper operations?',
  body:
    'Start with a conversation. We will listen, ask the useful questions and tell you plainly where we think the opportunity is.',
  primary: { label: 'Start the conversation', to: '/contact' },
  secondary: { label: 'View services', to: '/services' },
}

export const brand = {
  eyebrow: 'The GBX mark',
  line: 'Discipline you can see. Outcomes you can measure.',
}

export const footer = {
  blurb:
    'Boutique business-performance and process-improvement consultancy. Melbourne, Australia. Depth in financial-services compliance.',
  columns: [
    {
      title: 'Services',
      links: [
        { label: 'Analytics & Performance', to: '/services' },
        { label: 'Success Consulting', to: '/services' },
        { label: 'Sales Enablement', to: '/services' },
        { label: 'Portfolio Construction', to: '/services' },
        { label: 'Education & Compliance', to: '/services' },
      ],
    },
    {
      title: 'Firm',
      links: [
        { label: 'Leadership', to: '/leadership' },
        { label: 'Approach', to: '/approach' },
        { label: 'Global reach', to: '/reach' },
        { label: 'Contact', to: '/contact' },
      ],
    },
  ],
  details: ['GBX PS Pty Ltd', '260 Spencer Street, Melbourne VIC 3000', 'ABN 45 674 252 905'],
  disclaimer:
    'GBX PS Pty Ltd provides business consulting, analytics and training services. Information on this site is general in nature and does not constitute personal financial advice.',
}

// Per-page document titles and meta descriptions.
export const pageMeta = {
  home: {
    title: 'GBX Professional Services | Business Performance Consulting, Melbourne',
    description:
      'Boutique business-performance and process-improvement consultancy based in Melbourne, with depth in financial-services compliance. Sharper operations. Stronger commercial outcomes.',
  },
  services: {
    title: 'Services | GBX Professional Services',
    description:
      'Five disciplines: business analytics and performance, success consulting, sales enablement, portfolio construction and financial education and compliance training.',
  },
  leadership: {
    title: 'Leadership | GBX Professional Services',
    description: 'Senior anchors leading every GBX PS engagement across strategy, marketing and financial education.',
  },
  approach: {
    title: 'Approach | GBX Professional Services',
    description: 'A four-stage method applied with discipline: Health Check, Scope, Deliver and Sustain.',
  },
  reach: {
    title: 'Global reach | GBX Professional Services',
    description: 'Melbourne-based, working with clients across Australia, Asia, the Middle East and the United States.',
  },
  contact: {
    title: 'Contact | GBX Professional Services',
    description: 'Start a conversation with GBX PS. Tell us what you are working on and we will reply within two business days.',
  },
}
