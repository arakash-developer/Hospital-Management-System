import { Outlet } from "react-router";
import Navbar from "../component/main/Navbar";
import Sidebar from "../component/main/Sidebar";

const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
