import type { ReactNode } from "react";
import { TrackedLink } from "./TrackedLink";

/* eslint-disable @next/next/no-img-element */

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

const navigation = [
  { href: "/#why-agreements", label: "Why agreements" },
  { href: "/#what-we-cover", label: "What we cover" },
  { href: "/#who-we-work-with", label: "Who we work with" },
  { href: "/#about", label: "About" },
];

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
        <div className="header-actions">
          <TrackedLink className="header-phone" href="tel:+19205854179" eventName="Phone link tap">
            920-585-4179
          </TrackedLink>
          <TrackedLink className="button button-small button-accent" href="/#contact" eventName="Call button click">
            Set up a call
          </TrackedLink>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-lines">
        <p>
          Appleton, Wisconsin <span aria-hidden="true">·</span>{" "}
          <a href="mailto:tom@keystonecommercialpartners.com">tom@keystonecommercialpartners.com</a>{" "}
          <span aria-hidden="true">·</span>{" "}
          <TrackedLink href="tel:+19205854179" eventName="Phone link tap">920-585-4179</TrackedLink>{" "}
          <span aria-hidden="true">·</span>{" "}
          <a href="https://www.linkedin.com/in/tom-randazzo-73b48947" rel="noreferrer" target="_blank">LinkedIn</a>
        </p>
        <p>
          © 2026 Keystone Commercial Partners <span aria-hidden="true">·</span> <a href="/privacy">Privacy</a>
        </p>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  );
}
