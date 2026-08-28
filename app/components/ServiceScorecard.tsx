"use client";

import { useRef, useState } from "react";
import { trackEvent, TrackedLink } from "./TrackedLink";

type ScoreArea = "Agreement sales" | "Pricing" | "Renewals" | "Repair pull-through" | "Planning";
type Answer = 0 | 1 | 2;

type Question = {
  area: ScoreArea;
  question: string;
  definition: string;
};

const areaOrder: ScoreArea[] = [
  "Agreement sales",
  "Pricing",
  "Renewals",
  "Repair pull-through",
  "Planning",
];

const questions: Question[] = [
  {
    area: "Agreement sales",
    question: "When you finish an installation, does the service team know who owns getting that customer under agreement?",
    definition: "A signed agreement reaches service with scope, labor hours, schedule, exclusions, and an owner clear enough that nobody needs to call the seller.",
  },
  {
    area: "Agreement sales",
    question: "Can you name the customers whose equipment you installed in the last ten years but do not maintain?",
    definition: "You can produce a current list of equipment your company installed in the last ten years and identify who maintains it today.",
  },
  {
    area: "Agreement sales",
    question: "Does every target account have the current contractor and agreement expiration date attached to it?",
    definition: "Every target has a current provider, agreement expiration date, decision maker, and next action in one shared place.",
  },
  {
    area: "Pricing",
    question: "Can two people scope the same agreement and land within 10 percent of each other?",
    definition: "Two qualified people can walk the same building independently and land within 10 percent on planned labor hours.",
  },
  {
    area: "Pricing",
    question: "Is your agreement labor rate built from current burdened cost and recovery, and has it been rebuilt in the last 12 months?",
    definition: "The rate starts with current burdened labor cost and required recovery, and the calculation has been rebuilt within the last 12 months.",
  },
  {
    area: "Pricing",
    question: "Does every agreement include an automatic annual price increase?",
    definition: "Every agreement contains a written annual escalator rather than relying on someone to remember a renewal-time conversation.",
  },
  {
    area: "Renewals",
    question: "Do renewals start months before expiration, on a schedule that someone owns?",
    definition: "Every renewal enters a calendar-driven process months before expiration, with a named owner and planned price increase.",
  },
  {
    area: "Repair pull-through",
    question: "When a technician finds a problem, is there a defined path from finding to owned quote?",
    definition: "A technician finding becomes a scoped, owned quote with a due date before it leaves the service workflow.",
  },
  {
    area: "Repair pull-through",
    question: "Does every open repair quote have an owner and next date in one shared place?",
    definition: "Every open repair quote has a named owner, next action date, and status visible to service leadership in one place.",
  },
  {
    area: "Repair pull-through",
    question: "Do you track the units likely to need replacement in the next three years?",
    definition: "Equipment likely to need replacement within three years is tracked, discussed with the customer, and attached to an account plan.",
  },
  {
    area: "Planning",
    question: "Is one person accountable for service growth, with pay that changes if it does not grow?",
    definition: "One person owns the service-growth number and a meaningful part of that person's variable pay changes when the number moves.",
  },
  {
    area: "Planning",
    question: "Can you state how many agreement hours the service team has committed next month?",
    definition: "Your team can state next month's committed agreement hours, available service hours, and the gap without relying on overtime.",
  },
];

const areaMessages: Record<ScoreArea, string> = {
  "Agreement sales": "Start with the installed base: name the buildings, identify the current provider, and make agreement ownership explicit at project closeout.",
  "Pricing": "Standardize the walk, planned hours, burdened labor rate, margin, and escalator so two people can price the same building the same way.",
  "Renewals": "Move every expiration onto one calendar, start early, assign an owner, and make the annual increase part of the agreement.",
  "Repair pull-through": "Build one visible path from technician finding to quoted repair to replacement plan, with an owner and next date at every step.",
  "Planning": "Put one person against the growth number, connect compensation to it, and plan agreement hours before the month starts.",
};

const options: { label: string; value: Answer }[] = [
  { label: "Yes", value: 2 },
  { label: "Sometimes", value: 1 },
  { label: "No", value: 0 },
];

