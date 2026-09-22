import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import NotificationProvider from "./app/providers/NotificationProvider";
import "./styles/globals.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </StrictMode>,
);
