import { PageShell } from "./components/SiteChrome";

export default function NotFound() {
  return (
    <PageShell>
      <section className="light-section not-found-section">
        <div className="narrow-shell">
          <p className="eyebrow">404</p>
          <h1>This page doesn&apos;t exist.</h1>
          <p>The link you followed isn&apos;t active.</p>
          <a className="button button-primary" href="/">Go to the homepage</a>
        </div>
      </section>
    </PageShell>
  );
}
