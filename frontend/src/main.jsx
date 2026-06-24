import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppProviders from "./app/providers/app-providers";
import AppRoutes from "./app/routes/app-routes";
import "./css/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  </StrictMode>,
);
