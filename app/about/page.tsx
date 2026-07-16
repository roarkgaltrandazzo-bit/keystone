import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";
import { FinalCta, SectionHeading } from "../components/Shared";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "About Tom Randazzo",
  description:
    "Meet Tom Randazzo, a commercial HVAC operator with experience at Carrier, Johnson Controls, and privately owned mechanical contractors.",
};

const career = [
  {
    label: "Regional operator",
    company: "Carrier",
    copy: "Ran a region. Owned revenue, margin, field execution, and the pricing calls that keep service healthy.",
  },
  {
    label: "Strategic sales",
    company: "Johnson Controls",
    copy: "Led inside a service machine built on tiered agreements, connected buildings, account plans, and clear roles.",
  },
  {
    label: "Owner-led environments",
    company: "Privately Owned Mechanical Contractors",
    copy: "Worked with owners and operating teams where customer fit, pricing, field capacity, and cash consequences show up fast.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="page-hero page-hero-about">
        <div className="page-hero-grid-overlay" aria-hidden="true" />
        <div className="shell page-hero-grid">
          <div>
            <p className="eyebrow eyebrow-orange">About Tom Randazzo</p>
            <h1>Commercial service experience from both sides of the market.</h1>
            <p className="hero-subhead">
              Twenty years across Carrier, Johnson Controls, and privately owned mechanical contractors. I’ve sold
              the work, led the teams, run the region, and owned the P&amp;L.
            </p>
            <div className="button-row">
              <a className="button button-accent" href="/book">Book a fit call</a>
              <a className="button button-outline-light" href="/assessment">Review the assessment</a>
            </div>
          </div>
          <div className="portrait-frame portrait-frame-hero">
            <img src="/tom-randazzo.webp" alt="Tom Randazzo, founder of Keystone Commercial Partners" />
            <div className="portrait-caption"><strong>Tom Randazzo</strong><span>Founder, Keystone Commercial Partners</span></div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <SectionHeading
            eyebrow="Operating background"
            title="The names matter because the operating models matter."
            copy="This wasn’t observation from the sidelines. Each chapter carried a number, a team, or a P&L."
          />
          <div className="career-grid career-grid-v2">
            {career.map((chapter, index) => (
              <article key={chapter.company}>
                <span className="career-number">0{index + 1}</span>
                <span className="career-label">{chapter.label}</span>
                <h3 className="career-company">{chapter.company}</h3>
                <p>{chapter.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy about-world-section">
        <div className="shell playbook-media-grid">
          <div className="media-panel media-panel-rooftop about-world-photo">
            <img src="/commercial-rooftop.webp" alt="Commercial rooftop air-handling equipment" />
            <div className="media-tag"><span>The transfer test</span><strong>Can the team run it Monday?</strong></div>
          </div>
          <div className="playbook-copy">
            <p className="eyebrow eyebrow-orange">Why Keystone exists</p>
            <h2>A 15-tech shop doesn’t need enterprise overhead. It does need discipline.</h2>
            <p className="large-copy">
              Independent contractors already have the hard parts: customer trust, technical credibility, and people
              who solve real problems. What’s usually missing is a service program the whole team can see and run.
            </p>
            <div className="playbook-rules">
              <div><span>01</span><strong>Bring over what works.</strong></div>
              <div><span>02</span><strong>Strip out what doesn’t.</strong></div>
              <div><span>03</span><strong>Leave a system the team can run.</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell split">
          <SectionHeading
            eyebrow="How I work"
            title="Data first. Decisions second."
            copy="The job isn’t to validate the current plan or sell a bigger project. It’s to find what’s worth changing and put the moves in order."
          />
          <div className="principle-list principle-list-v2">
            <article><span>01</span><h3>Diagnosis before prescription</h3><p>Score what’s happening before changing it.</p></article>
            <article><span>02</span><h3>Operating facts over opinions</h3><p>Work orders, quotes, renewals, margin, and capacity.</p></article>
            <article><span>03</span><h3>Tools the team can run</h3><p>If it dies when I leave, it wasn’t useful.</p></article>
            <article><span>04</span><h3>No forced implementation</h3><p>The assessment stands on its own.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-white about-thesis-section">
        <div className="shell assessment-feature">
          <div>
            <p className="eyebrow">The pattern behind the work</p>
            <h2>Growth exposes what experience used to carry.</h2>
          </div>
          <div>
            <p className="large-copy dark-copy">
              At five techs, the owner can bridge every gap. At 15, that same habit becomes the constraint.
            </p>
            <p>
              Keystone turns the unwritten calls around pricing, findings, renewals, and account ownership into a
              service program the company can run without routing everything through you.
            </p>
          </div>
        </div>
      </section>

      <FinalCta
        title="Bring the service question you can’t answer cleanly."
        copy="We’ll use 30 minutes to decide whether the assessment can answer it and whether I’m the right person to do the work."
      />
    </PageShell>
  );
}
