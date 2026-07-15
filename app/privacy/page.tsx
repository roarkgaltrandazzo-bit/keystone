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
            Keystone collects the information you choose to provide through the fit-call and self-score forms so Tom can respond to your inquiry and understand whether the work may be a fit.
          </p>
          <div className="faq-list" style={{ marginTop: 50 }}>
            <details open>
              <summary>What information is collected?</summary>
              <p>Name, email, company information, service-business details and any context you choose to submit. The self-score also records your result and dimension scores.</p>
            </details>
            <details open>
              <summary>How is it used?</summary>
              <p>To respond to your request, discuss the assessment and improve Keystone&apos;s understanding of common service-program gaps. Findings used for future benchmark work will be anonymized and aggregated.</p>
            </details>
            <details open>
              <summary>Who receives it?</summary>
              <p>Form submissions are delivered to Keystone Commercial Partners through its form-processing provider. Keystone does not sell submitted contact information.</p>
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
