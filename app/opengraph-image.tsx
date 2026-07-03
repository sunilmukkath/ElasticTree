import { ImageResponse } from "next/og";

export const alt = "Elastic Tree — AI-Powered Market Research";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "linear-gradient(135deg, #0a1f4a 0%, #1a1858 40%, #0c2d5c 70%, #0a3550 100%)",
          color: "#f1f5f9",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#0a1f4a",
              border: "2px solid rgba(45,212,191,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 800,
              color: "#e8a820",
              letterSpacing: -1,
            }}
          >
            ET
          </div>
          <span style={{ fontSize: 28, letterSpacing: 4, color: "#cbd5e1", textTransform: "uppercase" }}>
            Elastic Tree
          </span>
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>
          AI-Powered Market Research
        </div>
        <div style={{ fontSize: 28, color: "#e8a820", marginTop: 20 }}>
          Smart Decisions, Simply Made.
        </div>
        <div style={{ fontSize: 22, color: "#cbd5e1", marginTop: 28, maxWidth: 800, lineHeight: 1.5 }}>
          Analytics · Sensory Science · Table Share® · AI Gaze™ · Impact Research
        </div>
      </div>
    ),
    { ...size }
  );
}
