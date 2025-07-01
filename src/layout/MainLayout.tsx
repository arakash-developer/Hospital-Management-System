import { Outlet } from "react-router";
import Navbar from "../component/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      MainLayout
      <Outlet/> 
    </>
  );
};

export default MainLayout;
