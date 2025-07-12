import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { UserProvider } from "./context/User.tsx";
import "./index.css";
import { routes } from "./router/Router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={routes} />
    </UserProvider>
  </StrictMode>
);
