import { Link } from 'react-router-dom'

/**
 * The GBX Professional Services logo is the approved mark: the open-base frame,
 * the teal GBX and the PROFESSIONAL SERVICES line, exactly as in the animated
 * logo. Two versions are approved and nothing else: the dark version (black
 * tile) for dark surfaces and the light version (paper tile) for light surfaces.
 * The logo is never re-typeset, split or recoloured, so every placement uses one
 * of the two master images (800 px; the dark master is the resting frame of the
 * animation).
 *
 *  - <Lockup />              header placement, links home (light version on the paper header).
 *  - <FramedLogo tone />     standalone placement at a given size; tone 'dark' | 'light'.
 */

export const LOGO_ALT = 'GBX Professional Services'
export const LOGO_SRC = { dark: '/media/logo.png', light: '/media/logo-light.png' }

export function Lockup({ tone = 'light' }) {
  return (
    <Link to="/" className="lockup" aria-label="GBX Professional Services, home">
      <img src={LOGO_SRC[tone] || LOGO_SRC.light} alt={LOGO_ALT} width="60" height="60" decoding="async" />
    </Link>
  )
}

export function FramedLogo({ size = 120, tone = 'dark', className = '' }) {
  return (
    <img
      className={`framed-logo ${className}`}
      src={LOGO_SRC[tone] || LOGO_SRC.dark}
      alt={LOGO_ALT}
      width={size}
      height={size}
      decoding="async"
    />
  )
}
