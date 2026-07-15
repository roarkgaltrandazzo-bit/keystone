import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for Keystone Commercial Partners.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="section section-paper">
        <div className="shell" style={{ maxWidth: 820 }}>
          <p className="eyebrow">Privacy</p>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 5.8rem)" }}>Plain language privacy notice.</h1>
          <p className="large-copy dark-copy">
            The self-score runs in your browser and does not collect or transmit your answers. The fit-call form prepares an email in your email app, and nothing is sent until you choose to send it.
          </p>
          <div className="faq-list" style={{ marginTop: 50 }}>
            <details open>
              <summary>What information is collected?</summary>
              <p>If you send the prepared email, Keystone receives the name, email, company information, service-business details and context you chose to include.</p>
            </details>
            <details open>
              <summary>How is it used?</summary>
              <p>To respond to your request and discuss whether the Service Program Assessment may be a fit. Keystone does not use your self-score answers because they never leave your browser.</p>
            </details>
            <details open>
              <summary>Who receives it?</summary>
              <p>Your email goes directly to Keystone Commercial Partners. No third-party form processor receives it, and Keystone does not sell submitted contact information.</p>
            </details>
            <details open>
              <summary>Questions or deletion requests</summary>
              <p>Email tom@keystonecommercialpartners.com to ask what was submitted or request that it be deleted.</p>
            </details>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
