import Login from "@/component/login/Login";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";

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
