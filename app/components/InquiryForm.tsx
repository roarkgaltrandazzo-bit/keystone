"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { trackEvent } from "./TrackedLink";

const formEndpoint = "https://formsubmit.co/ajax/tom@keystonecommercialpartners.com";

export function InquiryForm() {
  const loadedAt = useRef<number | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    loadedAt.current = Date.now();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const email = value("email");
    const phone = value("phone");

    if (!email && !phone) {
      const emailInput = form.elements.namedItem("email") as HTMLInputElement;
      emailInput.setCustomValidity("Enter an email address or phone number.");
      emailInput.reportValidity();
      return;
    }

    if (value("_honey")) {
      setStatus("sent");
      return;
    }

    if (loadedAt.current !== null && Date.now() - loadedAt.current < 1200) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: value("name"),
          company: value("company"),
          email: email || "Not provided",
          phone: phone || "Not provided",
          _subject: "New Keystone website inquiry",
          _template: "table",
          _captcha: "false",
          _honey: "",
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      const result = await response.json() as { success?: string | boolean };
      if (result.success === false || result.success === "false") throw new Error("Submission failed");

      trackEvent("Form submission");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-success" role="status" aria-live="polite">
        Thank you. I’ll contact you within one business day.
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="field">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" autoComplete="organization" required />
      </div>
      <div className="field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          onInput={(event) => {
            event.currentTarget.setCustomValidity("");
            const phoneInput = event.currentTarget.form?.elements.namedItem("phone") as HTMLInputElement | null;
            phoneInput?.setCustomValidity("");
          }}
        />
      </div>
      <div className="field">
        <label htmlFor="contact-phone">Phone</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          onInput={(event) => {
            event.currentTarget.setCustomValidity("");
            const emailInput = event.currentTarget.form?.elements.namedItem("email") as HTMLInputElement | null;
            emailInput?.setCustomValidity("");
          }}
        />
      </div>
      <div className="honey-field" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="_honey" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="form-action">
        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending" : "Send"}
        </button>
        <p>Name and company are required. Add either an email or phone number.</p>
      </div>
      {status === "error" ? (
        <p className="form-error" role="alert">The form didn’t send. Please wait a moment and try again, or use the phone or email above.</p>
      ) : null}
    </form>
  );
}
