import { InquiryForm } from "./components/InquiryForm";
import { PageShell, ThreeBarMark } from "./components/SiteChrome";
import { TrackedLink } from "./components/TrackedLink";

const serviceReturns = [
  {
    number: "01",
    label: "Revenue already sold.",
    body: "It’s on the calendar before the year starts, it fills technician hours in a slow quarter, and it renews without a bid.",
  },
  {
    number: "02",
    label: "Your people in the building.",
    body: "Four visits a year, or twelve. Your technicians learn which unit runs hot and which one the customer keeps patching.",
  },
  {
    number: "03",
    label: "The first call.",
    body: "When something fails, a contracted customer calls you before he calls anyone else. Often your own technician wrote it up two visits ago.",
  },
  {
    number: "04",
    label: "The next project.",
    body: "You know the equipment, the building, and roughly when the money reaches the budget, so the replacement comes to you instead of to a bid list.",
  },
  {
    number: "05",
    label: "And it starts over.",
    body: "You add the unit you just installed to an agreement at the new price, and your base grows with each win.",
  },
];

const buildDecisions = [
  {
    number: "01",
    label: "Qualification.",
    body: "We decide whether a building is worth pursuing before anyone walks the roof.",
  },
  {
    number: "02",
    label: "Survey data.",
    body: "We capture equipment, age, condition, access, and field notes the same way every time.",
  },
  {
    number: "03",
    label: "Equipment grading.",
    body: "Repair, retrofit, and replacement priorities follow what the technician actually saw.",
  },
  {
    number: "04",
    label: "Tasking.",
    body: "Planned labor is set by equipment type and visit frequency.",
  },
  {
    number: "05",
    label: "Coverage eligibility.",
    body: "Included work, callbacks, exclusions, and response commitments are explicit.",
  },
  {
    number: "06",
    label: "Pricing.",
    body: "Burdened labor, recovery, escalation, and target margin live in one price book.",
  },
  {
    number: "07",
    label: "Contract scope.",
    body: "The signed promise is something service can schedule and deliver.",
  },
  {
    number: "08",
    label: "Stage gates.",
    body: "Every live agreement has an owner, a next action, and a start date.",
  },
  {
    number: "09",
    label: "Management cadence.",
    body: "We review the pipeline, renewals, pull-through, and the number every week.",
  },
];

const schemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.keystonecommercialpartners.com/#organization",
      name: "Keystone Commercial Partners",
      url: "https://www.keystonecommercialpartners.com/",
      telephone: "+1-920-585-4179",
      email: "tom@keystonecommercialpartners.com",
      logo: "https://www.keystonecommercialpartners.com/keystone-logo-header.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Appleton",
        addressRegion: "WI",
        addressCountry: "US",
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.keystonecommercialpartners.com/#tom-randazzo",
      name: "Tom Randazzo",
      jobTitle: "Principal",
      worksFor: { "@id": "https://www.keystonecommercialpartners.com/#organization" },
      image: "https://www.keystonecommercialpartners.com/tom-randazzo.webp",
      sameAs: "https://www.linkedin.com/in/tom-randazzo-73b48947",
    },
    {
      "@type": "Service",
      "@id": "https://www.keystonecommercialpartners.com/#service",
      name: "Commercial mechanical service agreement programs",
      provider: { "@id": "https://www.keystonecommercialpartners.com/#organization" },
      areaServed: "Midwest United States",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Commercial and industrial mechanical contractors",
      },
    },
  ],
};

function SectionMarker({ number, title, light = false }: { number: string; title?: string; light?: boolean }) {
  return (
    <div className={`section-marker${light ? " section-marker-light" : ""}`}>
      <span className="section-number">{number}</span>
      <ThreeBarMark />
      {title ? <span>{title}</span> : null}
    </div>
  );
}

