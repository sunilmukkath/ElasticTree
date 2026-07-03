"use client";

/** Central neural hub — nodes + pulsing connections for hero */
export default function NeuralHub({ className = "" }: { className?: string }) {
  const nodes = [
    { cx: 200, cy: 200, r: 8,  color: "#2dd4bf" },
    { cx: 120, cy: 130, r: 5,  color: "#38bdf8" },
    { cx: 290, cy: 120, r: 5,  color: "#5eead4" },
    { cx: 310, cy: 240, r: 4,  color: "#e8a820" },
    { cx: 260, cy: 310, r: 5,  color: "#2dd4bf" },
    { cx: 130, cy: 290, r: 4,  color: "#38bdf8" },
    { cx: 80,  cy: 210, r: 4,  color: "#5eead4" },
    { cx: 200, cy: 80,  r: 4,  color: "#e8a820" },
  ];
  const edges = [
    [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],
    [1,7],[2,3],[4,5],[1,6],
  ];

  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden>
      <defs>
        <filter id="nh-glow">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="nh-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#103870" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0a1f4a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="180" fill="url(#nh-bg)" />

      {edges.map(([a, b], i) => {
        const n1 = nodes[a], n2 = nodes[b];
        return (
          <line
            key={i}
            x1={n1.cx} y1={n1.cy} x2={n2.cx} y2={n2.cy}
            stroke="#2dd4bf"
            strokeWidth="1"
            opacity="0.25"
            strokeDasharray="6 10"
          >
            <animate attributeName="stroke-dashoffset" from="0" to="-32" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          </line>
        );
      })}

      {edges.map(([a, b], i) => {
        const n1 = nodes[a], n2 = nodes[b];
        const mx = (n1.cx + n2.cx) / 2;
        const my = (n1.cy + n2.cy) / 2;
        return (
          <circle key={`p-${i}`} r="2.5" fill="#5eead4" opacity="0.8">
            <animateMotion
              dur={`${1.8 + i * 0.4}s`}
              repeatCount="indefinite"
              path={`M ${n1.cx},${n1.cy} L ${n2.cx},${n2.cy}`}
            />
          </circle>
        );
      })}

      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r={n.r * 2.5} fill={n.color} opacity="0.12" />
          <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.color} filter="url(#nh-glow)">
            <animate attributeName="r" values={`${n.r};${n.r + 1.5};${n.r}`} dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );
}
