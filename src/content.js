// All site copy lives here so it can be edited without touching components.
// Copy rule: no em dashes. Use commas, periods, en dashes or restructured sentences.

export const site = {
  name: 'GBX Professional Services',
  legalName: 'GBX PS Pty Ltd',
  tagline: 'Sharper operations.',
  taglineAccent: 'Stronger commercial outcomes.',
  city: 'Melbourne, Australia',
  email: 'hello@gbxps.com',
  // Replace with your real Formspree endpoint, e.g. https://formspree.io/f/abcdwxyz
  formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
}

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Approach', href: '#approach' },
  { label: 'Reach', href: '#reach' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Business performance and process improvement',
  heading: 'Sharper operations.',
  subheading: 'Stronger commercial outcomes.',
  body:
    'GBX PS is a boutique consultancy based in Melbourne. We help professional-services firms, advice practices and regulated businesses run more clearly, sell more confidently and grow with discipline.',
  primary: { label: 'Start a conversation', href: '#contact' },
  secondary: { label: 'Our services', href: '#services' },
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
    },
    {
      number: '02',
      title: 'Business Success Consulting',
      body:
        'Workflow improvement, offer structuring, client value propositions, CRM strategy, process automation and scalable practice growth.',
    },
    {
      number: '03',
      title: 'Sales Enablement & Lead Generation',
      body:
        'Compliant sales processes, funnels, paid media, referral systems, nurture journeys and conversion frameworks.',
    },
    {
      number: '04',
      title: 'Portfolio Construction & Investment Support',
      body:
        'Research-driven portfolio design, investment modelling, dynamic allocation, custom mandates and adviser-facing investment support.',
    },
    {
      number: '05',
      title: 'Financial Education & Compliance Training',
      body:
        'Financial education, training resources, documentation support, compliance-conscious process discipline and practical translation of technical concepts.',
    },
  ],
}

export const leadership = {
  eyebrow: 'Leadership',
  heading: 'Four senior anchors.',
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
      name: 'Anders Torcello',
      role: 'Sales / Growth / Client Relations',
      body:
        'Anchors sales and growth capability, with more than a decade building sales programs across Australia and the United States in regulated sectors.',
      initials: 'AT',
    },
    {
      number: '4',
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
  primary: { label: 'Start the conversation', href: '#contact' },
  secondary: { label: 'View services', href: '#services' },
}

export const footer = {
  blurb:
    'Boutique business-performance and process-improvement consultancy. Melbourne, Australia. Depth in financial-services compliance.',
  columns: [
    {
      title: 'Services',
      links: [
        { label: 'Analytics & Performance', href: '#services' },
        { label: 'Success Consulting', href: '#services' },
        { label: 'Sales Enablement', href: '#services' },
        { label: 'Portfolio Construction', href: '#services' },
        { label: 'Education & Compliance', href: '#services' },
      ],
    },
    {
      title: 'Firm',
      links: [
        { label: 'Leadership', href: '#leadership' },
        { label: 'Approach', href: '#approach' },
        { label: 'Global reach', href: '#reach' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  ],
  details: ['GBX PS Pty Ltd', 'Melbourne, Victoria, Australia', 'ABN 00 000 000 000'],
  disclaimer:
    'GBX PS Pty Ltd provides business consulting, analytics and training services. Information on this site is general in nature and does not constitute personal financial advice.',
}
