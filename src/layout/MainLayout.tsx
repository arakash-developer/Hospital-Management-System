import Navbar from "@component/main/Navbar";
import Sidebar from "@component/main/Sidebar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="w-full flex bg-[var(--background)]">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
