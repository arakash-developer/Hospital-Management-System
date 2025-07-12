import { useContext, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/main/Navbar";
import Sidebar from "../component/main/Sidebar";
import { Contex } from "../context/User";

const MainLayout = () => {
  const { assetTerm } = useContext(Contex);
  const containerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true); // Track initial render

  useEffect(() => {
    // Skip the effect on the initial mount
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Scroll to bottom when assetTerm changes
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [assetTerm]); // ✅ Only run when assetTerm changes

  return (
    <div className="h-screen overflow-hidden bg-[var(--background)]">
      <div className="flex items-start" style={{ height: "100vh" }}>
        <Sidebar />
        <div className="h-full w-full">
          <Navbar />
          <div
            className="overflow-y-scroll bg-[var(--background)]"
            style={{ height: "calc(100% - 88px)" }}
            ref={containerRef}
          >
            <div className="ml-8">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
