import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import ToolCTA from '../components/ToolCTA.jsx'
import ToolWizard from '../components/ToolWizard.jsx'
import ToolLeadCapture from '../components/ToolLeadCapture.jsx'

const steps = [
  {
    id: 'hours', kind: 'choice', eyebrow: 'Time', question: 'How many hours a week can you honestly give to marketing?',
    options: [
      { value: 1, label: 'One or two' },
      { value: 4, label: 'Three to five' },
      { value: 8, label: 'Six to ten' },
      { value: 12, label: 'More than ten' },
    ],
  },
  {
    id: 'source', kind: 'choice', eyebrow: 'Today', question: 'Where do most clients come from now?',
    options: [
      { value: 'referral', label: 'Referrals from clients and partners' },
      { value: 'linkedin', label: 'LinkedIn and my network' },
      { value: 'search', label: 'Google and the website' },
      { value: 'unsure', label: 'Honestly, not sure' },
    ],
  },
  {
    id: 'strength', kind: 'choice', eyebrow: 'Strength', question: 'Which comes most naturally to you?',
    options: [
      { value: 'writing', label: 'Writing' },
      { value: 'talking', label: 'Talking on camera or to a room' },
      { value: 'people', label: 'One-to-one conversations' },
      { value: 'none', label: 'None of these yet' },
    ],
  },
  {
    id: 'list', kind: 'choice', eyebrow: 'Audience', question: 'Do you have an email list you can send to?',
    options: [
      { value: 'none', label: 'No' },
      { value: 'small', label: 'A small one, under 200' },
      { value: 'yes', label: 'Yes, a real one' },
    ],
  },
  {
    id: 'goal', kind: 'choice', eyebrow: 'Goal', question: 'What does marketing most need to do this quarter?',
    options: [
      { value: 'found', label: 'Get us found by new people' },
      { value: 'referrers', label: 'Stay top of mind with referrers' },
      { value: 'convert', label: 'Convert the leads we already get' },
      { value: 'launch', label: 'Launch a new service or offer' },
    ],
  },
]
const labelOf = (id, v) => (steps.find((s) => s.id === id).options.find((o) => o.value === v) || {}).label || 'Not answered'

function plan(a) {
  const weekly = []
  const monthly = []
  const quarterly = []
  const h = a.hours

  // Foundation everyone gets
  weekly.push({ what: 'Fifteen minutes of replies and comments on LinkedIn, from your personal profile', time: '30 min' })

  // The main channel by strength
  if (a.strength === 'writing') weekly.push({ what: 'One short LinkedIn post: a real observation from client work, no pitch', time: '45 min' })
  else if (a.strength === 'talking') weekly.push({ what: 'One two-minute video or voice note on a question clients keep asking', time: '45 min' })
  else if (a.strength === 'people') weekly.push({ what: 'Two conversations booked with clients, referrers or peers, purely to listen', time: '1.5 hr' })
  else weekly.push({ what: 'One repost of someone else’s good idea with two sentences on why it matters to your clients', time: '20 min' })

  // Goal
  if (a.goal === 'referrers') {
    monthly.push({ what: 'A personal note to your top ten referrers: one useful thing, no ask', time: '1.5 hr' })
    quarterly.push({ what: 'Coffee or a call with your three best referral partners', time: '3 hr' })
  }
  if (a.goal === 'found') {
    monthly.push({ what: 'One article on your website answering a question prospects actually search for', time: h >= 4 ? '3 hr' : '2 hr' })
    quarterly.push({ what: 'Refresh your Google Business Profile and ask three happy clients for a review', time: '1 hr' })
  }
  if (a.goal === 'convert') {
    monthly.push({ what: 'Review every enquiry from the month: how fast you replied, what happened next, what to fix', time: '1 hr' })
    quarterly.push({ what: 'Rewrite one page of the site or one proposal template based on what enquirers actually asked', time: '3 hr' })
  }
  if (a.goal === 'launch') {
    monthly.push({ what: 'One piece of content about the problem the new offer solves, not the offer itself', time: '2 hr' })
    quarterly.push({ what: 'A small event, webinar or round table for twelve people who fit the offer', time: '6 hr' })
  }

  // List
  if (a.list === 'yes') monthly.push({ what: 'One email to your list: the month’s article or observation, one link, one line of news', time: '1 hr' })
  else if (a.list === 'small') monthly.push({ what: 'One email to your small list, and one action to grow it (a signup line in your email signature, a link in every post)', time: '1 hr' })
  else quarterly.push({ what: 'Start a list: add a signup to the website and invite every client and contact once', time: '2 hr' })

  // Source-based
  if (a.source === 'search') monthly.push({ what: 'Check Search Console: which pages get impressions, and improve one', time: '45 min' })
  if (a.source === 'referral' && a.goal !== 'referrers') quarterly.push({ what: 'Thank every referrer of the quarter personally', time: '1 hr' })
  if (a.source === 'unsure') monthly.push({ what: 'Ask every new client how they found you and write it down. Three months of answers is a strategy.', time: '15 min' })

  // Trim to time budget
  const weeklyHrs = weekly.length * 0.6
  if (h <= 1) {
    monthly.splice(1)
    quarterly.splice(1)
  } else if (h <= 4) {
    monthly.splice(2)
    quarterly.splice(2)
  }

  const first = a.source === 'unsure'
    ? 'Find out where clients actually come from. Every other decision depends on it.'
    : a.list === 'none'
      ? 'Start the email list. It is the only audience you own, and it compounds.'
      : a.strength === 'none'
        ? 'Pick the channel you can sustain, not the one you admire. Consistency beats quality for the first six months.'
        : 'Protect the weekly slot in the calendar. The rhythm is the strategy.'

  return { weekly, monthly, quarterly, first, weeklyHrs }
}

