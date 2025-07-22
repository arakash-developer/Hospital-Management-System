import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { SettingsProvider } from "./core/contexts/settingsContext";
import "./index.css";
import { getMode, getSettingsFromCookie } from "./core/utils/serverHelpers.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SettingsProvider settingsCookie={getSettingsFromCookie} mode={getMode}>
      <App />
    </SettingsProvider>
  </StrictMode>
);
