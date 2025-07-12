import Logo from "@public/logo.webp";
import React from "react";
const Sidebar: React.FC = () => {
  return (
    <div className="w-[235px] h-full bg-[var(--white)]">
      <div className="mt-[30px] flex justify-center items-center">
        <img src={Logo} alt="Logo " />
      </div>
    </div>
  );
};

export default Sidebar;
