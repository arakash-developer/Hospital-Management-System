import DownArrow from "@/assets/DownArrow";
import Invite from "@/assets/Invite";
import LogOut from "@/assets/LogOut";
import Mail from "@/assets/Mail";
import Notification from "@/assets/Notification";
import NotifyIcon from "@/assets/NotifyIcon";
import Setting from "@/assets/Setting";
import UserProfile from "@/assets/UserProfile";
import { Contex } from "@/context/User";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [routeName, setRouteName] = useState("");
  const token = localStorage.getItem("logintoken");
  const adminToken = localStorage.getItem("administrator");
  const userDataString = localStorage.getItem("user_data");
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const { forgetHide } = useContext(Contex);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileBtnRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Get the first part of the path after "/"
    const currentRoute = window.location.pathname.split("/")[1];
    setRouteName(currentRoute);
  }, [location.pathname]);

  // Close profile box when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileBtnRef.current &&
        !profileBtnRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    }
    if (profileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileOpen]);

  const ProfilemenuItems = [
    {
      label: "View profile",
      icon: <UserProfile />,
      link: "/globalprofile",
    },
    {
      label: "Invite",
      icon: <Invite />,

      link: "/invite",
    },
    {
      label: "Notification",
      icon: <Notification />,
      link: "/notifications",
    },
    {
      label: "Settings",
      icon: <Setting />,
      link: "/settings",
    },
    {
      label: "Log Out",
      icon: <LogOut />,
      link: "/logout",
    },
  ];

  return (
    <>
      <nav className="mt-[32px] mb-6 mr-[80px] flex justify-between items-center">
        {token || adminToken ? (
          <>
            <div className="ml-8 flex items-center relative ">
              <input
                type="text"
                placeholder="Search"
                className="custom-black-input w-[372px] h-[40px] py-2 px-[40px] bg-[var(--secondary)] border border-[var(--neutral-400)] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm cursor-pointer text-[#919191] font-normal text-sm leading-[171%] text-[var(--text-disabled)]"
              />
              <div className="absolute left-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.74991 12.7796C12.6606 11.5427 14.0174 8.1805 12.7804 5.26997C11.5434 2.35945 8.18098 1.00274 5.27028 2.23968C2.35958 3.47663 1.0028 6.83882 2.23982 9.74934C3.47683 12.6599 6.83921 14.0166 9.74991 12.7796Z"
                      stroke="#919191"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.5586 11.5581L15.9999 15.9998"
                      stroke="#919191"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex gap-x-[25px] items-center">
              <NotifyIcon />
              <div
                className="flex gap-x-1 items-center cursor-pointer relative profile_btn"
                ref={profileBtnRef}
                onClick={() => setProfileOpen((prev) => !prev)}
              >
                <div className="w-[35px] h-[35px] overflow-hidden rounded-full">
                  <img src={userData?.avatar_url} alt="Avatar" />
                </div>
                <DownArrow />

                <div
                  className={`profile_box absolute top-[50px] right-0 profile_popup min-w-[218px] rounded-[8px] transition-all duration-200 ease-in-out
                    ${
                      profileOpen
                        ? "opacity-100 scale-100 pointer-events-auto visible"
                        : "opacity-0 scale-95 pointer-events-none invisible"
                    }`}
                  style={{ zIndex: 100 }}
                >
                  <div className="py-3 px-4 flex items-start gap-x-3">
                    <div className="">
                      <div className="w-[40px] h-[40px] overflow-hidden rounded-full">
                        <img src={userData?.avatar_url} alt="Avatar" />
                      </div>
                    </div>
                    <div className="">
                      <h3 className="font-medium text-sm leading-[171%] text-[var(--primary2)]">
                        {userData?.username}
                      </h3>
                      <p className="font-normal text-xs leading-[135%] text-[var(--gray)] flex gap-x-1 items-center">
                        <Mail />
                        {userData?.email}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    {ProfilemenuItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.link}
                        className="py-[10px] pl-4 hover:bg-[var(--pop-up)] text-[var(--text-secondary)] flex items-center gap-x-3 group cursor-pointer hover:text-[var(--primary2)]"
                      >
                        {item.icon}
                        <p className="font-normal text-sm leading-[171%] text-[var(--text-secondary)] group-hover:text-[var(--primary2)]">
                          {item.label}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div
            className="flex justify-end w-full
           items-center"
          >
            {!forgetHide && (
              <Link to={routeName === "" ? "/signup" : "/"} className="">
                <p className="font-normal text-base leading-[150%] text-right text-var(--primary2)">
                  {routeName === "forget"
                    ? "Remember Password?"
                    : routeName === ""
                    ? "New to 4AMI?"
                    : "Already have an account?"}

                  <span className="ml-1 not-italic font-semibold text-lg leading-[156%] text-[var(--primary)]">
                    {routeName === "forget"
                      ? "Log In"
                      : routeName === ""
                      ? "Sign Up"
                      : "Log In"}
                  </span>
                </p>
              </Link>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
