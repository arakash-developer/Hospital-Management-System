import { routes } from "../src/router/";
import React from "react";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
