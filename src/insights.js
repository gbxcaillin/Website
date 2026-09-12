// Insights: categorised articles for the Tools & Insights section.
//
// COMPLIANCE: GBX Professional Services does not hold an AFSL. Investment and
// financial-education pieces here are GENERAL INFORMATION and education only.
// They must not read as personal financial advice or a product recommendation.
// Keep them principle-based and non-specific, and keep the general-information
// line where investing is discussed.
//
// STYLE: no em dashes. Write the firm name in full as "GBX Professional Services".
// Article body blocks are { type: 'p' | 'h', text }. Newest first.

export const insightCategories = [
  { slug: 'ai', label: 'AI' },
  { slug: 'marketing', label: 'Marketing' },
  { slug: 'analytics', label: 'Business Analytics' },
  { slug: 'business-tools', label: 'New Business Tools' },
  { slug: 'sales', label: 'Sales' },
  { slug: 'investment', label: 'Investment Research' },
  { slug: 'education', label: 'Financial Education' },
]

const GENERAL_INFO =
  'This article is general information and education only. It is not personal financial advice and does not take account of your objectives, financial situation or needs. Where a financial service is required, seek an appropriately licensed professional.'

export const articles = [
  {
    slug: 'benchmarking-are-your-numbers-good',
    category: 'analytics',
    title: 'Benchmarking: how to tell if your numbers are actually good',
    date: '2026-07-15',
    readingTime: '4 min read',
    summary:
      'A number on its own tells you very little. Benchmarking gives it a reference point, so you can tell the difference between a good month and a lucky one.',
    body: [
      { type: 'p', text: 'Most owners know their revenue and their bank balance. Far fewer can say whether those numbers are good, because a number on its own has no reference point. A thirty percent gross margin might be excellent in one industry and alarming in another. Benchmarking is simply the practice of giving your numbers something to be measured against.' },
      { type: 'h', text: 'Three reference points that matter' },
      { type: 'p', text: 'Benchmark against your own past, first. A metric trending in the right direction over twelve months tells you more than any single figure. Then benchmark against your plan: the target you set is a deliberate statement of what good looks like. Finally, where you can find it, benchmark against your industry, using published surveys and association data rather than guesswork.' },
      { type: 'h', text: 'Pick a small set and hold to it' },
      { type: 'p', text: 'The temptation is to benchmark everything. Resist it. Choose a handful of measures that actually drive your business, gross margin, revenue per employee, client retention, and track them consistently. A few benchmarks watched every month beat twenty reviewed once a year.' },
      { type: 'p', text: 'The goal is not a perfect comparison. Industry data is never a perfect match for your business. The goal is to move from a private hunch about how you are doing to a defensible view you can act on.' },
    ],
  },
  {
    slug: 'diversification-the-one-idea',
    category: 'education',
    title: 'Diversification: the one idea most worth understanding',
    date: '2026-06-16',
    readingTime: '4 min read',
    summary:
      'Of all the concepts in investing, diversification is the one that rewards a little study the most. Here is the plain-language version, as general education.',
    body: [
      { type: 'p', text: 'If you only ever understand one idea in investing, make it diversification. It is the closest thing the field has to a free lunch, and it is often misunderstood as simply owning a lot of things.' },
      { type: 'p', text: 'Diversification is about owning things that do not all move together. Two investments that rise and fall in lockstep give you little protection, no matter how many you hold. The benefit comes from combining assets whose ups and downs partly offset each other, so the overall ride is smoother than any single holding.' },
      { type: 'h', text: 'Why it matters for ordinary people' },
      { type: 'p', text: 'A smoother ride is not just more comfortable. It makes it easier to stay invested through difficult periods, and staying invested is where most long-term results actually come from. The investor who panics and sells at the bottom rarely does well, however clever the original plan.' },
      { type: 'p', text: 'Diversification does not remove risk, and it does not guarantee a positive outcome. It is a way of not depending on any single bet being right. Understanding that trade-off, rather than any specific product, is the education worth having.' },
      { type: 'p', text: GENERAL_INFO },
    ],
  },
  {
    slug: 'reading-market-commentary',
    category: 'investment',
    title: 'Reading market commentary without losing your head',
    date: '2026-05-14',
    readingTime: '4 min read',
    summary:
      'Financial media is built to capture attention, not to inform decisions. A few habits help you take what is useful from market commentary and leave the rest.',
    body: [
      { type: 'p', text: 'There has never been more market commentary available, and never been easier to be misled by it. The financial media exists partly to inform and partly to capture attention, and the two goals pull in different directions. A calm, accurate headline rarely gets clicked.' },
      { type: 'h', text: 'Separate news from noise' },
      { type: 'p', text: 'Ask of any piece of commentary: does this change anything I would actually do? Most does not. Daily price moves, confident forecasts and dramatic predictions make for engaging reading but poor inputs to a long-term plan. The signal is usually in the slow, structural stories, not the fast ones.' },
      { type: 'h', text: 'Check the incentive' },
      { type: 'p', text: 'Notice who is speaking and what they gain. A commentator selling a forecast, a fund promoting a theme, or a platform encouraging activity all have reasons to sound certain. That does not make them wrong, but it is worth knowing before you weigh their view.' },
      { type: 'p', text: 'Good research is a tool for thinking, not a substitute for it. The aim of reading commentary is a better-informed mind, not a running instruction to buy or sell.' },
      { type: 'p', text: GENERAL_INFO },
    ],
  },
  {
    slug: 'knowledge-tools-that-scale',
    category: 'business-tools',
    title: 'Knowledge tools that scale with your team',
    date: '2026-04-15',
    readingTime: '4 min read',
    summary:
      'The moment a second person joins, what lives only in your head becomes a bottleneck. A light knowledge system fixes it before it becomes a problem.',
    body: [
      { type: 'p', text: 'In a business of one, the knowledge lives in your head and that works fine. The moment a second or third person joins, everything you know but have never written down becomes a bottleneck, and every question routes back through you.' },
      { type: 'h', text: 'Start with a single home for how things are done' },
      { type: 'p', text: 'You do not need an elaborate system. A well-organised shared workspace, a wiki, a structured folder, or a dedicated tool such as Notion or a similar product, is enough to begin. The discipline that matters is having one agreed place where the answer to how do we do this lives.' },
      { type: 'h', text: 'Write it as you do it' },
      { type: 'p', text: 'The cheapest time to document a process is the moment you run it. The next time you onboard a client or close the month, capture the steps as you go. Six of those and you have a genuine operations manual, built with almost no extra effort.' },
      { type: 'p', text: 'Knowledge tools earn their keep quietly. They shorten training, reduce the questions that only you can answer, and make the business worth more, because a business that can run without its founder in the room is a more valuable business.' },
    ],
  },
  {
    slug: 'privacy-data-rising-bar-for-marketers',
    category: 'marketing',
    title: 'Privacy, data and the rising bar for marketers',
    date: '2026-03-16',
    readingTime: '5 min read',
    summary:
      'Expectations around personal data keep tightening, in law and in public sentiment. For marketers, especially in regulated sectors, that is a shift to plan around, not against.',
    body: [
      { type: 'p', text: 'The direction of travel on personal data is clear and consistent: more consent, more transparency, and more accountability for how businesses collect and use it. Reforms to privacy law, tighter platform rules, and the slow decline of third-party tracking all point the same way.' },
      { type: 'h', text: 'What this means in practice' },
      { type: 'p', text: 'Marketing that depends on quietly harvesting data and following people around the internet is becoming both harder and riskier. Marketing built on permission, on people choosing to hear from you because the value is clear, is becoming the durable option. That is a good change for businesses with something genuine to say.' },
      { type: 'h', text: 'Regulated sectors carry an extra layer' },
      { type: 'p', text: 'For financial services and other regulated industries, advertising rules sit on top of privacy law. Claims must be accurate and not misleading, and the line between general information and regulated advice must be respected. The safe path is to design campaigns with those obligations in mind from the start, rather than checking them at the end.' },
      { type: 'p', text: 'None of this is a reason to retreat from marketing. It is a reason to build on first-party relationships, clear consent and honest claims, which is where trust was always going to be won.' },
    ],
  },
  {
    slug: 'ai-governance-starting-point',
    category: 'ai',
    title: 'AI governance for small business: a practical starting point',
    date: '2026-02-17',
    readingTime: '5 min read',
    summary:
      'You do not need a policy department to use AI responsibly. You need a few clear rules about data, review and accountability that fit on a single page.',
    body: [
      { type: 'p', text: 'Governance sounds like something only large organisations need. In reality, the smaller the business, the more a few simple AI rules pay off, because there is no committee to catch a mistake before it reaches a client.' },
      { type: 'h', text: 'Three rules that cover most of the risk' },
      { type: 'p', text: 'First, be careful what you paste in. Do not put client-identifying information, credentials or anything confidential into a public AI tool unless you know how that tool handles data. Second, a human reviews anything that goes to a client or a regulator. AI drafts, people approve. Third, someone owns each use case, so accountability never falls into a gap.' },
      { type: 'h', text: 'Write it down and keep it short' },
      { type: 'p', text: 'A one-page policy that people actually read beats a thirty-page one that sits in a drawer. Name the tools you allow, the data you will not share, and the review step before anything ships. Revisit it as the tools change, which they will.' },
      { type: 'p', text: 'Good governance is not about slowing AI down. It is about being able to adopt it confidently, because you have decided in advance where the guardrails sit.' },
    ],
  },
  {
    slug: 'referrals-by-design',
    category: 'sales',
    title: 'Referrals by design, not by luck',
    date: '2026-01-19',
    readingTime: '4 min read',
    summary:
      'Most businesses say referrals are their best source of clients, then leave them entirely to chance. A light, repeatable system turns goodwill into a reliable channel.',
    body: [
      { type: 'p', text: 'Ask owners where their best clients come from and most say referrals. Ask what their referral system is and most go quiet. The very channel they rate most highly is the one they leave entirely to luck.' },
      { type: 'h', text: 'Make it easy to refer you' },
      { type: 'p', text: 'People refer when they know what you do, trust that you will look after their contact, and can describe you in a sentence. Give them that sentence. A clear, simple description of who you help and how travels far better than a list of services.' },
      { type: 'h', text: 'Ask at the right moment' },
      { type: 'p', text: 'The best time to ask is just after you have delivered something the client is genuinely pleased with. Not a mass campaign, just a natural, specific request: is there anyone else you know facing this problem. Timing and specificity do most of the work.' },
      { type: 'p', text: 'A referral system is not pushy. It is simply refusing to leave your strongest channel to chance, and giving happy clients an easy way to do something they were already inclined to do.' },
    ],
  },
  {
    slug: 'the-dashboard-trap',
    category: 'analytics',
    title: 'The dashboard trap: measuring what actually matters',
    date: '2025-12-15',
    readingTime: '4 min read',
    summary:
      'A dashboard full of numbers can feel like insight while delivering none. The fix is fewer metrics, chosen because they change a decision.',
    body: [
      { type: 'p', text: 'Modern tools make it trivial to build a dashboard with forty metrics on it. That is exactly the problem. A wall of numbers looks like control and often delivers the opposite, because attention is finite and most of those numbers never change a decision.' },
      { type: 'h', text: 'The test for every metric' },
      { type: 'p', text: 'Before a number earns a place on your dashboard, ask: if this moved sharply, would I do something differently? If the honest answer is no, it is a vanity metric. Interesting, perhaps, but not a management tool. Cut it.' },
      { type: 'h', text: 'Lead and lag together' },
      { type: 'p', text: 'The best dashboards pair lagging measures, which tell you what happened, with leading ones, which hint at what is coming. Revenue is a lag. Qualified enquiries and pipeline are leads. Watching only the lag is like driving by the rear-view mirror.' },
      { type: 'p', text: 'A good dashboard is mostly white space. A handful of numbers you trust, watched often, will run a business better than a crowded screen nobody quite believes.' },
    ],
  },
  {
    slug: 'fees-matter-the-quiet-drag',
    category: 'education',
    title: 'Fees matter: the quiet drag of costs over time',
    date: '2025-11-17',
    readingTime: '4 min read',
    summary:
      'Costs feel small in any single year and compound into something large over decades. Understanding that arithmetic is basic financial literacy, offered here as general education.',
    body: [
      { type: 'p', text: 'A fee of one or two percent sounds trivial, and in a single year it nearly is. Over an investing lifetime it is anything but, because the same compounding that grows your money also grows the cost of every fee you pay along the way.' },
      { type: 'h', text: 'Why small percentages become large sums' },
      { type: 'p', text: 'Every dollar paid in fees is a dollar that is no longer invested, and it is also all the growth that dollar would have earned in the years that followed. Compounded across decades, a difference of one percent a year can add up to a meaningful share of a final balance. The arithmetic is not intuitive, which is exactly why it is worth learning.' },
      { type: 'h', text: 'What to do with the idea' },
      { type: 'p', text: 'The point is not that cheapest is always best. Some services are worth paying for. The point is to know what you are paying, in dollars and not just percentages, and to be able to weigh it against what you receive. Cost transparency is something you are entitled to ask for.' },
      { type: 'p', text: GENERAL_INFO },
    ],
  },
  {
    slug: 'investment-platforms-falling-cost-of-access',
    category: 'investment',
    title: 'Investment platforms and the falling cost of access',
    date: '2025-10-15',
    readingTime: '4 min read',
    summary:
      'The cost and friction of investing have fallen dramatically in a decade. That is mostly good, and it comes with a few new things worth understanding.',
    body: [
      { type: 'p', text: 'A decade ago, investing meant phone calls, paperwork and brokerage costs that made small or frequent trades uneconomic. Today a low-cost platform and a few taps do the same job. The fall in the cost and friction of access is one of the more important quiet changes in personal finance.' },
      { type: 'h', text: 'What got better' },
      { type: 'p', text: 'Lower costs, fractional investing and simple interfaces have opened the door to people who were previously priced or intimidated out. Building a diversified position no longer requires a large sum or a broker on the phone. For long-term investors, that is a genuine improvement.' },
      { type: 'h', text: 'What to keep an eye on' },
      { type: 'p', text: 'Frictionless access cuts both ways. The same ease that helps you invest steadily also makes it easy to trade impulsively, chase trends, or treat investing like a game. The platform is a tool. Whether it serves a plan or undermines one depends on how it is used.' },
      { type: 'p', text: GENERAL_INFO },
    ],
  },
  {
    slug: 'writing-prompts-that-work',
    category: 'ai',
    title: 'How to write AI prompts that actually work',
    date: '2025-09-12',
    readingTime: '6 min read',
    summary:
      'Most AI disappointment is a prompting problem, not a model problem. A simple, repeatable structure gets you dramatically better results, and our Prompt Optimizer builds on it, tailoring the prompt to the specific AI model you are using.',
    tool: {
      href: '/tools/prompt-optimizer/',
      heading: 'Try it without the hand-assembly',
      body: 'Our Prompt Optimizer applies this structure for you and tailors the result to the specific AI model you are using.',
      label: 'Open the Prompt Optimizer',
    },
    body: [
      { type: 'p', text: 'If you have ever asked an AI for help and got back something vague, generic or subtly wrong, the model is usually not the problem. The prompt is. A large language model can only work with what you give it, and most prompts give it far too little to go on.' },
      { type: 'p', text: 'The good news is that better prompting is a skill, not a talent. A handful of habits will lift the quality of almost everything you get back. Here is the structure we use, and the one our Prompt Optimizer builds for you automatically.' },
      { type: 'h', text: 'Give it a role' },
      { type: 'p', text: "Start by telling the model who it should be. 'You are a senior financial-services compliance analyst' produces a very different answer to no framing at all. A role sets the vocabulary, the depth and the assumptions the model brings to the task." },
      { type: 'h', text: 'Supply the context' },
      { type: 'p', text: 'The model cannot see what you can see. Tell it who the output is for, what has happened so far, and any constraints that matter. A paragraph of context is often worth more than a page of instructions.' },
      { type: 'h', text: 'State the task plainly' },
      { type: 'p', text: "Be specific about the one thing you want. 'Summarise this in five bullet points a busy director can scan' beats 'help me with this'. If there are several things, number them, and consider running them as separate prompts." },
      { type: 'h', text: 'Set the constraints' },
      { type: 'p', text: 'Length, tone, what to avoid, the audience, the reading level. Constraints are not limits on the model, they are how you get the specific answer you actually need instead of a plausible average of everything.' },
      { type: 'h', text: 'Describe the output format' },
      { type: 'p', text: 'Ask for the exact shape you want to receive: a table, a list, a short email, JSON, headings. Telling the model how to lay the answer out saves you the reformatting and makes the result usable straight away.' },
      { type: 'h', text: 'Iterate' },
      { type: 'p', text: 'Your first prompt is a draft. Read the response, notice where it missed, and add the missing context or constraint. Two or three quick rounds will get you further than trying to write the perfect prompt in one go.' },
      { type: 'p', text: 'Put those six habits together and you have a prompt that gives a model a real chance of being useful. If you would rather not assemble it by hand every time, our Prompt Optimizer does the work for you, and goes a step further by tailoring the result to the specific AI model you are using.' },
    ],
  },
  {
    slug: 'automations-worth-setting-up-first',
    category: 'business-tools',
    title: 'The automations worth setting up first',
    date: '2025-08-14',
    readingTime: '4 min read',
    summary:
      'You can automate almost anything now, which is exactly why most people automate the wrong things. Start where the work is repetitive, rule-based and frequent.',
    body: [
      { type: 'p', text: 'Automation has never been more accessible. Tools that connect your apps together can move information around without anyone touching it. The risk is not that you cannot automate enough, it is that you automate the wrong things and add fragile complexity for little gain.' },
      { type: 'h', text: 'The three-part test' },
      { type: 'p', text: 'A task is a good candidate when it is repetitive, rule-based and frequent. Repetitive means it happens the same way each time. Rule-based means the decisions can be written down. Frequent means it happens often enough that the time saved is real. Tasks that fail any of the three are usually better left to a person.' },
      { type: 'h', text: 'Good first candidates' },
      { type: 'p', text: 'Moving new enquiries into your CRM, sending a consistent welcome sequence, chasing unpaid invoices, and backing up important files are classic starting points. They are dull, they are rule-based, and they are exactly the sort of thing that quietly slips when a business is busy.' },
      { type: 'p', text: 'Automate the boring and predictable, keep judgement in human hands, and document what you have built so it does not become a mystery when it breaks.' },
    ],
  },
  {
    slug: 'compliance-aware-marketing-financial-services',
    category: 'marketing',
    title: 'Compliance-aware marketing for financial services',
    date: '2025-07-15',
    readingTime: '5 min read',
    summary:
      'Marketing a financial services business means growing demand without crossing regulatory lines. Done well, compliance is not a brake on marketing, it is what makes it trustworthy.',
    body: [
      { type: 'p', text: 'Marketing in financial services carries an obligation most industries do not face. What you say, how you say it, and the impression you leave are all subject to rules designed to protect consumers. Treating those rules as an afterthought is how good businesses end up in avoidable trouble.' },
      { type: 'h', text: 'The line that matters most' },
      { type: 'p', text: 'The clearest risk is blurring general information and regulated advice. Educational content that helps people understand their options is very different from a recommendation about a specific product or strategy. Marketing should stay firmly on the general-information side unless the business is licensed to cross it, and should say so plainly.' },
      { type: 'h', text: 'Accurate, balanced, not misleading' },
      { type: 'p', text: 'Claims need to be accurate and capable of being substantiated. Past results are not a promise of future ones, and benefits should not be presented without the relevant risks. This is not just legally safer, it is better marketing, because balanced claims are more believable.' },
      { type: 'p', text: 'The businesses that market well in this sector treat compliance as a design input, not a review gate. Build the obligations into the brief, and the creative that follows is both safer and more credible. GBX Professional Services works alongside licensed firms to do exactly that, without providing financial services itself.' },
    ],
  },
  {
    slug: 'chatbot-to-colleague-ai-grew-up',
    category: 'ai',
    title: 'From chatbot to colleague: how AI tools grew up',
    date: '2025-06-16',
    readingTime: '5 min read',
    summary:
      'AI assistants moved from novelty to genuinely useful in a remarkably short time. Understanding what changed helps you judge where they fit in your business.',
    body: [
      { type: 'p', text: 'It is easy to forget how quickly AI assistants went from party trick to working tool. Early versions were impressive but unreliable, confident and frequently wrong. In a short span they became capable enough to sit inside real workflows, and that shift is worth understanding.' },
      { type: 'h', text: 'What actually changed' },
      { type: 'p', text: 'Three things matured together. The models became more capable and more consistent. They gained the ability to work with your own documents and data rather than only their training. And they moved from a chat window into the tools people already use, so the help arrives where the work happens.' },
      { type: 'h', text: 'From answering to doing' },
      { type: 'p', text: 'The larger change is from tools that answer questions to tools that carry out tasks: drafting, summarising, extracting, and increasingly taking multi-step actions under supervision. That is more useful and it raises the stakes, which is why a review step and clear boundaries matter more than ever.' },
      { type: 'p', text: 'The practical takeaway is not to chase every release. It is to recognise that these tools crossed the line from novelty to genuinely useful, and to find the two or three places they save your business real time.' },
    ],
  },
  {
    slug: 'onboarding-new-clients-so-they-stay',
    category: 'sales',
    title: 'Onboarding new clients so they actually stay',
    date: '2025-05-15',
    readingTime: '4 min read',
    summary:
      'Winning a client is expensive. Losing them in the first ninety days wastes all of it. A deliberate onboarding process is the cheapest retention work you will ever do.',
    body: [
      { type: 'p', text: 'A great deal of effort goes into winning a new client and comparatively little into the first few weeks afterward. That is the wrong way round. The early experience sets the tone for the whole relationship, and a shaky start is expensive to recover from.' },
      { type: 'h', text: 'The first weeks decide the relationship' },
      { type: 'p', text: 'New clients are quietly asking one question: did I make the right decision. Everything in onboarding should answer yes. Clear next steps, a warm welcome, an early and visible win, and no dropped balls all reassure them that the confidence they placed in you was justified.' },
      { type: 'h', text: 'Make it a process, not a scramble' },
      { type: 'p', text: 'Onboarding should not depend on who happens to be handling it. Write down the steps, the timing and the owner of each. A simple checklist ensures every client gets the same considered start, even when you are busy, which is exactly when standards tend to slip.' },
      { type: 'p', text: 'Good onboarding is retention work disguised as admin. It reduces early churn, sets expectations, and turns a nervous new client into a confident long-term one.' },
    ],
  },
  {
    slug: 'messy-spreadsheet-to-single-source-of-truth',
    category: 'analytics',
    title: 'From messy spreadsheet to single source of truth',
    date: '2025-04-15',
    readingTime: '4 min read',
    summary:
      'Most small businesses run on spreadsheets that have quietly become unreliable. You do not need to replace them, you need to make one of them the version everyone trusts.',
    body: [
      { type: 'p', text: 'Behind most small businesses is a spreadsheet that started tidy and grew wild. Three versions with slightly different numbers, a tab nobody understands, a formula someone broke in March. It still runs the business, and nobody quite trusts it.' },
      { type: 'h', text: 'The problem is not spreadsheets' },
      { type: 'p', text: 'Spreadsheets are a fine tool. The problem is having several competing versions of the truth. When two reports disagree, people stop believing either, and decisions drift back to gut feel. The fix is to nominate one source that everyone agrees is the real one.' },
      { type: 'h', text: 'A few habits that restore trust' },
      { type: 'p', text: 'Keep raw data separate from calculations and presentation. Give each number one home and reference it everywhere else rather than retyping. Date and label versions so there is never a question of which is current. These small disciplines turn a fragile file into something dependable.' },
      { type: 'p', text: 'You may eventually outgrow the spreadsheet and move to a proper tool. Until then, one clean, trusted, well-structured file will serve you far better than a drawer full of conflicting ones.' },
    ],
  },
  {
    slug: 'compounding-explained',
    category: 'education',
    title: 'Compounding, explained without the hype',
    date: '2025-03-17',
    readingTime: '4 min read',
    summary:
      'Compounding is described as magic so often that the actual mechanism gets lost. Here is the plain version, and why time matters more than timing, offered as general education.',
    body: [
      { type: 'p', text: 'Compounding is talked about so breathlessly that the real idea often disappears behind the hype. Stripped back, it is simple: when your returns themselves start earning returns, growth builds on growth, and the effect gets larger the longer it runs.' },
      { type: 'h', text: 'Why time does the heavy lifting' },
      { type: 'p', text: 'In the early years compounding looks unremarkable. The impressive part comes later, because each period builds on a larger base than the one before. That is why starting earlier, even with less, often beats starting later with more. Time in the market, not perfect timing, is what compounding rewards.' },
      { type: 'h', text: 'It works both ways' },
      { type: 'p', text: 'The same mechanism applies to costs and to debt. Fees compound against you, and high-interest debt compounds relentlessly. Understanding compounding is as much about respecting its downside as admiring its upside.' },
      { type: 'p', text: GENERAL_INFO },
    ],
  },
  {
    slug: 'active-passive-index-thinking',
    category: 'investment',
    title: 'Active, passive and the rise of index thinking',
    date: '2025-02-17',
    readingTime: '5 min read',
    summary:
      'The move toward low-cost index investing is one of the defining shifts of modern markets. Here is what changed and why it matters, as general commentary.',
    body: [
      { type: 'p', text: 'For most of investing history, the default was active management: a professional choosing holdings in the hope of beating the market. Over the last two decades, a quieter idea has reshaped the landscape, the notion that simply owning the whole market at low cost is, for many people, hard to beat.' },
      { type: 'h', text: 'What the shift is really about' },
      { type: 'p', text: 'Index investing grew not because active management stopped trying, but because cost and consistency turned out to matter enormously over long periods. Lower fees and broad diversification are dependable, whereas outperformance is difficult to sustain. That trade-off, rather than any single product, is the heart of the change.' },
      { type: 'h', text: 'Not a religion' },
      { type: 'p', text: 'It would be a mistake to treat this as a settled war with a winner. Both approaches have a place, and the right mix depends on goals, costs, tax and temperament. The useful lesson from the rise of index thinking is to take costs and diversification seriously, whatever you ultimately choose.' },
      { type: 'p', text: GENERAL_INFO },
    ],
  },
  {
    slug: 'choosing-a-crm',
    category: 'business-tools',
    title: 'Choosing a CRM you will not regret in a year',
    date: '2025-01-16',
    readingTime: '4 min read',
    summary:
      'A CRM is one of the stickiest tools you will buy, so the wrong choice is costly to unwind. Pick for how you actually work, not for the longest feature list.',
    body: [
      { type: 'p', text: 'A customer relationship system quietly becomes the spine of a growing business, which is exactly why choosing badly hurts. Data, process and habits build up inside it, and moving to something else a year later is painful. It pays to choose deliberately.' },
      { type: 'h', text: 'Buy for your process, not the demo' },
      { type: 'p', text: 'Every CRM demos beautifully. The question is whether it fits the way you actually win and keep clients. Map your real process first, from first enquiry to ongoing relationship, then judge tools against that. A shorter list of features you will use beats a long list you will not.' },
      { type: 'h', text: 'Adoption beats capability' },
      { type: 'p', text: 'The best CRM is the one your team will actually keep up to date. A powerful system nobody maintains is worse than a simple one everyone uses, because half-entered data misleads. Favour something people find easy enough to live in every day.' },
      { type: 'p', text: 'Start simpler than you think you need. You can grow into more capability, but you cannot easily recover the months lost to a tool that fought your team the whole way.' },
    ],
  },
  {
    slug: 'annual-marketing-rhythm',
    category: 'marketing',
    title: 'A simple annual marketing rhythm for busy owners',
    date: '2024-12-16',
    readingTime: '4 min read',
    summary:
      'Marketing fails less from bad ideas than from no rhythm. A light annual and monthly cadence keeps it going when the business gets busy, which is always.',
    body: [
      { type: 'p', text: 'For most owners, marketing does not fail because the ideas are poor. It fails because it is the first thing dropped when work gets busy, and then restarted from cold months later. The cure is not more effort, it is a rhythm that survives a hectic week.' },
      { type: 'h', text: 'Plan the year in an hour' },
      { type: 'p', text: 'Once a year, sketch the shape of the next twelve months: the busy and quiet seasons, a few themes you want to be known for, and any events or moments worth building around. It does not need to be detailed. It needs to exist, so each month has a direction rather than a blank page.' },
      { type: 'h', text: 'Make the monthly commitment small' },
      { type: 'p', text: 'A modest amount done every month beats a burst once a quarter. One useful article, a handful of posts, one email to your list, kept up consistently, compounds. Consistency signals reliability, and reliability is much of what marketing is quietly selling.' },
      { type: 'p', text: 'Choose a cadence you can sustain on a bad month, not a good one. The plan that survives your busiest week is the one that actually works.' },
    ],
  },
  {
    slug: 'where-ai-helps-small-business',
    category: 'ai',
    title: 'Where AI genuinely helps a small business today',
    date: '2024-11-15',
    readingTime: '5 min read',
    summary:
      'Beneath the hype, AI is already quietly useful for specific, everyday tasks. Knowing where it helps, and where it does not, is worth more than any prediction.',
    body: [
      { type: 'p', text: 'It is hard to think clearly about AI through the noise of hype and alarm. Set both aside and a practical picture emerges: for a small business, AI is already genuinely useful at a handful of everyday tasks, and unreliable at others. Knowing which is which is the whole game.' },
      { type: 'h', text: 'Where it earns its place' },
      { type: 'p', text: 'AI is strong at first drafts, at summarising long documents, at turning rough notes into something readable, and at answering how-do-I questions about software. These are tasks where a fast, imperfect starting point saves real time and a human still reviews the result.' },
      { type: 'h', text: 'Where to be careful' },
      { type: 'p', text: 'It is weaker where accuracy is non-negotiable and cannot be easily checked, where specialised or current knowledge is required, and anywhere a confident but wrong answer would cause harm. In regulated work especially, AI drafts and people remain accountable.' },
      { type: 'p', text: 'The businesses getting value from AI today are not chasing every headline. They have found two or three tasks where it reliably saves time, put a review step around it, and left the rest alone.' },
    ],
  },
  {
    slug: 'objection-handling-listening',
    category: 'sales',
    title: 'Objection handling is a listening skill, not a script',
    date: '2024-10-16',
    readingTime: '4 min read',
    summary:
      'Objections are not attacks to be defeated with clever lines. They are information. The best response is usually a better question, not a smoother rebuttal.',
    body: [
      { type: 'p', text: 'Much sales training treats objections as obstacles to be overcome with the right script. That framing sets up the conversation as a contest, and people can feel when they are being handled. A better view is that an objection is information the client has kindly volunteered.' },
      { type: 'h', text: 'Understand before you answer' },
      { type: 'p', text: 'When someone says it is too expensive, that could mean several different things: it is beyond the budget, the value is not yet clear, or the timing is wrong. Answering the wrong version wastes the moment. A calm question, can you tell me more about that, surfaces the real concern before you respond.' },
      { type: 'h', text: 'Some objections are the truth' },
      { type: 'p', text: 'Not every objection should be overcome. Sometimes the honest answer is that you are not the right fit, and saying so builds more trust than pushing ever could. A reputation for straight dealing wins more over time than a high close rate on the wrong clients.' },
      { type: 'p', text: 'Handle objections by listening first, understanding the real concern, and responding to that. It is slower than a script and far more persuasive.' },
    ],
  },
  {
    slug: 'spotting-margin-leaks',
    category: 'analytics',
    title: 'Spotting margin leaks before they hurt',
    date: '2024-09-16',
    readingTime: '4 min read',
    summary:
      'Profit rarely disappears in one dramatic event. It leaks quietly, a little at a time, until a busy year somehow ends with less to show for it. Here is where to look.',
    body: [
      { type: 'p', text: 'Businesses rarely lose profit in a single dramatic stroke. They lose it slowly: a discount that became a habit, a service priced years ago, a task that quietly takes twice as long as it is billed for. Individually invisible, together they explain the busy year that somehow ended with little to show for it.' },
      { type: 'h', text: 'Look at profit per thing, not just total' },
      { type: 'p', text: 'Total profit hides a great deal. Break it down by client, by service, by project, and the leaks appear. Almost every business finds a segment it assumed was profitable that, once its true costs are counted, barely breaks even or loses money.' },
      { type: 'h', text: 'Watch the slow drifts' },
      { type: 'p', text: 'The dangerous leaks are gradual: prices that never kept pace with costs, scope that crept without a change in fee, discounts offered once and never withdrawn. Because each change is small, none triggers alarm, which is precisely why they need deliberate review.' },
      { type: 'p', text: 'A simple quarterly look at profitability by segment catches most leaks while they are still small. The numbers are usually already in your systems, waiting to be asked the right question.' },
    ],
  },
  {
    slug: 'understanding-risk-volatility-vs-loss',
    category: 'education',
    title: 'Understanding risk: volatility is not the same as loss',
    date: '2024-08-15',
    readingTime: '4 min read',
    summary:
      'The word risk gets used loosely in finance, which leads to poor decisions. Separating short-term volatility from permanent loss is a foundational piece of financial literacy.',
    body: [
      { type: 'p', text: 'Risk is one of the most used and least examined words in finance. People reach for it to mean very different things, and the confusion leads to poor decisions. A useful first step in financial literacy is to separate two ideas that often get blurred: volatility and permanent loss.' },
      { type: 'h', text: 'Volatility is movement, not disaster' },
      { type: 'p', text: 'Volatility is how much something bounces around in value along the way. It feels like risk, especially when values fall, but for a long-term investor it is often just noise. A holding can be volatile and still recover and grow. Reacting to volatility as though it were permanent loss is a common and costly mistake.' },
      { type: 'h', text: 'Permanent loss is the real concern' },
      { type: 'p', text: 'Permanent loss is capital you do not get back: a business that fails, or selling in a panic and locking in a fall. The genuine risks worth managing are the ones that do lasting damage, not the ones that merely feel uncomfortable in the moment.' },
      { type: 'p', text: GENERAL_INFO },
    ],
  },
  {
    slug: 'how-etfs-changed-investing',
    category: 'investment',
    title: 'How ETFs changed the way ordinary investors build portfolios',
    date: '2024-07-16',
    readingTime: '5 min read',
    summary:
      'Exchange-traded funds quietly rewired personal investing, making broad diversification cheap and simple. Here is what changed, offered as general commentary.',
    body: [
      { type: 'p', text: 'Few innovations have changed personal investing as much as the exchange-traded fund, and few are as easy to overlook. By packaging a whole basket of holdings into something you can buy in a single trade, ETFs made broad diversification cheap, simple and available to almost anyone.' },
      { type: 'h', text: 'Diversification made simple' },
      { type: 'p', text: 'Building a spread of holdings once took capital, effort and cost. A single low-cost ETF can now provide exposure to hundreds or thousands of underlying holdings at once. For ordinary investors, that turned diversification from a project into a default, which is a meaningful shift.' },
      { type: 'h', text: 'New tools, same principles' },
      { type: 'p', text: 'What ETFs did not change is the fundamentals. Diversification, cost, time horizon and temperament still decide outcomes. The proliferation of narrow and exotic ETFs also means the label alone tells you little. As always, what sits inside the product matters more than the wrapper around it.' },
      { type: 'p', text: GENERAL_INFO },
    ],
  },
  {
    slug: 'lean-tech-stack-services-business',
    category: 'business-tools',
    title: 'The lean tech stack for a services business',
    date: '2024-06-17',
    readingTime: '4 min read',
    summary:
      'It is easy to accumulate a dozen overlapping subscriptions and call it a system. A lean services business needs surprisingly few tools, chosen to work together.',
    body: [
      { type: 'p', text: 'Software is so easy to buy that many businesses end up with a drawer full of overlapping subscriptions, each solving part of a problem, none quite talking to the others. More tools is not more capability. Often it is just more cost, more logins and more places for information to hide.' },
      { type: 'h', text: 'The core a services business actually needs' },
      { type: 'p', text: 'Most service businesses run well on a small core: a way to manage clients and pipeline, a way to send and track invoices, a shared place for documents and knowledge, a scheduling tool, and reliable communication. Get those working together well before adding anything more specialised.' },
      { type: 'h', text: 'Integration over accumulation' },
      { type: 'p', text: 'The value is not in any single tool, it is in how they connect. Five tools that share information smoothly beat ten that each hold a separate, partial version of the truth. When evaluating anything new, ask how it fits the tools you already rely on.' },
      { type: 'p', text: 'Review the stack once a year. Cancel what you stopped using, consolidate where you can, and resist buying a tool to solve a problem a habit would fix.' },
    ],
  },
  {
    slug: 'positioning-clear-beats-clever',
    category: 'marketing',
    title: 'Positioning: why being clear beats being clever',
    date: '2024-05-16',
    readingTime: '4 min read',
    summary:
      'Most businesses describe themselves in ways that sound impressive and mean nothing. Clear positioning, who you help and how, does more work than any clever slogan.',
    body: [
      { type: 'p', text: 'Ask ten businesses what they do and most will answer in language that sounds professional and communicates almost nothing. Solutions, synergy, world-class, end-to-end. The instinct to sound impressive quietly defeats the actual job of positioning, which is to be understood and remembered.' },
      { type: 'h', text: 'Clarity is the rare advantage' },
      { type: 'p', text: 'Because clever and vague is so common, clear and specific stands out. Who exactly do you help, what problem do you solve, and why you rather than the alternatives. A prospect who understands your positioning in one sentence can repeat it to someone else, which is how word of mouth actually travels.' },
      { type: 'h', text: 'Narrow to stand out' },
      { type: 'p', text: 'The fear is that being specific turns people away. In practice, trying to appeal to everyone is what makes you forgettable. A sharp position aimed at the clients you most want to win is more attractive to them, and being memorable to the right people beats being vaguely acceptable to all.' },
      { type: 'p', text: 'Good positioning is not a clever line. It is a clear, honest, specific answer to who this is for and why it matters, said the same way every time.' },
    ],
  },
  {
    slug: 'large-language-models-plain-terms',
    category: 'ai',
    title: 'Large language models, in plain business terms',
    date: '2024-04-16',
    readingTime: '5 min read',
    summary:
      'You do not need the technical detail to use these tools well, but a clear mental model helps you trust them where they are strong and check them where they are not.',
    body: [
      { type: 'p', text: 'The tools behind the recent wave of AI are called large language models, and the name is more helpful than it first appears. You do not need the mathematics to use them well, but a plain mental model helps you know when to trust the output and when to check it.' },
      { type: 'h', text: 'A very well-read pattern matcher' },
      { type: 'p', text: 'A useful way to picture one of these models is as something that has read an enormous amount of text and become extremely good at predicting what words should come next. That sounds modest, and yet at scale it produces writing, summaries and answers that are genuinely useful. It is closer to a fluent generalist than to a database of facts.' },
      { type: 'h', text: 'Why it is confident and sometimes wrong' },
      { type: 'p', text: 'Because the model predicts plausible language rather than looking up verified truth, it can state something incorrect with complete confidence. This is the single most important thing to understand. The fluency is real, but it is not the same as accuracy, which is why a human check matters wherever being wrong would cost you.' },
      { type: 'p', text: 'Hold that model in mind and these tools become far easier to use well: excellent for drafting and summarising, to be verified whenever facts matter.' },
    ],
  },
  {
    slug: 'sales-pipeline-that-predicts-revenue',
    category: 'sales',
    title: 'Building a sales pipeline that predicts revenue',
    date: '2024-03-16',
    readingTime: '4 min read',
    summary:
      'A pipeline is not a list of hopeful contacts. Done properly it is a forecast, and it tells you months ahead whether the quiet season you fear is actually coming.',
    body: [
      { type: 'p', text: 'Many businesses call their list of prospects a pipeline, but a list is not a pipeline. A real pipeline is a forecast: a structured view of future revenue that warns you, months in advance, whether the lean quarter you dread is actually on the way. That early warning is the entire point.' },
      { type: 'h', text: 'Define stages by the buyer, not by you' },
      { type: 'p', text: 'Useful stages describe where the client is in their decision, not how you feel about the deal. Enquiry, qualified, proposal, decision. Clear definitions of what moves a deal from one stage to the next keep the pipeline honest and stop wishful thinking from inflating it.' },
      { type: 'h', text: 'A rough forecast beats none' },
      { type: 'p', text: 'Attach a rough value and likelihood to each opportunity and you can estimate what is genuinely coming. It will not be precise, and it does not need to be. Even an approximate forecast lets you act early, chasing more work before the gap arrives rather than after.' },
      { type: 'p', text: 'Keep it current and keep it honest. A pipeline you trust changes decisions. One you quietly know is inflated is just a list that makes you feel better.' },
    ],
  },
  {
    slug: 'five-numbers-to-watch-weekly',
    category: 'analytics',
    title: 'The five numbers every small business should watch weekly',
    date: '2024-02-15',
    readingTime: '4 min read',
    summary:
      'Annual accounts tell you what happened long after you could do anything about it. A handful of numbers watched weekly gives you time to act. Here is where to start.',
    body: [
      { type: 'p', text: 'Many owners only look closely at their numbers once a year, when the accounts arrive. By then the story is history, and the moment to change it has passed. A small set of numbers watched weekly turns your data from a post-mortem into an early warning system.' },
      { type: 'h', text: 'Start with cash' },
      { type: 'p', text: 'Cash in the bank and cash coming in over the next few weeks is the number that keeps businesses alive. Profitable businesses still fail when cash runs dry at the wrong moment. Watching it weekly means you see a squeeze forming while you still have options.' },
      { type: 'h', text: 'Then the leading indicators' },
      { type: 'p', text: 'Add new enquiries, because they predict future revenue. Add sales made, because they confirm the pipeline is converting. Add overdue invoices, because unpaid work is cash you have earned but not received. And add one measure specific to your business, whatever most closely tracks its health.' },
      { type: 'p', text: 'Five numbers, a few minutes a week. The habit matters more than the tooling. Seen regularly, these figures give you the one thing annual accounts never can, which is time to act.' },
    ],
  },
]
