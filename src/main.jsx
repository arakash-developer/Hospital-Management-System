import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { SettingsProvider } from "./core/contexts/settingsContext";
import "./index.css";
import { getSettingsFromCookie } from "./core/utils/serverHelpers.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SettingsProvider settingsCookie={getSettingsFromCookie}>
      <App />
    </SettingsProvider>
  </StrictMode>
);
