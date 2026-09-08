/**
 * Stylised dot-grid world map with city markers. Coordinates are approximate
 * equirectangular projections onto a 1000 x 520 canvas. Purely decorative.
 */
const CITY_POINTS = {
  Melbourne: [902, 428],
  Sydney: [922, 404],
  Brisbane: [924, 372],
  Adelaide: [882, 414],
  Singapore: [788, 268],
  'Hong Kong': [816, 214],
  Dubai: [654, 200],
  Boston: [302, 150],
  'New York': [294, 158],
}

// Coarse landmass silhouettes as dot clusters (row, colStart, colEnd) on a 25px grid.
const LAND = [
  // North America
  [3, 4, 14], [4, 3, 15], [5, 3, 15], [6, 4, 14], [7, 5, 13], [8, 6, 12], [9, 7, 11], [10, 8, 10],
  // South America
  [11, 9, 12], [12, 9, 13], [13, 9, 13], [14, 10, 12], [15, 10, 12], [16, 10, 11], [17, 11, 11],
  // Europe
  [3, 18, 24], [4, 18, 25], [5, 19, 25], [6, 19, 25],
  // Africa
  [7, 19, 25], [8, 19, 26], [9, 20, 26], [10, 20, 26], [11, 21, 25], [12, 21, 25], [13, 22, 24], [14, 22, 24],
  // Asia
  [3, 25, 38], [4, 25, 38], [5, 25, 37], [6, 26, 36], [7, 27, 35], [8, 28, 33], [9, 29, 32], [10, 30, 32],
  // Australia
  [14, 33, 37], [15, 33, 38], [16, 33, 38], [17, 34, 37],
]

export default function ReachVisual({ cities }) {
  const W = 1000
  const H = 520
  const g = 25

  return (
    <svg
      className="reach-visual"
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Map showing GBX PS locations across Australia, Asia, the Middle East and the United States"
    >
      <rect width={W} height={H} fill="#F6F3EC" />
      <g fill="#1A1A1A" fillOpacity="0.22">
        {LAND.map(([row, c0, c1]) =>
          Array.from({ length: c1 - c0 + 1 }, (_, i) => (
            <circle key={`${row}-${c0 + i}`} cx={(c0 + i) * g + g / 2} cy={row * g + g / 2} r="3.5" />
          )),
        )}
      </g>

      {/* Route lines from Melbourne to each city */}
      <g fill="none" stroke="#2E8B6E" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="2 4">
        {cities
          .filter((c) => !c.hq)
          .map((c) => {
            const [x1, y1] = CITY_POINTS.Melbourne
            const [x2, y2] = CITY_POINTS[c.name]
            const mx = (x1 + x2) / 2
            const my = Math.min(y1, y2) - Math.abs(x1 - x2) * 0.18
            return <path key={c.name} d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`} />
          })}
      </g>

      {/* City markers */}
      {cities.map((c) => {
        const [x, y] = CITY_POINTS[c.name]
        return (
          <g key={c.name}>
            {c.hq && <circle cx={x} cy={y} r="11" fill="#2E8B6E" fillOpacity="0.18" />}
            <circle cx={x} cy={y} r={c.hq ? 5 : 3.5} fill={c.hq ? '#2E8B6E' : '#0A0A0A'} />
          </g>
        )
      })}
    </svg>
  )
}
