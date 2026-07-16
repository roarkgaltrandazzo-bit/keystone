import { exampleScores, serviceDimensions } from "../data";

type ScorecardProps = {
  compact?: boolean;
  eyebrow?: string;
};

export function Scorecard({ compact = false, eyebrow = "Example assessment output" }: ScorecardProps) {
  const score = 68;

  return (
    <div className={`scorecard ${compact ? "scorecard-compact" : ""}`}>
      <div className="scorecard-topline">
        <span>{eyebrow}</span>
        <span className="instrument-status"><i /> Diagnostic</span>
      </div>
      <div className="scorecard-summary">
        <div className="score-gauge" style={{ "--score": `${score * 3.6}deg` } as React.CSSProperties}>
          <div>
            <strong>{score}</strong>
            <span>/100</span>
          </div>
        </div>
        <div>
          <p className="score-label">Service Program Score</p>
          <h3>Working base. Missed pull-through.</h3>
          <p>The access is there. Handoffs, pricing, and follow-up are leaving margin behind.</p>
        </div>
      </div>
      <div className="score-bars">
        {serviceDimensions.map((dimension) => (
          <div className="score-row" key={dimension.key}>
            <div className="score-row-label">
              <span>{dimension.shortName}</span>
              <b>{dimension.weight}%</b>
            </div>
            <div className="score-track" aria-hidden="true">
              <span style={{ width: `${exampleScores[dimension.key]}%` }} />
            </div>
            <span className="score-number">{exampleScores[dimension.key]}</span>
          </div>
        ))}
      </div>
      <p className="scorecard-note">Illustrative only. Your assessment uses operating evidence.</p>
    </div>
  );
}
