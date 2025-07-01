import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);
