import type { Metadata } from "next";
import { ServiceScorecard } from "../components/ServiceScorecard";
import { PageShell, ThreeBarMark } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Service Base Scorecard | Keystone Commercial Partners",
  description: "Score the commercial service base you are carrying in twelve questions. Results stay in your browser.",
  alternates: { canonical: "/scorecard/" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Service Base Scorecard | Keystone Commercial Partners",
    description: "Twelve questions. Five minutes. The result stays in your browser.",
    type: "website",
    url: "/scorecard/",
    siteName: "Keystone Commercial Partners",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Keystone Commercial Partners" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Base Scorecard | Keystone Commercial Partners",
    description: "Twelve questions. Five minutes. The result stays in your browser.",
    images: ["/og.png"],
  },
};

export default function ScorecardPage() {
  return (
    <PageShell>
      <section className="scorecard-page">
        <div className="content-wide scorecard-page-inner">
          <header className="scorecard-page-heading">
            <div className="section-marker">
              <ThreeBarMark />
              <span>Service Base Scorecard</span>
            </div>
            <h1>Twelve questions. Five minutes. No gate.</h1>
            <p>The score shows here in your browser. Your answers never go to Keystone.</p>
          </header>
          <ServiceScorecard />
          <noscript><p>The scorecard needs JavaScript. You can still call Tom directly at 920-585-4179.</p></noscript>
        </div>
      </section>
    </PageShell>
  );
}
