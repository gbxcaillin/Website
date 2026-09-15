import { useEffect, useState } from 'react'

/**
 * "How you compare" line under the Health Check score. Fetches anonymous
 * averages from /api/benchmarks and renders nothing until the sample is large
 * enough (the endpoint decides), or if the endpoint is unavailable.
 */
export default function HealthBenchmark({ overall }) {
  const [bench, setBench] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetch('/api/benchmarks?tool=health-check')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!cancelled && data && data.ok && data.ready) setBench(data)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  if (!bench) return null
  const diff = overall - bench.overall
  const rel =
    Math.abs(diff) < 3
      ? 'about the same as'
      : diff > 0
        ? `${diff} points above`
        : `${Math.abs(diff)} points below`

  return (
    <p className="sc-bench">
      Your overall score is <strong>{rel}</strong> the average of {bench.n} businesses that have
      taken this check (average {bench.overall}/100).
    </p>
  )
}
