import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Reset scroll position on each route change, unless the browser is restoring
// a remembered position (back / forward navigation).
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
