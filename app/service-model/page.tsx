import type { Metadata } from "next";
import { ServicePath } from "../components/ServicePath";
import { PageShell } from "../components/SiteChrome";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "The Commercial Service Growth Model",
  description: "See how maintenance agreements create customer access, repair and project opportunities, recurring revenue, and long-term enterprise value.",
  alternates: { canonical: "/service-model" },
};

const drivers = [
  {
    number: "01",
    title: "Build a profitable maintenance base",
    text: "Choose equipment-rich buildings, survey them correctly, define the scope, and price each agreement from real labor, burden, travel, and margin requirements.",
  },
  {
    number: "02",
    title: "Keep the customer relationship",
    text: "Deliver what was sold, communicate what technicians find, and start the renewal conversation early enough to retain and expand the account.",
  },
  {
    number: "03",
    title: "Convert technician findings",
    text: "Give every finding a clear condition, photo, recommendation, owner, and next action so good field information becomes quoted repair work.",
  },
  {
    number: "04",
    title: "Expand through repairs and projects",
    text: "Use service history to identify reliability, efficiency, controls, and lifecycle needs before the customer is forced into a rushed buying decision.",
  },
  {
    number: "05",
    title: "Plan replacement before failure",
    text: "Turn equipment condition into a multi-year capital plan and help shape the scope and budget while your relationship still matters more than the low bid.",
  },
  {
    number: "06",
    title: "Manage the engine",
    text: "Review agreement margin, pipeline movement, repair pull-through, renewals, backlog, and technician capacity on a rhythm managers can actually sustain.",
  },
];

const operatingMeasures = [
  "Agreement gross margin",
  "Recurring base and technician load",
  "Repair pull-through and close rate",
  "Renewal, retention, and account expansion",
  "Planned project and replacement pipeline",
];

export default function ServiceModelPage() {
  return (
    <PageShell>
      <section className="subpage-hero">
        <div className="shell subpage-hero-grid">
          <div className="subpage-hero-copy">
            <p className="eyebrow">The KCP service model</p>
            <h1>A stronger service business compounds over time.</h1>
            <p>Maintenance agreements create access. Access creates opportunity. Opportunity creates a more resilient and more valuable business.</p>
          </div>
          <figure className="subpage-hero-media">
            <img
              src="/commercial-rooftop.webp"
              alt="Commercial rooftop mechanical equipment"
              width="1536"
              height="1024"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      <section className="section model-path-section">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow">The commercial service growth path</p>
            <h2>A relationship that produces the next opportunity.</h2>
            <p>The agreement is the entry point. The value grows as your team earns access, sees the need, and stays close enough to act on it.</p>
          </div>
          <ServicePath />
          <div className="compounding-rule">
            <span>Increasing customer knowledge</span>
            <span>Increasing operating value</span>
          </div>
        </div>
      </section>

      <section className="section drivers-section">
        <div className="shell drivers-layout">
          <div className="drivers-intro">
            <p className="eyebrow">What drives each stage</p>
            <h2>The cycle only works when the handoffs work.</h2>
            <p>A maintenance base does not compound by itself. Each stage needs an owner, a process, useful information, and a management rhythm.</p>
          </div>
          <div className="driver-list">
            {drivers.map((driver) => (
              <article className="driver-row" key={driver.number}>
                <span>{driver.number}</span>
                <div>
                  <h3>{driver.title}</h3>
                  <p>{driver.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="operating-section">
        <div className="shell operating-grid">
          <div>
            <p className="eyebrow eyebrow-light">Operating value first</p>
            <h2>Recurring revenue is only valuable when the operation behind it is sound.</h2>
          </div>
          <div className="operating-copy">
            <p>
              Underpriced agreements, weak renewals, missed technician findings, and unmanaged capacity can create activity without creating a better business. Keystone focuses on the operating measures that make service stronger now.
            </p>
            <ul>
              {operatingMeasures.map((measure) => <li key={measure}>{measure}</li>)}
            </ul>
            <p className="operating-close">Enterprise value follows when those results become durable and repeatable.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
