import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";
import { DimensionGrid, FinalCta, SectionHeading } from "../components/Shared";

export const metadata: Metadata = {
  title: "Service Program Assessment",
  description:
    "A three-week assessment of HVAC service agreements, pull-through, PSA pricing, renewals, technician utilization, and service sales.",
};

const triggers = [
  "Agreement sales grew. Margin didn’t.",
  "Techs flag work. Quotes don’t follow.",
  "Every renewal gets the same percent bump.",
  "You still close every serious service quote.",
  "BAS is installed. The service offer hasn’t changed.",
  "You’re adding techs, expanding, or preparing to sell.",
];

const deliverables = [
  {
    title: "Service Program Scorecard",
    copy: "One evidence-backed score across eight weighted dimensions, with the facts behind every rating.",
  },
  {
    title: "Owner Summary",
    copy: "What’s working, what’s leaking, and which gaps deserve attention now.",
  },
  {
    title: "Three-Scenario Impact Model",
    copy: "Conservative, expected, and upside cases for added revenue, EBITDA, and indicative company value.",
  },
  {
    title: "90-Day Action Plan",
    copy: "The first moves, in order, with an owner and a measurable result attached.",
  },
];

const inputs = [
  "Agreement list and renewal history",
  "Service revenue by work type",
  "Tech count and productive hours",
  "Sample PM and dispatch records",
  "Open repair quotes and follow-up",
  "Current PSA pricing method",
  "BAS and controls capabilities",
  "What the owner still has to carry",
];

