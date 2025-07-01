import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { routes } from "./router/Router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
