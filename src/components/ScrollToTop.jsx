import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Keep the browser from restoring a remembered scroll position on load/navigation.
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

// Reset scroll to the top on every route change. useLayoutEffect runs before paint,
// and the extra rAF beats any late scroll (media settling, back/forward restore).
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    const id = requestAnimationFrame(() => window.scrollTo(0, 0))
    return () => cancelAnimationFrame(id)
  }, [pathname])

  return null
}
