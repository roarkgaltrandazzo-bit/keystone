"use client";

/* eslint-disable react/no-unescaped-entities, @next/next/no-img-element */

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 18 18 6M8 6h10v10" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const ArrowDown = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 4v15m0 0-6-6m6 6 6-6" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

const KeystoneLogo = ({ onDark = false }: { onDark?: boolean }) => (
  <img
    className="keystone-logo"
    src={onDark ? "/keystone-logo.png" : "/keystone-logo-header.png"}
    alt="Keystone Commercial Partners"
    width="1624"
    height="317"
  />
);

const walkInto = [
  "The backlog is full through August and January is still an open question.",
  "You carry PM agreements and nobody can tell you which ones make money.",
  "Service work shows up when a technician happens to notice something on a call.",
  "One person sells service. If he leaves, the number leaves with him.",
  "Renewals go out at last year's price because repricing means a conversation nobody wants to have.",
  "A rooftop unit gets replaced in a building you have held for six years and the first you hear about it is the bid invitation.",
];

const loopSteps = [
  {
    number: "01",
    title: "Revenue already sold",
    text: "It is on the calendar before the year starts. It fills technician hours in a slow quarter and it renews without a bid.",
  },
  {
    number: "02",
    title: "Your people in the building",
    text: "Four visits a year, or twelve. Your techs learn which unit runs hot and which one the customer keeps patching. The customer learns your techs by name.",
  },
  {
    number: "03",
    title: "The first call",
    text: "When something fails, a contracted customer calls you before anyone else. Often your technician wrote it up two visits ago.",
  },
  {
    number: "04",
    title: "The next project",
    text: "You know the equipment, the building, and when the money shows up in their budget. Replacements and retrofits come to you, and they feed the construction side.",
  },
  {
    number: "05",
    title: "And it starts over",
    text: "The unit you just installed goes under agreement at the new price. The base gets bigger every time you win one.",
  },
];

const serviceActions = [
  {
    number: "01",
    title: "Structure it",
    text: "Name who owns service growth, who sells it, and how a signed agreement gets handed to the people who have to deliver it.",
  },
  {
    number: "02",
    title: "Price it",
    text: "Scope, hours, and a price book your team quotes the same way twice, at a margin service can actually hit.",
  },
  {
    number: "03",
    title: "Sell it",
    text: "Pick the buildings worth going after, teach your people to survey them, and write proposals that get a signature.",
  },
  {
    number: "04",
    title: "Renew it",
    text: "Customer reviews, repricing, and a renewal routine that holds the base you already built.",
  },
  {
    number: "05",
    title: "Run it",
    text: "Scheduling, technician follow-up, repair pull-through, and a weekly number your managers can read without you.",
  },
];

const ongoingActions = [
  {
    number: "06",
    title: "Fractional sales leadership",
    text: "I run your service sales effort the way a VP would. Pipeline, pricing calls, ride-alongs, coaching your sellers, and the weekly number. You get that years before payroll can carry a full-time hire.",
  },
  {
    number: "07",
    title: "Strategic account management",
    text: "I take your largest and most at-risk accounts myself. Business reviews, renewal strategy, escalations, and finding the next project inside buildings you already hold.",
  },
];

const engagementSteps = [
  {
    number: "01",
    title: "We look",
    text: "A day inside your operation. Your agreements, your price book, your last ten proposals, your service P&L. You get a straight read on where the money leaks and what it is worth to stop it.",
  },
  {
    number: "02",
    title: "We fix",
    text: "Ninety days on the two or three things that move the number first. You keep the work: a price book, an agreement your team can price the same way twice, a list of buildings worth going after, and a weekly routine your managers run when I am not in the room.",
  },
  {
    number: "03",
    title: "We keep it running",
    text: "As much or as little as you want after that. Fractional sales leadership, account management, or a monthly cadence that keeps the routine alive.",
  },
];

type ScoreArea = "Ownership" | "Pricing" | "Selling" | "Renewing" | "Operating";

