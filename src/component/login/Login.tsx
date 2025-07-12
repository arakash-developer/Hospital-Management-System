import EyeIcon from "@/assets/EyeIcon";
import Hiddeneye from "@/assets/Hiddeneye";
import LoginImg from "@public/login.webp";
import { Checkbox, Input, notification } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ScaleLoader } from "react-spinners";

const Login: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eyeon, seteyeon] = useState(false);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleTogglePassword = () => {
    seteyeon(!eyeon);
  };
  const handleRemember = () => {
    setChecked(!checked);
  };
  const handleLogin = async () => {
    console.log("Okk");
  };

  return (
    <div className="max-w-[1100px] bg-[var(--white)] py-6 pl-5 md:pl-[56px] xl:pr-6 flex flex-col xl:gap-[80px] justify-center items-center md:flex-row md:justify-between">
      <div className="w-[387px]">
        <h1 className="h1_pageTitle">Log In</h1>
        <p className="body_textRegular mt-2 mb-6">
          Log in to securely access your dashboard
        </p>
        <div className="flex flex-col gap-y-[2px]">
          <label htmlFor="email" className="inputField_tableHeader">
            Email / Username
          </label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] w-full h-[40px] border-[1.4px] border-[var(--field_stroke_color)] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)]"
          />
        </div>
        <div
          className="mt-4
         flex flex-col gap-y-[2px]"
        >
          <label htmlFor="email" className="inputField_tableHeader">
            Password
          </label>
          <div className="relative">
            <Input
              id="password"
              type={eyeon ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--field_stroke_color)] w-full h-[40px] border-[1.4px] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
            />
            <div
              onClick={handleTogglePassword}
              className="absolute right-[16px] top-1/2 -translate-y-1/2 cursor-pointer"
            >
              {eyeon ? <EyeIcon /> : <Hiddeneye />}
            </div>
          </div>
        </div>
        <div className="mt-2 mb-6">
          <div className="w-full flex justify-between items-center">
            <div
              onClick={handleRemember}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="flex items-center">
                <Checkbox
                  checked={checked}
                  className="custom-red-checkbox"
                ></Checkbox>
              </div>

              <p className="caption_meta">Remember Password</p>
            </div>
            <Link to="/forget" className="caption_metaRightPrimary">
              Forgot Password?
            </Link>
          </div>
        </div>
        <button
          type="submit"
          onClick={handleLogin}
          className="button_cta py-3 px-8 bg-[var(--primary)] rounded-[8px] cursor-pointer"
        >
          {loading ? (
            <ScaleLoader height="15px" width="2px" color="#fff" />
          ) : (
            "Log In "
          )}
        </button>
      </div>
      <div className="img_field xl:w-[564px] xl:h-[465px] overflow-hidden scale-[0.5] xl:scale-100">
        <img className="w-full h-full " src={LoginImg} alt={"Login Image"} />
      </div>
    </div>
  );
};

export default Login;
