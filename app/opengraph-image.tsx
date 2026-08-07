import { ImageResponse } from "next/og";

// Image metadata
export const alt =
  "Modo — AI design editor for social media. Describe the post. Get the design.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens mirrored from app/globals.css (light palette — an OG card has
// no theme to follow, and the product is light-first).
const SURFACE_0 = "#eceae5";
const SURFACE_2 = "#ffffff";
const LINE = "rgba(0,0,0,0.08)";
const INK = "#1b1a18";
const INK_SECONDARY = "#6b6862";
const INK_GHOST = "#a5a09a";
const ACCENT = "#5b5bd6";
const ACCENT_TINT = "#f0ecff";
const ACCENT_TINT_FG = "#4a45b8";

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
          background: SURFACE_0,
          backgroundImage: `radial-gradient(900px 500px at 50% 0%, ${ACCENT}1f, transparent 70%)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "13px",
              background: ACCENT,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            M
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: INK }}>Modo</div>
          <div
            style={{
              marginLeft: "12px",
              padding: "7px 16px",
              borderRadius: "999px",
              background: ACCENT_TINT,
              color: ACCENT_TINT_FG,
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: "0.1em",
            }}
          >
            AI DESIGN EDITOR
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              color: INK,
              maxWidth: "900px",
            }}
          >
            <span>Describe the post.</span>
            <span style={{ color: ACCENT }}>Get the design.</span>
          </div>

          {/* Stand-in for the editor's AI bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              alignSelf: "flex-start",
              maxWidth: "780px",
              padding: "16px 26px",
              borderRadius: "999px",
              background: SURFACE_2,
              border: `1px solid ${LINE}`,
              fontSize: 24,
              color: INK_SECONDARY,
            }}
          >
            {/* Drawn, not a glyph — Satori can't source a font for ✦ */}
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke={ACCENT}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 4l1.9 4.6 4.6 1.9-4.6 1.9L12 17l-1.9-4.6L5.5 10.5l4.6-1.9z" />
            </svg>
            launch post for a matcha café, warm and minimal
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 22, color: INK_GHOST }}>
          Free plan · No watermark · Nothing to install
        </div>
      </div>
    ),
    { ...size },
  );
}
