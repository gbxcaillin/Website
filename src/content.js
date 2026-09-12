// NAME STYLE: always write the firm name in full as "GBX Professional Services".
// Do not use the "GBX PS" shorthand in copy. The only exception is the registered
// legal entity "GBX PS Pty Ltd", which stays verbatim in legal contexts (copyright,
// disclaimer, ABN/firm details). The bare mark "GBX" (the logo) is fine on its own.
//
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
  // Tool and contact submissions POST here (Cloudflare Pages Function).
  // See docs/lead-capture-setup.md.
  leadEndpoint: '/api/tool-lead',
}

// Primary navigation. Each item routes to a page.
export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Approach', to: '/approach' },
  { label: 'Reach', to: '/reach' },
  { label: 'Tools & Insights', to: '/tools' },
  { label: 'Contact', to: '/contact' },
]

export const hero = {
  eyebrow: 'Business performance and process improvement',
  // One clear statement rather than a stacked title/subtitle. The accent phrase
  // is the second half of the same sentence, in teal, not a separate line.
  heading: 'We help your business ',
  subheading: 'run sharper and grow with discipline.',
  body:
    'GBX Professional Services is a boutique consultancy in Melbourne. We work with professional-services firms, advice practices and other regulated businesses to sharpen how they operate, sell and grow, one clear step at a time.',
  primary: { label: 'Start a conversation', to: '/contact' },
  secondary: { label: 'Our services', to: '/services' },
}

export const services = {
  eyebrow: 'What we do',
  heading: 'Seven disciplines, one operating view.',
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
      title: 'Brand & Marketing',
      body:
        'Positioning, brand identity, campaigns and content that turn strategy into demand. Brand refresh and revamp, marketing plans, and the creative to run them.',
      detail:
        'We translate strategy into a brand people recognise and marketing that brings them in. From positioning, identity and messaging through to marketing plans, campaigns and content, we build the demand engine and the creative to run it. Compliance-aware throughout, so regulated businesses stay on the right side of the line.',
      includes: [
        'Brand strategy, refresh and revamp',
        'Positioning, messaging and tone of voice',
        'Visual identity and creative',
        'Marketing plans and campaign calendars',
        'Content, digital and growth marketing',
      ],
    },
    {
      number: '05',
      title: 'Investment Frameworks & Adviser Support',
      body:
        'Frameworks, tools, education and support for advice firms and investment managers working to achieve specific investment outcomes for their clients. Support only, not financial product advice.',
      detail:
        'We give advice firms and investment managers the frameworks, tools, education and operational support to pursue specific investment outcomes for their clients. The regulated decisions, financial product advice, dealing and portfolio management, stay with those licensed businesses. GBX Professional Services does not hold an AFSL and does not provide financial product advice or any other financial service.',
      includes: [
        'Investment frameworks and tools',
        'Modelling and analysis support',
        'Research collation and reporting',
        'Education for advice and investment teams',
        'Support for advice firms and investment managers',
      ],
    },
    {
      number: '06',
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
      number: '07',
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
    'The same structure underpins every engagement, from a two-week diagnostic to a multi-year operating partnership. It keeps the work honest, the priorities clear and the outcomes measurable, so you always know what we are doing, why, and what it is worth.',
  steps: [
    {
      number: '01',
      title: 'Health Check',
      body: 'Assess current state, uncover opportunities and define priorities.',
      detail:
        'We start by understanding how the business actually runs today. Through interviews, a review of your numbers, systems and processes, and time with the people doing the work, we build an honest picture of what is working, what is holding you back, and where the fastest, most durable gains sit. You finish this stage with a clear, prioritised view of the opportunity, not a generic report.',
    },
    {
      number: '02',
      title: 'Scope',
      body: 'Shape a practical roadmap with clear deliverables and success metrics.',
      detail:
        'With priorities agreed, we shape a practical roadmap: what we will do, in what order, who owns each piece, and how we will measure success. We size the work to your capacity and appetite, from a focused sprint to a staged program, so the plan is ambitious enough to matter and realistic enough to deliver.',
    },
    {
      number: '03',
      title: 'Deliver',
      body: 'Execute with discipline, transparency and a focus on useful outcomes.',
      detail:
        'We do the work alongside your team, not at a distance from it. Dashboards get built, processes get redesigned, systems get implemented and people get supported through the change. Progress is transparent and measured against the metrics we set, so momentum is visible and course corrections happen early rather than late.',
    },
    {
      number: '04',
      title: 'Sustain',
      body: 'Embed capability, monitor outcomes and refine the system over time.',
      detail:
        'Improvement that leaves when we do is not improvement. We embed the capability, documentation and reporting rhythm that let the gains hold, train your people to own the new way of working, and stay available to refine the system as the business grows. The goal is a business that runs better without depending on us.',
    },
  ],
  principles: {
    eyebrow: 'What guides the work',
    heading: 'Principles we hold to.',
    items: [
      {
        title: 'Clarity over complexity',
        body:
          'We favour simple, well-run systems that your team can actually operate over clever ones that only a consultant can. If it cannot be explained plainly, it is not finished.',
      },
      {
        title: 'Evidence, not opinion',
        body:
          'Decisions are grounded in your numbers and your context. We benchmark, measure and report so progress is a matter of record, not of persuasion.',
      },
      {
        title: 'Compliance-aware by default',
        body:
          'Many of our clients operate under real regulatory obligations. We design around those obligations from the start, so growth never comes at the cost of the licence.',
      },
      {
        title: 'Capability that stays',
        body:
          'We aim to make ourselves unnecessary. Every engagement leaves your team more capable, better equipped and less dependent on outside help.',
      },
    ],
  },
}

