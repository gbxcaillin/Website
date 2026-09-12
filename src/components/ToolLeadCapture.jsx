import { useState } from 'react'
import { site } from '../content.js'

/**
 * Lead capture for the interactive tools. When someone enters their email to
 * get their findings, this posts the email plus every input and result to the
 * Formspree endpoint (so GBX Professional Services receives the full record),
 * and then lets them download their results. Runs only on explicit opt-in.
 *
 * Props:
 *  - toolName: string, e.g. "Business Health Check"
 *  - data: flat object of { label: value } captured for the record
 *  - findingsText: formatted plain-text report for the email and the download
 */
export default function ToolLeadCapture({ toolName, data, findingsText }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    if (form._gotcha && form._gotcha.value) return // honeypot
    setStatus('sending')
    try {
      const res = await fetch(site.leadEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          kind: 'tool',
          source: toolName,
          email,
          fields: data || {},
          summary: findingsText,
          page: typeof window !== 'undefined' ? window.location.href : '',
        }),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  function download() {
    try {
      const blob = new Blob([findingsText], { type: 'text/plain;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `gbx-${toolName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-results.txt`
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    } catch {
      /* download not available */
    }
  }

  if (status === 'sent') {
    return (
      <div className="lead-capture lead-capture--done">
        <p className="eyebrow">On its way</p>
        <p className="lead-capture__msg">
          Thanks. We have your results and will follow up with a short note on what they mean and
          where to focus. Your copy is ready to download below.
        </p>
        <button type="button" className="btn btn--primary btn--sm" onClick={download}>
          Download your results
        </button>
      </div>
    )
  }

  return (
    <form className="lead-capture" onSubmit={onSubmit}>
      <p className="eyebrow">Get your results</p>
      <p className="lead-capture__copy">
        Enter your email to download your results and receive a short note from GBX Professional
        Services on what they mean and where to focus. No spam.
      </p>
      <div className="lead-capture__row">
        <input
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
        />
        <button type="submit" className="btn btn--primary btn--sm" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending' : 'Email me my results'}
        </button>
      </div>
      <input
        type="text"
        name="_gotcha"
        tabIndex="-1"
        autoComplete="off"
        className="visually-hidden"
        aria-hidden="true"
      />
      <p className="lead-capture__fine">
        By submitting, you agree we may contact you about your results.
      </p>
      {status === 'error' && (
        <p className="lead-capture__err">Something went wrong. Please email us at {site.email}.</p>
      )}
    </form>
  )
}