function Block({ title, items }) {
  if (!items.length) return null
  return (
    <div className="rhythm__block">
      <h3 className="rhythm__title">{title}</h3>
      <ul className="rhythm__list">
        {items.map((i) => (
          <li key={i.what} className="rhythm__item">
            <span className="rhythm__what">{i.what}</span>
            <span className="rhythm__time mono">{i.time}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function results(answers, restart) {
  const p = plan(answers)
  const captureData = {
    'Hours per week': labelOf('hours', answers.hours),
    'Main source today': labelOf('source', answers.source),
    Strength: labelOf('strength', answers.strength),
    'Email list': labelOf('list', answers.list),
    Goal: labelOf('goal', answers.goal),
    'Fix first': p.first,
  }
  const fmt = (items) => items.map((i) => `- ${i.what} (${i.time})`)
  const findingsText = [
    'GBX Professional Services: Marketing Rhythm Planner',
    new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }),
    '',
    `Built for ${labelOf('hours', answers.hours).toLowerCase()} hours a week, with the goal to ${labelOf('goal', answers.goal).toLowerCase()}.`,
    '',
    'Every week:', ...fmt(p.weekly), '',
    'Every month:', ...fmt(p.monthly), '',
    'Every quarter:', ...fmt(p.quarterly), '',
    `Fix first: ${p.first}`,
    '',
    'Turning a rhythm into a brand that is heard consistently is our Brand and Marketing work. https://gbxps.com/services',
  ].join('\n')

  return (
    <div className="tool-outcome">
      <div className="sc-result sc-result--wide">
        <p className="eyebrow">Your rhythm</p>
        <p className="readiness-tier">A plan you can keep.</p>
        <p className="readiness-blurb">
          Sized for {labelOf('hours', answers.hours).toLowerCase()} hours a week. Fewer things, done on a rhythm, beat a big plan that stops in week three.
        </p>
        <div className="rhythm">
          <Block title="Every week" items={p.weekly} />
          <Block title="Every month" items={p.monthly} />
          <Block title="Every quarter" items={p.quarterly} />
        </div>
        <div className="sc-focus">
          <p className="eyebrow">Fix this first</p>
          <p className="sc-focus__body">{p.first}</p>
        </div>
        <ToolLeadCapture toolName="Marketing Rhythm Planner" data={captureData} findingsText={findingsText} />
        <button type="button" className="text-link sc-reset" onClick={restart}>Start again</button>
      </div>
      <ToolCTA
        heading="A rhythm you can keep. A message worth repeating."
        body="The plan only works if what you say is clear and consistent. Our Brand and Marketing work sharpens the message, builds the assets and sets up the system so the rhythm runs even in a busy month."
        primary={{ label: 'Start a conversation', to: '/contact' }}
        secondary={{ label: 'Build your positioning', to: '/tools/positioning' }}
      />
    </div>
  )
}

export default function MarketingRhythmPage() {
  usePageMeta(pageMeta.marketingRhythm)
  return (
    <>
      <PageHero
        eyebrow="Tools"
        title="Marketing Rhythm Planner"
        intro="Five one-tap questions about your time, your strengths and your goal return a weekly, monthly and quarterly marketing rhythm you can actually keep, plus the one thing to fix first. Runs entirely in your browser."
      />
      <section className="section section--paper">
        <div className="container">
          <ToolWizard steps={steps} results={results} />
        </div>
      </section>
    </>
  )
}
