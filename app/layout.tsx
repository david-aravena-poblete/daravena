import "@tefi/design-system/styles.css";
import { DesignSystemProvider } from "@tefi/design-system";
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "./ui/navbar/Navbar";
import { Footer } from "./ui/footer/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://daravena.cl"),
  title: "Daravena | Desarrollo Frontend",
  description: "David Aravena, desarrollador frontend potenciado con inteligencia artificial.",
  openGraph: {
    title: "Daravena | Desarrollo Frontend",
    description: "David Aravena, desarrollador frontend potenciado con inteligencia artificial.",
    url: "https://daravena.cl",
    siteName: "Daravena",
    locale: "es_CL",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Daravena — Desarrollo frontend e inteligencia artificial" }],
  },
  twitter: { card: "summary_large_image" },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html
      lang="es"
      data-theme="dark"
      data-brand="default"
    >
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DesignSystemProvider
          theme="dark"
          brand="default"
        >
          <Navbar />

          <main style={{ flex: 1 }}>
            {children}
          </main>

          <Footer />
        </DesignSystemProvider>
        <Analytics/>
      </body>
    </html>
  );
}