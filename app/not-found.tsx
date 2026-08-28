import { PageShell } from "./components/SiteChrome";

export default function NotFound() {
  return (
    <PageShell>
      <section className="light-section not-found-section">
        <div className="narrow-shell">
          <p className="eyebrow">404</p>
          <h1>This page doesn&apos;t exist.</h1>
          <p>The Keystone site is one page. The link you followed isn&apos;t part of it.</p>
          <a className="button button-accent" href="/">Go to the homepage</a>
        </div>
      </section>
    </PageShell>
  );
}
