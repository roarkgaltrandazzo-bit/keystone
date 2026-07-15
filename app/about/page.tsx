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
    copy: "Saw the recurring-service model at contractor level, where agreements, technician capacity, customer relationships and project pull-through have to work inside one operating system.",
  },
  {
    label: "Regional operating leadership",
    company: "Carrier",
    copy: "Led with direct responsibility for revenue, P&L results, field execution and the commercial decisions required to keep a service business performing across a region.",
  },
  {
    label: "Strategic sales leadership",
    company: "Johnson Controls",
    copy: "Worked inside a major service organization where tiered agreements, connected buildings, account strategy and defined service-selling roles are built into the commercial model.",
  },
  {
    label: "Owner-led businesses",
    company: "Fortune 500, PE-backed and family-run",
    copy: "Carried a bag, led teams, built systems and worked directly with owners where the consequences of pricing, customer fit and revenue discipline show up quickly.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <p className="eyebrow eyebrow-orange">About Tom Randazzo</p>
            <h1>I have built and led the kind of service operations I now help independent contractors improve.</h1>
            <p className="hero-subhead">
              More than twenty years across field sales, commercial leadership, regional operations and P&L responsibility inside the HVAC and mechanical-service market.
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
            copy="A mechanical contractor owner already knows what JCI, Carrier and Linc represent. My value is not that I once worked near those systems. It is that I was accountable inside them."
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
            <h2>Independent shops already have most of the hard parts.</h2>
            <p className="large-copy">
              They have customer relationships, technical credibility, installed equipment knowledge and people who know how to solve real problems. What is often missing is the deliberate commercial system that turns those assets into dependable service growth.
            </p>
          </div>
          <div className="formula-board">
            <div className="formula-row"><span>01</span><div><strong>Translate what is useful</strong><small>Use the service disciplines the major organizations have already proven.</small></div></div>
            <div className="formula-row"><span>02</span><div><strong>Size it for the shop</strong><small>Strip out the layers, technology and reporting an independent contractor does not need.</small></div></div>
            <div className="formula-row"><span>03</span><div><strong>Make it operable</strong><small>Build tools and management rhythms the existing team can actually use on Monday.</small></div></div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell split">
          <SectionHeading
            eyebrow="How I work"
            title="The assessment starts with evidence because opinions are cheap."
            copy="The goal is not to make the owner feel validated or buried. It is to identify what is worth changing, put a rational value around it and leave the team with a usable sequence."
          />
          <div className="principle-list">
            <article><span>01</span><h3>Diagnosis before prescription</h3></article>
            <article><span>02</span><h3>Operating data over opinions</h3></article>
            <article><span>03</span><h3>Tools the existing team can use</h3></article>
            <article><span>04</span><h3>No required implementation retainer</h3></article>
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
              Experience and relationships get an independent contractor remarkably far. Then growth exposes everything that was never made explicit. Which agreements are worth pursuing. What a PM visit should produce beyond the task list. How pricing changes. Who owns the quote. What renewal should look like. What the owner must stop carrying personally.
            </p>
            <p>
              Keystone helps turn that accumulated operating knowledge into a service program the company can see, manage and transfer.
            </p>
          </div>
        </div>
      </section>

      <FinalCta
        title="Bring me the service question you cannot answer cleanly."
        copy="We will use the fit call to determine whether the assessment can answer it and whether I am the right person to do the work."
      />
    </PageShell>
  );
}
