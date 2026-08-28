const nodes = [
  "You sign the agreement",
  "Your techs are in the building, on a schedule",
  "They see it failing before it fails",
  "You quote the repair. You're the first call.",
  "The unit dies. You replace it.",
];

function SvgNode({ x, y, number, children }: { x: number; y: number; number: number; children: string }) {
  return (
    <g className="loop-node">
      <rect x={x} y={y} width="330" height="96" />
      <foreignObject x={x + 20} y={y + 14} width="290" height="68">
        <div className="loop-node-copy" xmlns="http://www.w3.org/1999/xhtml">
          <span>{number}</span>
          <strong>{children}</strong>
        </div>
      </foreignObject>
    </g>
  );
}

export function AgreementLoop() {
  return (
    <div className="agreement-loop">
      <svg
        className="agreement-loop-desktop"
        viewBox="0 0 1120 720"
        role="img"
        aria-label="A cycle in which a contractor signs a service agreement, schedules technicians in the building, sees equipment problems early, quotes the repair first, replaces the unit when it dies, and puts the new unit back under agreement."
      >
        <defs>
          <marker id="loop-arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L12,6 L0,12 z" />
          </marker>
        </defs>
        <g className="loop-arrows" aria-hidden="true">
          <path d="M725 84 C812 90 864 121 887 166" />
          <path d="M955 264 C1035 334 995 430 905 482" />
          <path d="M735 542 C645 648 500 652 405 558" />
          <path d="M220 482 C118 420 105 326 166 264" />
          <path d="M365 190 C382 146 412 122 459 117" />
        </g>
        <SvgNode x={395} y={28} number={1}>{nodes[0]}</SvgNode>
        <SvgNode x={760} y={170} number={2}>{nodes[1]}</SvgNode>
        <SvgNode x={710} y={480} number={3}>{nodes[2]}</SvgNode>
        <SvgNode x={75} y={480} number={4}>{nodes[3]}</SvgNode>
        <SvgNode x={30} y={170} number={5}>{nodes[4]}</SvgNode>
        <g className="loop-center">
          <rect x="370" y="268" width="380" height="188" />
          <foreignObject x="397" y="294" width="326" height="136">
            <div className="loop-center-copy" xmlns="http://www.w3.org/1999/xhtml">
              <strong>Then the new unit goes under agreement</strong>
              <span>and it starts again</span>
            </div>
          </foreignObject>
        </g>
      </svg>
      <ol className="agreement-loop-mobile" aria-label="The agreement cycle">
        {nodes.map((node) => <li key={node}>{node}</li>)}
        <li><strong>Then the new unit goes under agreement</strong><span>and it starts again</span></li>
      </ol>
    </div>
  );
}
