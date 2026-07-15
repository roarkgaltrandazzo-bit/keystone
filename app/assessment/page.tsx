import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";
import { DimensionGrid, FinalCta, SectionHeading } from "../components/Shared";

export const metadata: Metadata = {
  title: "Service Program Assessment",
  description:
    "A three-week assessment of service agreements, pull-through, pricing, renewal, technician utilization and service sales for commercial mechanical contractors.",
};

const triggers = [
  "Agreement revenue is up, but you cannot tell if it is profitable.",
  "Techs find work that does not consistently make it to a quote.",
  "Service pricing has picked up years of one-off exceptions.",
  "You are still the department's main service salesperson.",
  "You want more recurring revenue before you hire, expand or sell.",
  "You are weighing BAS or connected-service offerings.",
];

const deliverables = [
  {
    title: "Service Program Scorecard",
    copy: "An evidence-backed score across all eight areas, with the operating facts behind each rating.",
  },
  {
    title: "Owner Summary",
    copy: "A straight-talk read on what is working, what is leaking and what needs attention.",
  },
  {
    title: "Three-Scenario Impact Model",
    copy: "Conservative, expected and upside cases for added revenue, EBITDA and indicative enterprise value.",
  },
  {
    title: "90-Day Priorities",
    copy: "The handful of moves to make first, in order, with owners and expected effect.",
  },
];

const inputs = [
  "Current agreement/PSA list",
  "Renewal history",
  "Service revenue by work type",
  "Tech count and utilization",
  "Sample agreements and dispatch records",
  "Repair quotes and follow-up records",
  "Current pricing methods",
  "BAS and controls capabilities",
];

