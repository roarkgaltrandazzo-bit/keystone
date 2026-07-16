import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";
import SelfScore from "./SelfScore";

export const metadata: Metadata = {
  title: "Self-Score Your HVAC Service Program",
  description:
    "Answer 12 questions and see eight directional scores for your commercial HVAC service program. No email required.",
};

export default function SelfScorePage() {
  return (
    <PageShell>
      <SelfScore />
    </PageShell>
  );
}
