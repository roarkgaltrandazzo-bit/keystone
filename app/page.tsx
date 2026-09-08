import type { Metadata } from "next";
import { ServicePath } from "./components/ServicePath";
import { PageShell } from "./components/SiteChrome";
import { TrackedLink } from "./components/TrackedLink";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Commercial Service Growth for Mechanical Contractors",
  description: "Keystone works with commercial mechanical contractors to build the maintenance base, sales discipline, and management rhythm that make service a durable growth engine.",
  alternates: { canonical: "/" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Keystone Commercial Partners",
  url: "https://www.keystonecommercialpartners.com",
  telephone: "+1-920-585-4179",
  email: "tom@keystonecommercialpartners.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Appleton",
    addressRegion: "WI",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "Tom Randazzo",
    jobTitle: "Founder",
    sameAs: "https://www.linkedin.com/in/tom-randazzo-73b48947",
  },
};

const relationshipPrinciples = [
  {
    number: "01",
    title: "Inside your business",
    text: "We work from your customers, opportunities, agreements, people, and numbers. The system has to fit the company you actually run.",
  },
  {
    number: "02",
    title: "Built for your people",
    text: "Leadership, sellers, service managers, and technicians help shape the process so it survives outside the conference room.",
  },
  {
    number: "03",
    title: "Measured in operating results",
    text: "Agreement margin, renewal, repair pull-through, pipeline movement, and account growth matter more than recommendations delivered.",
  },
];

const fitSignals = [
  "Commercial and industrial mechanical service is central to the strategy",
  "The company has customer relationships and an installed base worth developing",
  "Leadership is willing to change pricing, roles, handoffs, and management rhythm",
];

export default function Home() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <section className="home-hero">
        <div className="shell home-hero-frame">
          <div className="home-hero-copy">
            <p className="eyebrow eyebrow-light">Commercial HVAC. Real growth.</p>
            <h1>Service builds recurring revenue.</h1>
            <p className="hero-lead">
              Keystone works with commercial mechanical contractors to build the maintenance base, sales discipline, and management rhythm that turn service into a durable growth engine.
            </p>
            <p className="hero-qualifier">Direct involvement. Built with your team. Measured against your numbers.</p>
            <div className="hero-actions">
              <a className="button button-light" href="/service-model">See the service model</a>
              <TrackedLink className="button button-outline-light" href="#contact" eventName="Conversation link click">
                Talk with KCP
              </TrackedLink>
            </div>
          </div>
          <figure className="home-hero-media">
            <img
              src="/mechanical-room-hero.webp"
              alt="Commercial mechanical equipment and piping in an industrial plant room"
              width="1536"
              height="1024"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      <section className="section path-section">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow">Why service</p>
            <h2>Every agreement creates more than revenue.</h2>
            <p>Maintenance puts your people inside the building on a schedule. That access creates trust, information, and the next opportunity.</p>
          </div>
          <ServicePath />
          <p className="value-line">Operating value today. Enterprise value tomorrow.</p>
        </div>
      </section>

      <section className="section inside-section">
        <div className="shell inside-grid">
          <div className="inside-copy">
            <p className="eyebrow">What Keystone does</p>
            <h2>Build the commercial service business you should already have.</h2>
            <p>
              Keystone works alongside your team to grow the maintenance base, strengthen service execution, improve pricing discipline, and create a management system the company can keep running.
            </p>
            <a className="text-link" href="/how-we-work">See how we work</a>
          </div>
          <aside className="inside-statement">
            <p className="statement-label">This is not a lead service.</p>
            <p className="statement-main">It is the operating system that turns the customer access you already have into recurring service revenue.</p>
            <p>
              We build it with your leadership, sellers, service managers, and technicians. Pricing, account selection, agreement sales, field findings, renewals, and management cadence all have to connect.
            </p>
          </aside>
        </div>
      </section>

      <section className="section relationship-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">The relationship</p>
            <h2>A different kind of consulting engagement.</h2>
          </div>
          <div className="principle-grid">
            {relationshipPrinciples.map((principle) => (
              <article className="principle-card" key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fit-section">
        <div className="shell fit-grid">
          <div>
            <p className="eyebrow">Who it is built for</p>
            <h2>Established commercial mechanical contractors.</h2>
          </div>
          <ul className="fit-list">
            {fitSignals.map((signal) => <li key={signal}>{signal}</li>)}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
