/**
 * Dark, systems-led visual for the hero panel. Pure SVG so the site ships with no
 * image dependencies. Swap this for a photograph by replacing the component with an
 * <img> and keeping the overlay in Hero.jsx.
 */
export default function HeroVisual() {
  // A stylised skyline. Each entry is [x, width, height].
  const towers = [
    [0, 38, 150], [44, 22, 210], [72, 54, 300], [132, 30, 180], [168, 66, 380],
    [240, 26, 240], [272, 48, 330], [326, 36, 200], [368, 70, 440], [444, 28, 260],
    [478, 52, 310], [536, 40, 190], [582, 60, 360], [648, 34, 230], [688, 72, 290],
    [766, 44, 170], [816, 84, 330], [906, 38, 210], [950, 50, 270], [1006, 34, 160],
  ]
  const H = 720
  const W = 1040

  return (
    <svg
      className="hero-visual"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0A0A0A" />
          <stop offset="1" stopColor="#1A1A1A" />
        </linearGradient>
        <linearGradient id="tower" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#262626" />
          <stop offset="1" stopColor="#111111" />
        </linearGradient>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#FFFDF8" strokeOpacity="0.06" strokeWidth="1" />
        </pattern>
        <pattern id="windows" width="10" height="14" patternUnits="userSpaceOnUse">
          <rect x="3" y="4" width="3" height="5" fill="#FFFDF8" fillOpacity="0.16" />
        </pattern>
        <radialGradient id="glow" cx="0.72" cy="0.3" r="0.6">
          <stop offset="0" stopColor="#2E8B6E" stopOpacity="0.22" />
          <stop offset="1" stopColor="#2E8B6E" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width={W} height={H} fill="url(#sky)" />
      <rect width={W} height={H} fill="url(#grid)" />
      <rect width={W} height={H} fill="url(#glow)" />

      {/* Horizon line */}
      <line x1="0" y1={H - 120} x2={W} y2={H - 120} stroke="#2E8B6E" strokeOpacity="0.35" strokeWidth="1" />

      {/* Skyline */}
      <g>
        {towers.map(([x, w, h], i) => {
          const y = H - 120 - h
          return (
            <g key={i}>
              <rect x={x} y={y} width={w} height={h} fill="url(#tower)" />
              <rect x={x} y={y} width={w} height={h} fill="url(#windows)" />
              <rect x={x} y={y} width={w} height="1" fill="#FFFDF8" fillOpacity="0.25" />
            </g>
          )
        })}
      </g>

      {/* Ground */}
      <rect x="0" y={H - 120} width={W} height="120" fill="#0A0A0A" />

      {/* Data traces: a restrained line chart rising over the skyline */}
      <polyline
        points="80,420 200,400 320,360 440,372 560,300 680,280 800,210 920,190 1000,150"
        fill="none"
        stroke="#2E8B6E"
        strokeWidth="1.5"
        strokeOpacity="0.9"
      />
      {[[80, 420], [320, 360], [560, 300], [800, 210], [1000, 150]].map(([cx, cy]) => (
        <circle key={cx} cx={cx} cy={cy} r="3" fill="#0A0A0A" stroke="#2E8B6E" strokeWidth="1.5" />
      ))}
    </svg>
  )
}
