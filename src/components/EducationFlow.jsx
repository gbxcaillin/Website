import { useState } from 'react'
import taster from '../assets/edu-flow-taster.webp'
import lunch from '../assets/edu-flow-lunch.webp'
import workshop from '../assets/edu-flow-workshop.webp'
import program from '../assets/edu-flow-program.webp'
import partnership from '../assets/edu-flow-partnership.webp'

// The five stages of the education offer, cut from the rendered workflow
// artwork so each panel can lift on hover. Text is baked into the images, so
// every panel carries a full alt and a caption for readers and search engines.
const STAGES = [
  { key: 'taster', img: taster, w: 431, h: 507, name: 'Taster', alt: 'Stage 01, Taster: Super in 30 minutes. Free, on Microsoft Teams.', detail: 'Thirty minutes on Microsoft Teams. "Super in 30 minutes". Free, and the best way to see how we teach.' },
  { key: 'lunch', img: lunch, w: 432, h: 500, name: 'Lunch and learn', alt: 'Stage 02, Lunch and learn: 45 minutes, one team, the pilot.', detail: 'Forty-five minutes, one team, on site or online. The usual pilot.' },
  { key: 'workshop', img: workshop, w: 424, h: 500, name: 'Workshop', alt: 'Stage 03, Workshop: 90 minutes, one module in depth.', detail: 'Ninety minutes on one module in depth, with time for questions in principle.' },
  { key: 'program', img: program, w: 624, h: 740, name: 'The Program', big: true, alt: 'Stage 04, The Program: six modules over 6 to 12 weeks. Money foundations, Super explained, Investing concepts, Tax basics, Protecting yourself, Life moments.', detail: 'All six modules over six to twelve weeks, up to 60 staff, with handouts, the manager guide and a summary for HR.' },
  { key: 'partnership', img: partnership, w: 421, h: 499, name: 'Annual partnership', alt: 'Stage 05, Annual partnership: new-starter sessions, quarterly Q&A, manager guide.', detail: 'The program plus new-starter sessions, two quarterly Q&A webinars, the manager guide and a quarterly employer newsletter.' },
]

export default function EducationFlow() {
  const [active, setActive] = useState(null)
  const shown = STAGES.find((s) => s.key === active)

  return (
    <section className="section edu-flow" aria-labelledby="edu-flow-heading">
      <div className="container">
        <div className="edu-flow__head">
          <p className="eyebrow eyebrow--on-dark">How it grows</p>
          <h2 id="edu-flow-heading" className="section__heading edu-flow__heading">
            Start small. Grow when it works.
          </h2>
          <p className="section__intro">Five stages, each one optional. Hover or tap a stage to see what it involves.</p>
        </div>

        <ol className="edu-flow__row" onMouseLeave={() => setActive(null)}>
          {STAGES.map((s, i) => (
            <li key={s.key} className={`edu-flow__item ${s.big ? 'edu-flow__item--big' : ''} ${active === s.key ? 'is-active' : ''}`}>
              <button
                type="button"
                className="edu-flow__panel"
                onMouseEnter={() => setActive(s.key)}
                onFocus={() => setActive(s.key)}
                onClick={() => setActive(active === s.key ? null : s.key)}
                aria-pressed={active === s.key}
                aria-describedby="edu-flow-caption"
              >
                <img src={s.img} alt={s.alt} width={s.w} height={s.h} loading="lazy" decoding="async" />
              </button>
              {i < STAGES.length - 1 && <span className="edu-flow__arrow" aria-hidden="true" />}
            </li>
          ))}
        </ol>

        <p id="edu-flow-caption" className="edu-flow__caption" aria-live="polite">
          {shown ? (
            <>
              <span className="mono edu-flow__caption-tag">{shown.name}</span> {shown.detail}
            </>
          ) : (
            <span className="edu-flow__caption-hint">Education, not advice. Every stage ends with the questions worth taking to a licensed adviser.</span>
          )}
        </p>
      </div>
    </section>
  )
}
