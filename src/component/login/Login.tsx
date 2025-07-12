import LoginImg from "@public/login.webp";
import React from "react";
const Login: React.FC = () => {
  return (
    <section className="py-6 pl-[56px] pr-6 flex justify-between items-center">
      <div className="content">xx</div>
      <div className="img_field w-[564px] h-[4665px] overflow-hidden">
        <img src={LoginImg} alt={"Login Image"} />
      </div>
    </section>
  );
};

export default Login;
