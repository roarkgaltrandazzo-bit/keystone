const nodes = [
  "You sign the agreement",
  "Your techs are in the building, on a schedule",
  "They see it failing before it fails",
  "You quote the repair, and you're the first call",
  "The unit dies, and you replace it",
];

export function AgreementLoop() {
  return (
    <div className="service-cycle">
      <svg
        className="service-cycle-desktop"
        viewBox="0 0 1000 600"
        role="img"
        aria-labelledby="service-cycle-title service-cycle-description"
      >
        <title id="service-cycle-title">The service agreement cycle</title>
        <desc id="service-cycle-description">
          Five stages arranged clockwise on a circle. You sign the agreement, your technicians are in the building on a schedule, they see equipment failing before it fails, you quote the repair and get the first call, and you replace the unit. The new unit then goes under agreement and the cycle repeats.
        </desc>

        <defs>
          <marker id="service-cycle-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0,1 L9,5 L0,9 Z" />
          </marker>
        </defs>

        <circle className="service-cycle-ring" cx="500" cy="340" r="205" />
        <circle className="service-cycle-center" cx="500" cy="340" r="130" />

        <g className="service-cycle-arrows">
          <path d="M 535.60 138.11 A 205 205 0 0 1 681.00 243.76" />
          <path d="M 703.01 311.47 A 205 205 0 0 1 647.47 482.41" />
          <path d="M 589.87 524.25 A 205 205 0 0 1 410.13 524.25" />
          <path d="M 352.53 482.41 A 205 205 0 0 1 296.99 311.47" />
          <path d="M 319.00 243.76 A 205 205 0 0 1 464.40 138.11" />
        </g>

        <g>
          <circle className="service-cycle-node" cx="500" cy="135" r="26" />
          <text className="service-cycle-number" x="500" y="135" textAnchor="middle" dominantBaseline="central">1</text>
          <text className="service-cycle-label" x="500" y="92" textAnchor="middle">You sign the agreement</text>
        </g>

        <g>
          <circle className="service-cycle-node" cx="695" cy="276.7" r="26" />
          <text className="service-cycle-number" x="695" y="276.7" textAnchor="middle" dominantBaseline="central">2</text>
          <text className="service-cycle-label" x="737" y="271" textAnchor="start">Your techs are in the</text>
          <text className="service-cycle-label" x="737" y="293" textAnchor="start">building, on a schedule</text>
        </g>

        <g>
          <circle className="service-cycle-node" cx="620.5" cy="505.9" r="26" />
          <text className="service-cycle-number" x="620.5" y="505.9" textAnchor="middle" dominantBaseline="central">3</text>
          <text className="service-cycle-label" x="662.5" y="500" textAnchor="start">They see it failing</text>
          <text className="service-cycle-label" x="662.5" y="522" textAnchor="start">before it fails</text>
        </g>

        <g>
          <circle className="service-cycle-node" cx="379.5" cy="505.9" r="26" />
          <text className="service-cycle-number" x="379.5" y="505.9" textAnchor="middle" dominantBaseline="central">4</text>
          <text className="service-cycle-label" x="337.5" y="500" textAnchor="end">You quote the repair,</text>
          <text className="service-cycle-label" x="337.5" y="522" textAnchor="end">and you&apos;re the first call</text>
        </g>

        <g>
          <circle className="service-cycle-node" cx="305" cy="276.7" r="26" />
          <text className="service-cycle-number" x="305" y="276.7" textAnchor="middle" dominantBaseline="central">5</text>
          <text className="service-cycle-label" x="263" y="271" textAnchor="end">The unit dies,</text>
          <text className="service-cycle-label" x="263" y="293" textAnchor="end">and you replace it</text>
        </g>

        <text className="service-cycle-center-title" x="500" y="316" textAnchor="middle">Then the new unit goes</text>
        <text className="service-cycle-center-title" x="500" y="344" textAnchor="middle">under agreement</text>
        <text className="service-cycle-center-subtitle" x="500" y="378" textAnchor="middle">And the cycle starts again</text>
      </svg>

      <ol className="service-cycle-mobile" aria-label="The service agreement cycle">
        {nodes.map((node) => <li key={node}>{node}</li>)}
        <li>
          <strong>Then the new unit goes under agreement</strong>
          <span>And the cycle starts again</span>
        </li>
      </ol>
    </div>
  );
}
