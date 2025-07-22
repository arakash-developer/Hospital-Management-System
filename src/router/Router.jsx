import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Appointments from "../pages/Appointments";
import Dashboard from "../pages/Dashboard";
import Doctors from "../pages/Doctors";
import NotFound from "../pages/NotFound";
import Patients from "../pages/Patients";
import Login from "../components/login/Login";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "patients",
        element: <Patients />,
      },
      {
        path: "doctors",
        element: <Doctors />,
      },
      {
        path: "appointments",
        element: <Appointments />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
