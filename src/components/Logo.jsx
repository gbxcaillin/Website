import { Link } from 'react-router-dom'

/**
 * The GBX Professional Services logo is the single approved mark: the black
 * tile, the open-base frame, the teal GBX and the PROFESSIONAL SERVICES line,
 * exactly as in the animated logo. It is never re-typeset, split or recoloured,
 * so every placement uses the master image at /media/logo.png (800 px, the
 * resting frame of the animation).
 *
 *  - <Lockup />      header placement, links home.
 *  - <FramedLogo />  standalone placement at a given size.
 */

export const LOGO_SRC = '/media/logo.png'
export const LOGO_ALT = 'GBX Professional Services'

export function Lockup() {
  return (
    <Link to="/" className="lockup" aria-label="GBX Professional Services, home">
      <img src={LOGO_SRC} alt={LOGO_ALT} width="60" height="60" decoding="async" />
    </Link>
  )
}

export function FramedLogo({ size = 120, className = '' }) {
  return (
    <img
      className={`framed-logo ${className}`}
      src={LOGO_SRC}
      alt={LOGO_ALT}
      width={size}
      height={size}
      decoding="async"
    />
  )
}
