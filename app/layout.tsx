import "@tefi/design-system/styles.css";

import { DesignSystemProvider } from "@tefi/design-system";

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
          {children}
        </DesignSystemProvider>
      </body>
    </html>
  );
}