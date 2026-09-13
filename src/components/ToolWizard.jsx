import { useState } from 'react'

/**
 * Low-friction, one-question-per-screen wizard for the lead-gen tools.
 *  - 'choice' steps: clicking an option selects it and auto-advances.
 *  - 'input' steps: type, then Next (or Enter). Set required:false to allow skip.
 * On the last step it shows the results view returned by `results(answers, restart)`.
 *
 * Step shape:
 *  { id, kind: 'choice'|'input', question, eyebrow?, help?,
 *    options?: [{value,label}], inputType?, prefix?, suffix?, placeholder?, required? }
 */
export default function ToolWizard({ steps, results }) {
  const [i, setI] = useState(0)
  const [answers, setAnswers] = useState({})
  const [done, setDone] = useState(false)
  const [picked, setPicked] = useState(null)

  const total = steps.length
  const step = steps[i]

  function advance() {
    setPicked(null)
    if (i < total - 1) setI(i + 1)
    else setDone(true)
  }
  function choose(value) {
    setAnswers((a) => ({ ...a, [step.id]: value }))
    setPicked(value)
    setTimeout(advance, 140)
  }
  function setInput(value) {
    setAnswers((a) => ({ ...a, [step.id]: value }))
  }
  function back() {
    setPicked(null)
    if (i > 0) setI(i - 1)
  }
  function restart() {
    setAnswers({})
    setI(0)
    setDone(false)
    setPicked(null)
  }

  if (done) return results(answers, restart)

  const answer = answers[step.id]
  const canNext =
    step.kind === 'input' ? step.required === false || String(answer ?? '').trim() !== '' : true

  return (
    <div className="wizard">
      <div className="wizard__progress">
        <span className="mono">
          Step {i + 1} of {total}
        </span>
        <span className="wizard__bar" aria-hidden="true">
          <span style={{ width: `${(i / total) * 100}%` }} />
        </span>
      </div>

      <div className="wizard__step" key={step.id}>
        {step.eyebrow && <p className="eyebrow">{step.eyebrow}</p>}
        <h2 className="wizard__question">{step.question}</h2>
        {step.help && <p className="wizard__help">{step.help}</p>}

        {step.kind === 'choice' ? (
          <div className="wizard__options">
            {step.options.map((o) => (
              <button
                key={o.value}
                type="button"
                className={`wizard__opt ${answer === o.value || picked === o.value ? 'wizard__opt--on' : ''}`}
                onClick={() => choose(o.value)}
              >
                {o.label}
              </button>
            ))}
          </div>
        ) : (
          <div className="wizard__field">
            <span
              className={`calc__input ${step.prefix ? 'calc__input--pre' : ''} ${step.suffix ? 'calc__input--suf' : ''}`}
            >
              {step.prefix && <span className="calc__affix">{step.prefix}</span>}
              <input
                type={step.inputType === 'number' ? 'text' : step.inputType || 'text'}
                inputMode={step.inputType === 'number' ? 'decimal' : undefined}
                value={answer ?? ''}
                placeholder={step.placeholder}
                autoFocus
                onChange={(e) =>
                  setInput(
                    step.inputType === 'number'
                      ? e.target.value.replace(/[^0-9.]/g, '')
                      : e.target.value
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && canNext) {
                    e.preventDefault()
                    advance()
                  }
                }}
              />
              {step.suffix && <span className="calc__affix calc__affix--suffix">{step.suffix}</span>}
            </span>
          </div>
        )}

        <div className="wizard__nav">
          {i > 0 ? (
            <button type="button" className="text-link" onClick={back}>
              Back
            </button>
          ) : (
            <span />
          )}
          {step.kind === 'input' && (
            <button
              type="button"
              className="btn btn--primary btn--sm"
              onClick={advance}
              disabled={!canNext}
            >
              {i === total - 1 ? 'See results' : 'Next'}
            </button>
          )}
          {step.kind === 'choice' && step.required === false && (
            <button type="button" className="text-link" onClick={advance}>
              Skip
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
