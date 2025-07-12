import Navbar from "@component/main/Navbar";
import Sidebar from "@component/main/Sidebar";
import { Outlet } from "react-router";

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
