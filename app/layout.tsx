import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.keystonecommercialpartners.com"),
  title: {
    default: "Keystone Commercial Partners | HVAC Service Program Advisory",
    template: "%s | Keystone Commercial Partners",
  },
  description:
    "Keystone helps $3M–$15M commercial HVAC contractors strengthen service agreements, pull-through, PSA pricing, and recurring revenue.",
  openGraph: {
    title: "Keystone Commercial Partners",
    description: "Service program advisory for $3M–$15M commercial and industrial HVAC contractors.",
    type: "website",
    url: "/",
  },
  other: {
    "codex-preview": "development",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
