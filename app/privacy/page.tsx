import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Privacy | Keystone Commercial Partners",
  description: "How Keystone Commercial Partners handles scorecard answers, contact information, and website analytics.",
  alternates: { canonical: "/privacy/" },
  openGraph: {
    title: "Privacy | Keystone Commercial Partners",
    description: "How Keystone Commercial Partners handles scorecard answers, contact information, and website analytics.",
    type: "website",
    url: "/privacy/",
    siteName: "Keystone Commercial Partners",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Keystone Commercial Partners" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy | Keystone Commercial Partners",
    description: "How Keystone Commercial Partners handles scorecard answers, contact information, and website analytics.",
    images: ["/og.png"],
  },
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="light-section privacy-section">
        <div className="narrow-shell">
          <p className="eyebrow">Privacy</p>
          <h1>What stays in your browser. What doesn&apos;t.</h1>
          <p className="privacy-intro">
            The scorecard is private by design. Contact information only leaves your device when you submit the form.
          </p>

          <section className="privacy-block">
            <h2>The scorecard</h2>
            <p>The scorecard runs entirely in your browser. Your answers and score are never transmitted to Keystone, Plausible, or anyone else, and they are not stored.</p>
            <p>Keystone does not record scorecard starts, completions, answers, scores, question data, or partial-completion information.</p>
          </section>

          <section className="privacy-block">
            <h2>The contact form</h2>
            <p>The form asks for four fields: name, company, email, and phone. Name and company are required. You may provide either email or phone as your contact method.</p>
            <p>Submitting the form opens a preaddressed email in your device&apos;s email application. Your details are not sent to Keystone unless you send that email.</p>
            <p>There is no marketing list, automated sequence, or sale of submitted contact information.</p>
          </section>

          <section className="privacy-block">
            <h2>Analytics</h2>
            <p>This site uses Plausible Analytics. Plausible is configured without cookies and without advertising features.</p>
            <p>Keystone tracks page visits and two custom events: contact-form submissions and phone-link clicks. Scorecard activity, answers, and partial answers are never tracked.</p>
          </section>

          <section className="privacy-block">
            <h2>Questions or deletion requests</h2>
            <p>Email <a href="mailto:tom@keystonecommercialpartners.com">tom@keystonecommercialpartners.com</a> to ask what contact information Keystone has received or to request that it be deleted.</p>
          </section>
        </div>
      </section>
    </PageShell>
  );
}
