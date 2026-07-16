import { primaryNavigation } from "../data";

export function Brand() {
  return (
    <a className="brand" href="/" aria-label="Keystone Commercial Partners home">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      <span className="brand-lockup">
        <span className="brand-word">KEYSTONE</span>
        <span className="brand-descriptor">Commercial Partners</span>
      </span>
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="shell header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
          <a className="button button-small button-accent" href="/book">
            Book a fit call
          </a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {primaryNavigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
            <a className="button button-accent" href="/book">
              Book a fit call
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Brand />
          <p className="footer-positioning">
            Service program advisory for commercial and industrial mechanical contractors.
          </p>
          <p className="footer-location">Based in Appleton, Wisconsin.</p>
        </div>
        <div>
          <p className="footer-heading">Navigate</p>
          <div className="footer-links">
            <a href="/assessment">Service Program Assessment</a>
            <a href="/self-score">Self-score your shop</a>
            <a href="/about">About Tom</a>
            <a href="/book">Book a fit call</a>
          </div>
        </div>
        <div>
          <p className="footer-heading">Contact</p>
          <div className="footer-links">
            <a href="mailto:tom@keystonecommercialpartners.com">
              tom@keystonecommercialpartners.com
            </a>
            <a href="tel:+19205854179">920-585-4179</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Keystone Commercial Partners</span>
        <span>Stronger service economics. More durable company value.</span>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  );
}
