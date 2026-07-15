"use client";

import { FormEvent, useMemo, useState } from "react";
import { serviceDimensions } from "../data";

type Option = { label: string; value: number };
type Question = {
  dimension: string;
  prompt: string;
  options: Option[];
};

const questions: Question[] = [
  {
    dimension: "recurring",
    prompt: "How clearly can you see the recurring revenue and gross margin produced by each service agreement?",
    options: [
      { label: "We cannot see either reliably", value: 0 },
      { label: "We can see agreement revenue, but not reliable margin", value: 1 },
      { label: "We can see both, but do not review them consistently", value: 2 },
      { label: "We review revenue, margin and account performance on a defined cadence", value: 3 },
    ],
  },
  {
    dimension: "recurring",
    prompt: "How deliberately is the agreement base used to plan technician staffing and seasonal base load?",
    options: [
      { label: "It is not connected to staffing decisions", value: 0 },
      { label: "We use rough experience and seasonal judgment", value: 1 },
      { label: "We compare the base with available capacity periodically", value: 2 },
      { label: "Agreement demand is built into an active staffing and capacity model", value: 3 },
    ],
  },
  {
    dimension: "pullthrough",
    prompt: "When a technician identifies repair or replacement work during PM, what normally happens next?",
    options: [
      { label: "It depends on the technician and may stay in the work notes", value: 0 },
      { label: "Dispatch or a manager usually hears about it", value: 1 },
      { label: "There is a defined handoff, but execution is inconsistent", value: 2 },
      { label: "The finding enters a tracked workflow with clear ownership and timing", value: 3 },
    ],
  },
  {
    dimension: "pullthrough",
    prompt: "How much visibility do you have into deficiencies found, quoted, won and lost?",
    options: [
      { label: "We do not track the full path", value: 0 },
      { label: "We can find the information with manual work", value: 1 },
      { label: "We track most stages, but the data is not consistently trusted", value: 2 },
      { label: "Leadership reviews conversion, aging and ownership from one reliable view", value: 3 },
    ],
  },
  {
    dimension: "pricing",
    prompt: "How often are agreement prices compared with actual labor, material and delivery cost?",
    options: [
      { label: "Rarely or only after a problem", value: 0 },
      { label: "During renewal when someone notices an issue", value: 1 },
      { label: "At least annually for most agreements", value: 2 },
      { label: "On a defined cadence with account-level performance data", value: 3 },
    ],
  },
  {
    dimension: "pricing",
    prompt: "How consistently are price increases, exceptions and discount decisions governed?",
    options: [
      { label: "They are mostly handled case by case", value: 0 },
      { label: "There are informal guardrails understood by a few people", value: 1 },
      { label: "Rules exist, but exceptions are not always visible", value: 2 },
      { label: "Guardrails, approvals and exception reporting are explicit", value: 3 },
    ],
  },
  {
    dimension: "tiers",
    prompt: "What does the customer see when comparing your service agreement options?",
    options: [
      { label: "A customized task list and price", value: 0 },
      { label: "A basic PM option with occasional add-ons", value: 1 },
      { label: "Multiple options, though the value difference is not always clear", value: 2 },
      { label: "Clearly differentiated tiers tied to customer outcomes and risk", value: 3 },
    ],
  },
  {
    dimension: "connected",
    prompt: "How is BAS or connected-equipment data used inside the service program?",
    options: [
      { label: "It is not part of the service model", value: 0 },
      { label: "A few controls-capable people use it informally", value: 1 },
      { label: "It supports selected accounts or agreement options", value: 2 },
      { label: "It is a defined part of the offer, workflow and customer value story", value: 3 },
    ],
  },
  {
    dimension: "renewal",
    prompt: "How far ahead of expiration does a deliberate renewal process normally begin?",
    options: [
      { label: "At expiration or when invoicing forces the issue", value: 0 },
      { label: "Within 30 days", value: 1 },
      { label: "30 to 90 days with an account review", value: 2 },
      { label: "90+ days with pricing, performance, risk and expansion reviewed", value: 3 },
    ],
  },
  {
    dimension: "utilization",
    prompt: "How well can leadership explain the gap between available technician hours and productive service hours?",
    options: [
      { label: "We cannot explain it reliably", value: 0 },
      { label: "Managers understand it through experience", value: 1 },
      { label: "We track several utilization measures, but action is inconsistent", value: 2 },
      { label: "The measures are trusted and drive scheduling, staffing and agreement goals", value: 3 },
    ],
  },
  {
    dimension: "sales",
    prompt: "Who owns follow-up after a service repair quote is delivered?",
    options: [
      { label: "Ownership depends on the account or whoever remembers", value: 0 },
      { label: "The owner or service manager usually handles it", value: 1 },
      { label: "Roles are assigned, but follow-up cadence varies", value: 2 },
      { label: "Ownership, timing and escalation are explicit and visible", value: 3 },
    ],
  },
  {
    dimension: "sales",
    prompt: "How visible are open service quotes, next steps, close rate and aging to leadership?",
    options: [
      { label: "They are not visible in one dependable place", value: 0 },
      { label: "We can assemble the answer when needed", value: 1 },
      { label: "A report exists, though next steps or aging are uneven", value: 2 },
      { label: "Leadership reviews a trusted view on a defined cadence", value: 3 },
    ],
  },
];

