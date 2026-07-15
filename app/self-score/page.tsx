import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";
import SelfScore from "./SelfScore";

export const metadata: Metadata = {
  title: "Self-Score Your Service Program",
  description:
    "Answer 12 operating questions and receive a directional score for your commercial mechanical service program.",
};

export default function SelfScorePage() {
  return (
    <PageShell>
      <SelfScore />
    </PageShell>
  );
}
