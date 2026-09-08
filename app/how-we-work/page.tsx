import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "How Keystone Works",
  description: "Keystone assesses the service business, builds the missing commercial systems with your team, and helps management keep them running.",
  alternates: { canonical: "/how-we-work" },
};

const phases = [
  {
    number: "01",
    title: "Assess",
    name: "Service Performance & Market Assessment",
    timing: "Typically 2–3 weeks",
    description: "Start with the facts. We look at the maintenance base, agreement economics, sales motion, opportunity flow, customer mix, roles, tools, and management cadence.",
    focus: [
      "Agreement revenue, margin, retention, and density",
      "Customer and installed-base opportunity",
      "Pricing method, scope, and escalation",
      "Pipeline, field findings, and repair pull-through",
      "Role ownership and management rhythm",
    ],
    output: "A prioritized service blueprint showing what should change first, what can wait, and what the team needs to build.",
  },
  {
    number: "02",
    title: "Build",
    name: "Implementation",
    timing: "Typically 60–90 days",
    description: "Keystone works alongside leadership and the people responsible for service to install the missing pieces inside the existing business.",
    focus: [
      "Target account and building criteria",
      "Agreement pricing and program structure",
      "Survey, proposal, and handoff tools",
      "Service sales stages and opportunity ownership",
      "Renewal, account review, and scorecard routines",
    ],
    output: "A practical service operating system that your team is already using before the engagement moves into the next phase.",
  },
  {
    number: "03",
    title: "Run",
    name: "Advisory or Fractional Leadership",
    timing: "Ongoing, when needed",
    description: "Once the system is in place, Keystone can stay involved to help managers run it, coach the team, and make the decisions that keep service moving.",
    focus: [
      "Pipeline and renewal reviews",
      "Account and opportunity strategy",
      "Pricing and margin decisions",
      "Manager and seller coaching",
      "Performance measurement and course correction",
    ],
    output: "A management rhythm the company can sustain without permanent dependence on an outside advisor.",
  },
];

const required = [
  "Leadership involvement in the decisions that matter",
  "Access to the operating data and people needed to understand the business",
  "Willingness to change a process when the numbers show it is not working",
  "Follow-through from the people who will own the system after Keystone leaves",
];

const exclusions = [
  "Outsourced lead generation",
  "Generic sales training",
  "A software implementation project",
  "A report that leaves your team to figure out the rest",
  "A permanent layer between the owner and the business",
];

export default function HowWeWorkPage() {
  return (
    <PageShell>
      <section className="process-hero">
        <div className="shell process-hero-grid">
          <div>
            <p className="eyebrow eyebrow-light">How we work</p>
            <h1>Assess the business. Build the system. Run it with your team.</h1>
            <p>Keystone stays close enough to implementation to make sure the new process survives real customers, real schedules, and real management decisions.</p>
          </div>
          <ol className="process-marker" aria-label="Keystone engagement phases">
            <li><span>01</span><strong>Assess</strong></li>
            <li><span>02</span><strong>Build</strong></li>
            <li><span>03</span><strong>Run</strong></li>
          </ol>
        </div>
      </section>

      <section className="section process-section">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow">The engagement</p>
            <h2>Clear phases. Specific outputs.</h2>
          </div>
          <div className="phase-list">
            {phases.map((phase) => (
              <article className="phase-card" key={phase.number}>
                <header className="phase-header">
                  <span>{phase.number}</span>
                  <div>
                    <p>{phase.name}</p>
                    <h3>{phase.title}</h3>
                  </div>
                  <p className="phase-timing">{phase.timing}</p>
                </header>
                <div className="phase-body">
                  <div className="phase-description">
                    <p>{phase.description}</p>
                    <div className="phase-output">
                      <span>Output</span>
                      <p>{phase.output}</p>
                    </div>
                  </div>
                  <div className="phase-focus">
                    <span>Focus</span>
                    <ul>
                      {phase.focus.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="expectations-section">
        <div className="shell expectation-grid">
          <article>
            <p className="eyebrow">What strong engagements require</p>
            <ul>
              {required.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="expectation-dark">
            <p className="eyebrow eyebrow-light">What Keystone is not</p>
            <ul>
              {exclusions.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