function scoreBand(score: number) {
  if (score < 40) {
    return {
      title: "Service activity, not yet a system.",
      copy: "The shop is creating service value, but too much depends on individual effort, memory and owner intervention.",
    };
  }
  if (score < 60) {
    return {
      title: "A foundation with material leakage.",
      copy: "The essential pieces exist, but inconsistent handoffs and limited visibility are keeping the program from compounding.",
    };
  }
  if (score < 80) {
    return {
      title: "A working program with uneven capture.",
      copy: "The service business has real structure. The next gains are likely hiding in specific gaps between field execution, pricing and commercial ownership.",
    };
  }
  return {
    title: "A managed service growth engine.",
    copy: "The program is operating from a strong base. The next questions are likely about optimization, connected service and increasing value per account.",
  };
}

export default function SelfScore() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [finished, setFinished] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "error">("idle");

  const dimensionScores = useMemo(() => {
    const grouped: Record<string, { total: number; count: number }> = {};
    questions.forEach((question, index) => {
      grouped[question.dimension] ??= { total: 0, count: 0 };
      grouped[question.dimension].total += answers[index] ?? 0;
      grouped[question.dimension].count += 1;
    });

    return Object.fromEntries(
      serviceDimensions.map((dimension) => {
        const group = grouped[dimension.key];
        const percentage = group ? Math.round((group.total / (group.count * 3)) * 100) : 0;
        return [dimension.key, percentage];
      }),
    );
  }, [answers]);

  const overallScore = useMemo(
    () =>
      Math.round(
        serviceDimensions.reduce(
          (total, dimension) => total + (dimensionScores[dimension.key] * dimension.weight) / 100,
          0,
        ),
      ),
    [dimensionScores],
  );

  const lowestDimensions = useMemo(
    () => [...serviceDimensions].sort((a, b) => dimensionScores[a.key] - dimensionScores[b.key]).slice(0, 2),
    [dimensionScores],
  );

  const current = questions[step];
  const band = scoreBand(overallScore);

  function selectAnswer(value: number) {
    setAnswers((currentAnswers) => ({ ...currentAnswers, [step]: value }));
  }

  function goForward() {
    if (answers[step] === undefined) return;
    if (step === questions.length - 1) {
      setFinished(true);
      return;
    }
    setStep((currentStep) => currentStep + 1);
  }

  function startOver() {
    setStarted(false);
    setFinished(false);
    setUnlocked(false);
    setStep(0);
    setAnswers({});
    setFormStatus("idle");
  }

  async function unlockResults(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("overall_score", String(overallScore));
    data.set("score_band", band.title);
    data.set("lowest_dimensions", lowestDimensions.map((dimension) => dimension.name).join(", "));
    data.set(
      "dimension_scores",
      serviceDimensions.map((dimension) => `${dimension.name}: ${dimensionScores[dimension.key]}`).join(" | "),
    );
    data.set("_subject", "New Keystone Service Program Self-Score");
    data.set("_template", "table");
    setFormStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/tom@keystonecommercialpartners.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error("Submission failed");
      setUnlocked(true);
    } catch {
      setFormStatus("error");
    }
  }

  if (!started) {
    return (
      <section className="section self-score-shell">
        <div className="shell self-score-intro">
          <p className="eyebrow">Free directional self-score</p>
          <h1>How strong is your service program?</h1>
          <p>
            Answer 12 operating questions and receive a directional score across agreements, pull-through, pricing, renewal, utilization and service sales.
          </p>
          <div className="self-score-meta">
            <span>About three minutes</span>
            <span>No financial documents</span>
            <span>Directional, not diagnostic</span>
          </div>
          <button className="button button-accent" type="button" onClick={() => setStarted(true)}>
            Start the Self-Score
          </button>
        </div>
      </section>
    );
  }

  if (!finished) {
    const selected = answers[step];
    return (
      <section className="section self-score-shell">
        <div className="shell question-wrap">
          <div className="score-progress">
            <div className="progress-meta">
              <span>Question {step + 1} of {questions.length}</span>
              <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="progress-track"><span style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div>
          </div>
          <div className="question-card">
            <p className="question-dimension">
              {serviceDimensions.find((dimension) => dimension.key === current.dimension)?.name}
            </p>
            <h2>{current.prompt}</h2>
            <div className="option-list">
              {current.options.map((option, index) => (
                <button
                  className={`option-button ${selected === option.value ? "option-button-selected" : ""}`}
                  type="button"
                  onClick={() => selectAnswer(option.value)}
                  aria-pressed={selected === option.value}
                  key={option.label}
                >
                  <span className="option-key">{String.fromCharCode(65 + index)}</span>
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
            <div className="question-actions">
              <button
                className="button button-outline-dark"
                type="button"
                onClick={() => setStep((currentStep) => Math.max(0, currentStep - 1))}
                disabled={step === 0}
              >
                Previous
              </button>
              <button className="button button-dark" type="button" onClick={goForward} disabled={selected === undefined}>
                {step === questions.length - 1 ? "See My Score" : "Next Question"}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section self-score-shell">
      <div className="shell result-wrap">
        <div className="result-top">
          <div className="result-score" style={{ "--result-score": `${overallScore * 3.6}deg` } as React.CSSProperties}>
            <div><strong>{overallScore}</strong><span>/100</span></div>
          </div>
          <div>
            <p className="eyebrow">Your directional score</p>
            <h2>{band.title}</h2>
            <p>{band.copy}</p>
          </div>
        </div>

        {!unlocked ? (
          <form className="result-gate" onSubmit={unlockResults}>
            <p className="eyebrow">Get the full breakdown</p>
            <h3>See your eight dimension scores and two likely priorities.</h3>
            <p>Enter your information to unlock the result on this screen and send the score to Keystone for follow-up.</p>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="score-name">Name</label>
                <input id="score-name" name="name" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="score-email">Email</label>
                <input id="score-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="field field-full">
                <label htmlFor="score-company">Company</label>
                <input id="score-company" name="company" autoComplete="organization" required />
              </div>
            </div>
            <div className="form-actions">
              <button className="button button-accent" type="submit" disabled={formStatus === "sending"}>
                {formStatus === "sending" ? "Sending…" : "Unlock My Breakdown"}
              </button>
              {formStatus === "error" ? (
                <p className="form-status form-status-error">The result could not send. Email Tom directly or try again.</p>
              ) : null}
            </div>
          </form>
        ) : (
          <div className="result-details">
            <p className="eyebrow">Your dimension breakdown</p>
            <h3>Where the program looks strongest and where to look first.</h3>
            <div className="result-bars">
              {serviceDimensions.map((dimension) => (
                <div className="result-bar" key={dimension.key}>
                  <label>{dimension.name}</label>
                  <div className="result-bar-track"><span style={{ width: `${dimensionScores[dimension.key]}%` }} /></div>
                  <b>{dimensionScores[dimension.key]}</b>
                </div>
              ))}
            </div>
            <div className="gap-callout">
              <p>
                Your lowest directional scores are <strong>{lowestDimensions[0].name}</strong> and <strong>{lowestDimensions[1].name}</strong>. Those are the first places to test with actual operating data.
              </p>
            </div>
            <div className="button-row" style={{ marginTop: 28 }}>
              <a className="button button-accent" href="/book">
                Discuss My Results
              </a>
              <button className="button button-outline-dark" type="button" onClick={startOver}>
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
