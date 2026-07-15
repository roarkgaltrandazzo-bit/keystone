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
    question: "How much dependable base load do your agreements actually create?",
    description:
      "Agreement mix, recurring revenue quality, density, growth and the amount of field capacity the base can reliably support.",
  },
  {
    key: "pullthrough",
    name: "Pull-Through Conversion",
    shortName: "Pull-through",
    weight: 18,
    question: "What happens when a technician finds repair or replacement work?",
    description:
      "How deficiencies move from the technician to a quote, who owns the handoffs and how much of the identified work is won.",
  },
  {
    key: "pricing",
    name: "PSA Pricing and Margin",
    shortName: "PSA pricing",
    weight: 15,
    question: "Are agreements priced from real cost and performance data?",
    description:
      "Labor assumptions, material recovery, escalation, exceptions and whether agreement performance is visible at the account level.",
  },
  {
    key: "tiers",
    name: "Service Tiers and Program Design",
    shortName: "Program design",
    weight: 12,
    question: "Are customers buying a clear program or a list of tasks?",
    description:
      "How the offer is packaged, what each tier includes and whether the program gives customers a reason to buy beyond a task list.",
  },
  {
    key: "connected",
    name: "BAS-Enabled Service",
    shortName: "Connected service",
    weight: 12,
    question: "Are connected buildings producing useful service opportunities?",
    description:
      "How controls capability, trend data and remote visibility support better service outcomes and differentiated agreements.",
  },
  {
    key: "renewal",
    name: "Renewal and Retention",
    shortName: "Renewal",
    weight: 10,
    question: "Is renewal managed as a commercial decision or an invoice event?",
    description:
      "Renewal timing, account review, pricing changes, customer communication, retention risk and expansion planning.",
  },
  {
    key: "utilization",
    name: "Technician Utilization",
    shortName: "Utilization",
    weight: 8,
    question: "Does the agreement base support the field capacity you are carrying?",
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
      "Role clarity, quote visibility, follow-up discipline, account planning and whether service growth still depends on the owner.",
  },
];

export const exampleScores: Record<string, number> = {
  recurring: 74,
  pullthrough: 48,
  pricing: 58,
  tiers: 67,
  connected: 41,
  renewal: 72,
  utilization: 63,
  sales: 52,
};

export const primaryNavigation = [
  { href: "/assessment", label: "Assessment" },
  { href: "/about", label: "About" },
  { href: "/self-score", label: "Self-Score Your Shop" },
];
