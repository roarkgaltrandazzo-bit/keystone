import { AgreementLoop } from "./components/AgreementLoop";
import { InquiryForm } from "./components/InquiryForm";
import { ServiceScorecard } from "./components/ServiceScorecard";
import { PageShell } from "./components/SiteChrome";
import { TrackedLink } from "./components/TrackedLink";

const coverage = [
  {
    number: "01",
    title: "Pricing",
    text: "Labor hours by equipment type, your real burdened rate, and a margin you can hold. Two estimators quoting the same building land on the same number.",
  },
  {
    number: "02",
    title: "Agreement Structure",
    text: "What's covered, what isn't, what the customer owes, and what happens when a unit goes down at two in the morning. Written so it can be sold, priced, and delivered without a phone call.",
  },
  {
    number: "03",
    title: "Renewals and Price Increases",
    text: "A calendar, a named owner, a planned increase, and a customer conversation that starts before the agreement is already expired.",
  },
  {
    number: "04",
    title: "Target Account Selection",
    text: "Your installed base, buildings where you already have credibility, and accounts with a reason to change. A list your sellers can actually work.",
  },
  {
    number: "05",
    title: "Repair Pull-Through",
    text: "A field finding becomes an owned quote with a due date and a next step. Open quotes live in one place until the customer decides.",
  },
  {
    number: "06",
    title: "Replacement and Retrofit Capture",
    text: "Equipment condition becomes a capital plan before the customer invites three contractors to bid. You shape the job instead of hearing about it late.",
  },
  {
    number: "07",
    title: "Service Sales Process",
    text: "Clear stages, owners, next actions, and a weekly number. Sellers know where to spend time and managers can coach what is visible.",
  },
  {
    number: "08",
    title: "Technician Findings",
    text: "What technicians document, how they explain it, where it goes, and who owns turning it into a customer decision.",
  },
  {
    number: "09",
    title: "Compensation",
    text: "One person owns the service-growth number and meaningful variable pay moves with it. Everyone can tell what behavior the plan rewards.",
  },
];

const contractorProfiles = [
  {
    label: "A service base without a service system",
    title: "You have agreements. The result still depends on who touches the account.",
    text: "Pricing changes by seller, renewals start late, technician findings disappear, and nobody can give you next month's agreement hours without opening three spreadsheets.",
  },
  {
    label: "A strong project contractor",
    title: "You installed the equipment. Another contractor is maintaining it.",
    text: "The project business is healthy, but closeout does not reliably become an agreement. You want the installed base to create recurring revenue and the next replacement.",
  },
  {
    label: "A next-generation leader",
    title: "You inherited the number. Now you need a system the team can run.",
    text: "You need clear ownership, pricing, targets, renewal routines, and visible measures before growth can stop depending on the owner.",
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
              Keystone helps independent commercial HVAC and mechanical contractors sell, price, and run service agreements that lead to repairs, replacements, and a service business the team can manage.
            </p>
            <div className="hero-actions">
              <TrackedLink className="button button-accent" href="#contact" eventName="Call button click">
                Set up a call
              </TrackedLink>
              <a className="text-link" href="#scorecard">Score your service business · 10 min · private</a>
            </div>
            <p className="hero-proof">
              20 years in commercial service · Carrier and Johnson Controls · Independent mechanical contractors
            </p>
          </div>

          <figure className="hero-media">
            <img
              src="/mechanical-room-hero.webp"
              alt="Commercial mechanical equipment and piping in an industrial plant room"
              width="1600"
              height="1067"
              fetchPriority="high"
            />
            <figcaption>The installed base is already in the building.</figcaption>
          </figure>
        </div>
      </section>

      <section className="dark-section agreement-section" id="why-agreements">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow eyebrow-gold">Why agreements</p>
            <h2>One agreement creates five chances to win.</h2>
            <p>
              The monthly maintenance revenue is only the first return. The position inside the building is what keeps compounding.
            </p>
          </div>

          <AgreementLoop />

          <div className="loop-caption">
            <p>The agreement is not the end product. It is the position that lets you see, quote, and own what comes next.</p>
            <strong>Keystone helps your team turn the loop on purpose.</strong>
          </div>
        </div>
      </section>

      <section className="light-section coverage-section" id="what-we-cover">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">What we cover</p>
            <h2>The operating system behind a durable service base.</h2>
            <p>
              These are the pieces that make agreements consistent enough to sell, profitable enough to keep, and useful enough to pull the next job forward.
            </p>
          </div>

          <div className="coverage-grid">
            {coverage.map((item) => (
              <article className="coverage-card" key={item.title}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <p className="coverage-close">
            Keystone builds these pieces inside your company, with the people who will keep running them after Tom is gone.
          </p>
        </div>
      </section>

      <section className="profile-section" id="who-we-work-with">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Who we work with</p>
            <h2>Independent commercial contractors ready to run service like a business.</h2>
          </div>

          <div className="profile-grid">
            {contractorProfiles.map((profile) => (
              <article className="profile-card" key={profile.label}>
                <p className="profile-label">{profile.label}</p>
                <h3>{profile.title}</h3>
                <p>{profile.text}</p>
              </article>
            ))}
            <article className="profile-card profile-card-not">
              <p className="profile-label">Not a fit</p>
              <h3>Keystone is not outsourced selling, appointment setting, or a binder for the shelf.</h3>
              <p>
                The work requires a commercial service team willing to name owners, use the numbers, and keep the routines after the engagement ends. Residential-only contractors are outside the focus.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="shell">
          <div className="about-company">
            <div className="about-company-copy">
              <p className="eyebrow">About Keystone</p>
              <h2>Company first. Consultant second.</h2>
              <p>
                Keystone Commercial Partners helps independent commercial HVAC and mechanical contractors build service-agreement systems their own teams can run.
              </p>
              <p>
                Every engagement is built around your installed base, labor cost, market, managers, sellers, and technicians. The result is a practical operating system, not a generic playbook.
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
              <h2>Tom Randazzo has carried the number.</h2>
              <p>
                Tom has spent twenty years selling commercial service and leading the people responsible for it at Carrier, Johnson Controls, and privately held mechanical contractors.
              </p>
              <p>
                He has built agreement bases, repriced unprofitable ones, led service sellers, and worked beside service managers and technicians when the process had to hold up in the field.
              </p>
              <div className="proof-statement">
                <strong>+500 basis points</strong>
                <span>At Johnson Controls, Tom expanded margin by 500 basis points while meeting the revenue goal.</span>
              </div>
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
            <p className="eyebrow eyebrow-gold">Start with the leak</p>
            <h2>Find the first place your service business is losing the next agreement.</h2>
            <p>
              Score the system privately, or bring Tom the three numbers that matter: service revenue, the share tied to agreements, and the number of agreements you carry.
            </p>
          </div>

          <div className="closing-grid">
            <div className="scorecard-panel">
              <ServiceScorecard />
              <noscript>
                <p>The scorecard needs JavaScript. You can still call Tom directly at 920-585-4179.</p>
              </noscript>
            </div>

            <aside className="contact-panel" id="contact">
              <p className="eyebrow eyebrow-gold">Set up a call</p>
              <h2>Thirty minutes. Three numbers. A clear first move.</h2>
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
