import { serviceDimensions } from "../data";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? "section-heading-light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function DimensionGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className={`dimension-grid ${detailed ? "dimension-grid-detailed" : ""}`}>
      {serviceDimensions.map((dimension, index) => (
        <article className="dimension-card" key={dimension.key}>
          <div className="dimension-card-top">
            <span className="dimension-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="dimension-weight">{dimension.weight}%</span>
          </div>
          <h3>{dimension.name}</h3>
          <p className="dimension-question">{dimension.question}</p>
          {detailed ? <p className="dimension-description">{dimension.description}</p> : null}
        </article>
      ))}
    </div>
  );
}

export function ServiceFlow() {
  const steps = [
    ["01", "Agreement", "Recurring access"],
    ["02", "PM visit", "Tech sees the risk"],
    ["03", "Finding", "Owner and due date"],
    ["04", "Quote", "Customer decides"],
    ["05", "Renewal", "Account stays and grows"],
  ];

  return (
    <div className="service-flow" aria-label="Service program value flow">
      {steps.map(([number, title, copy], index) => (
        <div className="flow-wrap" key={number}>
          <div className="flow-step">
            <span>{number}</span>
            <strong>{title}</strong>
            <small>{copy}</small>
          </div>
          {index < steps.length - 1 ? <div className="flow-connector" aria-hidden="true">→</div> : null}
        </div>
      ))}
    </div>
  );
}

export function FinalCta({
  title = "Find the first leak worth fixing.",
  copy = "One call is enough to know whether the assessment is worth your time and money.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="final-cta">
      <div className="shell final-cta-inner">
        <div>
          <p className="eyebrow">30-minute fit call</p>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <div className="button-row">
          <a className="button button-accent" href="/book">
            Book a 30-minute fit call
          </a>
          <a className="button button-outline-light" href="/self-score">
            Self-score your shop
          </a>
        </div>
      </div>
    </section>
  );
}
