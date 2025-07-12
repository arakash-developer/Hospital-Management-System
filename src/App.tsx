import { routes } from "@router/Router.tsx";
import React from "react";
import { RouterProvider } from "react-router-dom";

const App: React.FC = () => {
  return <RouterProvider router={routes} />;
};

export default App;
