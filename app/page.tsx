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
              Keystone helps $3M–$15M commercial mechanical contractors strengthen service agreements,
              capture more of the repair and replacement work their technicians uncover, and build recurring
              revenue that makes the company more valuable.
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
              <span>Operating experience inside</span>
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
            title="Too much opportunity disappears between the PM visit and the customer decision."
            copy="The work is already passing through service. Most shops just cannot see every handoff clearly enough to manage it."
          />
          <div className="leak-list">
            <article>
              <span>01</span>
              <p>Agreement revenue grows, but nobody can confidently state the margin by account.</p>
            </article>
            <article>
              <span>02</span>
              <p>Technicians find work that never makes it into a timely, customer-ready quote.</p>
            </article>
            <article>
              <span>03</span>
              <p>Repair quotes sit without clear follow-up ownership or reliable visibility.</p>
            </article>
            <article>
              <span>04</span>
              <p>Renewals happen without a deliberate price review, account plan or expansion decision.</p>
            </article>
            <article>
              <span>05</span>
              <p>The owner still carries too much of the service-selling and pricing logic.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-steel">
        <div className="shell">
          <SectionHeading
            eyebrow="The service economics"
            title="The maintenance agreement is the beginning of the economics."
            copy="Agreements create access and base load. The commercial system determines how much of the value uncovered during that access becomes revenue, margin and retention."
            light
          />
          <ServiceFlow />
          <p className="flow-note">
            Most shops do not need another lead source before they fix what happens to the opportunities already passing through service.
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
            <h2>Measure the service program before changing it.</h2>
            <p>
              The Service Program Assessment is a three-week review of how your service business performs across eight weighted dimensions.
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
            title="Eight parts of the service business. One operating picture."
            copy="The weighting puts most of the emphasis where the economics are created. The maintenance base and the work converted from it account for 38% of the score."
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
            <h2>The useful parts of the OEM service playbook, sized for an independent shop.</h2>
            <p className="large-copy">
              I have worked inside the kinds of service organizations independent contractors compete against. Keystone applies the disciplines that transfer and leaves behind the layers that do not.
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
                <li>Defined service-selling roles</li>
                <li>Connected-service strategy</li>
              </ul>
            </div>
            <div className="transfer-column">
              <p>What your shop does not need</p>
              <ul>
                <li>Enterprise bureaucracy</li>
                <li>Layers of management</li>
                <li>Bloated technology stacks</li>
                <li>National-account complexity</li>
                <li>Reporting for its own sake</li>
                <li>Programs the field cannot support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell">
          <SectionHeading
            eyebrow="What comes next"
            title="Know what to fix first, what it should be worth and whether you want help building it."
          />
          <div className="stage-grid">
            <article>
              <span>01</span>
              <p className="stage-label">Assess</p>
              <h3>See the current program clearly.</h3>
              <p>Score the operation, identify the gaps and quantify the opportunity.</p>
            </article>
            <article>
              <span>02</span>
              <p className="stage-label">Build</p>
              <h3>Put the commercial mechanics in place.</h3>
              <p>Develop agreement tiers, pricing tools, technician workflows, renewal processes and scorecards.</p>
            </article>
            <article>
              <span>03</span>
              <p className="stage-label">Run</p>
              <h3>Keep the system working.</h3>
              <p>Establish the service sales cadence, ownership and leadership needed to sustain it.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell fit-grid">
          <div>
            <p className="eyebrow">Who this is for</p>
            <h2>Built for a specific kind of contractor.</h2>
            <p className="large-copy dark-copy">
              The narrower the fit, the more useful the work. Keystone is designed around independent commercial mechanical contractors whose service business has outgrown informal management.
            </p>
          </div>
          <div className="fit-columns">
            <article className="fit-card fit-card-positive">
              <p>Likely fit</p>
              <ul>
                <li>Primarily commercial or industrial HVAC</li>
                <li>Roughly $3M–$15M in revenue</li>
                <li>Has an agreement base or is building one</li>
                <li>Owner remains central to service growth</li>
                <li>Wants stronger recurring revenue and pull-through</li>
              </ul>
            </article>
            <article className="fit-card">
              <p>Probably not a fit</p>
              <ul>
                <li>Primarily residential home service</li>
                <li>Looking only for leads or appointment setting</li>
                <li>Wants to outsource all responsibility for selling</li>
                <li>Will not provide operating or financial data</li>
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
            <h2>I have carried the number and run the operation.</h2>
            <p className="large-copy dark-copy">
              I have spent twenty years selling, leading field teams and owning commercial results inside Johnson Controls, Carrier, Bassett Mechanical and the Linc Network.
            </p>
            <p>
              Keystone translates what the larger service organizations do well into a system an independent contractor can actually use.
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
