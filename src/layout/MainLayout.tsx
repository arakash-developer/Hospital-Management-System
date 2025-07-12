import Navbar from "@component/main/Navbar";
import Sidebar from "@component/main/Sidebar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div
      className="w-full h-full flex items-start gap-x-4
     md:gap-x-8 bg-[var(--background)]"
    >
      <Sidebar />
      <div className="w-full h-full mr-5 xl:mr-[62px]">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
