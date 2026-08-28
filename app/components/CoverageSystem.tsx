const phases = [
  {
    number: "01",
    title: "What to sell, who to sell to",
    note: "Price the agreement from real labor and equipment data, define what it covers, and start with the buildings you already know.",
    items: [
      {
        number: "01",
        title: "Agreement pricing",
        text: "Agreement pricing starts with task level labor hours by equipment type, a burdened rate that carries the truck, the technician, and the drive time, and a target margin set before the proposal goes out. Two estimators pricing the same rooftop unit land within a few points of each other.",
      },
      {
        number: "02",
        title: "Scope and agreement structure",
        text: "The agreement defines the task list, the PM frequencies, what's included on a callback, what falls to time and material, and the response time you're committing to after hours. Your service manager can read it at midnight and know exactly what you owe the customer.",
      },
      {
        number: "03",
        title: "Targeting and account selection",
        text: "The strongest agreement prospects sit in your own installed base, in the buildings you already service on time and material, and in accounts running aging equipment or a new facility manager. The target list gets built from that history and gets reviewed every quarter.",
      },
    ],
  },
  {
    number: "02",
    title: "Selling and operating",
    note: "Run agreement sales through defined stages, then convert what your technicians find in the field into quoted repairs.",
    items: [
      {
        number: "04",
        title: "Service sales process",
        text: "Agreement sales move on a longer clock than construction and run through their own stages, from building survey to proposal to start date. A weekly review of stage, owner, and next action lets a manager step into a stalled proposal while it's still live.",
      },
      {
        number: "05",
        title: "Technician findings",
        text: "Your technicians stand in front of failing equipment all year, and a finding becomes revenue when it carries photos, a clear description of the condition, and a recommendation the customer can act on. One person picks those up daily and turns them into quotes.",
      },
      {
        number: "06",
        title: "Repair pull-through",
        text: "Every finding becomes a priced quote with a due date and an owner, and the open quote list gets worked on a set schedule. Most quoted repairs close on the second or third follow up rather than the day the proposal goes out.",
      },
    ],
  },
  {
    number: "03",
    title: "Service expansion",
    note: "Grow the accounts you already hold through capital planning and planned escalation, then use service to get into buildings you don't have yet.",
    items: [
      {
        number: "07",
        title: "Modernization and retrofits",
        text: "A year of PM visits tells you which chillers, boilers, and rooftop units are near the end of their service life, and that condition data becomes a multi year capital plan your customer sees early. You're shaping the scope and the budget before the project goes out to bid.",
      },
      {
        number: "08",
        title: "Renewals and price escalation",
        text: "Escalation language goes into the original agreement, and the renewal conversation starts ninety days ahead with the year of repair history and findings in hand. The renewal becomes your opening to add equipment, extend coverage, and reset the rate.",
      },
      {
        number: "09",
        title: "Competitive takeover",
        text: "Once the pricing, the scope, and the pull-through are running, you can go after the equipment your competitors installed and take the maintenance on it. Service is how you get in the door at a building you're not in, and the repairs and replacements follow once your technicians are the ones standing in front of the equipment.",
      },
    ],
  },
];

export function CoverageSystem() {
  return (
    <div className="coverage-system">
      {phases.map((phase) => (
        <section className="coverage-phase" key={phase.number} aria-labelledby={`coverage-phase-${phase.number}`}>
          <header className="coverage-phase-header">
            <span>Phase {phase.number}</span>
            <h3 id={`coverage-phase-${phase.number}`}>{phase.title}</h3>
            <p>{phase.note}</p>
          </header>
          <div className="coverage-phase-items">
            {phase.items.map((item) => (
              <article className="coverage-item" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