export const reach = {
  eyebrow: 'Global reach',
  heading: 'Melbourne-based, delivering globally.',
  intro:
    'We are based in Melbourne and work with clients wherever they operate. Through a network of trusted partners and associates across Australia, Asia, the Middle East and North America, we bring local presence to global engagements, in person, remotely, or as a blend that suits the work.',
  // These are hubs across the GBX partner network, not GBX Professional Services offices.
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
  details: {
    eyebrow: 'How the network works',
    heading: 'Local presence, one accountable team.',
    items: [
      {
        title: 'Led from Melbourne',
        body:
          'Every engagement is led and owned from our Melbourne base. You have one accountable point of contact and one standard of work, wherever the engagement happens to run.',
      },
      {
        title: 'A trusted partner network',
        body:
          'When work benefits from people on the ground, we draw on a network of trusted partners and associates across Australia, Asia, the Middle East and North America. They extend our reach without diluting our accountability.',
      },
      {
        title: 'In person, remote or blended',
        body:
          'We work the way the engagement needs. On site when presence matters, remote when it does not, and a considered blend of the two for most long-running programs.',
      },
      {
        title: 'Built for regulated, cross-border work',
        body:
          'We are used to the demands of professional and regulated businesses operating across jurisdictions, and we structure engagements so obligations in each market are respected.',
      },
    ],
  },
}

