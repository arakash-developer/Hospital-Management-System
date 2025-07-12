import LoginImg from "@public/login.webp";
import React from "react";
const Login: React.FC = () => {
  return (
    <div className="bg-[var(--white)] py-6 pl-[56px] pr-6 flex justify-between items-center">
      <div className="">xx</div>
      <div className="img_field w-[564px] h-[465px] overflow-hidden">
        <img src={LoginImg} alt={"Login Image"} />
      </div>
    </div>
  );
};

export default Login;
