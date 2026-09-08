import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const bodyFont = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const displayFont = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const title = "Commercial Service Growth for Mechanical Contractors | Keystone Commercial Partners";
const description = "Keystone works with commercial mechanical contractors to build the maintenance base, sales discipline, and management rhythm that make service a durable growth engine.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.keystonecommercialpartners.com"),
  title: {
    default: title,
    template: "%s | Keystone Commercial Partners",
  },
  description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    siteName: "Keystone Commercial Partners",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Keystone Commercial Partners" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)};",
          }}
        />
        <script defer data-domain="keystonecommercialpartners.com" src="https://plausible.io/js/script.js" />
      </head>
      <body className={bodyFont.variable + " " + displayFont.variable}>{children}</body>
    </html>
  );
}
