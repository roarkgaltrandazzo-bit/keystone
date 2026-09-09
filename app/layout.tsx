import type { Metadata } from "next";
import "./globals.css";

const title = "Commercial Service Programs for Mechanical Contractors | Keystone Commercial Partners";
const socialTitle = "Keystone Commercial Partners";
const description = "Keystone provides service agreement programs for commercial and industrial mechanical contractors.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.keystonecommercialpartners.com"),
  title,
  description,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: socialTitle,
    description,
    type: "website",
    url: "/",
    siteName: "Keystone Commercial Partners",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Keystone Commercial Partners" }],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/jost-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/source-serif-4-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)};",
          }}
        />
        <script defer data-domain="keystonecommercialpartners.com" src="https://plausible.io/js/script.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}
