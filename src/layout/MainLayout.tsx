import { Outlet } from "react-router";
import Navbar from "../component/main/Navbar";
import Sidebar from "../component/main/Sidebar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      MainLayout
      <Outlet />
    </>
  );
};

export default MainLayout;
