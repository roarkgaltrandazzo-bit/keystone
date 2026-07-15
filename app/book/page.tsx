import type { Metadata } from "next";
import { InquiryForm } from "../components/InquiryForm";
import { PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Book a Fit Call",
  description:
    "Request a 30-minute fit conversation about your commercial mechanical service program and the Keystone Service Program Assessment.",
};

export default function BookPage() {
  return (
    <PageShell>
      <section className="section form-section">
        <div className="shell form-layout">
          <div className="form-intro">
            <p className="eyebrow">30-minute fit conversation</p>
            <h1>Bring the service question you can&apos;t answer cleanly.</h1>
            <p>
              A working conversation about your shop, the questions you need answered and whether the Service Program Assessment is the right first step.
            </p>
            <div className="conversation-points">
              <div><span>01</span><strong>What is happening inside the service business</strong></div>
              <div><span>02</span><strong>Why it has become worth addressing now</strong></div>
              <div><span>03</span><strong>What information exists to diagnose it</strong></div>
              <div><span>04</span><strong>Whether Keystone is the right fit</strong></div>
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </PageShell>
  );
}
