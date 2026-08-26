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
    default: "Service Is the Only Department Nobody Actually Runs | Keystone Commercial Partners",
    template: "%s | Keystone Commercial Partners",
  },
  description:
    "Keystone helps commercial HVAC and mechanical contractors structure, price, sell, renew, and run a bigger service business.",
  openGraph: {
    title: "In Most Companies, Service Is the Only Department Nobody Actually Runs.",
    description: "Commercial service growth for independent HVAC and mechanical contractors.",
    type: "website",
    url: "https://www.keystonecommercialpartners.com/",
    images: [{
      url: "https://www.keystonecommercialpartners.com/og.png",
      width: 1200,
      height: 630,
      alt: "In most companies, service is the only department nobody actually runs.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "In Most Companies, Service Is the Only Department Nobody Actually Runs.",
    description: "Commercial service growth for independent HVAC and mechanical contractors.",
    images: ["https://www.keystonecommercialpartners.com/og.png"],
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
