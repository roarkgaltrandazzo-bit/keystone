import type { ReactNode } from "react";
import { TrackedLink } from "./TrackedLink";

/* eslint-disable @next/next/no-img-element */

const navigation = [
  { href: "/service-model", label: "Service Model" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/about", label: "About" },
];

export function Brand() {
  return (
    <a className="brand" href="/" aria-label="Keystone Commercial Partners home">
      <img
        className="brand-logo"
        src="/keystone-logo-header.png"
        alt="Keystone Commercial Partners"
        width="1610"
        height="325"
      />
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="shell header-inner">
        <Brand />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>

        <TrackedLink className="button button-small button-navy header-cta" href="#contact" eventName="Conversation link click">
          Talk with KCP
        </TrackedLink>

        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>{item.label}</a>
            ))}
            <a href="/#contact">Talk with KCP</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function ConversationPanel() {
  return (
    <section className="conversation-section" id="contact">
      <div className="shell conversation-grid">
        <div>
          <p className="eyebrow eyebrow-light">Start a conversation</p>
          <h2>Build a stronger commercial service business.</h2>
        </div>
        <div className="conversation-copy">
          <p>
            Tell Tom what you&apos;re trying to build, where it&apos;s getting stuck, and what your team has already tried. The first conversation is about fit, not a canned pitch.
          </p>
          <div className="conversation-actions">
            <TrackedLink
              className="button button-gold"
              href="mailto:tom@keystonecommercialpartners.com?subject=Keystone%20service%20conversation"
              eventName="Email link click"
            >
              Email Tom
            </TrackedLink>
            <TrackedLink className="phone-link" href="tel:+19205854179" eventName="Phone link tap">
              920-585-4179
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <Brand />
        <nav className="footer-nav" aria-label="Footer navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
          <a href="/privacy">Privacy</a>
        </nav>
        <div className="footer-contact">
          <p>Based in Appleton, WI. Serving contractors throughout the midwest</p>
          <p>
            <a href="mailto:tom@keystonecommercialpartners.com">tom@keystonecommercialpartners.com</a><br />
            <TrackedLink href="tel:+19205854179" eventName="Phone link tap">920-585-4179</TrackedLink>
          </p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© 2026 Keystone Commercial Partners</p>
        <a href="https://www.linkedin.com/in/tom-randazzo-73b48947" rel="noreferrer" target="_blank">LinkedIn</a>
      </div>
    </footer>
  );
}

export function PageShell({ children, showConversation = true }: { children: ReactNode; showConversation?: boolean }) {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {children}
        {showConversation ? <ConversationPanel /> : null}
      </main>
      <SiteFooter />
    </>
  );
}
