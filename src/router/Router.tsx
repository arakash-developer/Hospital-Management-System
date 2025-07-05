import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../component/Home";
import Login from "@/component/login/Login";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children: [
      {
        path: "/",
        Component: Login,  
       },
    ],  
  },
]);
