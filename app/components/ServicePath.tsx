const stages = [
  { number: "01", title: "Maintenance agreement" },
  { number: "02", title: "Service relationship" },
  { number: "03", title: "Repairs" },
  { number: "04", title: "Projects" },
  { number: "05", title: "Upgrades" },
  { number: "06", title: "Replacement" },
];

export function ServicePath() {
  return (
    <ol className="service-path" aria-label="Commercial service growth path">
      {stages.map((stage) => (
        <li key={stage.number}>
          <span className="service-path-number">{stage.number}</span>
          <span className="service-path-title">{stage.title}</span>
        </li>
      ))}
    </ol>
  );
}
