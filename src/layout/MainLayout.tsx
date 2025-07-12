import Navbar from "@component/main/Navbar";
import Sidebar from "@component/main/Sidebar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="w-full h-full flex items-start gap-x-8 bg-[var(--background)]">
      <Sidebar />
      <div className="w-full h-full mr-[62px]">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
