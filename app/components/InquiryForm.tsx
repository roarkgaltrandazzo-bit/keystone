"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "./TrackedLink";

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
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

    const body = [
      "Name: " + value("name"),
      "Company: " + value("company"),
      "Email: " + (email || "Not provided"),
      "Phone: " + (phone || "Not provided"),
    ].join("\n");

    trackEvent("Contact form submission");
    setSubmitted(true);
    window.location.href =
      "mailto:tom@keystonecommercialpartners.com?subject=" +
      encodeURIComponent("Keystone call request") +
      "&body=" +
      encodeURIComponent(body);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        Got it. Tom will call you within a business day.
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
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
          onInput={(event) => event.currentTarget.setCustomValidity("")}
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
      <p className="form-requirement">Name and company are required. Add either an email or phone number.</p>
      <button className="button button-accent" type="submit">Have Tom call me</button>
    </form>
  );
}
