import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ServiceModelPage from "../../app/service-model/page";
import "../../app/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ServiceModelPage />
  </StrictMode>,
);
