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
    question: "How much steady base load do the agreements produce?",
    description: "Agreement mix, margin, density, growth, and the field capacity the base can carry.",
  },
  {
    key: "pullthrough",
    name: "Pull-Through Conversion",
    shortName: "Pull-through",
    weight: 18,
    question: "When a tech finds work, how much gets quoted and won?",
    description: "The path from field finding to owned quote, customer decision, and won work.",
  },
  {
    key: "pricing",
    name: "PSA Pricing and Margin",
    shortName: "PSA pricing",
    weight: 15,
    question: "Is each PSA priced from cost, or last year plus a bump?",
    description: "Labor, material recovery, escalation, exceptions, and account-level margin.",
  },
  {
    key: "tiers",
    name: "Service Tiers and Program Design",
    shortName: "Program design",
    weight: 12,
    question: "Are customers buying a program or a task list?",
    description: "Clear tiers, a reason to buy up, and a value story beyond PM tasks.",
  },
  {
    key: "connected",
    name: "BAS-Enabled Service",
    shortName: "Connected service",
    weight: 12,
    question: "Do connected buildings surface service work?",
    description: "How controls, trends, and remote visibility change the offer and the workflow.",
  },
  {
    key: "renewal",
    name: "Renewal and Retention",
    shortName: "Renewal",
    weight: 10,
    question: "Is renewal an account decision or just an invoice?",
    description: "Timing, account review, price, retention risk, and expansion planning.",
  },
  {
    key: "utilization",
    name: "Technician Utilization",
    shortName: "Utilization",
    weight: 8,
    question: "Does the agreement base support the crew you’re carrying?",
    description: "Base-load coverage, seasonal balance, productive hours, and staffing decisions.",
  },
  {
    key: "sales",
    name: "Service Sales Motion",
    shortName: "Sales motion",
    weight: 5,
    question: "Who owns the quote after it goes out?",
    description: "Role clarity, next steps, aging, close rate, account plans, and owner dependence.",
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
  { href: "/self-score", label: "Self-score" },
];
