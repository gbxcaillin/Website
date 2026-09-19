import { useEffect, useRef, useState } from 'react'
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
  const [canHover, setCanHover] = useState(true)
  const rowRef = useRef(null)
  const shown = STAGES.find((s) => s.key === active)

  // Touch screens fire a simulated hover before the tap, which would select
  // and then immediately toggle the panel off. So hover is only honoured for
  // a real mouse pointer, and a tap toggles the panel it lands on.
  const lastPointer = useRef('mouse')
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setCanHover(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  function enter(e, key) {
    if (e.pointerType === 'mouse') setActive(key)
  }
  function click(key) {
    if (lastPointer.current === 'mouse') {
      setActive(key)
      return
    }
    setActive((cur) => (cur === key ? null : key))
    const el = rowRef.current && rowRef.current.querySelector(`[data-stage="${key}"]`)
    if (el) requestAnimationFrame(() => el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }))
  }

  return (
    <section className="section edu-flow" aria-labelledby="edu-flow-heading">
      <div className="container">
        <div className="edu-flow__head">
          <p className="eyebrow eyebrow--on-dark">How it grows</p>
          <h2 id="edu-flow-heading" className="section__heading edu-flow__heading">
            Start small. Grow when it works.
          </h2>
          <p className="section__intro">Five stages, each one optional. {canHover ? 'Hover over' : 'Tap'} a stage to see what it involves.</p>
        </div>

        <ol
          ref={rowRef}
          className={`edu-flow__row ${active ? 'has-active' : ''}`}
          onPointerLeave={(e) => e.pointerType === 'mouse' && setActive(null)}
        >
          {STAGES.map((s, i) => (
            <li key={s.key} data-stage={s.key} className={`edu-flow__item ${s.big ? 'edu-flow__item--big' : ''} ${active === s.key ? 'is-active' : ''}`}>
              <button
                type="button"
                className="edu-flow__panel"
                onPointerEnter={(e) => enter(e, s.key)}
                onPointerDown={(e) => { lastPointer.current = e.pointerType }}
                onFocus={(e) => { if (e.target.matches(':focus-visible')) setActive(s.key) }}
                onClick={() => click(s.key)}
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
            <span className="edu-flow__caption-hint">{canHover ? 'Education, not advice. Every stage ends with the questions worth taking to a licensed adviser.' : 'Tap a stage to enlarge it. Education, not advice.'}</span>
          )}
        </p>
      </div>
    </section>
  )
}
