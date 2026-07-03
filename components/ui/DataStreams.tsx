"use client";

/**
 * Vertical data-stream columns — randomised binary/hex digits falling top-to-bottom.
 * Matrix-style but amber-tinted. CSS-only after initial render.
 */

const COLS = [
  { left: "5%",  chars: "A4F2 01 E8 3C FF", dur: 4.2, delay: 0    },
  { left: "12%", chars: "7B 1D A0 52 9E",   dur: 3.8, delay: 0.6  },
  { left: "22%", chars: "C3 88 2F 64 B1",   dur: 5.0, delay: 1.2  },
  { left: "35%", chars: "19 D7 5A F0 3E",   dur: 4.6, delay: 0.3  },
  { left: "48%", chars: "8C 4B E6 12 97",   dur: 3.4, delay: 1.8  },
  { left: "61%", chars: "F1 2A 73 C9 5D",   dur: 4.8, delay: 0.9  },
  { left: "72%", chars: "3E 6C B0 41 DA",   dur: 3.6, delay: 2.1  },
  { left: "82%", chars: "90 F4 28 7B E3",   dur: 5.2, delay: 0.5  },
  { left: "90%", chars: "55 CB 1F 8E 47",   dur: 4.0, delay: 1.5  },
  { left: "96%", chars: "A9 63 D2 0C 7F",   dur: 3.2, delay: 2.7  },
];

export default function DataStreams({ opacity = 0.12 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ opacity }}
      aria-hidden
    >
      {COLS.map((col, i) => (
        <div
          key={i}
          style={{
            position:  "absolute",
            left:      col.left,
            top:       0,
            fontFamily:"'DM Mono', ui-monospace, monospace",
            fontSize:  "10px",
            lineHeight:"1.8",
            color:     "#2dd4bf",
            whiteSpace:"pre",
            animation: `data-fall ${col.dur}s linear ${col.delay}s infinite`,
            letterSpacing: "0.05em",
          }}
        >
          {col.chars.split(" ").join("\n")}
        </div>
      ))}
      <style>{`
        @keyframes data-fall {
          0%   { transform: translateY(-100%); opacity: 0; }
          5%   { opacity: 1; }
          90%  { opacity: 0.7; }
          100% { transform: translateY(110vh);  opacity: 0; }
        }
      `}</style>
    </div>
  );
}
