// All site copy lives here so it can be edited without touching components.
// Copy rule: no em dashes. Use commas, periods, en dashes or restructured sentences.
//
// COMPLIANCE NOTE: GBX PS Pty Ltd does not hold an Australian Financial Services
// Licence (AFSL). Copy here must not imply that it holds one, nor that it provides
// financial product advice, dealing, or any other "financial service" as defined in
// the Corporations Act 2001. Investment-related work is framed as operational,
// analytical and educational support to licensed professionals only. Keep it that way.

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
  motto: 'Combining insight with impact for sustainable business growth.',
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
    'GBX PS is a boutique consultancy based in Melbourne. We help professional-services firms, advice practices and other regulated businesses run more clearly, sell more confidently and grow with discipline.',
  primary: { label: 'Start a conversation', to: '/contact' },
  secondary: { label: 'Our services', to: '/services' },
  stats: [
    { value: 'Global', label: 'Partner network' },
    { value: '06', label: 'Service lines' },
    { value: '04', label: 'Stage method' },
  ],
}

export const services = {
  eyebrow: 'What we do',
  heading: 'Six disciplines, one operating view.',
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
        'Compliance-aware sales processes, funnels, paid media, referral systems, nurture journeys and conversion frameworks.',
      detail:
        'We build repeatable, compliance-aware ways to win and keep clients. From first touch to referral, the sales system is documented, measurable and honest about what works.',
      includes: [
        'Compliance-aware sales processes',
        'Funnels and nurture journeys',
        'Paid media and lead campaigns',
        'Referral and introducer systems',
        'Conversion frameworks',
      ],
    },
    {
      number: '04',
      title: 'Investment Frameworks & Adviser Support',
      body:
        'Frameworks, tools, education and support for advice firms and investment managers working to achieve specific investment outcomes for their clients. Support only, not financial product advice.',
      detail:
        'We give advice firms and investment managers the frameworks, tools, education and operational support to pursue specific investment outcomes for their clients. The regulated decisions, financial product advice, dealing and portfolio management, stay with those licensed businesses. GBX PS does not hold an AFSL and does not provide financial product advice or any other financial service.',
      includes: [
        'Investment frameworks and tools',
        'Modelling and analysis support',
        'Research collation and reporting',
        'Education for advice and investment teams',
        'Support for advice firms and investment managers',
      ],
    },
    {
      number: '05',
      title: 'Financial Education & Compliance Training',
      body:
        'General financial and compliance education, training resources, documentation support and process discipline. Education only, not personal financial advice.',
      detail:
        'We make technical material usable. Investment, portfolio and compliance concepts become training, documentation and process your team can apply day to day. This is general education for professionals and businesses, not personal financial advice.',
      includes: [
        'General financial and compliance education',
        'Training resources and materials',
        'Documentation support',
        'Compliance-aware processes',
        'Practical concept translation',
      ],
    },
    {
      number: '06',
      title: 'Business AI Readiness',
      body:
        'Assessment and roadmap for adopting AI with discipline: where it adds value, what to prepare, and how to govern it. Data, process, risk and capability, made ready.',
      detail:
        'We help businesses move from AI curiosity to practical, governed adoption. We assess where AI genuinely creates value, ready your data, processes and people, and put the guardrails, governance and skills in place so adoption is safe, useful and worth it. Vendor-neutral and outcome-led.',
      includes: [
        'AI opportunity and value assessment',
        'Data and process readiness',
        'Governance, risk and compliance guardrails',
        'Tooling and vendor evaluation',
        'Team capability and training',
      ],
    },
  ],
}

