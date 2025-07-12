import LoginImg from "@public/login.webp";
import React from "react";
const Login: React.FC = () => {
  return (
    <div className="bg-[var(--white)] py-6 pl-5 md:pl-[56px] md:pr-6 flex  flex-col justify-center items-center md:flex-row md:justify-between">
      <div className="">
        <h1>Log In</h1>
        <p>Log in to securely access your dashboard</p>
      </div>
      <div className="img_field xl:w-[564px] xl:h-[465px] overflow-hidden scale-[0.5] xl:scale-1">
        <img className="w-full h-full " src={LoginImg} alt={"Login Image"} />
      </div>
    </div>
  );
};

export default Login;
