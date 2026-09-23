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
  // Direct booking link (Microsoft Bookings). "Book a call" CTAs open this in
  // a new tab. Leave empty to route them to the contact page instead.
  bookingUrl: 'https://bookings.cloud.microsoft/book/GBXProfessionalServices2@openbookwealth.com.au/',
}

export const newsletter = {
  heading: 'Ideas worth your inbox',
  body:
    'Occasional, practical insights on performance, AI, sales and marketing. No spam, and you can unsubscribe any time.',
  placeholder: 'you@company.com',
  cta: 'Subscribe',
  done: 'Thanks. You are on the list. Look out for the next one.',
}

// Primary navigation. Each item routes to a page.
export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Diagnostic', to: '/diagnostic' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Approach', to: '/approach' },
  { label: 'Education', to: '/education' },
  { label: 'Tools & Insights', to: '/tools' },
  { label: 'Contact', to: '/contact' },
]

export const hero = {
  eyebrow: 'Business performance. Financial education.',
  // One clear statement rather than a stacked title/subtitle. The accent phrase
  // is the second half of the same sentence, in teal, not a separate line.
  heading: 'Sharper businesses. ',
  subheading: 'Financially fluent people.',
  body:
    'GBX Professional Services is a Melbourne consultancy with two practices. We help professional-services firms and advice practices run sharper, sell better and adopt AI with discipline. And we teach people about money, in plain language, through financial education programs for workplaces and advice practices. Three leaders, one operating view, and free tools you can use before you ever hire us.',
  primary: { label: 'For your business', to: '/diagnostic' },
  secondary: { label: 'For your people', to: '/education' },
}

export const services = {
  eyebrow: 'What we do',
  heading: 'Seven disciplines, one operating view.',
  intro:
    'Each engagement draws on the capability it needs. Most clients start with the Diagnostic or one service and extend into the others as the operating picture becomes clearer.',
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
      number: '06',
      title: 'Financial Education & Compliance Training',
      body:
        'General financial and compliance education, training resources, documentation support and process discipline. Education only, not personal financial advice.',
      detail:
        'We make money make sense. The Financial Fluency Program brings plain-language financial education to workplaces as a staff benefit, and the Client Education Series gives advice and accounting practices an independent educator for their client events. For advice firms we also turn technical and compliance material into training the team can use. All of it is general education, not personal financial advice.',
      includes: [
        'The Financial Fluency Program for workplaces',
        'Client Education Series for advice and accounting practices',
        'Compliance and technical training for advice teams',
        'Training resources and documentation',
        'Practical concept translation',
      ],
      link: { label: 'See the education programs', to: '/education' },
    },
    {
      number: '07',
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
  ],
  faq: {
    heading: 'Common questions',
    items: [
      {
        q: 'What does GBX Professional Services actually do?',
        a: 'We help professional-services firms, advice practices and other businesses run more clearly, sell more confidently and adopt AI with discipline. The work spans seven disciplines, from analytics and process improvement to sales, marketing, AI readiness and financial and compliance education. Most engagements start with a diagnostic and extend into the areas that matter most.',
      },
      {
        q: 'Do you only work with businesses in Melbourne?',
        a: 'No. We are based in Melbourne and deliver globally through a partner network, with clients across Australia, Asia, the Middle East and North America. Interviews and workshops run well over Microsoft Teams.',
      },
      {
        q: 'Does GBX Professional Services hold an Australian Financial Services Licence (AFSL)?',
        a: 'No. GBX Professional Services does not hold an AFSL and does not provide financial product advice or any other financial service. Our investment-related work is operational, analytical and educational support for licensed professionals, who keep the regulated decisions.',
      },
      {
        q: 'How does an engagement usually start?',
        a: 'Most begin with the Performance Diagnostic, a fixed-scope ten-day review that maps the opportunities and gives you a 90-day plan you own. From there you can run the plan yourself or ask us to deliver specific parts.',
      },
      {
        q: 'How is this different from a larger consulting firm?',
        a: 'Every engagement is led by one of our three leaders, close to the work and accountable for the outcome. There are no hand-offs to junior teams and no distance between you and the people doing the thinking.',
      },
    ],
  },
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
      photo: 'caillin',
      quals: [
        'Bachelor of Commerce (Finance and Financial Planning)',
        'Bachelor of Education',
        'Bachelor of Arts (Linguistics)',
      ],
    },
    {
      number: '2',
      name: 'Rose Sunny',
      lead: 'Thought Leader',
      role: 'Creative / Marketing / Brand',
      body:
        'Leads creative and marketing capability, translating strategy into client-facing material, digital campaigns, brand assets and growth content.',
      initials: 'RS',
      photo: 'rose',
      quals: [
        'Bachelor of Criminology',
        'Lifelong creative',
        'Years of marketing seminars and workshops, learning the craft',
      ],
    },
    {
      number: '3',
      name: 'Patrick Gray',
      lead: 'Education Leader',
      role: 'Financial Education / Compliance / Training',
      body:
        'Leads financial education and technical training capability, supported by an extensive education background and experience translating investment, portfolio and compliance concepts into practical, general learning.',
      initials: 'PG',
      photo: 'patrick',
      quals: [
        'Graduate Diploma of Financial Planning',
        'Master of Education',
        'Bachelor of Music',
      ],
    },
  ],
}

