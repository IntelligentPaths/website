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
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <LayoutShell>{children}</LayoutShell>
        <Script
          src="https://cdn.intelligentpaths.com/widget/V1/widget.js"
          data-talos-key="talos_pk_f5c5327561abd7b067d369a0f339e0c968a041a37173a92b5e6d8929102c4258"
          data-talos-api="https://talos-api-1010112566563.us-central1.run.app"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
