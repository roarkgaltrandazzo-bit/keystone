import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Keystone Commercial Partners handles direct contact information and website analytics.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageShell showConversation={false}>
      <section className="light-section privacy-section">
        <div className="narrow-shell">
          <p className="eyebrow">Privacy</p>
          <h1>How Keystone handles your information.</h1>
          <p className="privacy-intro">
            Keystone collects very little through this website and does not sell personal information.
          </p>

          <section className="privacy-block">
            <h2>Direct contact</h2>
            <p>If you email or call Keystone, the information you provide is used to respond to you and manage that business conversation.</p>
            <p>There is no automated marketing sequence and contact information is not sold.</p>
          </section>

          <section className="privacy-block">
            <h2>Analytics</h2>
            <p>This site uses Plausible Analytics. Plausible is configured without cookies and without advertising features.</p>
            <p>Keystone may track page visits and clicks on email, phone, and conversation links to understand how the site is used.</p>
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
