import { PageShell } from "./components/SiteChrome";
import { Scorecard } from "./components/Scorecard";
import { DimensionGrid, FinalCta, SectionHeading, ServiceFlow } from "./components/Shared";

/* eslint-disable @next/next/no-img-element */

const leakSignals = [
  {
    value: "1,000",
    label: "handoffs a year",
    copy: "Ten techs finding two items a week creates 1,000 chances to win or lose the work.",
    formula: "10 techs × 2 findings × 50 weeks",
  },
  {
    value: "90+",
    label: "days before renewal",
    copy: "That’s enough time to review performance, reset price, and talk about what the account needs next.",
    formula: "Not another last-minute invoice",
  },
  {
    value: "1",
    label: "owner bottleneck",
    copy: "If every serious quote still needs you, the service business can’t grow past your calendar.",
    formula: "The handoff has to work without you",
  },
];

export default function Home() {
  return (
    <PageShell>
      <section className="home-hero home-hero-v2">
        <div className="hero-photo" aria-hidden="true">
          <img src="/mechanical-room-hero.webp" alt="" />
        </div>
        <div className="hero-grid-overlay" aria-hidden="true" />
        <div className="shell home-hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-orange">Service program advisory for commercial mechanical contractors</p>
            <h1>The work’s already there. Your service program has to capture it.</h1>
            <p className="hero-subhead">
              Keystone helps $3M–$15M commercial HVAC contractors turn maintenance agreements into more repair
              pull-through, steadier base load, and a company that’s worth more.
            </p>
            <div className="button-row">
              <a className="button button-accent" href="/book">
                Book a 30-minute fit call
              </a>
              <a className="button button-outline-light" href="/self-score">
                Self-score your shop
              </a>
            </div>
            <div className="career-proof">
              <span>Tom’s operating background</span>
              <strong>Bassett Mechanical</strong>
              <i />
              <strong>Linc Network</strong>
              <i />
              <strong>Carrier</strong>
              <i />
              <strong>Johnson Controls</strong>
              <small>Career history, not client endorsements.</small>
            </div>
          </div>
          <div className="hero-instrument">
            <Scorecard compact />
          </div>
        </div>
        <div className="shell hero-metric-strip" aria-label="Assessment facts">
          <div><strong>38%</strong><span>of the score sits on recurring base and pull-through</span></div>
          <div><strong>8</strong><span>weighted service-program dimensions</span></div>
          <div><strong>3 weeks</strong><span>from intake to owner readout</span></div>
        </div>
      </section>

      <section className="section section-white value-leak-section">
        <div className="shell">
          <SectionHeading
            eyebrow="The value leak"
            title="You don’t need more demand. You need fewer dropped handoffs."
            copy="Your techs already earn the customer’s trust. The loss happens after the PM, when a finding has no owner, a quote has no next step, or a renewal gets treated like paperwork."
          />
          <div className="signal-grid">
            {leakSignals.map((signal, index) => (
              <article className="signal-card" key={signal.label}>
                <span className="signal-index">0{index + 1}</span>
                <div className="signal-value"><strong>{signal.value}</strong><span>{signal.label}</span></div>
                <p>{signal.copy}</p>
                <small>{signal.formula}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-steel service-economics-section">
        <div className="shell economics-grid">
          <div className="media-panel media-panel-bas">
            <img src="/bas-controls.webp" alt="Building automation controls beside commercial mechanical equipment" />
            <div className="media-tag"><span>Signal</span><strong>Finding captured</strong></div>
            <div className="media-caption">Controls data only matters when someone owns the next move.</div>
          </div>
          <div>
            <SectionHeading
              eyebrow="The service math"
              title="The agreement isn’t the product. It’s the access."
              copy="A PM visit puts your tech beside the equipment and inside the account. The service program decides whether that access becomes a tracked finding, a clean quote, and a stronger renewal."
              light
            />
            <ServiceFlow />
            <p className="flow-note">
              If the finding doesn’t become an owned quote, it isn’t an opportunity. It’s a note in the work order.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-paper assessment-section-v2">
        <div className="shell assessment-feature">
          <div className="assessment-visual">
            <Scorecard eyebrow="Illustrative assessment output" />
          </div>
          <div className="assessment-copy">
            <p className="eyebrow">The paid diagnostic</p>
            <h2>Know the score. Price the gaps. Fix the first 90 days.</h2>
            <p>
              The Service Program Assessment is a three-week review of the operating evidence behind your agreements,
              pull-through, pricing, renewals, utilization, and service sales.
            </p>
            <div className="deliverable-list deliverable-list-tight">
              <div><span>01</span><strong>Eight-dimension scorecard</strong><small>See where the program holds and where it leaks.</small></div>
              <div><span>02</span><strong>Three-scenario impact model</strong><small>Put a range on revenue, EBITDA, and value.</small></div>
              <div><span>03</span><strong>90-day action plan</strong><small>Know what to fix first and who owns it.</small></div>
            </div>
            <a className="text-link" href="/assessment">
              Review the assessment <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section section-white dimensions-section">
        <div className="shell">
          <div className="dimensions-intro">
            <SectionHeading
              eyebrow="What gets scored"
              title="Two things drive 38% of the score."
              copy="The maintenance base and what you convert off it are most of the game. Six other disciplines decide whether that value compounds or leaks out."
            />
            <div className="weight-lockup" aria-label="Recurring base and pull-through combined weight">
              <span><b>20%</b> recurring base</span>
              <i>+</i>
              <span><b>18%</b> pull-through</span>
              <i>=</i>
              <strong>38%</strong>
            </div>
          </div>
          <DimensionGrid />
          <div className="centered-action">
            <a className="button button-dark" href="/assessment#dimensions">
              See all eight dimensions
            </a>
          </div>
        </div>
      </section>

      <section className="section section-navy playbook-section-v2">
        <div className="shell playbook-media-grid">
          <div className="playbook-copy">
            <p className="eyebrow eyebrow-orange">The OEM playbook, resized</p>
            <h2>Use the discipline. Skip the weight.</h2>
            <p className="large-copy">
              Tier the offer. Price from cost. Track every finding. Start renewals 90+ days out. Those practices work at
              JCI and Carrier, and they can work in a 15-tech shop without the layers, systems, or meetings.
            </p>
            <div className="playbook-rules">
              <div><span>01</span><strong>Tier the agreement around risk and outcomes.</strong></div>
              <div><span>02</span><strong>Give every field finding an owner and due date.</strong></div>
              <div><span>03</span><strong>Review margin account by account, not in aggregate.</strong></div>
              <div><span>04</span><strong>Run renewal as an account decision, not an invoice.</strong></div>
            </div>
          </div>
          <div className="media-panel media-panel-rooftop">
            <img src="/commercial-rooftop.webp" alt="Large commercial rooftop HVAC installation at first light" />
            <div className="media-tag"><span>Transfer test</span><strong>Can a 15-tech shop run it Monday?</strong></div>
          </div>
        </div>
      </section>

      <section className="section section-paper about-teaser-section">
        <div className="shell about-teaser about-teaser-v2">
          <div className="portrait-frame">
            <img src="/tom-randazzo.webp" alt="Tom Randazzo, founder of Keystone Commercial Partners" />
            <div className="portrait-caption">
              <strong>Tom Randazzo</strong>
              <span>Founder, Keystone Commercial Partners</span>
            </div>
          </div>
          <div>
            <p className="eyebrow">Operator, not career consultant</p>
            <h2>I’ve carried the number and owned the P&amp;L.</h2>
            <p className="large-copy dark-copy">
              Twenty years across Bassett Mechanical, Linc, Carrier, and Johnson Controls. I’ve sold the work, led the
              teams, made the pricing calls, and answered for the result.
            </p>
            <div className="career-rail" aria-label="Tom Randazzo career history">
              <span>Bassett / Linc</span><i />
              <span>Carrier</span><i />
              <span>Johnson Controls</span><i />
              <span>Keystone</span>
            </div>
            <a className="text-link" href="/about">
              Read Tom’s background <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <FinalCta
        title="Let’s find the first leak worth fixing."
        copy="Bring the service question you can’t answer cleanly. We’ll know in 30 minutes whether the assessment fits."
      />
    </PageShell>
  );
}
