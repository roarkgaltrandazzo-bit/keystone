import type { ReactNode } from "react";
import { TrackedLink } from "./TrackedLink";

export function ThreeBarMark({ className = "" }: { className?: string }) {
  return (
    <span className={`three-bar-mark ${className}`.trim()} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

export function Brand() {
  return (
    <a className="brand" href="/" aria-label="Keystone Commercial Partners home">
      <picture>
        <source srcSet="/keystone-logo-header.webp" type="image/webp" />
        <img
          className="brand-logo"
          src="/keystone-logo-header.png"
          alt="Keystone Commercial Partners"
          width="1610"
          height="325"
        />
      </picture>
    </a>
  );
}

const navigation = [
  { href: "/#case", label: "The Case for Service" },
  { href: "/#build", label: "What We Build" },
  { href: "/#how", label: "How We Work" },
  { href: "/#about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="site-frame header-main">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>
        <TrackedLink className="header-phone" href="tel:+19205854179" eventName="Phone-link click">
          920-585-4179
        </TrackedLink>
      </div>
      <nav className="mobile-nav site-frame" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>{item.label}</a>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-frame footer-inner">
        <p>Based in Appleton, WI. Working with commercial mechanical contractors throughout the Midwest.</p>
        <p className="footer-contact">
          <a href="mailto:tom@keystonecommercialpartners.com">tom@keystonecommercialpartners.com</a>
          <span aria-hidden="true">·</span>
          <TrackedLink href="tel:+19205854179" eventName="Phone-link click">920-585-4179</TrackedLink>
          <span aria-hidden="true">·</span>
          <a href="https://www.linkedin.com/in/tom-randazzo-73b48947" rel="noreferrer" target="_blank">LinkedIn</a>
        </p>
        <p>© 2026 Keystone Commercial Partners <span aria-hidden="true">·</span> <a href="/privacy">Privacy</a></p>
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
