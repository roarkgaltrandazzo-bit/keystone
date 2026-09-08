import assert from "node:assert/strict";
import test from "node:test";

async function loadWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", String(process.pid) + "-" + String(Date.now()) + "-" + String(Math.random()));
  const { default: worker } = await import(workerUrl.href);
  return worker;
}

async function requestPath(path) {
  const worker = await loadWorker();
  return worker.fetch(
    new Request("http://localhost" + path, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

async function expectPage(path, expected) {
  const response = await requestPath(path);
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.equal((html.match(/<h1\b/gi) ?? []).length, 1);
  assert.match(html, expected);
  assert.doesNotMatch(html, /codex-preview/);
  return html;
}

test("homepage renders the new service-growth positioning", async () => {
  const html = await expectPage("/", /Service builds recurring revenue/i);

  assert.match(html, /Every agreement creates more than revenue/i);
  assert.match(html, /This is not a lead service/i);
  assert.match(html, /Operating value today\. Enterprise value tomorrow/i);
  assert.match(html, /Established commercial mechanical contractors/i);
  assert.doesNotMatch(html, /Score your service business/i);
  assert.doesNotMatch(html, /Have Tom call me/i);
});

test("service model page explains the compounding path", async () => {
  const html = await expectPage("/service-model", /A stronger service business compounds over time/i);

  assert.match(html, /Maintenance agreement/i);
  assert.match(html, /Convert technician findings/i);
  assert.match(html, /Enterprise value follows/i);
});

test("how we work page renders all three engagement phases", async () => {
  const html = await expectPage("/how-we-work", /Assess the business\. Build the system\. Run it with your team/i);

  assert.match(html, /Service Performance &amp; Market Assessment/i);
  assert.match(html, /Typically 60–90 days/i);
  assert.match(html, /What Keystone is not/i);
});

test("about page carries the direct-engagement positioning", async () => {
  const html = await expectPage("/about", /The person you hire stays inside the business/i);

  assert.match(html, /Carrier, Johnson Controls, and privately held mechanical contractors/i);
  assert.match(html, /Tom leads every engagement/i);
  assert.match(html, /Based in Appleton\. Focused on the Midwest/i);
});

test("privacy page reflects the simplified contact model", async () => {
  const html = await expectPage("/privacy", /How Keystone handles your information/i);

  assert.match(html, /does not sell personal information/i);
  assert.match(html, /Plausible Analytics/i);
  assert.doesNotMatch(html, /scorecard/i);
});

test("unknown pages return the custom 404", async () => {
  const response = await requestPath("/old-page");
  const html = await response.text();

  assert.equal(response.status, 404);
  assert.match(html, /This page doesn(?:&apos;|')t exist/i);
});
