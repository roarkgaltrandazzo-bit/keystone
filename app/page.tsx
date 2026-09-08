import { AgreementLoop } from "./components/AgreementLoop";
import { InquiryForm } from "./components/InquiryForm";
import { ServiceScorecard } from "./components/ServiceScorecard";
import { PageShell } from "./components/SiteChrome";
import { TrackedLink } from "./components/TrackedLink";

const conditions = [
  "The backlog is full through August and January is still an open question.",
  "You carry PM agreements and nobody can tell you which ones make money.",
  "Service work shows up when a technician happens to notice something on a call.",
  "One person sells service. If they leave, the number leaves with them.",
  "Renewals go out at last year’s price because repricing means a conversation nobody wants to have.",
  "A rooftop unit gets replaced in a building you have held for six years and the first you hear about it is the bid invitation.",
];

const operatingPieces = [
  {
    number: "01",
    name: "Qualification",
    output: "A building is worth pursuing before anyone walks the roof.",
  },
  {
    number: "02",
    name: "Survey data",
    output: "Equipment, age, condition, access, and field notes are captured the same way.",
  },
  {
    number: "03",
    name: "Equipment grading",
    output: "Repair, retrofit, and replacement priorities follow what the technician saw.",
  },
  {
    number: "04",
    name: "Tasking",
    output: "Planned labor is set by equipment type and visit frequency.",
  },
  {
    number: "05",
    name: "Coverage eligibility",
    output: "Included work, callbacks, exclusions, and response commitments are explicit.",
  },
  {
    number: "06",
    name: "Pricing",
    output: "Burdened labor, recovery, escalation, and target margin live in one price book.",
  },
  {
    number: "07",
    name: "Contract scope",
    output: "The signed promise is something service can schedule and deliver.",
  },
  {
    number: "08",
    name: "Stage gates",
    output: "Every live agreement has an owner, a next action, and a start date.",
  },
  {
    number: "09",
    name: "Management cadence",
    output: "Pipeline, renewals, pull-through, and the number are reviewed every week.",
  },
];

