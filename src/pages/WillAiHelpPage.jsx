import { useState } from 'react'
import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta, aiComplianceFaq } from '../content.js'
import { sectors, doors, win, toolTypes, levels } from '../aiGuide.js'
import PageHero from '../components/PageHero.jsx'
import ToolLeadCapture from '../components/ToolLeadCapture.jsx'
import ToolCTA from '../components/ToolCTA.jsx'
import Faq from '../components/Faq.jsx'

/**
 * "Will AI actually help?" A choose-your-own-adventure board: pick a sector,
 * then pass six doors. Each door unlocks on a yes; a no ends the route with
 * an honest verdict and the one thing to do first. Any passed door can be
 * reopened to change the answer.
 */
function Board({ sector, answers, current, status, onJump }) {
  return (
    <ol className="dg-board" aria-label="Your route">
      <li className={`dg-node dg-node--sector ${sector ? 'is-passed' : 'is-current'}`}>
        <button type="button" className="dg-node__btn" onClick={() => onJump(-1)} disabled={!sector}>
          <span className="dg-node__num mono">00</span>
          <span className="dg-node__label">Sector</span>
          <span className="dg-node__state">{sector ? sectors.find((s) => s.key === sector).label : 'Choose'}</span>
        </button>
      </li>
      {doors.map((d, i) => {
        const a = answers[i]
        const cls = a === true ? 'is-passed' : a === false ? 'is-stopped' : i === current && status === 'playing' ? 'is-current' : 'is-locked'
        return (
          <li key={d.key} className={`dg-node ${cls}`}>
            <button type="button" className="dg-node__btn" onClick={() => onJump(i)} disabled={a === undefined && !(i === current && status === 'playing')}>
              <span className="dg-node__num mono">{String(i + 1).padStart(2, '0')}</span>
              <span className="dg-node__label">{d.label}</span>
              <span className="dg-node__state">{a === true ? 'Unlocked' : a === false ? 'Stopped here' : i === current && status === 'playing' ? 'Now' : 'Locked'}</span>
            </button>
          </li>
        )
      })}
      <li className={`dg-node dg-node--end ${status === 'won' ? 'is-passed' : 'is-locked'}`}>
        <span className="dg-node__btn" aria-hidden={status !== 'won'}>
          <span className="dg-node__num mono">07</span>
          <span className="dg-node__label">Verdict</span>
          <span className="dg-node__state">{status === 'won' ? 'Reached' : 'Locked'}</span>
        </span>
      </li>
    </ol>
  )
}