const scoreQuestions: { area: ScoreArea; question: string }[] = [
  { area: "Ownership", question: "Is one person named and measured against the service-growth number?" },
  { area: "Ownership", question: "Does a signed PM agreement reach service with scope, hours, and responsibilities clear?" },
  { area: "Ownership", question: "Can your service manager read the service P&L without you?" },
  { area: "Pricing", question: "Can two people scope the same agreement and land within a few hours of each other?" },
  { area: "Pricing", question: "Is your price book current and used by every seller and branch?" },
  { area: "Pricing", question: "Do you know the gross margin on every PM agreement?" },
  { area: "Selling", question: "Do your sellers have a written list of buildings worth going after?" },
  { area: "Selling", question: "Can more than one person walk the roof, survey the equipment, and quote the agreement correctly?" },
  { area: "Renewing", question: "Do renewals go out early enough to reprice and recover a stalled customer?" },
  { area: "Renewing", question: "Does every agreement get reviewed for labor, scope, and price before renewal?" },
  { area: "Operating", question: "Do your managers review pipeline, renewals, pull-through, and the number every week?" },
  { area: "Operating", question: "Do technician findings turn into quoted repairs before they disappear?" },
];

const areaCopy: Record<ScoreArea, string> = {
  Ownership: "Name who owns the number, then make the handoff and weekly review visible.",
  Pricing: "Start with scope, labor hours, and the price book. Bad agreements get worse every time they renew.",
  Selling: "Pick the buildings, tighten the survey, and make more than one person capable of carrying the number.",
  Renewing: "Move renewals earlier and review scope, labor, and price before the customer sees the next agreement.",
  Operating: "Tie scheduling, technician findings, repair pull-through, and the service P&L to one weekly review.",
};

type SubmitState = "idle" | "submitting" | "success" | "error";

