import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router/Router.tsx"; 

const App: React.FC = () => {
  return <RouterProvider router={routes} />;
};

export default App;
