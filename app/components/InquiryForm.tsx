"use client";

import { FormEvent } from "react";

type InquiryFormProps = {
  subject?: string;
};

export function InquiryForm({ subject = "Keystone Service Program Fit Call Inquiry" }: InquiryFormProps) {
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const body = [
      `Name: ${value("name")}`,
      `Email: ${value("email")}`,
      `Company: ${value("company")}`,
      `Company website: ${value("company_website") || "Not provided"}`,
      `Annual revenue: ${value("revenue_range")}`,
      `Service technicians: ${value("service_technicians")}`,
      `Current agreement base: ${value("current_agreement_base")}`,
      `Service versus construction mix: ${value("service_construction_mix") || "Not provided"}`,
      "",
      "What is prompting the conversation now?",
      value("prompting_the_conversation"),
    ].join("\n");

    window.location.href = `mailto:tom@keystonecommercialpartners.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="form-card" onSubmit={prepareEmail}>
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
        <button className="button button-accent" type="submit">
          Open Email to Request the Fit Call
        </button>
        <p className="form-note">Tom replies personally. Your email app opens before anything is sent. No automated sales sequence or drip emails.</p>
      </div>
    </form>
  );
}
