import { useState } from 'react'
import { site, newsletter } from '../content.js'

/**
 * Site-wide newsletter signup. Posts to the same lead endpoint with
 * kind 'newsletter'. Low friction: just an email address.
 */
export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    if (form._gotcha && form._gotcha.value) return
    setStatus('sending')
    try {
      const res = await fetch(site.leadEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          kind: 'newsletter',
          source: 'Newsletter signup',
          email,
          page: typeof window !== 'undefined' ? window.location.href : '',
        }),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="newsletter">
      <p className="footer__title mono">{newsletter.heading}</p>
      {status === 'sent' ? (
        <p className="newsletter__done">{newsletter.done}</p>
      ) : (
        <>
          <p className="newsletter__body">{newsletter.body}</p>
          <form className="newsletter__form" onSubmit={onSubmit}>
            <input
              type="email"
              required
              placeholder={newsletter.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
            />
            <input
              type="text"
              name="_gotcha"
              tabIndex="-1"
              autoComplete="off"
              className="visually-hidden"
              aria-hidden="true"
            />
            <button type="submit" className="btn btn--primary btn--sm" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending' : newsletter.cta}
            </button>
          </form>
          {status === 'error' && (
            <p className="newsletter__err">Something went wrong. Please try again.</p>
          )}
        </>
      )}
    </div>
  )
}
