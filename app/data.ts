export type ServiceDimension = {
  key: string;
  name: string;
  shortName: string;
  weight: number;
  question: string;
  description: string;
};

export const serviceDimensions: ServiceDimension[] = [
  {
    key: "recurring",
    name: "Recurring Revenue Base",
    shortName: "Recurring base",
    weight: 20,
    question: "How much steady base load do your agreements really produce?",
    description:
      "Agreement mix, revenue quality, density, growth and how much field capacity the base can reliably carry.",
  },
  {
    key: "pullthrough",
    name: "Pull-Through Conversion",
    shortName: "Pull-through",
    weight: 18,
    question: "When a tech finds work, how much of it gets won?",
    description:
      "How findings move from the truck to a quote, who owns each handoff and how much of the work you actually win.",
  },
  {
    key: "pricing",
    name: "PSA Pricing and Margin",
    shortName: "PSA pricing",
    weight: 15,
    question: "Are agreements priced from real costs, or from last year plus a bump?",
    description:
      "Labor assumptions, material recovery, escalation, exceptions and whether you can see performance account by account.",
  },
  {
    key: "tiers",
    name: "Service Tiers and Program Design",
    shortName: "Program design",
    weight: 12,
    question: "Are customers buying a program, or a checklist of tasks?",
    description:
      "How the offer is packaged, what each tier includes and whether there is a real reason to buy up.",
  },
  {
    key: "connected",
    name: "BAS-Enabled Service",
    shortName: "Connected service",
    weight: 12,
    question: "Are your connected buildings actually surfacing service work?",
    description:
      "How controls, trend data and remote visibility turn into better outcomes and differentiated agreements.",
  },
  {
    key: "renewal",
    name: "Renewal and Retention",
    shortName: "Renewal",
    weight: 10,
    question: "Is renewal a real commercial decision, or just an invoice?",
    description:
      "Timing, account review, price changes, customer communication, retention risk and expansion planning.",
  },
  {
    key: "utilization",
    name: "Technician Utilization",
    shortName: "Utilization",
    weight: 8,
    question: "Does your agreement base support the field crew you are paying for?",
    description:
      "Base-load coverage, seasonal balance, productive hours and how agreement demand connects to staffing decisions.",
  },
  {
    key: "sales",
    name: "Service Sales Motion",
    shortName: "Sales motion",
    weight: 5,
    question: "Who owns quotes, follow-up and account growth?",
    description:
      "Role clarity, quote visibility, follow-up discipline, account planning and how much still runs through you.",
  },
];

export const exampleScores: Record<string, number> = {
  recurring: 80,
  pullthrough: 60,
  pricing: 65,
  tiers: 70,
  connected: 55,
  renewal: 78,
  utilization: 68,
  sales: 60,
};

export const primaryNavigation = [
  { href: "/assessment", label: "Assessment" },
  { href: "/about", label: "About" },
  { href: "/self-score", label: "Self-Score Your Shop" },
];
