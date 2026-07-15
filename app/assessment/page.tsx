import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";
import { DimensionGrid, FinalCta, SectionHeading } from "../components/Shared";

export const metadata: Metadata = {
  title: "Service Program Assessment",
  description:
    "A three-week assessment of service agreements, pull-through, pricing, renewal, technician utilization and service sales for commercial mechanical contractors.",
};

const triggers = [
  "Agreement revenue has grown, but profitability is unclear.",
  "Technicians find work that is not consistently captured.",
  "Service pricing has accumulated years of exceptions.",
  "The owner is still the department's primary service salesperson.",
  "The company wants more recurring revenue before hiring, expanding or selling.",
  "The business is considering BAS or connected-service offerings.",
];

const deliverables = [
  {
    title: "Service Program Scorecard",
    copy: "An evidence-backed score across eight dimensions, with the operating facts behind each rating.",
  },
  {
    title: "Owner Summary",
    copy: "A plainspoken explanation of what is working, what is leaking value and what requires attention.",
  },
  {
    title: "Three-Scenario Impact Model",
    copy: "Conservative, expected and upside scenarios for incremental revenue, EBITDA and indicative enterprise value.",
  },
  {
    title: "90-Day Priorities",
    copy: "The few actions that should happen first, with the order, ownership and expected operating effect made clear.",
  },
];

const inputs = [
  "Current agreement or PSA list",
  "Agreement renewal history",
  "Service revenue by work type",
  "Technician count and utilization data",
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
            <h1>See how the service program performs and what the gaps are worth.</h1>
            <p className="hero-subhead">
              A three-week assessment built for commercial mechanical contractors who want a more deliberate agreement base, stronger pull-through and clearer service economics.
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
            title="The assessment is built for the questions owners can feel but cannot answer cleanly."
            copy="You do not need to know exactly what is wrong before starting. These are the conditions that usually prompt the work."
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
            title="The score is weighted toward what moves the service economics."
            copy="Each dimension is scored from operating evidence, not a management team's opinion of itself. Publishing the weights makes the instrument transparent."
          />
          <DimensionGrid detailed />
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <SectionHeading
            eyebrow="How the work runs"
            title="Three weeks from intake to owner readout."
            copy="The assessment is contained by design. It should create clarity without turning into an open-ended consulting project."
          />
          <div className="process-timeline">
            <article>
              <span>Week 01</span>
              <h3>Map the current program.</h3>
              <p>Data collection, owner interview, document review and a working map of how agreements and service opportunities currently move.</p>
            </article>
            <article>
              <span>Week 02</span>
              <h3>Score and model it.</h3>
              <p>Operating interviews, evidence review, dimension scoring and development of conservative, expected and upside scenarios.</p>
            </article>
            <article>
              <span>Week 03</span>
              <h3>Make the decisions.</h3>
              <p>Owner summary, 90-day priorities and a direct executive readout focused on what is worth fixing first.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell">
          <SectionHeading
            eyebrow="What you receive"
            title="Useful outputs whether Keystone helps implement them or not."
            copy="The assessment is a paid diagnostic with a defined end. You own the findings, model and roadmap."
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
            <h2>Translate operating gaps into economic decisions.</h2>
            <p className="large-copy">
              The model does not turn assumptions into promises. It makes the assumptions visible, shows what would have to change and gives the owner a rational range for deciding what the work is worth.
            </p>
          </div>
          <div className="formula-board" aria-label="Impact model components">
            <div className="formula-row"><span>+</span><div><strong>Agreement growth</strong><small>New and expanded recurring revenue</small></div></div>
            <div className="formula-row"><span>+</span><div><strong>Pull-through improvement</strong><small>More identified work reaching a customer decision</small></div></div>
            <div className="formula-row"><span>+</span><div><strong>Pricing correction</strong><small>Margin recovered through deliberate agreement pricing</small></div></div>
            <div className="formula-row"><span>−</span><div><strong>Required capacity</strong><small>Labor, tools and operating cost needed to support the change</small></div></div>
            <div className="formula-row"><span>=</span><div><strong>Incremental EBITDA range</strong><small>Applied to an owner-approved multiple for an indicative value range</small></div></div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell split">
          <SectionHeading
            eyebrow="Required inputs"
            title="The assessment needs the real service picture."
            copy="Perfect reporting is not required. If the information exists across spreadsheets, accounting reports and people's heads, we can work with it."
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
              <h3>Flat fee. Clear scope. No hourly drift.</h3>
              <p>
                Available to the first five participating contractors in exchange for deeper operating access, candid feedback and permission to use anonymized findings in Keystone&apos;s aggregate benchmark data.
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
            title="Know what this is before you buy it."
          />
          <div className="faq-list">
            <details>
              <summary>Is this a sales audit?</summary>
              <p>No. Sales is one part of the review. The assessment looks at the full service program, including agreement economics, field opportunity capture, renewal, utilization and connected service.</p>
            </details>
            <details>
              <summary>Do we need a large agreement base?</summary>
              <p>No. The assessment can help a contractor with an established base or one deliberately building its first scalable program. The questions and evidence change with the starting point.</p>
            </details>
            <details>
              <summary>How much owner time is required?</summary>
              <p>Plan on an initial working session, limited follow-up during analysis and the final readout. Other leaders may be interviewed where their operating view matters.</p>
            </details>
            <details>
              <summary>Do we have to hire Keystone for implementation?</summary>
              <p>No. The assessment and roadmap stand on their own. If implementation support makes sense, it is scoped separately after both sides understand the work.</p>
            </details>
            <details>
              <summary>Is the Impact Model a business valuation?</summary>
              <p>No. It is an operating scenario model. It estimates the effect of specific improvements using transparent assumptions. It is not a formal valuation or appraisal.</p>
            </details>
          </div>
        </div>
      </section>

      <FinalCta
        title="Measure the service program before spending money to change it."
        copy="The fit call is a direct conversation about the shop, the questions you need answered and whether the assessment is the right first step."
      />
    </PageShell>
  );
}
