import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";
import { FinalCta, SectionHeading } from "../components/Shared";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "About Tom Randazzo",
  description:
    "Meet Tom Randazzo, a commercial operator with experience across Bassett Mechanical, the Linc Network, Carrier and Johnson Controls.",
};

const career = [
  {
    label: "Contractor environment",
    company: "Bassett Mechanical and the Linc Network",
    copy: "Saw the recurring-service model at the contractor level, where agreements, tech capacity, customer relationships and project pull-through all have to work inside one operating system.",
  },
  {
    label: "Regional operating leadership",
    company: "Carrier",
    copy: "Ran a region with direct responsibility for revenue, P&L, field execution and the pricing calls that keep a service business healthy.",
  },
  {
    label: "Strategic sales leadership",
    company: "Johnson Controls",
    copy: "Worked inside a major service organization where tiered agreements, connected buildings, account strategy and defined selling roles are simply how the business is built.",
  },
  {
    label: "Owner-led businesses",
    company: "Fortune 500, PE-backed and family-run",
    copy: "Carried a bag, led teams, built systems and sat across the table from owners, where a bad pricing or customer-fit decision shows up fast.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <p className="eyebrow eyebrow-orange">About Tom Randazzo</p>
            <h1>I&apos;ve built and run the service operations I now help independent contractors improve.</h1>
            <p className="hero-subhead">
              More than twenty years across field sales, commercial leadership, regional operations and P&amp;L ownership in the HVAC and mechanical-service market.
            </p>
            <div className="button-row">
              <a className="button button-accent" href="/book">
                Book a Fit Call
              </a>
              <a className="button button-outline-light" href="/assessment">
                Review the Assessment
              </a>
            </div>
          </div>
          <div className="portrait-frame">
            <img src="/tom-randazzo.webp" alt="Tom Randazzo, founder of Keystone Commercial Partners" />
            <div className="portrait-caption">
              <strong>Tom Randazzo</strong>
              <span>Founder, Keystone Commercial Partners</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <SectionHeading
            eyebrow="Operating background"
            title="The company names matter because the operating models matter."
            copy="You already know what JCI, Carrier and Linc represent. What matters here is that I owned results inside those systems: the pricing, the pull-through and the renewals, not that I passed through them."
          />
          <div className="career-grid">
            {career.map((chapter) => (
              <article key={chapter.company}>
                <span className="career-label">{chapter.label}</span>
                <h3 className="career-company">{chapter.company}</h3>
                <p>{chapter.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="shell playbook-grid">
          <div>
            <p className="eyebrow eyebrow-orange">Why Keystone exists</p>
            <h2>Independent shops already have the hard parts.</h2>
            <p className="large-copy">
              You&apos;ve got the customer relationships, the technical credibility, the equipment knowledge and people who solve real problems in the field. What&apos;s usually missing is the commercial system that turns all of that into steady, predictable service growth.
            </p>
          </div>
          <div className="formula-board">
            <div className="formula-row"><span>01</span><div><strong>Bring over what works</strong><small>Use the service disciplines the major organizations have already proven.</small></div></div>
            <div className="formula-row"><span>02</span><div><strong>Size it for the shop</strong><small>Strip out the layers, technology and reporting an independent contractor does not need.</small></div></div>
            <div className="formula-row"><span>03</span><div><strong>Make it runnable</strong><small>Build tools and management rhythms the existing team can run on Monday.</small></div></div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell split">
          <SectionHeading
            eyebrow="How I work"
            title="I start with your data, not with opinions about your business."
            copy="The point isn't to make you feel good or make you feel exposed. It's to find what's actually worth changing, put a fair number on it and hand your team a clear order of operations."
          />
          <div className="principle-list">
            <article><span>01</span><h3>Diagnosis before prescription</h3></article>
            <article><span>02</span><h3>Operating data over opinions</h3></article>
            <article><span>03</span><h3>Tools your existing team can run</h3></article>
            <article><span>04</span><h3>No implementation retainer required</h3></article>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell assessment-feature">
          <div>
            <p className="eyebrow">The pattern behind the work</p>
            <h2>Strong service companies can stay commercially underbuilt for years.</h2>
          </div>
          <div>
            <p className="large-copy dark-copy">
              Experience and relationships carry an independent contractor a long way, until growth exposes everything that was never written down. Which agreements are worth chasing. What a PM visit should produce beyond the checklist. When and how prices should move. Who owns the quote. What a real renewal looks like. And what the owner finally needs to stop carrying alone.
            </p>
            <p>
              Keystone turns that hard-won operating knowledge into a service program the company can see, manage and eventually run without you.
            </p>
          </div>
        </div>
      </section>

      <FinalCta
        title="Bring me the service question you can't answer cleanly."
        copy="We'll use the fit call to figure out whether the assessment can answer it and whether I'm the right person to do the work."
      />
    </PageShell>
  );
}
