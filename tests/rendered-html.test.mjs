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

test("homepage renders the final title and exactly one h1", async () => {
  const response = await requestPath("/");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(html, /Commercial Service Agreements for Mechanical Contractors \| Keystone Commercial Partners/);
  assert.equal((html.match(/<h1\b/gi) ?? []).length, 1);
  assert.doesNotMatch(html, /codex-preview/);
});

test("privacy page states that scorecard answers are never transmitted", async () => {
  const response = await requestPath("/privacy");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /answers and score are never transmitted/i);
  assert.match(html, /Plausible Analytics/);
});

test("removed legacy pages return the custom 404", async () => {
  const response = await requestPath("/about");
  const html = await response.text();

  assert.equal(response.status, 404);
  assert.match(html, /This page doesn(?:&apos;|')t exist/i);
});
