import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "../app/page";
import AssessmentPage from "../app/assessment/page";
import AboutPage from "../app/about/page";
import SelfScorePage from "../app/self-score/page";
import BookPage from "../app/book/page";
import PrivacyPage from "../app/privacy/page";
import "../app/globals.css";

const pathname = window.location.pathname.replace(/\/$/, "") || "/";

const routes: Record<string, { component: () => React.JSX.Element; title: string; description: string }> = {
  "/": {
    component: Home,
    title: "Keystone Commercial Partners | HVAC Service Program Advisory",
    description: "Service program advisory for $3M–$15M commercial and industrial HVAC contractors.",
  },
  "/assessment": {
    component: AssessmentPage,
    title: "Service Program Assessment | Keystone Commercial Partners",
    description: "A three-week assessment of agreements, pull-through, pricing and service economics.",
  },
  "/about": {
    component: AboutPage,
    title: "About Tom Randazzo | Keystone Commercial Partners",
    description: "Commercial HVAC operating experience across Bassett, Linc, Carrier and Johnson Controls.",
  },
  "/self-score": {
    component: SelfScorePage,
    title: "Self-Score Your HVAC Service Program | Keystone Commercial Partners",
    description: "Answer 12 questions and see eight directional service-program scores. No email required.",
  },
  "/book": {
    component: BookPage,
    title: "Book a Fit Call | Keystone Commercial Partners",
    description: "Request a 30-minute conversation about your commercial mechanical service program.",
  },
  "/privacy": {
    component: PrivacyPage,
    title: "Privacy | Keystone Commercial Partners",
    description: "Privacy information for Keystone Commercial Partners.",
  },
};

const route = routes[pathname] ?? routes["/"];
const Page = route.component;
document.title = route.title;
document.querySelector('meta[name="description"]')?.setAttribute("content", route.description);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