export const contact = {
  eyebrow: 'Contact',
  heading: 'Tell us what you are working on.',
  intro:
    'A short note is enough. We will reply within two business days with a view on whether we can help and what a first conversation might look like.',
  interestsLabel: 'Which services are you interested in?',
  interestsHint: 'Select any that apply.',
  interests: [
    'Business analytics and performance',
    'Business success consulting',
    'Sales enablement and lead generation',
    'Brand and marketing',
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

// Tools & Insights: a hub for practical tools we have built and articles worth sharing.
export const toolsPage = {
  eyebrow: 'Tools & Insights',
  heading: 'Practical tools and ideas worth sharing.',
  intro:
    'A growing collection of free tools we have built and articles from our work. No sign-up, no sales pitch, just things we think are genuinely useful.',
  toolsHeading: 'Tools',
  tools: [
    {
      slug: 'health-check',
      to: '/tools/health-check',
      name: 'Business Health Check',
      tagline: 'A two-minute scorecard across the six areas that decide performance.',
      body:
        'Rate your business on finance, sales, operations, marketing, systems and AI, and see where the biggest gains are hiding. It shows you where to look. The full Health Check is where we dig in.',
      cta: 'Start the check',
    },
    {
      slug: 'unit-economics',
      to: '/tools/unit-economics',
      name: 'Unit Economics Calculator',
      tagline: 'Is your growth actually profitable? Find out in a minute.',
      body:
        'Enter a few numbers to see your customer lifetime value, acquisition cost, the ratio between them, and how long it takes to pay back. Instant clarity on whether the model works.',
      cta: 'Run the numbers',
    },
    {
      slug: 'ai-readiness',
      to: '/tools/ai-readiness',
      name: 'AI Readiness Assessment',
      tagline: 'See how ready your business really is to adopt AI.',
      body:
        'Five quick questions across use cases, data, process, governance and capability return a readiness tier and the gaps to close first. A clear starting point before you invest.',
      cta: 'Assess readiness',
    },
    {
      slug: 'positioning',
      to: '/tools/positioning',
      name: 'Positioning Statement Builder',
      tagline: 'Turn what you do into one clear, repeatable sentence.',
      body:
        'Answer six short prompts and get a positioning statement, a one-line pitch and an elevator version you can use straight away. Clear positioning is the foundation. Sharpening it is where we help.',
      cta: 'Build your statement',
    },
    {
      slug: 'prompt-optimizer',
      href: '/tools/prompt-optimizer/',
      name: 'Prompt Optimizer',
      tagline: 'Research-backed prompts, tailored to each AI model.',
      body:
        'Enter a prompt, choose the AI models you are working with, and get optimized versions tuned to each text, image, video or audio model. Runs entirely in your browser. Nothing you type is sent anywhere.',
      cta: 'Open the tool',
    },
  ],
  insightsHeading: 'Recent insights',
  insightsEmpty: 'More articles are on the way.',
}

// Insights articles and their categories live in insights.js (kept separate so
// this file stays readable). Re-exported here so existing imports keep working.
export { articles, insightCategories } from './insights.js'

// Condensed home-page teasers for sections that have a full page of their own.
// They give just enough to orient a reader and invite them to explore further.
export const homeSummaries = {
  approach: {
    eyebrow: 'How we work',
    heading: 'A four-stage method.',
    line:
      'The same disciplined path underpins every engagement, from a two-week diagnostic to a multi-year partnership.',
    stages: ['Health Check', 'Scope', 'Deliver', 'Sustain'],
    link: { label: 'See how we work', to: '/approach' },
  },
  reach: {
    eyebrow: 'Global reach',
    heading: 'Melbourne-based, delivering globally.',
    line:
      'A network of trusted partners and associates across Australia, Asia, the Middle East and North America brings local presence to global work.',
    stat: 'AU · Asia · Middle East · North America',
    link: { label: 'Explore our reach', to: '/reach' },
  },
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
        { label: 'Brand & Marketing', to: '/services' },
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
        { label: 'Tools & Insights', to: '/tools' },
        { label: 'Contact', to: '/contact' },
      ],
    },
  ],
  details: ['GBX PS Pty Ltd', '260 Spencer Street, Melbourne VIC 3000', 'ABN 45 674 252 905'],
  disclaimer:
    'GBX PS Pty Ltd provides business consulting, analytics, education and training services. GBX Professional Services does not hold an Australian Financial Services Licence (AFSL) and does not provide financial product advice, dealing or any other financial service. Information on this site is general in nature, does not take account of your objectives, financial situation or needs, and is not personal financial advice. Where a financial service is required, it is provided by an appropriately licensed party.',
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
      'Five service lines: business analytics and performance, success consulting, sales enablement, brand and marketing, investment frameworks and adviser support, financial and compliance education, and business AI readiness.',
  },
  leadership: {
    title: 'Leadership | GBX Professional Services',
    description: 'The leaders behind every GBX Professional Services engagement: a systems leader, a thought leader and an education leader.',
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
  tools: {
    title: 'Tools & Insights | GBX Professional Services',
    description:
      'Free tools and articles from GBX Professional Services, starting with the Prompt Optimizer: turn a rough idea into a clear, well-structured AI prompt in your browser.',
  },
  insights: {
    title: 'Insights | GBX Professional Services',
    description:
      'Practical articles from GBX Professional Services across AI, marketing, business analytics, sales, investment research and financial education.',
  },
  healthCheck: {
    title: 'Business Health Check | GBX Professional Services',
    description:
      'A free two-minute scorecard across finance, sales, operations, marketing, systems and AI. See where your business is strong and where the biggest gains are hiding.',
  },
  unitEconomics: {
    title: 'Unit Economics Calculator | GBX Professional Services',
    description:
      'A free calculator for customer lifetime value, acquisition cost, the LTV to CAC ratio and payback period. See in a minute whether your growth is profitable.',
  },
  aiReadiness: {
    title: 'AI Readiness Assessment | GBX Professional Services',
    description:
      'A free five-question assessment of how ready your business is to adopt AI, across use cases, data, process, governance and capability, with the gaps to close first.',
  },
  positioning: {
    title: 'Positioning Statement Builder | GBX Professional Services',
    description:
      'A free tool that turns six short answers into a clear positioning statement, a one-line pitch and an elevator version you can use straight away. Runs in your browser.',
  },
  contact: {
    title: 'Contact | GBX Professional Services',
    description: 'Start a conversation with GBX Professional Services. Tell us what you are working on and we will reply within two business days.',
  },
}