export default function Home() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <section className="hero" id="top">
        <div className="content-wide hero-inner">
          <SectionMarker number="01" />
          <h1>Service is the part of a mechanical contractor’s business that delivers ongoing, increasing value.</h1>
          <div className="hero-body">
            <p>Keystone provides service agreement programs for commercial and industrial mechanical contractors. These programs address scoping, pricing, service sales, renewals, and weekly procedures to ensure consistent progress. The programs integrate into your current operations and are managed by your existing team.</p>
            <p>Tom Randazzo brings twenty years of experience in commercial service sales and leadership at Carrier, Johnson Controls, and privately held mechanical contractors.</p>
          </div>
          <div className="hero-actions">
            <TrackedLink className="phone-button" href="tel:+19205854179" eventName="Phone-link click">Call Tom · 920-585-4179</TrackedLink>
            <a className="text-link" href="#build">What we build →</a>
          </div>
        </div>
      </section>

      <section className="field-note-section" aria-labelledby="field-note-title">
        <div className="content-wide">
          <article className="field-note-card">
            <div className="field-note-heading">
              <p>Field Note No. 001</p>
              <ThreeBarMark className="three-bar-mark-light" />
            </div>
            <h2 id="field-note-title">What an engagement looks like</h2>
            <dl className="fact-table">
              <div><dt>Clients at a time</dt><dd>Four to six</dd></div>
              <div><dt>The build</dt><dd>90 days inside your operation</dd></div>
              <div><dt>After that</dt><dd>Ongoing, for as long as it’s earning its keep</dd></div>
              <div><dt>Who does it</dt><dd>Your people, with Tom</dd></div>
              <div><dt>First step</dt><dd>A phone call</dd></div>
            </dl>
          </article>
          <p className="field-note-caption">Built into the operation you already own.</p>
        </div>
      </section>

      <section className="section section-observations" aria-labelledby="observations-title">
        <div className="content-wide editorial-grid">
          <header>
            <SectionMarker number="03" title="What We See Most Often" />
            <h2 id="observations-title">The backlog is scheduled through August, but January work is uncertain.</h2>
          </header>
          <div className="prose-stack">
            <p>This recurring cycle of short-term busyness and long-term uncertainty complicates planning, staffing, and financial stability. Unpredictable workloads force contractors into short-term decisions, making it difficult to invest in growth or maintain steady workloads.</p>
            <p>This pattern is common enough across contractors to warrant attention:</p>
            <ul className="sentence-list">
              <li>You have PM agreements, but no one can confirm which are profitable.</li>
              <li>No one is dedicated to full-time service sales. The service manager handles sales during downtime, and the estimator steps in when project work slows. As a result, service growth relies on availability rather than strategy.</li>
              <li>Repair opportunities depend on technicians identifying and documenting issues during service calls before moving to the next job.</li>
              <li>Renewals are often sent at last year’s price to avoid challenging repricing discussions.</li>
              <li>A rooftop unit may be replaced in a building you’ve serviced for six years, and you don’t learn about it until the bid invitation arrives.</li>
            </ul>
            <p>None of these issues are urgent, so they persist. Each remains a secondary priority and may go unaddressed for years.</p>
          </div>
        </div>
      </section>

      <section className="section section-case" id="case" aria-labelledby="case-title">
        <div className="content-wide">
          <header className="section-heading">
            <SectionMarker number="04" title="The Case for Service" />
            <h2 id="case-title">Every agreement you sign pays four times.</h2>
            <p>A project generates revenue once and ends. An agreement delivers recurring monthly revenue, scheduled team access, priority for service calls, and opportunities for equipment replacements. Pricing regularly reflects only the initial benefit, while the others are overlooked.</p>
          </header>
          <ol className="return-grid">
            {serviceReturns.map((item) => (
              <li key={item.number}>
                <span className="list-number">{item.number}</span>
                <div><h3>{item.label}</h3><p>{item.body}</p></div>
              </li>
            ))}
          </ol>
          <p className="section-closing">This cycle continues whether you actively manage it or not. Keystone helps you manage it intentionally, so more revenue is secured under agreement and less of next year starts at zero.</p>
        </div>
      </section>

      <section className="section section-build" id="build" aria-labelledby="build-title">
        <div className="content-wide">
          <header className="section-heading section-heading-narrow">
            <SectionMarker number="05" title="What We Build" />
            <h2 id="build-title">A service agreement results from nine key decisions, each influencing the next.</h2>
            <p>The survey informs tasking, tasking affects pricing, and scope determines weekly service requirements.</p>
          </header>
          <ol className="build-register">
            {buildDecisions.map((item) => (
              <li key={item.number}>
                <span className="list-number">{item.number}</span>
                <div><h3>{item.label}</h3><p>{item.body}</p></div>
              </li>
            ))}
          </ol>
          <p className="section-closing section-closing-narrow">Every contractor already makes these decisions. Keystone ensures they’re made consistently, keeping pricing stable and aligning service delivery with the agreement.</p>
        </div>
      </section>

      <section className="section section-how" id="how" aria-labelledby="how-title">
        <div className="content-wide editorial-grid">
          <header>
            <SectionMarker number="06" title="How We Work" />
            <h2 id="how-title">How We Work</h2>
          </header>
          <div className="prose-stack prose-long">
            <p>We assess your operation by reviewing your agreements, price book, recent proposals, and service P&amp;L. The assessment typically takes one to two weeks, depending on your business size and complexity. You receive a clear analysis of financial inefficiencies and actionable recommendations.</p>
            <p>We dedicate ninety days to the two or three initiatives with the greatest immediate impact. You retain all deliverables, including the price book, standardized agreement, prioritized building list, and weekly tracking process.</p>
            <p>We provide ongoing support to ensure lasting results. A new routine requires consistent oversight. Keystone manages your service sales effort as a VP would, including pipeline management, pricing discussions, ride-alongs, seller coaching, and weekly performance reviews. Alternatively, Keystone can manage your largest and most critical accounts, overseeing business reviews, renewal strategies, escalations, and identifying new project opportunities within your existing portfolio. This support is available before you need to hire a full-time VP.</p>
            <p>After the main engagement, ongoing advisory support is available as needed. This may include periodic performance check-ins, follow-up reviews of key metrics and agreements, or additional on-site visits to resolve new challenges. Advisory services can also include quarterly business reviews to assess progress, troubleshooting calls to resolve immediate issues, support with renewal pricing and strategy, assistance with onboarding new service staff, and ad hoc analysis of financial results or customer portfolio changes.</p>
          </div>
        </div>
      </section>

      <section className="section section-fit" id="fit" aria-labelledby="fit-title">
        <div className="content-wide editorial-grid">
          <header>
            <SectionMarker number="07" title="Who This Works For" />
            <h2 id="fit-title">Keystone works with four to six contractors at a time, concentrating on long-term engagements instead of short-term projects.</h2>
          </header>
          <div className="prose-stack">
            <p>This limit is intentional, and Keystone declines more engagements than it accepts. This approach is most effective when:</p>
            <ul className="sentence-list">
              <li>You run a commercial or industrial mechanical contractor with real service operations.</li>
              <li>You want to grow recurring service revenue and have the authority to make that decision.</li>
              <li>You’re willing to share your agreements, price book, and P&amp;L. You can’t do this process from the outside.</li>
              <li>Your team will implement. The program is built within your operation, so if nothing changes on your side, nothing changes.</li>
              <li>When appropriate, Keystone works with only one contractor per market. If your competitor is already a client, we’ll tell you during the initial call.</li>
            </ul>
            <p>This approach isn’t suitable if you only want a report or benchmark to validate a predetermined decision, prefer an outsourced sales department over building internal capability, or don’t intend to grow service as a core business.</p>
          </div>
        </div>
      </section>

      <section className="section section-about" id="about" aria-labelledby="about-title">
        <div className="content-wide about-grid">
          <header className="about-heading">
            <SectionMarker number="08" title="Where This Comes From" />
            <h2 id="about-title">Twenty years in commercial service.</h2>
          </header>
          <picture className="headshot">
            <source srcSet="/tom-randazzo.webp" type="image/webp" />
            <img src="/tom-randazzo.jpg" alt="Tom Randazzo, principal of Keystone Commercial Partners" width="900" height="900" loading="lazy" />
          </picture>
          <div className="about-copy prose-stack">
            <p>I’m Tom Randazzo. I’ve spent twenty years selling commercial service and leading service teams at Carrier, Johnson Controls, and privately held mechanical contractors. My experience includes building agreement portfolios, repricing underperforming agreements, managing service sales teams, and handling challenging financial results.</p>
            <p>We implement the entire program within your organization using your existing team. We’ll work together to determine who leads renewal reviews, who handles agreement pricing, and who conducts site visits.</p>
            <p>By design, when my involvement concludes, your team will continue the routine independently and without interruption.</p>
          </div>
          <div className="client-account-slot" data-slot="future-client-account" hidden />
          <dl className="credential-table">
            <div><dt>20 years</dt><dd>Commercial service</dd></div>
            <div><dt>Carrier and JCI</dt><dd>Operating experience</dd></div>
            <div><dt>One person</dt><dd>Tom, on every call</dd></div>
            <div><dt>References</dt><dd>Clients and former colleagues, on request</dd></div>
          </dl>
          <p className="value-line">Operating value today. Enterprise value at exit.</p>
        </div>
      </section>

      <section className="section section-contact" id="contact" aria-labelledby="contact-title">
        <div className="content-wide contact-inner">
          <SectionMarker number="09" title="Contact" light />
          <h2 id="contact-title">Thirty minutes on the phone.</h2>
          <div className="contact-copy prose-stack">
            <p>There’s nothing to prepare and no numbers to gather. Tell me how service operates today, who sells it, and what happens at renewal. I’ll share what I’d review first and whether it’s worth proceeding. If I’m not the right person for your needs, I’ll let you know.</p>
            <p>If it’s worth continuing, the next step is a day spent inside your operation.</p>
          </div>
          <div className="contact-links">
            <TrackedLink href="tel:+19205854179" eventName="Phone-link click">920-585-4179</TrackedLink>
            <a href="mailto:tom@keystonecommercialpartners.com">tom@keystonecommercialpartners.com</a>
          </div>
          <div className="contact-form-wrap">
            <p>Alternatively, provide your contact info, and I’ll return your call promptly.</p>
            <InquiryForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