export const approach = {
  eyebrow: 'How we work',
  heading: 'A four-stage method, applied with discipline.',
  intro:
    'The same structure underpins every engagement, from a ten-day diagnostic to a multi-year operating partnership. It keeps the work honest, the priorities clear and the outcomes measurable, so you always know what we are doing, why, and what it is worth.',
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
    'We are based in Melbourne and have worked with companies across Australia, Asia, the Middle East and North America. The modern world is connected by the internet and by good ideas, so no project is too far or too hard when we are the right fit. If the problem is worth solving, distance is rarely the reason not to.',
  // Cities where GBX Professional Services has worked with client companies.
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
        title: 'A track record across markets',
        body:
          'We have worked with client companies across Australia, Asia, the Middle East and North America, and draw on trusted partners and associates when a project benefits from people on the ground. That reach extends what we can do without diluting our accountability.',
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
  bookingHeading: 'Prefer to talk it through?',
  bookingBody:
    'Book a call and we will find a time. A phone call or a Microsoft Teams meeting, whichever suits you.',
  bookingCta: 'Book a call',
  contactMethods: ['Phone call', 'Microsoft Teams', 'Email is fine'],
  interestsLabel: 'Which services are you interested in?',
  interestsHint: 'Select any that apply.',
  interests: [
    'The Performance Diagnostic',
    'Financial education for my workplace',
    'Client education seminars for my practice',
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
  secondary: { label: 'See the Diagnostic', to: '/diagnostic' },
}

export const brand = {
  eyebrow: 'Our philosophy',
  line: 'Combining insight with impact for sustainable business growth.',
}

// AI and compliance FAQ, shown on the "Will AI actually help?" guide. Written
// for advice and accounting practices. General information only: it must not
// imply that GBX Professional Services holds an AFSL or gives legal, compliance
// or financial advice.
export const aiComplianceFaq = {
  heading: 'AI and compliance, common questions',
  items: [
    {
      q: 'Does my advice practice need an AFSL to use AI?',
      a: 'No. Using AI to take notes, draft, summarise or research is not itself a financial service and does not require an Australian Financial Services Licence. What needs a licence is providing financial product advice or dealing, and that is true whether a person or an AI helped prepare it. The licence attaches to the advice and the adviser, not to the software. GBX Professional Services does not hold an AFSL and helps you adopt AI operationally, with the regulated decisions staying inside your licensed practice.',
    },
    {
      q: 'Can AI give financial advice to my clients?',
      a: 'No. Personal financial advice must be provided by a licensed practice through a person who is responsible for it. AI can draft, summarise and prepare, but a qualified person has to review, own and take responsibility for anything that reaches a client as advice. Treat AI output as a first draft, never as the advice itself.',
    },
    {
      q: 'Is it safe to put client information into an AI tool?',
      a: 'Only with the right controls. Consumer chatbots may use what you type to improve their models and may store it offshore, which can put your privacy and confidentiality obligations at risk. Use business-grade tools with a data agreement, data handling you are comfortable with, and model training turned off. As a rule, do not paste client-identifying information into any tool you have not checked first.',
    },
    {
      q: 'What are the main compliance risks of using AI in a regulated practice?',
      a: 'The common ones are: confidential client data leaving your control; AI errors or invented facts reaching a client unchecked; gaps in your records and audit trail; and AI output being used as advice without a qualified person reviewing it. Each is manageable with a clear policy, tools you have vetted, and a human review step before anything goes out.',
    },
    {
      q: 'Do we have to tell clients or regulators that we use AI?',
      a: 'There is no blanket rule that you must, but your existing obligations still apply: accurate records, being clear with clients about how their data is handled, and any guidance from your licensee or professional body. Check the current position with your licensee and professional body, and keep your engagement terms and privacy policy consistent with how you actually use these tools.',
    },
    {
      q: 'Where should a practice start with AI, safely?',
      a: 'Start with low-risk, high-repetition tasks that do not touch client-identifying data or produce advice: internal drafting, meeting notes, summarising public research, first-draft marketing. Put a short AI policy and an approved-tools list in place, add a human review step, then expand from there. The guide above and our AI Readiness Assessment help you find a sensible first use case.',
    },
    {
      q: 'Does GBX Professional Services give legal or compliance advice on this?',
      a: 'No. We help you adopt AI with discipline: readiness, tooling, governance guardrails, process and training. This is general information, not legal, compliance or financial advice. Your licensee, your professional body and, where you need it, a lawyer remain the source of truth on your specific obligations.',
    },
  ],
}

// The /book page embeds the Microsoft Bookings scheduler (site.bookingUrl) so
// booking happens on gbxps.com rather than sending visitors off to the raw
// Bookings URL.
export const bookingPage = {
  eyebrow: 'Book a call',
  heading: 'Book a call with GBX Professional Services.',
  intro:
    'Pick a time that suits you for a short call, on the phone or Microsoft Teams. Choose a slot below and you will get a confirmation and a calendar invite.',
  fallback: 'If the scheduler does not load,',
  fallbackCta: 'open the booking page in a new tab',
}

// Tools & Insights: a hub for practical tools we have built and articles worth sharing.
export const toolsPage = {
  eyebrow: 'Tools & Insights',
  heading: 'Practical tools and ideas worth sharing.',
  intro:
    'A growing collection of free tools we have built and articles from our work. No sign-up, no sales pitch, just things we think are genuinely useful.',
  toolsHeading: 'Tools',
  // `home: true` puts a tool on the home page feature (keep that to six).
  tools: [
    {
      slug: 'health-check',
      to: '/tools/health-check',
      home: true,
      name: 'Business Health Check',
      tagline: 'A two-minute scorecard across the six areas that decide performance.',
      body:
        'Rate your business on finance, sales, operations, marketing, systems and AI, and see where the biggest gains are hiding. It shows you where to look. The Performance Diagnostic is where we dig in.',
      cta: 'Start the check',
    },
    {
      slug: 'capacity',
      to: '/tools/capacity',
      home: true,
      name: 'Capacity & Profit Calculator',
      tagline: 'How much revenue is already sitting in the building?',
      body:
        'Four numbers show what your team could deliver, what it delivers today, what is left on the table each year and what every point of utilisation is worth.',
      cta: 'Find the revenue',
    },
    {
      slug: 'will-ai-help',
      to: '/tools/will-ai-help',
      home: true,
      name: 'Will AI Actually Help?',
      tagline: 'Six doors between you and an honest answer.',
      body:
        'A choose-your-own-adventure for owners tired of being told everything needs AI. Pick your sector, try to pass six doors, and get a straight answer, including the one thing to do first if the answer is not yet.',
      cta: 'Play the game',
    },
    {
      slug: 'pipeline-gap',
      to: '/tools/pipeline-gap',
      name: 'Pipeline Gap Calculator',
      tagline: 'How many leads does your revenue target actually need?',
      body:
        'Turn a revenue target into the clients, qualified leads and win rate it requires, and see how far your current lead flow falls short.',
      cta: 'Size the gap',
    },
    {
      slug: 'wellbeing-check',
      to: '/tools/wellbeing-check',
      home: true,
      name: 'Workplace Financial Wellbeing Check',
      tagline: 'How well does your workplace support people with money?',
      body:
        'Eight one-tap questions for HR and people leaders about the financial education and support your organisation offers today, with a tier and the gaps to close first.',
      cta: 'Check your workplace',
    },
    {
      slug: 'automation',
      to: '/tools/automation',
      name: 'Automation Opportunity Finder',
      tagline: 'Which hours could your team stop doing by hand?',
      body:
        'Six one-tap questions about where the week goes show how many hours could be automated, what that is worth a year, and the three places to start.',
      cta: 'Find the hours',
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
      home: true,
      name: 'AI Readiness Assessment',
      tagline: 'See how ready your business really is to adopt AI.',
      body:
        'Five quick questions across use cases, data, process, governance and capability return a readiness tier and the gaps to close first. A clear starting point before you invest.',
      cta: 'Assess readiness',
    },
    {
      slug: 'capability',
      to: '/tools/capability',
      name: 'Team Capability Check',
      tagline: 'Is your training evidenced, or just scheduled?',
      body:
        'Eight one-tap questions on onboarding, CPD, technical and compliance training, regulatory change, conduct and knowledge capture, then the gaps to fix first. Built for advice and professional-services teams.',
      cta: 'Check capability',
    },
    {
      slug: 'kpi-starter',
      to: '/tools/kpi-starter',
      name: 'KPI Starter Kit',
      tagline: 'The six numbers your business should actually watch.',
      body:
        'Five one-tap questions about your business, your goal and how you win work return six KPIs, each with a plain definition, a target and how often to look.',
      cta: 'Get your KPIs',
    },
    {
      slug: 'marketing-rhythm',
      to: '/tools/marketing-rhythm',
      name: 'Marketing Rhythm Planner',
      tagline: 'A marketing plan sized to the hours you really have.',
      body:
        'Five one-tap questions on your time, strengths, audience and goal return a weekly, monthly and quarterly rhythm you can keep, plus the one thing to fix first.',
      cta: 'Plan your rhythm',
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
      home: true,
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
      'The same disciplined path underpins every engagement, from the ten-day Performance Diagnostic to a multi-year partnership.',
    stages: ['Health Check', 'Scope', 'Deliver', 'Sustain'],
    link: { label: 'See how we work', to: '/approach' },
  },
  reach: {
    eyebrow: 'Global reach',
    heading: 'Melbourne-based, delivering globally.',
    line:
      'We have worked with companies across Australia, Asia, the Middle East and North America. The world is connected by the internet and by good ideas, so no project is too far when we are the right fit.',
    stat: 'AU · Asia · Middle East · North America',
    link: { label: 'Explore our reach', to: '/reach' },
  },
}

export const footer = {
  blurb:
    'Melbourne consultancy with two practices: business performance and AI readiness for professional-services firms, and plain-language financial education for workplaces and advice practices.',
  columns: [
    {
      title: 'Services',
      links: [
        { label: 'Analytics & Performance', to: '/services' },
        { label: 'Success Consulting', to: '/services' },
        { label: 'AI Readiness', to: '/services' },
        { label: 'Brand & Marketing', to: '/services' },
        { label: 'Sales Enablement', to: '/services' },
        { label: 'Education & Compliance', to: '/education' },
        { label: 'Investment Frameworks', to: '/services' },
      ],
    },
    {
      title: 'Firm',
      links: [
        { label: 'The Diagnostic', to: '/diagnostic' },
        { label: 'Financial education', to: '/education' },
        { label: 'Leadership', to: '/leadership' },
        { label: 'Approach', to: '/approach' },
        { label: 'Case studies', to: '/case-studies' },
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

// Case studies. Add real engagements here as they are ready.
//
// To add one, copy an entry and fill it in. Fields:
//   slug        unique url segment
//   published   true to show it; false keeps it as a draft in this file only
//   featured    true to surface it in the home "Selected work" teaser
//   clientType  'client' or 'in-house' (labels it honestly on the page)
//   client      real name (with permission) or an anonymised descriptor,
//               e.g. 'A Melbourne financial advice practice'
//   sector, services, timeframe   context
//   summary     one or two sentences for the card and meta description
//   metrics     up to 3 { value, label } tiles, e.g. { value: '5 days to 1', label: 'Month-end close' }
//   situation / approach / outcome   arrays of plain-text paragraphs
//   quote       optional { text, attribution }
//   link        optional { label, href, external } related link
//
// COMPLIANCE: for advice-firm or regulated clients, keep outcomes about
// operations, marketing and process. Never imply financial-product advice or
// investment results. Only name a client or show a logo with their permission.
export const caseStudiesPage = {
  eyebrow: 'Selected work',
  heading: 'Work, and what it changed.',
  intro:
    'A look at the problems we have worked on and the difference the work made. We add engagements here as clients are happy for us to share them. Where a client prefers to stay private, we describe the work without naming them.',
  empty: 'Case studies are on the way. In the meantime, we are glad to talk through relevant examples in a conversation.',
  homeHeading: 'Selected work',
  homeIntro: 'A sample of what we have worked on and the difference it made.',
}

export const caseStudies = [
  {
    slug: 'prompt-optimizer',
    published: true,
    featured: false,
    clientType: 'in-house',
    client: 'GBX Professional Services',
    sector: 'AI tooling',
    services: ['Business AI Readiness'],
    timeframe: 'In-house project',
    summary:
      'We built and shipped a free, model-aware Prompt Optimizer that turns a rough idea into a clear, structured AI prompt, entirely in the browser.',
    metrics: [
      { value: '4', label: 'AI model families covered' },
      { value: '100%', label: 'Runs in the browser' },
      { value: 'Free', label: 'To use, no sign-up' },
    ],
    situation: [
      'People get poor results from AI far more often because of the prompt than the model. Most prompts give the model too little to work with, and the advice on how to fix that is scattered and technical.',
      'We wanted a practical, free way to help anyone write a better prompt, tailored to the kind of model they are actually using, without asking them to learn prompt engineering first.',
    ],
    approach: [
      'We distilled prompt-engineering practice into a simple, repeatable structure: role, context, task, constraints and output format.',
      'We built a tool that assembles that structure from a few plain-language answers, with guidance specific to text, image, video and audio models. It runs entirely in the browser, so nothing anyone types is sent anywhere.',
    ],
    outcome: [
      'The Prompt Optimizer is live and free on this site, and the thinking behind it now informs how we help clients adopt AI deliberately through our Business AI Readiness work.',
      'It is a small example of how we prefer to work: turn a fuzzy problem into a clear system, and make it genuinely useful.',
    ],
    quote: null,
    link: { label: 'Try the Prompt Optimizer', href: '/tools/prompt-optimizer/', external: true },
  },
  // Example template (kept unpublished). Copy this, fill it in, set published: true.
  {
    slug: 'example-advice-practice',
    published: false,
    featured: false,
    clientType: 'client',
    client: 'A Melbourne financial advice practice',
    sector: 'Financial advice',
    services: ['Business Analytics & Performance', 'Business Success Consulting'],
    timeframe: '3 months',
    summary:
      'Example only. Replace with a real engagement: the one-line story and its headline outcome.',
    metrics: [
      { value: '5 days to 1', label: 'Month-end reporting' },
      { value: '+18%', label: 'Adviser capacity' },
      { value: '1', label: 'Source of truth' },
    ],
    situation: ['Example only. Describe the situation and the problem the client faced.'],
    approach: ['Example only. Describe what GBX Professional Services did and how.'],
    outcome: ['Example only. Describe the measurable result and what changed for the client.'],
    quote: { text: 'Example only. A short client quote goes here.', attribution: 'Name, Role, Company' },
    link: null,
  },
]

// Legal pages. Plain-language, and specific to how this site actually handles data.
// Recommend a legal review before relying on it. Edit `updated` when it changes.
export const legal = {
  privacy: {
    title: 'Privacy Policy',
    updated: '2026-09-13',
    intro:
      'GBX PS Pty Ltd, trading as GBX Professional Services (we, us, our), respects your privacy and is committed to protecting your personal information. This policy explains what we collect, why, how we handle it, and your rights, consistent with the Australian Privacy Principles under the Privacy Act 1988 (Cth).',
    sections: [
      {
        heading: 'The information we collect',
        paragraphs: [
          'Information you give us: when you contact us, or enter your email to receive the results of one of our interactive tools, we collect the details you provide. This may include your name, email address, organisation, the content of your enquiry, and the information you enter into, and the results generated by, our tools.',
          'Information collected automatically: when you visit the site, our hosting provider and our systems may record technical information such as your IP address, browser and device type, the pages you view, and the date and time, for security and to understand how the site is used.',
        ],
      },
      {
        heading: 'How we collect it',
        paragraphs: [
          'We collect personal information directly from you when you complete a form, submit your details through a tool, or email us. We also collect limited technical information automatically through our website and analytics. We collect personal information only where it is reasonably necessary for our functions.',
        ],
      },
      {
        heading: 'Why we use your information',
        paragraphs: ['We use the personal information we collect to:'],
        list: [
          'respond to your enquiry and provide the information or tool results you asked for;',
          'send you the results of a tool you have used, where you provided your email for that purpose, and follow up with relevant information;',
          'provide, maintain, secure and improve our website and services;',
          'send occasional updates and insights where you have asked to receive them, which you can opt out of at any time;',
          'meet our legal and regulatory obligations.',
        ],
      },
      {
        heading: 'Cookies, analytics and local storage',
        paragraphs: [
          'We use Cloudflare Web Analytics, a privacy-focused service that does not use cookies and does not track or fingerprint individuals across sites. It gives us aggregated, anonymous information about how the site is used.',
          'Our website may store small amounts of information in your browser, such as a display preference like light or dark mode. This stays on your device and is not sent to us. We do not use advertising or cross-site tracking cookies.',
        ],
      },
      {
        heading: 'Who we share it with',
        paragraphs: [
          'We do not sell your personal information. We share it only with the service providers who help us operate the website and communicate with you, under obligations to protect it. These include Cloudflare, which provides our website hosting, security, analytics and database, and Resend, which delivers our email. We may also disclose information where required or authorised by law.',
        ],
      },
      {
        heading: 'Overseas storage and disclosure',
        paragraphs: [
          'Some of our service providers store or process information on servers located outside Australia, including in the United States. By submitting information through this website, you consent to it being handled in this way. We take reasonable steps to use reputable providers that apply appropriate protections.',
        ],
      },
      {
        heading: 'How we store and protect it',
        paragraphs: [
          'Submissions are stored securely within our hosting provider infrastructure. We take reasonable steps to protect personal information from misuse, interference, loss, and unauthorised access, modification or disclosure. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
        ],
      },
      {
        heading: 'How long we keep it',
        paragraphs: [
          'We keep personal information only for as long as needed for the purposes described in this policy, or as required by law. When it is no longer needed, we take reasonable steps to delete or de-identify it.',
        ],
      },
      {
        heading: 'Accessing and correcting your information',
        paragraphs: [
          'You may request access to the personal information we hold about you, and ask us to correct it if it is inaccurate, by emailing admin@gbxps.com. We will respond within a reasonable time and may need to verify your identity first.',
        ],
      },
      {
        heading: 'Marketing and opting out',
        paragraphs: [
          'Where you have opted in, we may send occasional updates and insights. Every marketing email includes an unsubscribe link, and you can opt out at any time by contacting us. Opting out of marketing does not stop us from responding to a direct enquiry.',
        ],
      },
      {
        heading: 'Complaints',
        paragraphs: [
          'If you have a concern about how we have handled your personal information, please contact us first at admin@gbxps.com so we can look into it. If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au.',
        ],
      },
      {
        heading: 'Children',
        paragraphs: [
          'Our website and services are intended for businesses and professionals and are not directed at children. We do not knowingly collect personal information from children.',
        ],
      },
      {
        heading: 'Changes to this policy',
        paragraphs: [
          'We may update this policy from time to time. The current version is always available on this page, with the date it was last updated shown at the top.',
        ],
      },
      {
        heading: 'Contact us',
        paragraphs: [
          'GBX PS Pty Ltd (GBX Professional Services), 260 Spencer Street, Melbourne VIC 3000. Email admin@gbxps.com. ABN 45 674 252 905.',
        ],
      },
    ],
  },
}

// Per-page document titles and meta descriptions.

// ---------------------------------------------------------------------------
// The packaged entry offer. Stage one of the method (the Health Check) sold as a
// fixed-scope, fixed-fee engagement so a prospect can say yes to something small,
// well defined and low risk before committing to a larger program.
//
// PRICING: the published "from" price and the 60-day fee credit are set in
// `price`. Lift the figure as case studies and demand build. No refund
// guarantee for now. See docs/go-to-market.md.
export const diagnostic = {
  eyebrow: 'Start here',
  name: 'The Performance Diagnostic',
  heading: 'Ten days. One clear picture. A plan you own.',
  intro:
    'The Performance Diagnostic is the first stage of our method packaged as a fixed-scope engagement. Over ten days we review how your business actually runs, show you where the fastest and most durable gains sit, and hand you a prioritised plan. The work runs at your pace and around your calendar, with no interruption to the business. Whether you then run the plan yourself or with us is entirely your call.',
  forWhom: {
    heading: 'Who it is for',
    body:
      'Owners and leaders of professional-services firms, advice practices and other regulated businesses, typically with five to fifty people, who sense the business could run better but want evidence before they act.',
  },
  // Callout beside the fee card.
  pace: {
    eyebrow: 'Work at your pace',
    heading: 'No interruption to your business.',
    body:
      'Interviews, data requests and the readout are scheduled around your calendar, not ours. Most of the ten days is our work, not yours. If you need it to run slower, it can.',
  },
  // The three-step ladder: free tool, free call, paid diagnostic.
  ladder: {
    heading: 'Three steps, each one optional.',
    steps: [
      {
        number: '01',
        title: 'Take the free Health Check',
        body:
          'Two minutes, twelve questions, no sign-up. You get a score across six areas and the two places to look first. It is the same lens we use in the full Diagnostic.',
        link: { label: 'Take the Health Check', to: '/tools/health-check' },
        cost: 'Free',
      },
      {
        number: '02',
        title: 'Book a diagnostic call',
        body:
          'Thirty minutes with one of our leaders on the phone or Microsoft Teams. Bring your results, or just the problem. We will tell you plainly whether the Diagnostic is worth your money.',
        link: { label: 'Book a call', to: '/contact', book: true },
        cost: 'Free',
      },
      {
        number: '03',
        title: 'Run the Performance Diagnostic',
        body:
          'Ten days of structured work with your numbers, systems, processes and people, scheduled at your pace, finishing with a readout and a written plan you keep whether or not you continue with us.',
        link: { label: 'What is included', to: '#included' },
        cost: 'From $4,500 + GST',
      },
    ],
  },
  included: {
    heading: 'What the Diagnostic includes',
    items: [
      {
        title: 'Leadership and team interviews',
        body: 'Structured conversations with the people who run the business and the people who do the work, so the picture is real rather than reported.',
      },
      {
        title: 'Numbers review',
        body: 'Profitability by client, service or product, pipeline and conversion, capacity and utilisation, and the unit economics of growth.',
      },
      {
        title: 'Systems and process walkthrough',
        body: 'How work actually moves through the business: the tools, the handoffs, the workarounds and the places time and margin leak.',
      },
      {
        title: 'Marketing and positioning read',
        body: 'How clearly the business says what it does, whether the market hears it, and how consistently new work arrives.',
      },
      {
        title: 'AI and automation scan',
        body: 'Where repetitive work could be automated safely, where AI adds real value, and where it does not belong.',
      },
      {
        title: 'Opportunity map and 90-day plan',
        body: 'Every finding prioritised, sized and sequenced, with owners and measures, in a written report and a readout session with the three leaders.',
      },
    ],
  },
  price: {
    label: 'Fixed fee',
    value: 'From $4,500 + GST',
    note:
      'The fee is confirmed before we start and does not change. If you go on to a delivery engagement with us within 60 days, the full Diagnostic fee is credited against it. And if the diagnostic call shows the Diagnostic is not the right next step for you, we will say so.',
  },
  outcomes: {
    heading: 'What you walk away with',
    items: [
      'A scored view of the business across finance, sales, operations, marketing, systems and AI',
      'The three to five opportunities that matter most, each with the expected gain and the effort to get it',
      'A 90-day plan with owners, sequence and success measures',
      'A written report and readout that you own outright',
      'A clear recommendation on whether further help is worth it, and from whom',
    ],
  },
  // A tasteful "how we compare" without naming anyone.
  compare: {
    heading: 'What to expect, and what not to.',
    intro:
      'Consulting has a reputation for long reports, vague promises and a quiet dependency that never ends. The Diagnostic is built to be the opposite.',
    columns: [
      {
        title: 'You will get',
        items: [
          'Senior people doing the work, not a junior team behind a senior pitch',
          'Work scheduled at your pace, around your calendar, with no interruption to the business',
          'A fixed scope and a fixed fee, confirmed before we start and credited against any delivery work that follows',
          'Findings grounded in your numbers, not in a template',
          'A plan written so your team can run it without us',
          'A straight answer if we are not the right fit',
        ],
      },
      {
        title: 'You will not get',
        items: [
          'A 90-page report that no one reads',
          'A pitch for a product, a platform or a licence',
          'Advice about financial products. We do not hold an AFSL and never will pretend to',
          'A plan that only works if you keep paying us',
          'Growth targets that ignore your compliance obligations',
        ],
      },
    ],
  },
  faq: {
    heading: 'Common questions',
    items: [
      {
        q: 'How much of my time does it take?',
        a: 'Plan on four to six hours across the ten days: a kick-off, interviews, a short data request and the readout. We do the rest, and we schedule everything around your calendar so the business keeps running as normal.',
      },
      {
        q: 'What do you need from us?',
        a: 'Access to your management numbers, a walkthrough of your main systems, and time with the people you nominate. Everything is covered by a confidentiality agreement.',
      },
      {
        q: 'What happens after the readout?',
        a: 'You have the plan and you own it. Some clients run it themselves. Some ask us to scope the delivery of specific parts, in which case the full Diagnostic fee is credited against that work if it starts within 60 days. Either is a good outcome.',
      },
      {
        q: 'We are not in Melbourne. Does that matter?',
        a: 'No. We have worked with businesses across Australia, Asia, the Middle East and North America. Interviews and readouts run well over Microsoft Teams.',
      },
      {
        q: 'Is this financial advice?',
        a: 'No. GBX Professional Services does not hold an Australian Financial Services Licence and does not provide financial product advice. The Diagnostic is about how your business operates, sells and grows.',
      },
    ],
  },
  cta: {
    heading: 'Start with a conversation.',
    body: 'Tell us what is going on and we will tell you plainly whether the Diagnostic is the right next step.',
    primary: { label: 'Book a diagnostic call', to: '/contact', book: true },
    secondary: { label: 'Take the free Health Check', to: '/tools/health-check' },
  },
  // Compact strip for the home page.
  home: {
    eyebrow: 'Start here',
    heading: 'Not sure where to begin? Start with the Diagnostic.',
    body:
      'Ten days at your pace, from $4,500 + GST, one clear picture of the business and a 90-day plan you own. Or start smaller with the free two-minute Health Check.',
    primary: { label: 'See the Diagnostic', to: '/diagnostic' },
    secondary: { label: 'Take the free Health Check', to: '/tools/health-check' },
  },
}

// Why GBX Professional Services. The positioning we press site-wide, drawn from
// what sets the firm apart from other boutique consultancies: three leaders with
// three disciplines, regulated-sector depth, tools before talk, practical AI, and
// engagements built to end.
export const whyUs = {
  eyebrow: 'Why GBX Professional Services',
  heading: 'What sets the work apart.',
  intro:
    'Plenty of consultancies promise sharper operations. These are the things we think you should compare us on.',
  items: [
    {
      title: 'Three leaders, three disciplines',
      body:
        'Most boutiques bring one lens. Every engagement here draws on a systems leader, a brand and communication leader and an education leader, so the plan covers how the business runs, how it is heard and how its people keep the gains.',
    },
    {
      title: 'Built for regulated businesses',
      body:
        'Our clients carry real obligations. We design around them from the start, and because we do not hold an AFSL and do not sell financial products, our recommendations about your business are not tied to anything we are trying to sell you.',
    },
    {
      title: 'Tools before talk',
      body:
        'Our free tools, articles and published method let you test our thinking before you pay for it. The Health Check on this site uses the same lens as the full Diagnostic.',
    },
    {
      title: 'AI that is practical, not theatrical',
      body:
        'We build with AI every week and publish what we learn. We will show you where it saves real time and tell you plainly where it does not belong.',
    },
    {
      title: 'Engagements built to end',
      body:
        'Fixed scopes, clear endpoints and a documented handover. We measure success by how little you need us afterwards.',
    },
    {
      title: 'Melbourne-based, delivering globally',
      body:
        'We have worked with companies across Australia, Asia, the Middle East and North America. If we are the right fit, distance is not the obstacle.',
    },
  ],
}


// ---------------------------------------------------------------------------
// Financial education practice. First-priority offer alongside business
// performance and AI readiness. Everything here is general education, never
// financial product advice: see docs/content-protocol.md and
// docs/education-campaign.md. Pricing is quoted per program until decided.
export const education = {
  eyebrow: 'Financial education',
  heading: 'Financial education your people will actually thank you for.',
  intro:
    'Plain-language workshops on money, super, investing concepts and the big moments in life, delivered by educators with financial planning qualifications, not by product sellers. For workplaces as a staff benefit, and for advice and accounting practices that want an independent educator for their clients.',
  programs: [
    {
      name: 'The Financial Fluency Program',
      audience: 'For workplaces',
      body:
        'Six plain-language modules delivered to your staff as a wellbeing benefit, on site in Melbourne or live on Microsoft Teams anywhere. Start with one lunch-and-learn and grow from there. Your people get confidence with money; your HR and payroll team stop fielding super questions they cannot answer.',
      points: ['50 to 500 staff', 'Lunch-and-learn, workshop or six-session program', 'On site or Microsoft Teams'],
      cta: { label: 'Check your workplace', to: '/tools/wellbeing-check' },
    },
    {
      name: 'Client Education Series',
      audience: 'For advice and accounting practices',
      body:
        'Seminars and webinars for your clients and prospects, delivered by an independent educator. You host and invite. We teach. You, as the licensed practice, handle any advice that follows. A proven way to fill a room, deepen relationships and warm the next conversation.',
      points: ['60 to 75 minute sessions', 'One event or a quarterly series', 'Your brand, our delivery'],
      cta: { label: 'Talk about a series', to: '/contact' },
    },
  ],
  modulesHeading: 'Six modules, all in plain language.',
  modulesIntro:
    'Every module is factual and conceptual. We explain how things work and the questions worth asking. We never tell anyone what to buy, sell or switch.',
  modules: [
    { title: 'Money foundations', body: 'Cash flow, budgeting that survives real life, and the habits that matter more than the spreadsheet.' },
    { title: 'Super, explained', body: 'How it works, what the statement says, contribution types and caps in general terms, and where to look for more.' },
    { title: 'Investing concepts', body: 'Risk versus volatility, diversification, fees and compounding, and the questions to take to a licensed adviser.' },
    { title: 'Tax basics for employees', body: 'How pay is taxed, what salary packaging is in principle, and records and deductions in general terms.' },
    { title: 'Protecting yourself', body: 'Insurance concepts, scams and fraud, and what to do when something goes wrong.' },
    { title: 'Life moments', body: 'The financial mechanics of buying a home, starting a family, career breaks and later life, explained in principle.' },
  ],
  formats: {
    heading: 'Formats and fees.',
    items: [
      { name: 'Taster', detail: '30 minutes on Microsoft Teams. "Super in 30 minutes". Free, and the best way to see how we teach.' },
      { name: 'Lunch and learn', detail: '45 minutes, one team, on site or online. The usual pilot.' },
      { name: 'Workshop', detail: '90 minutes on one module in depth, with time for questions in principle.' },
      { name: 'Program', detail: 'All six modules over six to twelve weeks, with new-starter sessions and an annual refresh available.' },
    ],
  },
  why: {
    heading: 'Why employers bring us in',
    items: [
      'Financial stress shows up at work as absence, distraction and turnover. Education is the cheapest lever an employer has.',
      'Super and pay questions land on HR and payroll, who are neither equipped nor licensed to answer them. We take those questions off their desk.',
      'It is a visible benefit staff actually use and thank you for, at a fraction of the cost of most wellbeing spend.',
      'Delivered by educators with financial planning and education qualifications, under a written content protocol, with no products to sell.',
    ],
  },
  pricing: {
    label: 'Fees',
    value: 'Quoted per program',
    note: 'A fixed fee per session or program, agreed up front. The taster is free.',
  },
  compliance:
    'GBX Professional Services does not hold an Australian Financial Services Licence and does not provide financial product advice. Our sessions are general information and education only. Where personal advice is needed, we point people to a licensed adviser, and in the Client Education Series that adviser is you.',
  faq: {
    heading: 'Common questions',
    items: [
      {
        q: 'Is the Financial Fluency Program financial advice?',
        a: 'No. It is general financial education only. GBX Professional Services does not hold an Australian Financial Services Licence and does not provide financial product advice. The program builds understanding and confidence, it does not recommend financial products or tell anyone what to buy, sell or switch.',
      },
      {
        q: 'Who is the program for?',
        a: 'The Financial Fluency Program is a staff benefit for workplaces, and the Client Education Series is for advice and accounting practices that want an independent educator for their clients. Both are written in plain language for people without a finance background.',
      },
      {
        q: 'Can it be tailored to our workplace or practice?',
        a: 'Yes. The six modules can be sequenced and adapted to your audience and delivered as a taster, a lunch-and-learn, a single workshop or a full program, sized to the time you have.',
      },
      {
        q: 'How is it delivered?',
        a: 'On site in Melbourne or live on Microsoft Teams anywhere, as single sessions or a run of modules. We schedule around your calendar so it fits alongside normal work.',
      },
      {
        q: 'What topics does it cover?',
        a: 'Six plain-language modules: money foundations, superannuation, investing concepts, tax basics for employees, protecting yourself, and life moments. Every module is factual and conceptual, delivered as general education rather than personal advice.',
      },
    ],
  },
  cta: {
    heading: 'Book a free taster for your team.',
    body: 'Thirty minutes on Microsoft Teams, no cost, no obligation. See how we teach before you decide anything.',
    primary: { label: 'Book a taster', to: '/contact', book: true },
    secondary: { label: 'Check your workplace first', to: '/tools/wellbeing-check' },
  },
  // Compact home-page band.
  home: {
    eyebrow: 'Financial education',
    heading: 'Financially fluent people make better decisions, at work and at home.',
    body:
      'The Financial Fluency Program brings plain-language money education to your workplace as a staff benefit. For advice and accounting practices, the Client Education Series gives your clients an independent educator.',
    primary: { label: 'Explore the programs', to: '/education' },
    secondary: { label: 'Book a free taster', to: '/contact', book: true },
  },
  // Two-path section directly under the hero.
  paths: {
    heading: 'Two practices. One firm.',
    items: [
      {
        eyebrow: 'For your business',
        title: 'Business performance and AI readiness',
        body: 'Analytics, process, sales, marketing and practical AI for professional-services firms and advice practices. Start with the ten-day Performance Diagnostic.',
        link: { label: 'Start with the Diagnostic', to: '/diagnostic' },
        alt: { label: 'All services', to: '/services' },
      },
      {
        eyebrow: 'For your people',
        title: 'Financial education programs',
        body: 'Plain-language money education for workplaces as a staff benefit, and client education seminars for advice and accounting practices. Education, not advice.',
        link: { label: 'Explore the programs', to: '/education' },
        alt: { label: 'Free workplace check', to: '/tools/wellbeing-check' },
      },
    ],
  },
}

export const pageMeta = {
  home: {
    title: 'GBX Professional Services | Business Performance and Financial Education, Melbourne',
    description:
      'Melbourne consultancy with two practices: business performance and AI readiness for professional-services firms, and plain-language financial education programs for workplaces and advice practices. Free tools and a fixed-scope Diagnostic to start.',
  },
  education: {
    title: 'Financial Education Programs | GBX Professional Services',
    description:
      'The Financial Fluency Program: plain-language financial education workshops for workplaces as a staff benefit, and a Client Education Series for advice and accounting practices. Education, not advice. Delivered by educators with financial planning qualifications.',
  },
  willAiHelp: {
    title: 'Will AI Actually Help Your Business? | GBX Professional Services',
    description:
      'A free, honest decision game: choose your sector, pass six doors about pattern, documentation, review, hours, data and ownership, and get a straight answer on whether AI will help your business yet.',
  },
  wellbeingCheck: {
    title: 'Workplace Financial Wellbeing Check | GBX Professional Services',
    description:
      'A free eight-question check for HR and people leaders on how well the organisation supports staff with financial education, with a tier and the gaps to close first.',
  },
  diagnostic: {
    title: 'The Performance Diagnostic | GBX Professional Services',
    description:
      'A fixed-scope ten-day diagnostic from GBX Professional Services, run at your pace with no interruption to the business, from $4,500 + GST: interviews, a review of your numbers, systems and processes, a prioritised opportunity map and a 90-day plan you own. Fee credited against delivery work that follows.',
  },
  services: {
    title: 'Services | GBX Professional Services',
    description:
      'Seven service lines: business analytics and performance, success consulting, business AI readiness, brand and marketing, sales enablement, financial and compliance education, and investment frameworks and adviser support.',
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
      'Thirteen free tools and thirty articles from GBX Professional Services: health check, capacity and pipeline calculators, automation finder, AI readiness, team capability, KPI starter kit, marketing rhythm planner, positioning builder and the Prompt Optimizer.',
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
  pipelineGap: {
    title: 'Pipeline Gap Calculator | GBX Professional Services',
    description:
      'A free calculator that turns a revenue target into the clients, qualified leads and win rate it needs, and shows how far your current lead flow falls short.',
  },
  capacity: {
    title: 'Capacity & Profit Calculator | GBX Professional Services',
    description:
      'A free calculator for professional-services firms: what your team could deliver, what it delivers today, the revenue left on the table and what each point of utilisation is worth.',
  },
  automation: {
    title: 'Automation Opportunity Finder | GBX Professional Services',
    description:
      'A free two-minute tool that estimates how many hours a week your team could stop doing by hand, what that is worth a year, and the three places to start.',
  },
  capability: {
    title: 'Team Capability Check | GBX Professional Services',
    description:
      'A free eight-question check of how an advice or professional-services practice builds and evidences capability: onboarding, CPD, compliance training, regulatory change, conduct and knowledge capture.',
  },
  kpiStarter: {
    title: 'KPI Starter Kit | GBX Professional Services',
    description:
      'A free tool that turns five answers about your business and goal into the six KPIs worth watching, each with a plain definition, a target and a reporting cadence.',
  },
  marketingRhythm: {
    title: 'Marketing Rhythm Planner | GBX Professional Services',
    description:
      'A free tool that builds a weekly, monthly and quarterly marketing rhythm sized to the hours you really have, with the one thing to fix first.',
  },
  positioning: {
    title: 'Positioning Statement Builder | GBX Professional Services',
    description:
      'A free tool that turns six short answers into a clear positioning statement, a one-line pitch and an elevator version you can use straight away. Runs in your browser.',
  },
  privacy: {
    title: 'Privacy Policy | GBX Professional Services',
    description:
      'How GBX Professional Services collects, uses, stores and protects your personal information, consistent with the Australian Privacy Principles.',
  },
  caseStudies: {
    title: 'Case Studies | GBX Professional Services',
    description:
      'Selected work from GBX Professional Services: the problems we have worked on and the difference the work made.',
  },
  contact: {
    title: 'Contact | GBX Professional Services',
    description: 'Start a conversation with GBX Professional Services. Tell us what you are working on and we will reply within two business days.',
  },
  book: {
    title: 'Book a call | GBX Professional Services',
    description: 'Book a short call with GBX Professional Services, on the phone or Microsoft Teams. Choose a time that suits you.',
  },
}
