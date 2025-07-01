import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../component/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children: [
      {
        path: "/home",
        Component: Home,  
       },
    ],  
  },
]);
