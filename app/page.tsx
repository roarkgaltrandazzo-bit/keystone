import { AgreementLoop } from "./components/AgreementLoop";
import { CoverageSystem } from "./components/CoverageSystem";
import { InquiryForm } from "./components/InquiryForm";
import { ServiceScorecard } from "./components/ServiceScorecard";
import { PageShell } from "./components/SiteChrome";
import { TrackedLink } from "./components/TrackedLink";

const contractorProfiles = [
  {
    title: "Plan and Spec Contractors",
    text: "You know how to win project work. Now you want the equipment you install to lead to maintenance agreements, repairs, upgrades, and replacements instead of handing the building to another service contractor.",
  },
  {
    title: "Contractors with a handful of service agreements",
    text: "You've proven customers will buy. Now you need a consistent way to price, sell, renew, and operate agreements so the service department can grow beyond a few accounts.",
  },
  {
    title: "Next generation leader",
    text: "You're stepping into the business and want a service department that can grow without every pricing, sales, and renewal decision landing on the owner.",
  },
];

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

export default function Home() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <section className="hero-section" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Commercial service agreements</p>
            <h1>
              <span className="hero-long">There&apos;s more money in maintaining commercial mechanical equipment than installing it.</span>
              <span className="hero-short">The money is in maintaining the equipment.</span>
            </h1>
            <p className="hero-lead">
              Keystone helps independent commercial HVAC and mechanical contractors price, sell, and run service agreements that lead to repairs, replacements, and a service business the team can manage.
            </p>
            <div className="hero-actions">
              <TrackedLink className="button button-accent" href="#contact" eventName="Call button click">
                Set up a call
              </TrackedLink>
              <a className="text-link" href="#scorecard">Score your service business · 10 min · private</a>
            </div>
          </div>

          <figure className="hero-media">
            <img
              src="/mechanical-room-hero.webp"
              alt="Commercial mechanical equipment and piping in an industrial plant room"
              width="1600"
              height="1067"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      <section className="dark-section agreement-section" id="why-agreements">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow eyebrow-gold">Why agreements</p>
            <h2>Every agreement creates five chances to win.</h2>
            <p>The monthly recurring maintenance revenue is only one piece.</p>
          </div>

          <AgreementLoop />
        </div>
      </section>

      <section className="light-section coverage-section" id="what-we-cover">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">What we cover</p>
            <h2>How industry leading contractors price, sell, and operate a successful service division:</h2>
          </div>

          <CoverageSystem />

          <p className="coverage-close">
            Keystone helps you build these pieces within your existing company
          </p>
        </div>
      </section>

      <section className="profile-section" id="who-we-work-with">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Who we work with</p>
            <h2>Independent commercial HVAC contractors who want to build or strengthen their service department</h2>
          </div>

          <div className="profile-grid">
            {contractorProfiles.map((profile) => (
              <article className="profile-card" key={profile.title}>
                <h3>{profile.title}</h3>
                <p>{profile.text}</p>
              </article>
            ))}
            <article className="profile-card profile-card-not">
              <h3>Not a fit</h3>
              <ul>
                <li>
                  <strong>Contractors focused primarily on residential or new construction.</strong> Keystone is built and optimized for industrial and commercial HVAC service.
                </li>
                <li>
                  <strong>Contractors below $3M to $5M in annual revenue.</strong> At that size, most companies don&apos;t yet have the management and operating infrastructure to absorb the growth a well-designed and well-executed service program can create.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="shell">
          <div className="about-company">
            <div className="about-company-copy">
              <p className="eyebrow">About Keystone</p>
              <h2>Operating Value Today, Enterprise Value at Exit</h2>
              <p>
                Keystone&apos;s service philosophy starts with operating value. A well-run service division gives you steadier revenue, higher-margin repair and replacement opportunities, better technician utilization, and deeper customer relationships. That makes the company more resilient and more profitable today.
              </p>
              <p>
                It also builds enterprise value. If and when an owner decides to step away, a durable service base with predictable revenue, strong margins, and customers who call you first can command a stronger valuation multiple.
              </p>
            </div>
            <figure className="blueprint-media">
              <img
                src="/keystone-blueprint.png"
                alt="Blueprint sketches of rooftop HVAC equipment, mechanical-room piping, and field service gauges"
                width="1792"
                height="896"
                loading="lazy"
              />
            </figure>
          </div>

          <div className="founder-grid">
            <figure className="founder-portrait">
              <img
                src="/tom-randazzo.webp"
                alt="Tom Randazzo, founder of Keystone Commercial Partners"
                width="640"
                height="800"
                loading="lazy"
              />
            </figure>
            <div className="founder-copy">
              <p className="eyebrow">Founder</p>
              <h2>Tom Randazzo</h2>
              <p>
                Tom is the founder of Keystone Commercial Partners. He has spent 20 years in commercial HVAC and mechanical service, with experience at Carrier, Johnson Controls, and privately held mechanical contractors.
              </p>
              <p>
                His background includes service agreement sales, pricing, service sales leadership, and the handoff between sellers, service managers, and technicians. He founded Keystone to help independent contractors build stronger service departments inside the companies they already own.
              </p>
              <a
                className="text-link"
                href="https://www.linkedin.com/in/tom-randazzo-73b48947"
                rel="noreferrer"
                target="_blank"
              >
                Tom on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-section closing-section" id="scorecard">
        <div className="shell">
          <div className="closing-heading">
            <h2>Get started</h2>
          </div>

          <div className="closing-grid">
            <div className="scorecard-panel">
              <ServiceScorecard />
              <noscript>
                <p>The scorecard needs JavaScript. You can still call Tom directly at 920-585-4179.</p>
              </noscript>
            </div>

            <aside className="contact-panel" id="contact">
              <p className="eyebrow eyebrow-gold">Let&apos;s Talk</p>
              <h2>30 minutes. 1 clear next move.</h2>
              <p>
                There is no cost for the first call. Tom will tell you what he would change first, whether or not you work together.
              </p>
              <InquiryForm />
              <div className="direct-contact">
                <span>Prefer to call now?</span>
                <TrackedLink href="tel:+19205854179" eventName="Phone link tap">920-585-4179</TrackedLink>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
