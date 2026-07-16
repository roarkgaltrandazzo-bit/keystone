import type { Metadata } from "next";
import { InquiryForm } from "../components/InquiryForm";
import { PageShell } from "../components/SiteChrome";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Book a Fit Call",
  description:
    "Request a 30-minute fit conversation about your commercial mechanical service program and the Keystone Service Program Assessment.",
};

export default function BookPage() {
  return (
    <PageShell>
      <section className="section form-section form-section-v2">
        <div className="shell form-layout">
          <div className="form-intro">
            <p className="eyebrow">30-minute fit conversation</p>
            <h1>Bring the service question you can&apos;t answer cleanly.</h1>
            <p>
              We&apos;ll decide whether the Service Program Assessment fits. If it doesn&apos;t, I&apos;ll tell you.
            </p>
            <div className="form-photo-panel">
              <img src="/bas-controls.webp" alt="Building automation controls in a commercial mechanical room" />
              <div><strong>30 minutes</strong><span>No pitch deck. No sales sequence.</span></div>
            </div>
            <div className="conversation-points">
              <div><span>01</span><strong>What changed?</strong></div>
              <div><span>02</span><strong>Where does value seem to leak?</strong></div>
              <div><span>03</span><strong>What operating data exists?</strong></div>
              <div><span>04</span><strong>Is the assessment the right next move?</strong></div>
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </PageShell>
  );
}
