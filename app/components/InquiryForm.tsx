"use client";

import { FormEvent, useState } from "react";

type InquiryFormProps = {
  subject?: string;
};

export function InquiryForm({ subject = "Keystone Service Program Fit Call Inquiry" }: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/tom@keystonecommercialpartners.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form-card" onSubmit={submitForm}>
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_template" value="table" />
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website-confirmation">Leave this field blank</label>
        <input id="website-confirmation" name="_honey" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" autoComplete="organization" required />
        </div>
        <div className="field">
          <label htmlFor="company-website">Company website</label>
          <input id="company-website" name="company_website" type="url" placeholder="https://" />
        </div>
        <div className="field">
          <label htmlFor="revenue">Annual revenue</label>
          <select id="revenue" name="revenue_range" required defaultValue="">
            <option value="" disabled>Select a range</option>
            <option>Under $3M</option>
            <option>$3M–$5M</option>
            <option>$5M–$10M</option>
            <option>$10M–$15M</option>
            <option>Over $15M</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="techs">Service technicians</label>
          <select id="techs" name="service_technicians" required defaultValue="">
            <option value="" disabled>Select a range</option>
            <option>0–4</option>
            <option>5–9</option>
            <option>10–19</option>
            <option>20–39</option>
            <option>40+</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="agreement-base">Current agreement base</label>
          <select id="agreement-base" name="current_agreement_base" required defaultValue="">
            <option value="" disabled>Select a range</option>
            <option>None yet</option>
            <option>Under $250K</option>
            <option>$250K–$1M</option>
            <option>$1M+</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="mix">Service versus construction mix</label>
          <select id="mix" name="service_construction_mix" defaultValue="">
            <option value="">Select the closest fit</option>
            <option>Mostly service</option>
            <option>Roughly balanced</option>
            <option>Mostly construction or projects</option>
            <option>Not sure</option>
          </select>
        </div>
        <div className="field field-full">
          <label htmlFor="prompting">What is prompting the conversation now?</label>
          <textarea id="prompting" name="prompting_the_conversation" required />
        </div>
      </div>
      <div className="form-actions">
        <button className="button button-accent" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Request the Fit Call"}
        </button>
        {status === "idle" ? <p className="form-note">Tom replies directly. No automated sales sequence.</p> : null}
        {status === "success" ? <p className="form-status form-status-success">Received. Tom will follow up directly.</p> : null}
        {status === "error" ? (
          <p className="form-status form-status-error">
            The form did not send. Email tom@keystonecommercialpartners.com instead.
          </p>
        ) : null}
      </div>
    </form>
  );
}
