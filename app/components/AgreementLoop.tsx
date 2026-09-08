const stages = [
  {
    number: "01",
    title: "Revenue already sold",
    text: "It is on the calendar before the year starts. It fills technician hours in a slow quarter and renews without a bid.",
  },
  {
    number: "02",
    title: "Your people in the building",
    text: "Four visits a year, or twelve. Your technicians learn which unit runs hot and which one the customer keeps patching.",
  },
  {
    number: "03",
    title: "The first call",
    text: "When something fails, a contracted customer calls you first. Often your technician wrote it up two visits ago.",
  },
  {
    number: "04",
    title: "The next project",
    text: "You know the equipment, the building, and when the money reaches the budget. Replacements and retrofits come to you.",
  },
  {
    number: "05",
    title: "And it starts over",
    text: "The unit you just installed goes under agreement at the new price. The base gets bigger every time you win one.",
  },
];

export function AgreementLoop() {
  return (
    <div
      className="agreement-loop"
      role="img"
      aria-label="A service agreement creates recurring revenue, puts technicians in the building, makes the contractor the first call, leads to the next project, and places the new unit back under agreement."
    >
      <ol>
        {stages.map((stage, index) => (
          <li key={stage.number}>
            <span className="loop-number">{stage.number}</span>
            <h3>{stage.title}</h3>
            <p>{stage.text}</p>
            {index < stages.length - 1 ? <span className="loop-next" aria-hidden="true">→</span> : null}
          </li>
        ))}
      </ol>
      <div className="loop-return" aria-hidden="true">
        <span>05</span>
        <div><i>←</i><b>New equipment returns to the agreement base</b></div>
        <span>01</span>
      </div>
    </div>
  );
}
