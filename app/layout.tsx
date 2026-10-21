import "@tefi/design-system/styles.css";
import { DesignSystemProvider } from "@tefi/design-system";
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "./ui/navbar/Navbar";
import { Footer } from "./ui/footer/Footer";

export const metadata = {
  title: 'daravena',
  description: 'Pagina web personal del programador frontend David Aravena',
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