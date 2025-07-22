import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Appointments from "../pages/Appointments";
import Dashboard from "../pages/Dashboard";
import Doctors from "../pages/Doctors";
import NotFound from "../pages/NotFound";
import Patients from "../pages/Patients";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
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