function scoreBand(score: number) {
  if (score <= 8) return "Right now, service growth depends on memory and individual effort.";
  if (score <= 15) return "The base is there. The operating system around it is not yet consistent.";
  if (score <= 20) return "You have a real service system, with a few leaks that are costing growth.";
  return "The system is working. The next move is to press the advantage.";
}

export function ServiceScorecard() {
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const completionTracked = useRef(false);

  function begin() {
    trackEvent("Scorecard start");
    setOpen(true);
  }

  function answerQuestion(index: number, value: Answer) {
    const next = { ...answers, [index]: value };
    setAnswers(next);

    if (Object.keys(next).length === questions.length && !completionTracked.current) {
      completionTracked.current = true;
      trackEvent("Scorecard completion");
    }
  }

  const complete = Object.keys(answers).length === questions.length;
  const total = Object.values(answers).reduce((sum, answer) => sum + answer, 0);

  const areaScores = areaOrder.map((area, order) => {
    const areaQuestions = questions
      .map((question, index) => ({ question, index }))
      .filter((item) => item.question.area === area);
    const earned = areaQuestions.reduce((sum, item) => sum + (answers[item.index] ?? 0), 0);
    return {
      area,
      order,
      normalized: areaQuestions.length ? earned / (areaQuestions.length * 2) : 1,
    };
  });

  const weakestArea = [...areaScores].sort(
    (a, b) => a.normalized - b.normalized || a.order - b.order,
  )[0].area;

  const emailBody = complete
    ? encodeURIComponent(
        "Keystone service score: " +
          total +
          " / 24\n\nStart with: " +
          weakestArea +
          "\n\n" +
          areaMessages[weakestArea] +
          "\n\nhttps://www.keystonecommercialpartners.com/#scorecard",
      )
    : "";

  return (
    <div className="scorecard-js">
      {!open ? (
        <div className="scorecard-launch">
          <p className="eyebrow eyebrow-gold">Service base scorecard</p>
          <h3>See where the next agreement is getting lost.</h3>
          <p>Twelve questions. No gate. Your answers stay in this browser.</p>
          <button className="button button-light" type="button" onClick={begin}>
            Score your service business
          </button>
          <small>10 min · private</small>
        </div>
      ) : (
        <div className="scorecard-open">
          <div className="scorecard-heading">
            <div>
              <p className="eyebrow eyebrow-gold">Service base scorecard</p>
              <h3>Answer from what happens every week, not what the process says.</h3>
            </div>
            <p>{Object.keys(answers).length} / {questions.length} answered</p>
          </div>

          <div className="question-list">
            {questions.map((item, index) => (
              <fieldset className="score-question" key={item.question}>
                <legend>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.question}
                </legend>
                <div className="answer-options">
                  {options.map((option) => (
                    <button
                      type="button"
                      key={option.label}
                      aria-pressed={answers[index] === option.value}
                      onClick={() => answerQuestion(index, option.value)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                <details>
                  <summary>What counts as a yes?</summary>
                  <p>{item.definition}</p>
                </details>
              </fieldset>
            ))}
          </div>

          {complete && (
            <section className="score-result" aria-live="polite">
              <div className="score-total">
                <strong>{total}</strong>
                <span>/ 24</span>
              </div>
              <div className="score-result-copy">
                <p className="eyebrow">Your result</p>
                <h3>{scoreBand(total)}</h3>
                <div className="weakest-area">
                  <span>Start here</span>
                  <strong>{weakestArea}</strong>
                  <p>{areaMessages[weakestArea]}</p>
                </div>
                <div className="score-actions">
                  <TrackedLink
                    className="button button-accent"
                    href="/#contact"
                    eventName="Call button click"
                  >
                    Talk through the result
                  </TrackedLink>
                  <a
                    className="text-link-light"
                    href={"mailto:?subject=" + encodeURIComponent("My Keystone service score") + "&body=" + emailBody}
                  >
                    Email the result to yourself
                  </a>
                </div>
                <p className="score-privacy">No score or answer was sent to Keystone.</p>
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
