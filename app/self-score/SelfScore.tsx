"use client";

import { useMemo, useState } from "react";
import { serviceDimensions } from "../data";

type Option = { label: string; value: number };
type Question = { dimension: string; prompt: string; options: Option[] };

const questions: Question[] = [
  {
    dimension: "recurring",
    prompt: "Can you see revenue and gross margin by agreement?",
    options: [
      { label: "No. Neither is reliable.", value: 0 },
      { label: "We see revenue, but not reliable margin.", value: 1 },
      { label: "We see both, but don’t review them consistently.", value: 2 },
      { label: "We review both by account on a set cadence.", value: 3 },
    ],
  },
  {
    dimension: "recurring",
    prompt: "Does the agreement base drive staffing and seasonal capacity?",
    options: [
      { label: "No. Staffing is separate.", value: 0 },
      { label: "We use experience and seasonal judgment.", value: 1 },
      { label: "We compare demand and capacity periodically.", value: 2 },
      { label: "Agreement demand drives an active capacity plan.", value: 3 },
    ],
  },
  {
    dimension: "pullthrough",
    prompt: "A tech finds repair work during PM. What happens next?",
    options: [
      { label: "It may stay in the work notes.", value: 0 },
      { label: "Dispatch or a manager usually hears about it.", value: 1 },
      { label: "There’s a handoff, but it’s inconsistent.", value: 2 },
      { label: "It enters a tracked workflow with an owner and due date.", value: 3 },
    ],
  },
  {
    dimension: "pullthrough",
    prompt: "Can you see findings move from quote to win or loss?",
    options: [
      { label: "No. We don’t track the full path.", value: 0 },
      { label: "We can piece it together manually.", value: 1 },
      { label: "We track most stages, but don’t trust all the data.", value: 2 },
      { label: "We review conversion, aging, and ownership in one view.", value: 3 },
    ],
  },
  {
    dimension: "pricing",
    prompt: "How often do you compare PSA price with actual delivery cost?",
    options: [
      { label: "Rarely, or after a problem.", value: 0 },
      { label: "At renewal, if someone flags it.", value: 1 },
      { label: "At least annually for most agreements.", value: 2 },
      { label: "On a set cadence with account-level data.", value: 3 },
    ],
  },
  {
    dimension: "pricing",
    prompt: "How controlled are price increases, discounts, and exceptions?",
    options: [
      { label: "They’re handled case by case.", value: 0 },
      { label: "A few people know the informal guardrails.", value: 1 },
      { label: "Rules exist, but exceptions aren’t always visible.", value: 2 },
      { label: "Guardrails, approvals, and exceptions are explicit.", value: 3 },
    ],
  },
  {
    dimension: "tiers",
    prompt: "What does a customer see when comparing agreement options?",
    options: [
      { label: "A custom task list and a price.", value: 0 },
      { label: "A basic PM plan with add-ons.", value: 1 },
      { label: "Several options, but the value gap isn’t always clear.", value: 2 },
      { label: "Clear tiers tied to customer risk and outcomes.", value: 3 },
    ],
  },
  {
    dimension: "connected",
    prompt: "Does BAS or connected-equipment data create service work?",
    options: [
      { label: "It isn’t part of the service model.", value: 0 },
      { label: "A few controls-capable people use it informally.", value: 1 },
      { label: "It supports selected accounts or agreement options.", value: 2 },
      { label: "It’s built into the offer, workflow, and customer story.", value: 3 },
    ],
  },
  {
    dimension: "renewal",
    prompt: "When does renewal work start?",
    options: [
      { label: "At expiration, or when invoicing forces it.", value: 0 },
      { label: "Within 30 days.", value: 1 },
      { label: "30–90 days out, with an account review.", value: 2 },
      { label: "90+ days out, with price, risk, and growth reviewed.", value: 3 },
    ],
  },
  {
    dimension: "utilization",
    prompt: "Can leadership explain available versus productive tech hours?",
    options: [
      { label: "Not reliably.", value: 0 },
      { label: "Managers understand it from experience.", value: 1 },
      { label: "We track it, but action is inconsistent.", value: 2 },
      { label: "Trusted measures drive staffing, scheduling, and sales goals.", value: 3 },
    ],
  },
  {
    dimension: "sales",
    prompt: "Who owns follow-up after a repair quote goes out?",
    options: [
      { label: "It depends on who remembers.", value: 0 },
      { label: "The owner or service manager usually handles it.", value: 1 },
      { label: "Roles are assigned, but cadence varies.", value: 2 },
      { label: "Ownership, timing, and escalation are explicit.", value: 3 },
    ],
  },
  {
    dimension: "sales",
    prompt: "Can leadership see open quotes, next steps, close rate, and aging?",
    options: [
      { label: "No. They’re scattered.", value: 0 },
      { label: "We can assemble the answer when needed.", value: 1 },
      { label: "A report exists, but next steps or aging are uneven.", value: 2 },
      { label: "Leadership reviews one trusted view on a set cadence.", value: 3 },
    ],
  },
];

