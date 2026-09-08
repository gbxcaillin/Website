/**
 * Two lockups per the brief:
 *  - <Lockup />   simplified horizontal "GBX / Professional Services" for the header.
 *  - <FramedLogo /> full framed square logo for hero, footer and brand moments.
 */

export function Lockup({ tone = 'dark' }) {
  const ink = tone === 'dark' ? 'var(--gbx-void)' : 'var(--gbx-paper)'
  return (
    <a href="#top" className="lockup" aria-label="GBX Professional Services, back to top">
      <span className="lockup__mark" style={{ color: ink }} aria-hidden="true">
        GBX
      </span>
      <span className="lockup__rule" aria-hidden="true" />
      <span className="lockup__text" style={{ color: ink }}>
        Professional Services
      </span>
    </a>
  )
}

export function FramedLogo({ size = 120, tone = 'dark', className = '' }) {
  // tone: 'dark' = void-black tile with paper frame; 'light' = paper tile with void frame.
  const bg = tone === 'dark' ? '#0A0A0A' : '#FFFDF8'
  const fg = tone === 'dark' ? '#FFFDF8' : '#0A0A0A'
  return (
    <svg
      className={`framed-logo ${className}`}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label="GBX Professional Services logo"
    >
      <rect width="120" height="120" fill={bg} />
      <rect x="9" y="9" width="102" height="102" fill="none" stroke={fg} strokeWidth="1.5" />
      <rect x="15" y="15" width="90" height="90" fill="none" stroke={fg} strokeWidth="0.5" opacity="0.5" />
      <text
        x="60"
        y="66"
        textAnchor="middle"
        fill={fg}
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontWeight="300"
        fontSize="40"
        letterSpacing="3"
        textLength="66"
        lengthAdjust="spacingAndGlyphs"
      >
        GBX
      </text>
      <rect x="42" y="76" width="36" height="1.5" fill="#2E8B6E" />
      <text
        x="60"
        y="92"
        textAnchor="middle"
        fill={fg}
        fontFamily="Montserrat, Helvetica, Arial, sans-serif"
        fontWeight="500"
        fontSize="6.5"
        letterSpacing="2.2"
        textLength="78"
        lengthAdjust="spacingAndGlyphs"
      >
        PROFESSIONAL SERVICES
      </text>
    </svg>
  )
}