export const leadership = {
  eyebrow: 'Leadership',
  heading: 'Three leaders, one standard.',
  intro:
    'We are led, not layered. Every engagement is run by one of our leaders, close to the work and accountable for the outcome. No hand-offs to junior teams, no distance between you and the people doing the thinking.',
  people: [
    {
      number: '1',
      name: 'Caillin Clyne',
      lead: 'Systems Leader',
      role: 'Strategy / Analytics / Commercial',
      body:
        'Leads strategy, analytics and commercial capability, bringing portfolio-level thinking, commercial judgement and operating discipline to how client businesses are structured and run.',
      initials: 'CC',
    },
    {
      number: '2',
      name: 'Rose Sunny',
      lead: 'Thought Leader',
      role: 'Creative / Marketing / Brand',
      body:
        'Leads creative and marketing capability, translating strategy into client-facing material, digital campaigns, brand assets and growth content.',
      initials: 'RS',
    },
    {
      number: '3',
      name: 'Patrick Gray',
      lead: 'Education Leader',
      role: 'Financial Education / Compliance / Training',
      body:
        'Leads financial education and technical training capability, supported by an extensive education background and experience translating investment, portfolio and compliance concepts into practical, general learning.',
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
  heading: 'Melbourne-based, delivering globally.',
  intro:
    'We are based in Melbourne and work with clients wherever they operate. Through a network of trusted partners and associates across Australia, Asia, the Middle East and North America, we bring local presence to global engagements, in person, remotely, or as a blend that suits the work.',
  // These are hubs across the GBX partner network, not GBX PS offices.
  cities: [
    { name: 'Melbourne', region: 'Australia', hq: true },
    { name: 'Sydney', region: 'Australia' },
    { name: 'Brisbane', region: 'Australia' },
    { name: 'Adelaide', region: 'Australia' },
    { name: 'Singapore', region: 'Asia' },
    { name: 'Hong Kong', region: 'Asia' },
    { name: 'Dubai', region: 'Middle East' },
    { name: 'Boston', region: 'North America' },
    { name: 'New York', region: 'North America' },
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
    'Investment frameworks and adviser support',
    'Financial and compliance education',
    'Business AI readiness',
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
  eyebrow: 'Our philosophy',
  line: 'Combining insight with impact for sustainable business growth.',
}

export const footer = {
  blurb:
    'Boutique business-performance and process-improvement consultancy in Melbourne, working with professional-services and financial-services businesses.',
  columns: [
    {
      title: 'Services',
      links: [
        { label: 'Analytics & Performance', to: '/services' },
        { label: 'Success Consulting', to: '/services' },
        { label: 'Sales Enablement', to: '/services' },
        { label: 'Investment Frameworks', to: '/services' },
        { label: 'Education & Compliance', to: '/services' },
        { label: 'AI Readiness', to: '/services' },
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
    'GBX PS Pty Ltd provides business consulting, analytics, education and training services. GBX PS does not hold an Australian Financial Services Licence (AFSL) and does not provide financial product advice, dealing or any other financial service. Information on this site is general in nature, does not take account of your objectives, financial situation or needs, and is not personal financial advice. Where a financial service is required, it is provided by an appropriately licensed party.',
}

// Per-page document titles and meta descriptions.
export const pageMeta = {
  home: {
    title: 'GBX Professional Services | Business Performance Consulting, Melbourne',
    description:
      'Boutique business-performance and process-improvement consultancy in Melbourne, working with professional-services and financial-services businesses. Sharper operations. Stronger commercial outcomes.',
  },
  services: {
    title: 'Services | GBX Professional Services',
    description:
      'Five service lines: business analytics and performance, success consulting, sales enablement, investment frameworks and adviser support, financial and compliance education, and business AI readiness.',
  },
  leadership: {
    title: 'Leadership | GBX Professional Services',
    description: 'The leaders behind every GBX PS engagement: a systems leader, a thought leader and an education leader.',
  },
  approach: {
    title: 'Approach | GBX Professional Services',
    description: 'A four-stage method applied with discipline: Health Check, Scope, Deliver and Sustain.',
  },
  reach: {
    title: 'Global reach | GBX Professional Services',
    description:
      'Melbourne-based and delivering globally through a network of partners and associates across Australia, Asia, the Middle East and North America.',
  },
  contact: {
    title: 'Contact | GBX Professional Services',
    description: 'Start a conversation with GBX PS. Tell us what you are working on and we will reply within two business days.',
  },
}
