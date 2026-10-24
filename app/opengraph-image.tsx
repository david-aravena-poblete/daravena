import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Daravena — Desarrollo frontend e inteligencia artificial";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 90, background: "linear-gradient(135deg, #0c172a, #163d68)", color: "#ffffff", fontFamily: "sans-serif" }}>
        <div style={{ fontSize: 32, letterSpacing: 5, color: "#93c5fd", marginBottom: 24 }}>DARAVENA</div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>Desarrollo Frontend</div>
        <div style={{ fontSize: 34, marginTop: 30, color: "#dbeafe" }}>Potenciado con inteligencia artificial</div>
        <div style={{ fontSize: 25, marginTop: 58, color: "#93c5fd" }}>daravena.cl</div>
      </div>
    ),
    size
  );
}