const engagementSteps = [
  {
    number: "01",
    offer: "Focused commercial consulting",
    title: "We look",
    text: "A day inside your operation. Your agreements, your price book, your last ten proposals, and your service P&L. You get a straight read on where the money leaks and what it would take to stop it.",
  },
  {
    number: "02",
    offer: "Commercial service system build",
    title: "We build",
    text: "Ninety days on the two or three things that move the number first. You keep every piece: the price book, an agreement your team can price consistently, a list of buildings worth going after, and the weekly routine.",
  },
  {
    number: "03",
    offer: "Fractional commercial leadership",
    title: "We keep it running",
    text: "As much or as little as you want after that. I lead service sales, manage strategic accounts, or run the monthly cadence that keeps the routine alive.",
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

      <section className="hero" id="top">
        <div className="site-frame hero-layout">
          <div className="hero-statement">
            <p className="section-label"><span>01</span> Commercial service growth</p>
            <h1>
              Most service bases were never built.
              <span>They accumulated.</span>
            </h1>
            <p className="hero-copy">
              Most commercial contractors carry a maintenance base that grew one customer at a time, ahead of any plan for it. I build the way service gets structured, priced, sold, renewed, and run, so the base grows to a number you set and can hold people to.
            </p>
            <div className="hero-actions">
              <TrackedLink className="button button-primary" href="#contact" eventName="Call button click">
                Book a service review
              </TrackedLink>
              <a className="arrow-link" href="#why-the-base-wins">See why the base wins <span aria-hidden="true">↓</span></a>
            </div>
            <p className="hero-note">
              Thirty minutes. You leave with the two things I would change first, whether or not we work together.
            </p>
          </div>

          <aside className="engagement-plate" aria-label="Typical engagement facts">
            <div className="plate-heading">
              <span>KCP / FIELD NOTE</span>
              <span>NO. 001</span>
            </div>
            <p className="plate-title">Typical service system build</p>
            <dl>
              <div>
                <dt>Inside your operation</dt>
                <dd>90 days</dd>
              </div>
              <div>
                <dt>Quoted flat</dt>
                <dd>$25K to $45K</dd>
              </div>
              <div>
                <dt>People assigned</dt>
                <dd>Your team + Tom</dd>
              </div>
              <div>
                <dt>First conversation</dt>
                <dd>Service review</dd>
              </div>
            </dl>
            <p className="plate-foot">Built in the operation you already own.</p>
          </aside>
        </div>
      </section>

      <section className="diagnosis" id="diagnosis">
        <div className="site-frame split-section">
          <header className="section-intro">
            <p className="section-label"><span>02</span> What I see most often</p>
            <h2>The backlog’s full. Service runs on memory and one good seller.</h2>
            <a className="arrow-link" href="#why-the-base-wins">See what the base is worth <span aria-hidden="true">↓</span></a>
          </header>

          <div className="condition-log">
            <div className="log-heading" aria-hidden="true">
              <span>Field condition</span>
              <span>Status</span>
            </div>
            <ol>
              {conditions.map((condition, index) => (
                <li key={condition}>
                  <span className="log-number">{String(index + 1).padStart(2, "0")}</span>
                  <p>{condition}</p>
                  <span className="log-status">Open</span>
                </li>
              ))}
            </ol>
            <p className="condition-close">
              None of these are emergencies. That is why they survive. Each one is somebody’s second priority, and second priorities keep their spot for years.
            </p>
          </div>
        </div>
      </section>

      <section className="base-value" id="why-the-base-wins">
        <div className="site-frame">
          <header className="value-heading">
            <p className="section-label section-label-light"><span>03</span> Why the base wins</p>
            <h2>Every agreement you sign buys you four things. The monthly revenue is the smallest of them.</h2>
            <p>
              A project pays once and ends. An agreement pays every month, puts your people inside the building on a schedule, makes you the first call when something fails, and hands you the replacement when the equipment is done. Four returns on one signature. Most agreements get priced as if only the first one existed.
            </p>
          </header>

          <AgreementLoop />

          <div className="loop-close">
            <p>That’s the loop. Most contractors turn it one customer at a time. Turning it on purpose is the whole job.</p>
            <strong>More revenue under agreement means less of next year starts at zero.</strong>
          </div>
        </div>
      </section>

      <section className="operating-system" id="what-i-do">
        <div className="site-frame">
          <header className="system-heading">
            <p className="section-label"><span>04</span> What I do</p>
            <h2>I build the linked decisions behind a service agreement.</h2>
            <p>
              Qualification, survey data, equipment grading, tasking, coverage, pricing, contract scope, stage gates, and management cadence. Each one changes the next.
            </p>
          </header>

          <div className="system-register" role="group" aria-label="The commercial service operating sequence">
            <div className="register-heading" aria-hidden="true">
              <span>Sequence</span>
              <span>Decision</span>
              <span>Operating output</span>
            </div>
            <ol>
              {operatingPieces.map((piece) => (
                <li key={piece.number}>
                  <span className="register-number">{piece.number}</span>
                  <h3>{piece.name}</h3>
                  <p>{piece.output}</p>
                </li>
              ))}
            </ol>
          </div>

          <p className="system-close">
            The survey changes the tasking. The tasking changes the price. The scope changes what service has to deliver. The weekly review keeps the chain moving.
          </p>

          <div className="ongoing-services">
            <article>
              <p className="section-label">When you want it to keep running</p>
              <h3>Fractional sales leadership</h3>
              <p>I run your service sales effort the way a VP would. Pipeline, pricing calls, ride-alongs, coaching your sellers, and the weekly number. You get that years before a full-time VP is the right use of the payroll.</p>
            </article>
            <article>
              <p className="section-label">When the account cannot slip</p>
              <h3>Strategic account management</h3>
              <p>I take your largest accounts, and the ones you can least afford to lose. Business reviews, renewal strategy, escalations, and finding the next project inside buildings you already hold.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="engagement" id="how-it-works">
        <div className="site-frame">
          <header className="engagement-heading">
            <p className="section-label"><span>05</span> How it works</p>
            <h2>How it actually goes.</h2>
          </header>

          <ol className="engagement-steps">
            {engagementSteps.map((step) => (
              <li key={step.number}>
                <span className="engagement-number">{step.number}</span>
                <div className="engagement-name">
                  <p>{step.offer}</p>
                  <h3>{step.title}</h3>
                </div>
                <p className="engagement-copy">{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="engagement-facts">
            <div>
              <span>Typical 90-day build</span>
              <strong>$25K to $45K</strong>
              <small>Quoted flat</small>
            </div>
            <p><strong>A few things to be clear about:</strong> No cohort. No course library. Nothing to log into. Your team keeps working while this happens. You will see me in your mechanical rooms.</p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="site-frame about-layout">
          <header className="section-intro">
            <p className="section-label"><span>06</span> Where this comes from</p>
            <h2>Twenty years inside commercial service.</h2>
          </header>

          <div className="about-copy">
            <p>I’m Tom Randazzo. I have spent twenty years selling commercial service and leading the people responsible for it, at Carrier, at Johnson Controls, and at privately held mechanical contractors. I have built agreement bases, repriced bad ones, hired and fired service sellers, and sat in the room when the number didn’t come in.</p>
            <p>The build happens inside your operation, with the people already on your payroll. Your service manager runs the renewal review. Your estimator prices the agreement. Your seller walks the roof and I walk it with them. When I stop showing up, the routine keeps running, because your people are the ones running it.</p>
            <p className="about-direct">I work alone. When you call, you get me.</p>
          </div>

          <dl className="credential-strip">
            <div><dt>20 years</dt><dd>Commercial service</dd></div>
            <div><dt>Carrier + JCI</dt><dd>Operating experience</dd></div>
            <div><dt>One person</dt><dd>Tom, on every call</dd></div>
            <div><dt>References</dt><dd>Available on the first call</dd></div>
          </dl>
        </div>
      </section>

      <section className="private-start" id="scorecard">
        <div className="site-frame scorecard-layout">
          <header>
            <p className="section-label"><span>07</span> Start privately</p>
            <h2>Twelve questions. Five minutes. No gate.</h2>
            <p>The score shows here in your browser. Your answers never go to Keystone.</p>
          </header>
          <ServiceScorecard />
          <noscript>
            <p>The scorecard needs JavaScript. You can still call Tom directly at 920-585-4179.</p>
          </noscript>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="site-frame contact-layout">
          <header>
            <p className="section-label section-label-light"><span>08</span> Start here</p>
            <h2>In thirty minutes I can tell you where your service business is leaking.</h2>
            <p>Bring three numbers: your revenue, roughly what share of it is service, and how many PM agreements you carry. I will tell you what I would change first, what it is likely worth, and whether I am the right person to help. If I am not, I will tell you that too.</p>
            <div className="direct-line">
              <span>Call Tom directly</span>
              <TrackedLink href="tel:+19205854179" eventName="Phone link tap">920-585-4179</TrackedLink>
              <a href="mailto:tom@keystonecommercialpartners.com">tom@keystonecommercialpartners.com</a>
            </div>
          </header>

          <div className="contact-form-wrap">
            <p className="form-kicker">Have Tom call you</p>
            <InquiryForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
