import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ScorecardPage from "../../app/scorecard/page";
import "../../app/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ScorecardPage />
  </StrictMode>,
);
