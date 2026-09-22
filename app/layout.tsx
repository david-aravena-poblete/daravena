import "@tefi/design-system/styles.css";

import { DesignSystemProvider } from "@tefi/design-system";

import { Navbar } from "./ui/Navbar";

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
      <body>
        <DesignSystemProvider
          theme="dark"
          brand="default"
        >
          <Navbar />
          {children}
        </DesignSystemProvider>
      </body>
    </html>
  );
}