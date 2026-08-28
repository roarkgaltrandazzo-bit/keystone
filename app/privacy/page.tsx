import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Privacy | Keystone Commercial Partners",
  description: "How Keystone Commercial Partners handles scorecard answers, contact information, and website analytics.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="light-section privacy-section">
        <div className="narrow-shell">
          <p className="eyebrow">Privacy</p>
          <h1>What stays in your browser. What doesn&apos;t.</h1>
          <p className="privacy-intro">
            The scorecard is private by design. Contact information only leaves your device when you choose to send it.
          </p>

          <section className="privacy-block">
            <h2>The scorecard</h2>
            <p>The scorecard runs entirely in your browser. Your answers and score are never transmitted to Keystone, Plausible, or anyone else, and they are not stored.</p>
            <p>Keystone records only that a scorecard was started or completed. Those events contain no answers, score, question data, or partial-completion information.</p>
          </section>

          <section className="privacy-block">
            <h2>The contact form</h2>
            <p>The form asks for four fields: name, company, email, and phone. Name and company are required. You may provide either email or phone as your contact method.</p>
            <p>Submitting the form opens an email addressed to tom@keystonecommercialpartners.com in your email application. Keystone receives the information only if you send that email. It is used to respond to your request.</p>
            <p>There is no marketing list, automated sequence, or sale of submitted contact information.</p>
          </section>

          <section className="privacy-block">
            <h2>Analytics</h2>
            <p>This site uses Plausible Analytics. Plausible is configured without cookies and without advertising features.</p>
            <p>Keystone tracks page visits, call-button clicks, phone-link taps, contact-form submissions, scorecard starts, and scorecard completions. Scorecard answers and partial answers are never tracked.</p>
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
