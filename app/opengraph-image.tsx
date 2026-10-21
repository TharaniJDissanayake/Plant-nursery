import { ImageResponse } from "next/og";
import { BUSINESS } from "@/config/business";

export const alt = `${BUSINESS.name} — ${BUSINESS.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Colours match the brand-900 / brand-700 / brand-100 Tailwind tokens.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #14532d 0%, #15803d 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 96, marginBottom: 24 }}>🌿</div>
        <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: -2 }}>
          {BUSINESS.name}
        </div>
        <div style={{ fontSize: 44, marginTop: 20, color: "#dcfce7", maxWidth: 950, lineHeight: 1.25 }}>
          {BUSINESS.tagline}
        </div>
        <div style={{ fontSize: 28, marginTop: 48, color: "#bbf7d0" }}>
          {`Order on WhatsApp · ${BUSINESS.siteUrl.replace("https://", "")}`}
        </div>
      </div>
    ),
    size,
  );
}
