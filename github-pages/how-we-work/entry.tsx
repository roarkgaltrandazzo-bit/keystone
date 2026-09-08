import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HowWeWorkPage from "../../app/how-we-work/page";
import "../../app/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HowWeWorkPage />
  </StrictMode>,
);
