import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";
export const metadata: Metadata = {
  title: "Intelligent Paths",
  description: "AI & ML Engineering Studio",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <LayoutShell>{children}</LayoutShell>
        <Script
          src="https://talos-api-1010112566563.us-central1.run.app/static/widget/widget.js"
          data-talos-key="talos_pk_8dff2f3c06f57fce251de959b4226d6b72b2a45ac025445b919be47334ab5aea"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