export default function AssessmentPage() {
  return (
    <PageShell>
      <section className="page-hero page-hero-assessment">
        <div className="page-hero-grid-overlay" aria-hidden="true" />
        <div className="shell page-hero-grid">
          <div>
            <p className="eyebrow eyebrow-orange">Three-week paid diagnostic</p>
            <h1>See the leaks. Price the upside. Know what to fix first.</h1>
            <p className="hero-subhead">
              Keystone scores eight parts of your service program, models what the gaps could be worth, and gives you
              the first 90 days.
            </p>
            <div className="button-row">
              <a className="button button-accent" href="/book">Book a fit call</a>
              <a className="button button-outline-light" href="/self-score">Start with the free self-score</a>
            </div>
          </div>
          <aside className="stat-panel" aria-label="Assessment at a glance">
            <div className="stat-panel-header"><span>SPMA / 01</span><span>Defined scope</span></div>
            <div className="stat-grid">
              <div><strong>3</strong><span>weeks</span></div>
              <div><strong>8</strong><span>weighted dimensions</span></div>
              <div><strong>3</strong><span>financial scenarios</span></div>
              <div><strong>90</strong><span>days prioritized</span></div>
            </div>
            <p className="stat-panel-note">Evidence in. Decisions out.</p>
          </aside>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <SectionHeading
            eyebrow="When to use it"
            title="Call it when the activity and the economics stop matching."
            copy="Busy isn’t the same as productive. These are the signals that the service program needs a clean read."
          />
          <div className="trigger-grid trigger-grid-tight">
            {triggers.map((trigger, index) => (
              <article key={trigger}><span>{String(index + 1).padStart(2, "0")}</span><p>{trigger}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper" id="dimensions">
        <div className="shell">
          <div className="dimensions-intro">
            <SectionHeading
              eyebrow="What gets scored"
              title="The score follows the economics."
              copy="Recurring base and pull-through carry 38% of the weight. Every rating comes from operating evidence, not a leadership survey."
            />
            <div className="weight-lockup"><span><b>20%</b> base</span><i>+</i><span><b>18%</b> pull-through</span><i>=</i><strong>38%</strong></div>
          </div>
          <DimensionGrid detailed />
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <SectionHeading
            eyebrow="How it runs"
            title="Three weeks. No open-ended discovery phase."
            copy="The scope is tight enough to finish and deep enough to force decisions."
          />
          <div className="process-timeline">
            <article><span>Week 01</span><h3>Map what happens now.</h3><p>Owner interview, data intake, and the real path from agreement to finding to quote.</p></article>
            <article><span>Week 02</span><h3>Score and model it.</h3><p>Evidence review, operating interviews, dimension scores, and three financial cases.</p></article>
            <article><span>Week 03</span><h3>Make the calls.</h3><p>Owner summary, 90-day priorities, and a direct readout on what moves first.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell">
          <SectionHeading
            eyebrow="What you keep"
            title="The work stands on its own."
            copy="You keep the scorecard, model, and plan whether Keystone helps implement them or not."
          />
          <div className="deliverables-grid">
            {deliverables.map((item, index) => (
              <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy impact-section-v2">
        <div className="shell impact-model">
          <div>
            <p className="eyebrow eyebrow-orange">The Impact Model</p>
            <h2>Every assumption stays visible.</h2>
            <p className="large-copy">
              No magic multiple. No upside dressed up as a promise. You’ll see what has to change, what it costs, and
              the range it could produce.
            </p>
          </div>
          <div className="formula-board" aria-label="Impact model components">
            <div className="formula-row"><span>+</span><div><strong>Agreement growth</strong><small>New and expanded recurring revenue</small></div></div>
            <div className="formula-row"><span>+</span><div><strong>Pull-through lift</strong><small>More findings reaching a customer decision</small></div></div>
            <div className="formula-row"><span>+</span><div><strong>Pricing correction</strong><small>Margin recovered account by account</small></div></div>
            <div className="formula-row"><span>−</span><div><strong>Required capacity</strong><small>Labor, tools, and operating cost</small></div></div>
            <div className="formula-row formula-total"><span>=</span><div><strong>Incremental EBITDA range</strong><small>Then an owner-approved value range</small></div></div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell split">
          <SectionHeading
            eyebrow="Required inputs"
            title="Bring the real picture. It doesn’t need to be tidy."
            copy="Spreadsheets, accounting exports, work orders, and what lives in people’s heads are enough to start."
          />
          <div className="inputs-list">
            {inputs.map((input, index) => <div key={input}><span>{String(index + 1).padStart(2, "0")}</span><p>{input}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell">
          <div className="pricing-card cohort-card">
            <div className="cohort-count"><span className="price-value">5</span><span className="price-label">founding shops</span></div>
            <div>
              <p className="eyebrow">Founding contractor cohort</p>
              <h3>Fixed scope. Fee confirmed before work starts.</h3>
              <p>
                The first five contractors trade deeper access and frank feedback for founding-cohort terms. There’s
                no hourly drift and no obligation to hire Keystone for implementation.
              </p>
              <a className="button button-dark" href="/book">Discuss the assessment</a>
              <small>Scope, access, timing, and fee are confirmed on the fit call.</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell split">
          <SectionHeading eyebrow="Common questions" title="Know what you’re buying." />
          <div className="faq-list">
            <details><summary>Is this a sales audit?</summary><p>No. Sales is one piece. The assessment covers agreement economics, field capture, renewals, utilization, and connected service.</p></details>
            <details><summary>Do we need a big agreement base?</summary><p>No. It works for a mature base or a shop building its first real service program.</p></details>
            <details><summary>How much time will it take?</summary><p>One working session, light follow-up, and the final readout. I’ll pull in other leaders only where their view matters.</p></details>
            <details><summary>Do we have to hire Keystone afterward?</summary><p>No. The assessment ends with a usable plan. Implementation is a separate decision.</p></details>
            <details><summary>Is the Impact Model a valuation?</summary><p>No. It’s an operating scenario model with visible assumptions, not a formal valuation or appraisal.</p></details>
          </div>
        </div>
      </section>

      <FinalCta
        title="Measure it before you start changing it."
        copy="Bring the service question you need answered. We’ll know in 30 minutes whether the assessment fits."
      />
    </PageShell>
  );
}