function scoreBand(score: number) {
  if (score < 40) return { title: "Activity, not yet a system.", copy: "Too much still depends on memory, individual effort, and owner intervention." };
  if (score < 60) return { title: "A base with material leakage.", copy: "The pieces exist. The handoffs and visibility don’t hold together yet." };
  if (score < 80) return { title: "A working program with uneven capture.", copy: "The structure is real. A few operating gaps are likely holding back the next gain." };
  return { title: "A managed service growth engine.", copy: "The base is strong. The next moves are optimization, connected service, and value per account." };
}

export default function SelfScore() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [finished, setFinished] = useState(false);

  const dimensionScores = useMemo(() => {
    const grouped: Record<string, { total: number; count: number }> = {};
    questions.forEach((question, index) => {
      grouped[question.dimension] ??= { total: 0, count: 0 };
      grouped[question.dimension].total += answers[index] ?? 0;
      grouped[question.dimension].count += 1;
    });
    return Object.fromEntries(serviceDimensions.map((dimension) => {
      const group = grouped[dimension.key];
      return [dimension.key, group ? Math.round((group.total / (group.count * 3)) * 100) : 0];
    }));
  }, [answers]);

  const overallScore = useMemo(() => Math.round(serviceDimensions.reduce(
    (total, dimension) => total + (dimensionScores[dimension.key] * dimension.weight) / 100,
    0,
  )), [dimensionScores]);

  const lowestDimensions = useMemo(
    () => [...serviceDimensions].sort((a, b) => dimensionScores[a.key] - dimensionScores[b.key]).slice(0, 2),
    [dimensionScores],
  );

  const current = questions[step];
  const band = scoreBand(overallScore);

  function goForward() {
    if (answers[step] === undefined) return;
    if (step === questions.length - 1) setFinished(true);
    else setStep((value) => value + 1);
  }

  function startOver() {
    setStarted(false);
    setFinished(false);
    setStep(0);
    setAnswers({});
  }

  if (!started) {
    return (
      <section className="section self-score-shell self-score-start">
        <div className="shell self-score-intro">
          <div>
            <p className="eyebrow">Free directional self-score</p>
            <h1>Where’s your service program leaking?</h1>
            <p>Answer 12 questions. See all eight scores. Get the two areas to test first.</p>
            <div className="self-score-meta">
              <span>No email</span><span>No financial files</span><span>About five minutes</span>
            </div>
            <button className="button button-accent" type="button" onClick={() => setStarted(true)}>Start the self-score</button>
          </div>
          <aside className="self-score-start-panel" aria-label="Self-score at a glance">
            <div className="stat-panel-header"><span>SPMA / Quick</span><span>Runs in your browser</span></div>
            <div><strong>12</strong><span>operating questions</span></div>
            <div><strong>8</strong><span>weighted dimensions</span></div>
            <div><strong>2</strong><span>first places to test</span></div>
            <small>Directional, not diagnostic.</small>
          </aside>
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
            <div className="progress-meta"><span>Question {step + 1} of {questions.length}</span><span>{Math.round(((step + 1) / questions.length) * 100)}%</span></div>
            <div className="progress-track"><span style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div>
          </div>
          <div className="question-card">
            <p className="question-dimension">{serviceDimensions.find((dimension) => dimension.key === current.dimension)?.name}</p>
            <h2>{current.prompt}</h2>
            <div className="option-list">
              {current.options.map((option, index) => (
                <button
                  className={`option-button ${selected === option.value ? "option-button-selected" : ""}`}
                  type="button"
                  onClick={() => setAnswers((value) => ({ ...value, [step]: option.value }))}
                  aria-pressed={selected === option.value}
                  key={option.label}
                >
                  <span className="option-key">{String.fromCharCode(65 + index)}</span><span>{option.label}</span>
                </button>
              ))}
            </div>
            <div className="question-actions">
              <button className="button button-outline-dark" type="button" onClick={() => setStep((value) => Math.max(0, value - 1))} disabled={step === 0}>Previous</button>
              <button className="button button-dark" type="button" onClick={goForward} disabled={selected === undefined}>{step === questions.length - 1 ? "See my score" : "Next"}</button>
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
          <div className="result-score" style={{ "--result-score": `${overallScore * 3.6}deg` } as React.CSSProperties}><div><strong>{overallScore}</strong><span>/100</span></div></div>
          <div><p className="eyebrow">Your directional score</p><h2>{band.title}</h2><p>{band.copy}</p></div>
        </div>
        <div className="result-details">
          <div className="result-details-heading"><div><p className="eyebrow">Eight-dimension breakdown</p><h3>Start with the two lowest signals.</h3></div><span>Directional only</span></div>
          <div className="result-bars">
            {serviceDimensions.map((dimension) => (
              <div className="result-bar" key={dimension.key}>
                <label>{dimension.name}</label>
                <div className="result-bar-track"><span style={{ width: `${dimensionScores[dimension.key]}%` }} /></div>
                <b>{dimensionScores[dimension.key]}</b>
              </div>
            ))}
          </div>
          <div className="gap-callout"><span>Look here first</span><p><strong>{lowestDimensions[0].name}</strong> and <strong>{lowestDimensions[1].name}</strong> are your lowest directional scores. Test those two with real operating data before changing the whole program.</p></div>
          <div className="button-row result-actions">
            <a className="button button-accent" href="/book">Discuss my results</a>
            <button className="button button-outline-dark" type="button" onClick={startOver}>Start over</button>
          </div>
        </div>
      </div>
    </section>
  );
}
