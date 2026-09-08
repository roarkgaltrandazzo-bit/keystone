import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "About",
  description: "Keystone is led by Tom Randazzo, a commercial HVAC service leader with experience at Carrier, Johnson Controls, and privately held mechanical contractors.",
  alternates: { canonical: "/about" },
};

const distinctions = [
  "Tom leads every engagement",
  "A deliberately limited client roster",
  "No junior consultants or handoffs",
  "Implementation alongside your people",
  "Decisions grounded in operating numbers",
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="about-hero">
        <div className="shell about-hero-grid">
          <div className="about-hero-copy">
            <p className="eyebrow">About Keystone</p>
            <h1>The person you hire stays inside the business.</h1>
            <p>Keystone is intentionally small. I lead every engagement and stay involved in the decisions, tools, meetings, and management routines we build.</p>
          </div>
          <figure className="about-portrait">
            <img
              src="/tom-randazzo.webp"
              alt="Tom Randazzo, founder of Keystone Commercial Partners"
              width="900"
              height="900"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      <section className="section about-story-section">
        <div className="shell about-story-grid">
          <div>
            <p className="eyebrow">Experience that matters</p>
            <h2>Commercial service experience, applied directly.</h2>
            <p>
              I&apos;ve spent 20 years in commercial HVAC and mechanical service at Carrier, Johnson Controls, and privately held mechanical contractors. I&apos;ve sold agreements, led service sales teams, priced opportunities, coached managers, and dealt with the handoff between sales and operations when it was not working.
            </p>
            <p>
              I built Keystone because independent contractors do not need another consultant explaining service from a slide deck. They need someone who understands how agreement economics, field execution, customer relationships, and management discipline fit together inside an operating company.
            </p>
            <a className="text-link" href="https://www.linkedin.com/in/tom-randazzo-73b48947" rel="noreferrer" target="_blank">Tom on LinkedIn</a>
          </div>
          <aside className="distinction-panel">
            <p className="eyebrow">Why Keystone is different</p>
            <ul>
              {distinctions.map((item, index) => (
                <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="midwest-section">
        <div className="shell midwest-grid">
          <div>
            <p className="eyebrow eyebrow-light">Where Keystone works</p>
            <h2>Based in Appleton. Focused on the Midwest.</h2>
          </div>
          <div>
            <p>
              Keystone works with commercial mechanical contractors throughout the Midwest. Engagements are designed around the realities of privately held contractors: lean teams, strong customer relationships, and owners who cannot step away from the business to manage a consulting project.
            </p>
            <p className="midwest-note">The goal is a service system your people can use, manage, and improve after Keystone is gone.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
