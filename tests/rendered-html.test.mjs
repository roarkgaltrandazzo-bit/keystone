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
    new Request("http://localhost" + path, { headers: { accept: "text/html" }, redirect: "manual" }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("homepage renders the approved single-page structure", async () => {
  const response = await requestPath("/");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(html, /Commercial Service Programs for Mechanical Contractors \| Keystone Commercial Partners/);
  assert.equal((html.match(/<h1\b/gi) ?? []).length, 1);
  assert.match(html, /Service is the part of a mechanical contractor’s business that delivers ongoing, increasing value/);
  assert.match(html, /Field Note No\. 001/);
  assert.match(html, /What We See Most Often/);
  assert.match(html, /Every agreement you sign pays four times/);
  assert.match(html, /A service agreement results from nine key decisions/);
  assert.match(html, /How We Work/);
  assert.match(html, /Who This Works For/);
  assert.match(html, /Twenty years in commercial service/);
  assert.match(html, /Thirty minutes on the phone/);
  assert.doesNotMatch(html, /Commercial Architecture/i);
  assert.doesNotMatch(html, /seven-layer/i);
  assert.doesNotMatch(html, /Service Base Scorecard/i);
  assert.doesNotMatch(html, /Book a service review/i);
  assert.doesNotMatch(html, /—/);
});

test("homepage carries required navigation, form, image, schema, and live links", async () => {
  const response = await requestPath("/");
  const html = await response.text();

  assert.match(html, /href="\/#case"/);
  assert.match(html, /href="\/#build"/);
  assert.match(html, /href="\/#how"/);
  assert.match(html, /href="\/#about"/);
  assert.match(html, /href="tel:\+19205854179"/);
  assert.match(html, /href="mailto:tom@keystonecommercialpartners\.com"/);
  assert.match(html, /name="name"/);
  assert.match(html, /name="company"/);
  assert.match(html, /name="email"/);
  assert.match(html, /name="phone"/);
  assert.match(html, /tom-randazzo\.webp/);
  assert.match(html, /Tom Randazzo, principal of Keystone Commercial Partners/);
  assert.match(html, /Organization/);
  assert.match(html, /Person/);
  assert.match(html, /Service/);
  assert.match(html, /© 2026 Keystone Commercial Partners/);
});

test("scorecard is standalone, private, and noindex", async () => {
  const response = await requestPath("/scorecard");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /Service Base Scorecard/);
  assert.match(html, /Twelve questions\. Five minutes\. No gate/);
  assert.match(html, /name="robots" content="noindex, nofollow"/);
  assert.match(html, /Your answers never go to Keystone/);
  assert.doesNotMatch(html, /Scorecard start/);
  assert.doesNotMatch(html, /Scorecard completion/);
});

test("privacy page describes the actual contact and analytics behavior", async () => {
  const response = await requestPath("/privacy");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /answers and score are never transmitted/i);
  assert.match(html, /FormSubmit/);
  assert.match(html, /two custom events/i);
  assert.match(html, /Plausible Analytics/);
});

test("retired server routes issue permanent redirects", async () => {
  for (const path of ["/commercial-architecture", "/commercial-architecture.html", "/about", "/assessment", "/book"]) {
    const response = await requestPath(path);
    assert.equal(response.status, 301, path);
    assert.equal(new URL(response.headers.get("location")).pathname, "/", path);
  }

  const scoreResponse = await requestPath("/self-score");
  assert.equal(scoreResponse.status, 301);
  assert.equal(new URL(scoreResponse.headers.get("location")).pathname, "/scorecard/");
});
