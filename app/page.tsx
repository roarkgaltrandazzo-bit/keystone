import { PageShell } from "./components/SiteChrome";
import { Scorecard } from "./components/Scorecard";
import { DimensionGrid, FinalCta, SectionHeading, ServiceFlow } from "./components/Shared";

/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <PageShell>
      <section className="home-hero">
        <div className="hero-grid-overlay" aria-hidden="true" />
        <div className="shell home-hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-orange">Service program advisory for commercial mechanical contractors</p>
            <h1>Your maintenance base should be doing more for the business.</h1>
            <p className="hero-subhead">
              Keystone helps $3M–$15M commercial mechanical contractors turn their maintenance base into stronger
              agreements, more of the repair work their techs already find, and recurring revenue that raises what
              the company is worth.
            </p>
            <div className="button-row">
              <a className="button button-accent" href="/book">
                Book a 30-Minute Fit Call
              </a>
              <a className="button button-outline-light" href="/self-score">
                Self-Score Your Shop
              </a>
            </div>
            <div className="hero-proof">
              <span>Trained inside the service organizations you compete against</span>
              <div>
                <strong>Bassett Mechanical</strong>
                <i />
                <strong>Linc Network</strong>
                <i />
                <strong>Carrier</strong>
                <i />
                <strong>Johnson Controls</strong>
              </div>
            </div>
          </div>
          <div className="hero-instrument">
            <Scorecard compact />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell split split-wide">
          <SectionHeading
            eyebrow="Where value leaks"
            title="Most of the money you're missing is already inside your service department."
            copy="The work is coming through. Techs are on-site, finding problems and building relationships. The leaks happen in the handoffs nobody owns, and those are hard to see until you go looking."
          />
          <div className="leak-list">
            <article>
              <span>01</span>
              <p>Agreement revenue keeps growing, but nobody can tell you the margin on any single account.</p>
            </article>
            <article>
              <span>02</span>
              <p>Techs find real repair work that never turns into a quote the customer actually sees.</p>
            </article>
            <article>
              <span>03</span>
              <p>Quotes go out and then sit: no owner, no follow-up, no visibility.</p>
            </article>
            <article>
              <span>04</span>
              <p>Renewals go through at last year&apos;s price, with no account review and no expansion conversation.</p>
            </article>
            <article>
              <span>05</span>
              <p>You&apos;re still the person who prices the hard jobs and closes the big ones.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-steel">
        <div className="shell">
          <SectionHeading
            eyebrow="The service economics"
            title="The agreement gets you in the door. The money is in what happens next."
            copy="A maintenance agreement buys you access and a base of recurring work. What you do with that access, including the repairs you catch, the prices you hold and the renewals you win, decides how much becomes profit."
            light
          />
          <ServiceFlow />
          <p className="flow-note">
            Before you go buy more leads, fix what happens to the opportunities you already have.
          </p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell assessment-feature">
          <div className="assessment-visual">
            <Scorecard eyebrow="Service Program Assessment" />
          </div>
          <div className="assessment-copy">
            <p className="eyebrow">The paid entry engagement</p>
            <h2>Measure the service program before you start changing it.</h2>
            <p>
              The Service Program Assessment is a three-week review of how your service business actually performs, scored across eight weighted areas.
            </p>
            <div className="deliverable-list">
              <div><span>01</span><strong>Service Program Scorecard</strong></div>
              <div><span>02</span><strong>Owner Summary</strong></div>
              <div><span>03</span><strong>Three-Scenario Impact Model</strong></div>
              <div><span>04</span><strong>Prioritized 90-Day Action Plan</strong></div>
              <div><span>05</span><strong>Executive Readout</strong></div>
            </div>
            <a className="text-link" href="/assessment">
              Review the Service Program Assessment <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section section-white dimensions-section">
        <div className="shell">
          <SectionHeading
            eyebrow="What gets scored"
            title="Eight parts of the service business, weighted toward where the money is made."
            copy="The heaviest weight sits where profit is created. Your recurring base and the repair work you convert from it make up 38% of the score."
          />
          <DimensionGrid />
          <div className="centered-action">
            <a className="button button-dark" href="/assessment#dimensions">
              See What the Assessment Reviews
            </a>
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="shell playbook-grid">
          <div>
            <p className="eyebrow eyebrow-orange">The operating background</p>
            <h2>The parts of the OEM playbook that work, sized for an independent shop.</h2>
            <p className="large-copy">
              You&apos;re up against companies that run tiered agreements, renewal calendars and pull-through tracking as standard practice. Keystone brings those same disciplines into your shop and leaves behind the enterprise weight that makes them useless at your size.
            </p>
          </div>
          <div className="transfer-table">
            <div className="transfer-column transfer-positive">
              <p>What transfers</p>
              <ul>
                <li>Tiered service agreements</li>
                <li>Renewal calendars</li>
                <li>Pull-through tracking</li>
                <li>Pricing and margin controls</li>
                <li>Clear service-selling roles</li>
                <li>Connected-service strategy</li>
              </ul>
            </div>
            <div className="transfer-column">
              <p>What your shop does not need</p>
              <ul>
                <li>Enterprise bureaucracy</li>
                <li>Layers of management</li>
                <li>Bloated tech stacks</li>
                <li>National-account complexity</li>
                <li>Reports nobody reads</li>
                <li>Programs the field cannot actually run</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell">
          <SectionHeading
            eyebrow="What comes next"
            title="Know what to fix first, what it's worth and whether you want help building it."
          />
          <div className="stage-grid">
            <article>
              <span>01</span>
              <p className="stage-label">Assess</p>
              <h3>See the program clearly.</h3>
              <p>Score the operation, find the gaps and put a number on the opportunity.</p>
            </article>
            <article>
              <span>02</span>
              <p className="stage-label">Build</p>
              <h3>Put the commercial mechanics in place.</h3>
              <p>Agreement tiers, pricing tools, tech workflows, renewal process and scorecards.</p>
            </article>
            <article>
              <span>03</span>
              <p className="stage-label">Run</p>
              <h3>Keep the system working.</h3>
              <p>The cadence, ownership and leadership that keep the system running after I&apos;m gone.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell fit-grid">
          <div>
            <p className="eyebrow">Who this is for</p>
            <h2>Built for one kind of contractor.</h2>
            <p className="large-copy dark-copy">
              The tighter the fit, the more useful the work. Keystone is built for independent commercial mechanical contractors whose service business has outgrown the way it&apos;s currently run.
            </p>
          </div>
          <div className="fit-columns">
            <article className="fit-card fit-card-positive">
              <p>Likely fit</p>
              <ul>
                <li>Mostly commercial or industrial HVAC</li>
                <li>Roughly $3M–$15M in revenue</li>
                <li>Has an agreement base, or is serious about building one</li>
                <li>Owner is still central to service growth</li>
                <li>Wants stronger recurring revenue and pull-through</li>
              </ul>
            </article>
            <article className="fit-card">
              <p>Probably not a fit</p>
              <ul>
                <li>Mostly residential home service</li>
                <li>Just wants leads or appointment setting</li>
                <li>Wants to hand off all responsibility for selling</li>
                <li>Won&apos;t share operating or financial data</li>
                <li>Needs general management consulting</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-paper about-teaser-section">
        <div className="shell about-teaser">
          <div className="portrait-frame">
            <img src="/tom-randazzo.webp" alt="Tom Randazzo, founder of Keystone Commercial Partners" />
            <div className="portrait-caption">
              <strong>Tom Randazzo</strong>
              <span>Founder, Keystone Commercial Partners</span>
            </div>
          </div>
          <div>
            <p className="eyebrow">Built by an operator</p>
            <h2>I&apos;ve carried the number and run the operation.</h2>
            <p className="large-copy dark-copy">
              Twenty years selling, leading field teams and owning P&amp;L results in commercial mechanical service. Keystone takes what the big service organizations do well and turns it into a system a shop your size can actually run.
            </p>
            <a className="text-link" href="/about">
              Read Tom&apos;s Background <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