export default function AssessmentPage() {
  return (
    <PageShell>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <p className="eyebrow eyebrow-orange">Service Program Assessment</p>
            <h1>See how the service program performs, and what the gaps are worth.</h1>
            <p className="hero-subhead">
              A three-week assessment for commercial mechanical contractors who want a stronger agreement base, better pull-through and service economics they can actually see.
            </p>
            <div className="button-row">
              <a className="button button-accent" href="/book">
                Book a Fit Call
              </a>
              <a className="button button-outline-light" href="/self-score">
                Start with the Free Self-Score
              </a>
            </div>
          </div>
          <aside className="stat-panel" aria-label="Assessment at a glance">
            <div className="stat-panel-header">
              <span>Assessment at a glance</span>
              <span>Defined scope</span>
            </div>
            <div className="stat-grid">
              <div><strong>3</strong><span>Weeks</span></div>
              <div><strong>8</strong><span>Weighted dimensions</span></div>
              <div><strong>3</strong><span>Financial scenarios</span></div>
              <div><strong>90</strong><span>Days prioritized</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <SectionHeading
            eyebrow="When it makes sense"
            title="Built for the problems owners can feel but can't quite name."
            copy="You don't have to know what's wrong before you start. These are the situations that usually bring owners in."
          />
          <div className="trigger-grid">
            {triggers.map((trigger, index) => (
              <article key={trigger}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{trigger}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper" id="dimensions">
        <div className="shell">
          <SectionHeading
            eyebrow="What gets reviewed"
            title="The score is weighted toward what actually moves the economics."
            copy="Every area is scored from your operating evidence, not from how the team feels the business is doing. The weights are published on purpose, so you can see exactly how you're being graded."
          />
          <DimensionGrid detailed />
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <SectionHeading
            eyebrow="How the work runs"
            title="Three weeks from intake to owner readout."
            copy="The engagement is deliberately contained. It's built to give you clarity, not to turn into an open-ended consulting project."
          />
          <div className="process-timeline">
            <article>
              <span>Week 01</span>
              <h3>Map the current program.</h3>
              <p>Data collection, an owner interview, document review and a working map of how agreements and opportunities move today.</p>
            </article>
            <article>
              <span>Week 02</span>
              <h3>Score and model it.</h3>
              <p>Operating interviews, evidence review, dimension scoring and conservative-to-upside scenarios.</p>
            </article>
            <article>
              <span>Week 03</span>
              <h3>Make the decisions.</h3>
              <p>Owner summary, 90-day priorities and a direct executive readout on what to fix first.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell">
          <SectionHeading
            eyebrow="What you receive"
            title="Outputs you keep, whether or not Keystone implements them."
            copy="This is a paid diagnostic with a defined end. The findings, the model and the roadmap are yours."
          />
          <div className="deliverables-grid">
            {deliverables.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="shell impact-model">
          <div>
            <p className="eyebrow eyebrow-orange">The Impact Model</p>
            <h2>Turn operating gaps into decisions you can price.</h2>
            <p className="large-copy">
              The model doesn&apos;t dress assumptions up as promises. It puts every assumption on the table, shows what would have to change and gives you an honest range for deciding whether the work is worth doing.
            </p>
          </div>
          <div className="formula-board" aria-label="Impact model components">
            <div className="formula-row"><span>+</span><div><strong>Agreement growth</strong><small>New and expanded recurring revenue</small></div></div>
            <div className="formula-row"><span>+</span><div><strong>Pull-through improvement</strong><small>More identified work reaching a customer decision</small></div></div>
            <div className="formula-row"><span>+</span><div><strong>Pricing correction</strong><small>Margin recovered through agreement pricing</small></div></div>
            <div className="formula-row"><span>−</span><div><strong>Required capacity</strong><small>Labor, tools and operating cost needed to support the change</small></div></div>
            <div className="formula-row"><span>=</span><div><strong>Incremental EBITDA range</strong><small>Applied to an owner-approved multiple for an indicative value range</small></div></div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell split">
          <SectionHeading
            eyebrow="Required inputs"
            title="It needs the real service picture, not a perfect one."
            copy="You don't need clean reporting. If the information lives across spreadsheets, accounting exports and people's heads, we can work with that."
          />
          <div className="inputs-list">
            {inputs.map((input, index) => (
              <div key={input}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{input}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell">
          <div className="pricing-card">
            <div>
              <span className="price-value">$3,500</span>
              <span className="price-label">Founding contractor rate</span>
            </div>
            <div>
              <p className="eyebrow">Limited first cohort</p>
              <h3>Flat fee. Fixed scope. No hourly drift.</h3>
              <p>
                Open to the first five contractors, in exchange for deeper operating access, honest feedback and permission to use anonymized findings in Keystone&apos;s benchmark data.
              </p>
              <a className="button button-dark" href="/book">
                Discuss the Assessment
              </a>
              <small>Future pricing will be set after the founding cohort. Scope and required access are confirmed before work starts.</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell split">
          <SectionHeading
            eyebrow="Common questions"
            title="Know exactly what this is before you buy it."
          />
          <div className="faq-list">
            <details>
              <summary>Is this a sales audit?</summary>
              <p>No. Sales is one piece. The assessment covers the whole service program, including agreement economics, field capture, renewal, utilization and connected service.</p>
            </details>
            <details>
              <summary>Do we need a big agreement base?</summary>
              <p>No. It works for a shop with an established base or one building its first real program. The questions change with where you&apos;re starting.</p>
            </details>
            <details>
              <summary>How much of my time will it take?</summary>
              <p>An initial working session, some light follow-up during analysis and the final readout. I&apos;ll interview other leaders where their view matters.</p>
            </details>
            <details>
              <summary>Do we have to hire Keystone to implement?</summary>
              <p>No. The assessment and roadmap stand on their own. If implementation help makes sense, it&apos;s scoped separately once we both understand the work.</p>
            </details>
            <details>
              <summary>Is the Impact Model a business valuation?</summary>
              <p>No. It&apos;s an operating scenario model. It estimates the effect of specific improvements using transparent assumptions. It&apos;s not a formal valuation or appraisal.</p>
            </details>
          </div>
        </div>
      </section>

      <FinalCta
        title="Measure the program before you spend money changing it."
        copy="The fit call is a straight conversation about your shop, the questions you need answered and whether the assessment is the right first move."
      />
    </PageShell>
  );
}
