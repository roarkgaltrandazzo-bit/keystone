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
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 5.8rem)" }}>What stays in your browser. What doesn&apos;t.</h1>
          <p className="large-copy dark-copy">
            The self-score stays in your browser. The fit-call form drafts an email in your email app. Nothing sends until you hit Send.
          </p>
          <div className="faq-list" style={{ marginTop: 50 }}>
            <details open>
              <summary>What information is collected?</summary>
              <p>If you send the drafted email, Keystone receives the contact and service-business details you chose to include.</p>
            </details>
            <details open>
              <summary>How is it used?</summary>
              <p>To reply and decide whether the Service Program Assessment fits. Keystone can&apos;t use your self-score answers because they never leave your browser.</p>
            </details>
            <details open>
              <summary>Who receives it?</summary>
              <p>Your email goes directly to Keystone Commercial Partners. No third-party form processor receives it, and Keystone doesn&apos;t sell submitted contact information.</p>
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
