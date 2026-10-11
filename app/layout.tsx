import "@tefi/design-system/styles.css";

import { DesignSystemProvider } from "@tefi/design-system";

import { Navbar } from "./ui/navbar/Navbar";
import { Footer } from "./ui/footer/Footer";

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
      </body>
    </html>
  );
}