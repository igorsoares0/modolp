import { ImageResponse } from "next/og";

// Image metadata
export const alt =
  "Modo — browser-based design editor. Design that moves as fast as you think.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens mirrored from app/globals.css
const SURFACE = "#0c0c0c";
const INK = "#e8e8e8";
const INK_SECONDARY = "#9a9a9a";
const ACCENT = "#34d399";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: SURFACE,
          backgroundImage: `radial-gradient(900px 500px at 100% 0%, ${ACCENT}1f, transparent 60%)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: ACCENT,
            }}
          />
          <div style={{ fontSize: 32, fontWeight: 700, color: INK }}>Modo</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: INK,
              maxWidth: "920px",
            }}
          >
            Design that moves as fast as you think.
          </div>
          <div style={{ fontSize: 30, color: INK_SECONDARY, maxWidth: "880px" }}>
            The fast, browser-based design editor for social media graphics.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            fontSize: 24,
            color: INK_SECONDARY,
          }}
        >
          <span style={{ color: ACCENT }}>●</span>
          <span>No download · No monthly fees · Your files stay yours</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