const getLeadEndpoint = () => {
  if (typeof window === "undefined") return "/api/leads";
  if (window.location.hostname.endsWith("chatgpt.site")) return "/api/leads";
  return "https://keystone-commercial-partners-concept.tommywisconny.chatgpt.site/api/leads";
};

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [reviewState, setReviewState] = useState<SubmitState>("idle");
  const [reviewMessage, setReviewMessage] = useState("");
  const [answers, setAnswers] = useState<(number | null)[]>(Array(scoreQuestions.length).fill(null));
  const [scoreVisible, setScoreVisible] = useState(false);
  const [scoreEmailState, setScoreEmailState] = useState<SubmitState>("idle");
  const [scoreEmailMessage, setScoreEmailMessage] = useState("");

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyCta(!entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const score = useMemo(
    () => answers.reduce<number>((sum, answer) => sum + (answer ?? 0), 0),
    [answers],
  );

  const weakestArea = useMemo(() => {
    const totals = new Map<ScoreArea, { score: number; possible: number }>();
    scoreQuestions.forEach((item, index) => {
      const current = totals.get(item.area) ?? { score: 0, possible: 0 };
      current.score += answers[index] ?? 0;
      current.possible += 2;
      totals.set(item.area, current);
    });
    return [...totals.entries()].sort(
      (a, b) => a[1].score / a[1].possible - b[1].score / b[1].possible,
    )[0]?.[0] ?? "Ownership";
  }, [answers]);

  const answerScoreQuestion = (index: number, value: number) => {
    setAnswers((current) => current.map((answer, i) => (i === index ? value : answer)));
    setScoreVisible(false);
    setScoreEmailState("idle");
    setScoreEmailMessage("");
  };

  const showScore = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (answers.some((answer) => answer === null)) return;
    setScoreVisible(true);
    requestAnimationFrame(() => document.getElementById("score-result")?.scrollIntoView({ behavior: "smooth", block: "center" }));
  };

  const submitReview = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setReviewState("submitting");
    setReviewMessage("");

    try {
      const response = await fetch(getLeadEndpoint(), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          kind: "service_review",
          website: formData.get("website"),
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          annualRevenue: formData.get("annualRevenue"),
          problem: formData.get("problem"),
        }),
      });

      if (!response.ok) throw new Error("Unable to submit");
      setReviewState("success");
      setReviewMessage("Got it. I'll contact you directly to set up the review.");
      form.reset();
    } catch {
      setReviewState("error");
      setReviewMessage("That didn't go through. Call or text me at 920-585-4179.");
    }
  };

  const submitScoreEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setScoreEmailState("submitting");
    setScoreEmailMessage("");

    try {
      const response = await fetch(getLeadEndpoint(), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          kind: "scorecard",
          website: formData.get("website"),
          email: formData.get("email"),
          score,
          weakestArea,
          answers,
        }),
      });

      if (!response.ok) throw new Error("Unable to submit");
      setScoreEmailState("success");
      setScoreEmailMessage("I have it. I'll send the written breakdown to your inbox.");
      form.reset();
    } catch {
      setScoreEmailState("error");
      setScoreEmailMessage("That didn't go through. Email me at tom@keystonecommercialpartners.com.");
    }
  };

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="logo-link" aria-label="Keystone home">
          <KeystoneLogo />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#why-the-base-wins">Why the base wins</a>
          <a href="#what-i-do">What I do</a>
          <a href="#how-it-works">How it works</a>
          <a href="#about">About</a>
        </nav>
        <a href="#start-here" className="button button-small button-gold">
          Book a service review <ArrowUpRight />
        </a>
      </header>

      <section className="hero" id="top" ref={heroRef}>
        <div className="hero-copy">
          <p className="eyebrow">COMMERCIAL SERVICE GROWTH</p>
          <h1>Build a bigger, more profitable service business inside your existing operation.</h1>
          <p className="hero-intro">
            Most commercial contractors carry a maintenance base that got built one customer at a time, by whoever happened to sell it. I work inside your operation on how service gets priced, sold, renewed, and run, so the base grows to a number you set and can hold people to.
          </p>
          <div className="hero-actions">
            <a href="#start-here" className="button button-gold">Book a service review <ArrowUpRight /></a>
            <a href="#why-the-base-wins" className="text-link">See why the base wins <ArrowDown /></a>
          </div>
          <p className="hero-note">Thirty minutes. You leave with the two things I would fix first, whether or not we work together.</p>
        </div>
        <div className="hero-visual" aria-label="Commercial mechanical room">
          <div className="hero-image" />
          <div className="hero-photo-label"><span>MECHANICAL ROOM</span><strong>THE BASE STARTS HERE.</strong></div>
        </div>
      </section>

      <section className="walk-in" id="walk-in">
        <div className="compact-heading">
          <p className="eyebrow">WHAT I USUALLY WALK INTO</p>
          <h2>In most companies, service is the only department nobody actually runs.</h2>
        </div>
        <div className="walk-list">
          {walkInto.map((item) => <p key={item}>{item}</p>)}
        </div>
        <div className="section-end">
          <p>None of these are hard problems. They stay unfixed because nobody in the building owns them.</p>
          <a href="#why-the-base-wins">See what the base should do <ArrowDown /></a>
        </div>
      </section>

      <section className="base-wins" id="why-the-base-wins">
        <div className="base-heading">
          <p className="eyebrow eyebrow-gold">WHY SERVICE</p>
          <h2>Every agreement you sign buys you four things. The monthly revenue is the smallest of them.</h2>
          <p>A project pays once and ends. An agreement pays every month, puts your people inside the building on a schedule, makes you the first call when something fails, and hands you the replacement when the equipment is done. Four returns on one signature. Most companies price it like it delivers the first one.</p>
        </div>

        <div className="loop-graphic" aria-label="How a maintenance agreement feeds the next agreement">
          <div className="loop-steps">
            {loopSteps.map((step, index) => (
              <div className="loop-step-wrap" key={step.number}>
                <article className="loop-step">
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
                {index < loopSteps.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}
              </div>
            ))}
          </div>
          <div className="loop-return" aria-hidden="true"><span>05 FEEDS 01</span></div>
        </div>

        <p className="loop-close">That's the loop. In most companies it turns by accident, one customer at a time.</p>

        <div className="value-frame">
          <p className="eyebrow eyebrow-gold">WHAT IT'S WORTH</p>
          <p>Two contractors the same size in the same market. One does ten percent of revenue in service. The other does forty. The second one starts January with <strong>[X] million already booked</strong>, keeps his technicians busy through a slow spring, and gets a different number from a buyer.</p>
          <span>[TOM: INSERT THE COMPARISON YOU ARE PREPARED TO DEFEND ON A CALL.]</span>
        </div>
        <a className="section-link section-link-light" href="#what-i-do">See what I do inside the operation <ArrowDown /></a>
      </section>

      <section className="what-i-do" id="what-i-do">
        <div className="split-heading">
          <div>
            <p className="eyebrow">HOW I HELP</p>
            <h2>Structure it. Price it. Sell it. Renew it. Run it.</h2>
          </div>
          <p>This is the work, roughly in the order it happens.</p>
        </div>

        <div className="action-list">
          {serviceActions.map((action) => (
            <article key={action.number}>
              <span>{action.number}</span>
              <h3>{action.title}</h3>
              <p>{action.text}</p>
            </article>
          ))}
        </div>

        <div className="ongoing-block">
          <p className="eyebrow">AND WHEN YOU WANT IT TO KEEP RUNNING</p>
          <div className="ongoing-list">
            {ongoingActions.map((action) => (
              <article key={action.number}>
                <span>{action.number}</span>
                <h3>{action.title}</h3>
                <p>{action.text}</p>
              </article>
            ))}
          </div>
        </div>
        <a className="section-link" href="#how-it-works">See how the engagement starts <ArrowDown /></a>
      </section>

      <section className="how-it-works" id="how-it-works">
        <div className="compact-heading compact-heading-wide">
          <p className="eyebrow">WORKING TOGETHER</p>
          <h2>How it actually goes.</h2>
        </div>
        <div className="engagement-list">
          {engagementSteps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <div className="plain-objection">
          <strong>A few things to be clear about:</strong> No cohort. No course library. Nothing to log into. Your team keeps working while this happens. You will see me in your mechanical rooms.
        </div>
        <a className="section-link" href="#proof">See the experience behind it <ArrowDown /></a>
      </section>

      <section className="proof-strip" id="proof">
        <p>CAREER RESULT</p>
        <strong>47%</strong>
        <h2>Recurring service growth at Carrier.</h2>
        <span>References available on the first call.</span>
      </section>

      <section className="about" id="about">
        <div className="about-heading">
          <p className="eyebrow">WHO'S BEHIND KEYSTONE</p>
          <h2>Twenty years inside commercial service.</h2>
        </div>
        <div className="about-copy">
          <p>I'm Tom Randazzo. I have spent twenty years selling commercial service and leading the people responsible for it, at Carrier, at Johnson Controls, and at privately held mechanical contractors. I have built agreement bases, repriced bad ones, hired and fired service sellers, and sat in the room when the number didn't come in.</p>
          <p>The work happens inside your operation, with the people already on your payroll. Your service manager runs the renewal review. Your estimator prices the agreement. Your seller walks the roof and I walk it with him. When I stop showing up, the routine keeps running, because your people are the ones running it.</p>
          <a className="section-link" href="#start-here">Bring me your three numbers <ArrowDown /></a>
        </div>
      </section>

      <section className="start-here" id="start-here">
        <div className="start-intro">
          <p className="eyebrow eyebrow-gold">START HERE</p>
          <h2>In thirty minutes I can tell you where your service business is leaking.</h2>
          <p>Bring three numbers. Your revenue, roughly what share of it is service, and how many PM agreements you carry. I will tell you what I would fix first, what it is likely worth, and whether I am the right person to help. If I am not, I will tell you that too.</p>
        </div>

        <form className="review-form" onSubmit={submitReview}>
          <div className="form-grid">
            <label>Name<input name="name" autoComplete="name" required /></label>
            <label>Company<input name="company" autoComplete="organization" required /></label>
            <label>Email<input name="email" type="email" autoComplete="email" required /></label>
            <label>Phone<input name="phone" type="tel" autoComplete="tel" required /></label>
            <label className="form-wide">Annual revenue
              <select name="annualRevenue" defaultValue="" required>
                <option value="" disabled>Select one</option>
                <option>Under $10M</option>
                <option>$10 to 25M</option>
                <option>$25 to 50M</option>
                <option>$50M+</option>
              </select>
            </label>
            <label className="form-wide">What is the one thing about your service business that keeps not getting fixed?
              <textarea name="problem" rows={5} required />
            </label>
            <label className="honey" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
          </div>
          <button className="button button-gold button-large" type="submit" disabled={reviewState === "submitting"}>
            {reviewState === "submitting" ? "Sending..." : "Book the thirty-minute review"} <ArrowUpRight />
          </button>
          {reviewMessage && <p className={`form-message ${reviewState}`} role="status">{reviewMessage}</p>}
          <p className="direct-line">No deck. No junior rep. No four calls before you get to me.<br />Call or text directly: <a href="tel:+19205854179">920-585-4179</a> · <a href="mailto:tom@keystonecommercialpartners.com">tom@keystonecommercialpartners.com</a></p>
        </form>

        <div className="scorecard-shell">
          <div className="scorecard-intro">
            <p className="eyebrow">A SMALLER FIRST STEP</p>
            <h3>Take the Service Base Scorecard.</h3>
            <p>Twelve questions, five minutes, scored on the spot. It tells you which part of your service business is costing you the most right now.</p>
          </div>

          <form className="scorecard" onSubmit={showScore}>
            <div className="score-questions">
              {scoreQuestions.map((item, index) => (
                <fieldset key={item.question}>
                  <legend><span>{String(index + 1).padStart(2, "0")}</span>{item.question}</legend>
                  <div className="score-options">
                    {[
                      { label: "Yes", value: 2 },
                      { label: "Sometimes", value: 1 },
                      { label: "No", value: 0 },
                    ].map((option) => (
                      <label key={option.label}>
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={option.value}
                          checked={answers[index] === option.value}
                          onChange={() => answerScoreQuestion(index, option.value)}
                          required
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              ))}
            </div>
            <button className="button button-dark button-large" type="submit">Score my service base <ArrowUpRight /></button>
          </form>

          {scoreVisible && (
            <div className="score-result" id="score-result" aria-live="polite">
              <div className="score-number"><strong>{score}</strong><span>/ 24</span></div>
              <div>
                <p>FIX THIS FIRST</p>
                <h3>{weakestArea}</h3>
                <span>{areaCopy[weakestArea]}</span>
              </div>
              <form className="score-email" onSubmit={submitScoreEmail}>
                <label>Email me the written breakdown<input name="email" type="email" autoComplete="email" required /></label>
                <label className="honey" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
                <button type="submit" disabled={scoreEmailState === "submitting"}>{scoreEmailState === "submitting" ? "Sending..." : "Send it to me"}</button>
              </form>
              {scoreEmailMessage && <p className={`form-message ${scoreEmailState}`} role="status">{scoreEmailMessage}</p>}
            </div>
          )}
        </div>
      </section>

      <footer>
        <KeystoneLogo onDark />
        <div className="footer-meta">
          <p>APPLETON, WISCONSIN</p>
          <a href="mailto:tom@keystonecommercialpartners.com">TOM@KEYSTONECOMMERCIALPARTNERS.COM</a>
          <a href="tel:+19205854179">920-585-4179</a>
          <a href="https://www.linkedin.com/in/tomrandazzo" target="_blank" rel="noreferrer">LINKEDIN</a>
        </div>
        <p className="copyright">© 2026 KEYSTONE COMMERCIAL PARTNERS</p>
      </footer>

      <a className={`mobile-sticky-cta ${showStickyCta ? "is-visible" : ""}`} href="#start-here">Book a service review <ArrowUpRight /></a>
    </main>
  );
}
