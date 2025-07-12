import Login from "@component/login/Login";
import MainLayout from "@layout/MainLayout";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Login,
      },
    ],
  },
]);