export default function WillAiHelpPage() {
  usePageMeta(pageMeta.willAiHelp)
  const [sector, setSector] = useState(null)
  const [answers, setAnswers] = useState([])
  const [current, setCurrent] = useState(0)
  const [status, setStatus] = useState('playing') // playing | stopped | won

  const unlocked = answers.filter((a) => a === true).length
  const sectorData = sectors.find((s) => s.key === sector)

  function answer(yes) {
    const next = answers.slice(0, current)
    next[current] = yes
    setAnswers(next)
    if (!yes) {
      setStatus('stopped')
      return
    }
    if (current + 1 >= doors.length) {
      setStatus('won')
    } else {
      setCurrent(current + 1)
    }
  }
  function jump(i) {
    if (i < 0) {
      setSector(null)
      setAnswers([])
      setCurrent(0)
      setStatus('playing')
      return
    }
    setAnswers(answers.slice(0, i))
    setCurrent(i)
    setStatus('playing')
  }
  function restart() {
    jump(-1)
  }

  const stoppedAt = status === 'stopped' ? current : null
  const captureData = {
    Sector: sectorData ? sectorData.label : 'Not chosen',
    ...Object.fromEntries(doors.map((d, i) => [d.label, answers[i] === true ? 'Yes' : answers[i] === false ? 'No' : 'Not reached'])),
    Outcome: status === 'won' ? 'AI will probably help' : `Not yet: ${doors[stoppedAt ?? 0].no.h}`,
  }
  const findingsText = [
    'GBX Professional Services: Will AI actually help your business?',
    new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }),
    '',
    `Sector: ${captureData.Sector}`,
    '',
    'Your route:',
    ...doors.map((d, i) => `- ${d.label}: ${captureData[d.label]}`),
    '',
    status === 'won'
      ? [`Verdict: ${win.h}`, win.t, '', 'Do this next:', ...win.list.map((x, i) => `${i + 1}. ${x}`)].join('\n')
      : stoppedAt != null
        ? [`Verdict: not yet. ${doors[stoppedAt].no.h}`, doors[stoppedAt].no.t, '', `Do this first: ${doors[stoppedAt].no.first}`].join('\n')
        : 'In progress.',
    '',
    ...(sectorData ? [`Compliance note for ${sectorData.label.toLowerCase()}: ${sectorData.verdict}`, ''] : []),
    'Our Business AI Readiness work turns a yes into a governed roadmap, and the Diagnostic finds the task worth starting with. https://gbxps.com/diagnostic',
    '',
    'General information only. Not legal, financial or compliance advice. Check regulatory points with your licensee, professional body or adviser.',
  ].join('\n')

  return (
    <>
      <PageHero
        eyebrow="Tools"
        title="Will AI actually help your business?"
        intro="A short, honest game for owners who are tired of being told everything needs AI. Choose your sector, then try to pass six doors. Answer no to any of them and the honest answer is not yet, and we will tell you why. Fair warning: for a lot of small businesses that is the answer, and it is a useful one."
      />

      <section className="section section--paper">
        <div className="container dg">
          <div className="dg-meter" aria-live="polite">
            <span className="mono">{status === 'won' ? 'All six doors unlocked' : `${unlocked} of ${doors.length} doors unlocked`}</span>
            <span className="dg-meter__track" aria-hidden="true"><span style={{ width: `${(unlocked / doors.length) * 100}%` }} /></span>
          </div>

          <Board sector={sector} answers={answers} current={current} status={status} onJump={jump} />

          <div className="dg-card" key={`${sector}-${current}-${status}`}>
            {!sector ? (
              <>
                <p className="eyebrow">Before the first door</p>
                <h2 className="dg-card__q">What kind of business is it?</h2>
                <p className="dg-card__why">Compliance changes the answer. Two businesses with the same admin problem can get opposite results purely because of what the data is and who regulates them.</p>
                <div className="dg-choices">
                  {sectors.map((s) => (
                    <button key={s.key} type="button" className="dg-choice" onClick={() => setSector(s.key)}>
                      {s.label}
                    </button>
                  ))}
                </div>
              </>
            ) : status === 'playing' ? (
              <>
                <p className="eyebrow">Door {current + 1} of {doors.length}: {doors[current].label}</p>
                <h2 className="dg-card__q">{doors[current].q}</h2>
                <p className="dg-card__why">{doors[current].why}</p>
                <div className="dg-answers">
                  <button type="button" className="btn btn--primary" onClick={() => answer(true)}>Yes</button>
                  <button type="button" className="btn btn--outline-dark" onClick={() => answer(false)}>No</button>
                </div>
              </>
            ) : status === 'stopped' ? (
              <div className="dg-result dg-result--stop">
                <p className="eyebrow">Stopped at door {stoppedAt + 1}. AI is not going to help you yet.</p>
                <h2 className="dg-card__q">{doors[stoppedAt].no.h}</h2>
                <p className="dg-card__why">{doors[stoppedAt].no.t}</p>
                <div className="dg-first">
                  <p className="mono dg-first__tag">Do this first</p>
                  <p>{doors[stoppedAt].no.first}</p>
                </div>
                {sectorData && (
                  <div className="dg-sector">
                    <p className="mono dg-first__tag">For {sectorData.label.toLowerCase()}</p>
                    <p>{sectorData.verdict}</p>
                  </div>
                )}
                <div className="dg-answers">
                  <button type="button" className="btn btn--outline-dark btn--sm" onClick={() => jump(stoppedAt)}>Change that answer</button>
                  <button type="button" className="text-link" onClick={restart}>Start again</button>
                </div>
              </div>
            ) : (
              <div className="dg-result dg-result--win">
                <p className="eyebrow">Six out of six</p>
                <h2 className="dg-card__q">{win.h}</h2>
                <p className="dg-card__why">{win.t}</p>
                <ol className="dg-steps">
                  {win.list.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ol>
                {sectorData && (
                  <div className="dg-sector">
                    <p className="mono dg-first__tag">Before you start, for {sectorData.label.toLowerCase()}</p>
                    <ul className="legal-list">
                      {sectorData.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                    <p><b>Verdict:</b> {sectorData.verdict}</p>
                  </div>
                )}
                <button type="button" className="text-link" onClick={restart}>Start again</button>
              </div>
            )}
          </div>

          {(status === 'stopped' || status === 'won') && (
            <div className="dg-capture">
              <ToolLeadCapture toolName="Will AI Help" data={captureData} findingsText={findingsText} />
            </div>
          )}

          {(status === 'stopped' || status === 'won') && (
            <ToolCTA
              heading={status === 'won' ? 'A yes is the start. The task is the decision.' : 'Not yet is a good answer. The next step is usually process, not software.'}
              body={status === 'won'
                ? 'Our Business AI Readiness work turns a yes into a governed roadmap: the use case worth pursuing, the guardrails around it, and the person who owns it. The Diagnostic is where we find the task.'
                : 'Most of the doors that stop people are about process, documentation and ownership. That is exactly what the Diagnostic sorts out, and it is where AI work usually starts.'}
              primary={{ label: 'See the Diagnostic', to: '/diagnostic' }}
              secondary={{ label: 'AI Readiness Assessment', to: '/tools/ai-readiness' }}
            />
          )}
        </div>
      </section>

      {/* Reference guide */}
      <section className="section section--soft" aria-labelledby="guide-heading">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">The guide behind the game</p>
            <h2 id="guide-heading" className="section__heading diag__section-heading">What "AI tools" actually means.</h2>
            <p className="section__intro">The phrase covers five quite different things. Most disappointment comes from buying one type when the job needed another.</p>
          </div>
          <ul className="dg-types">
            {toolTypes.map((t) => (
              <li key={t.name} className="dg-type">
                <h3 className="dg-type__name">{t.name}</h3>
                <p className="dg-type__fit">{t.fit}</p>
                <p className="mono dg-type__eg">{t.eg}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="levels-heading">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">From a subscription to a system</p>
            <h2 id="levels-heading" className="section__heading diag__section-heading">Three sensible levels.</h2>
            <p className="section__intro">Most businesses should stop at the first for six months before deciding whether the second is worth it.</p>
          </div>
          <ol className="dg-levels">
            {levels.map((l) => (
              <li key={l.name} className="dg-level">
                <h3 className="dg-level__name">{l.name}</h3>
                <p className="mono dg-level__meta">{l.meta.join(' · ')}</p>
                <ul className="legal-list">
                  {l.items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <p className="dg-level__warn">{l.warn}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="sectors-heading">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Compliance changes the answer</p>
            <h2 id="sectors-heading" className="section__heading diag__section-heading">Open your sector.</h2>
          </div>
          <div className="dg-sectors">
            {sectors.map((s) => (
              <details key={s.key} className="dg-sector-item">
                <summary>{s.label}</summary>
                <ul className="legal-list">
                  {s.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <p className="dg-sector-item__verdict"><span className="mono">Verdict</span> {s.verdict}</p>
              </details>
            ))}
          </div>
          <p className="edu-compliance">General information only. It does not take your circumstances into account and is not legal, financial or compliance advice. Regulatory references are current to September 2026 and should be checked with your licensee, professional body or adviser. <Link to="/contact" className="text-link">Talk to us</Link> if you want a second opinion before you spend anything.</p>
        </div>
      </section>

      <Faq heading={aiComplianceFaq.heading} items={aiComplianceFaq.items} id="ai-compliance-faq" />
    </>
  )
}
