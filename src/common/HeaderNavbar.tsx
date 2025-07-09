import { useState } from "react";
import {
  call,
  facebook,
  insta,
  linkedin,
  twitter,
  youtube,
  message,
  logo,
  lock,
  sidebarIcon,
  closeSidebarIcon,
} from "../assets";
import CommonNavbar from "./CommonNavbar";
import { useLocation, useNavigate } from "react-router";

const HeaderNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();


  const navigate = useNavigate();

  const HomeTabs = [
  {
    label: "Home",
    isActive: location.pathname === "/home",
    onClick: () => navigate("/home"),
  },
  {
    label: "About",
    isActive: location.pathname === "/about",
    onClick: () => navigate("/comingsoon"),
  },
  {
    label: "Schemes",
    isActive: location.pathname === "/schemes",
    onClick: () => navigate("/schemes"),
  },
  {
    label: "Events",
    isActive: location.pathname === "/events",
    onClick: () => navigate("/comingsoon"),
  },
  {
    label: "Industrial Report",
    isActive: location.pathname === "/reports",
    onClick: () => navigate("/comingsoon"),
  },
];

  const navbarTabs = [
  {
    label: "Industrial Solution",
    isActive: location.pathname === "/category",
    onClick: () => {
      navigate("/category");
      closeSidebar();
    },
  },
  {
    label: "Project Reports",
    isActive: location.pathname === "/project-reports",
    onClick: () => {
      navigate("/comingsoon");
      closeSidebar();
    },
  },
  {
    label: "Services",
    isActive: location.pathname === "/services",
    onClick: () => {
      navigate("/comingsoon");
      closeSidebar();
    },
  },
  {
    label: "Franchise",
    isActive: location.pathname === "/franchise",
    onClick: () => {
      navigate("/comingsoon");
      closeSidebar();
    },
  },
  {
    label: "Startup",
    isActive: location.pathname === "/startup",
    onClick: () => {
      navigate("/comingsoon");
      closeSidebar();
    },
  },
  {
    label: "Membership",
    isActive: location.pathname === "/membership",
    onClick: () => {
      navigate("/membership");
      closeSidebar();
    },
  },
  {
    label: "Join Us",
    isActive: location.pathname === "/join-us",
    onClick: () => {
      navigate("/comingsoon");
      closeSidebar();
    },
  },
];


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <div className="bg-[#4a83f7] select-none">
        <div className="w-[90%] mx-auto flex justify-between p-2 items-center">
          <div className="flex space-x-6">
            <div className="flex  space-x-2 text-white">
              <img src={call} /> <p>91+ 7339xxxxxx</p>
            </div>
            <div className="flex space-x-2 text-white">
              <img src={message} /> <p>support@spir.org.in</p>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            {/* <p className="text-white">Follow us: </p> */}
            {/* <img src={facebook} />
            <img src={twitter} />
            <img src={youtube} />
            <img src={insta} />
            <img src={linkedin} /> */}
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto flex justify-between items-center p-4 select-none">
        {/* <img src={logo} /> */}
        <h1 className="text-5xl font-bold text-blue-400 cursor-pointer" onClick={() => navigate("/home")}>SPIR</h1>
        <CommonNavbar
          tabs={HomeTabs}
          listClassName="flex justify-center space-x-6"
          itemClassName="bg-transparent"
        />
        <div className="flex space-x-6 items-center">
          <p className="hover:text-[#fa8a3f] font-bold">My Account</p>
          {/* <img src={lock} /> */}
          <img
            src={sidebarIcon}
            onClick={toggleSidebar}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div
        className={`fixed top-12 right-0 h-full w-80 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50 select-none`}
      >
        <div className="flex justify-end pr-4 pt-6">
          <img
            src={closeSidebarIcon}
            onClick={closeSidebar}
            className="hover:cursor-pointer"
          />
        </div>
        <div className="p-4">
          <CommonNavbar
            tabs={navbarTabs}
            listClassName="flex flex-col"
            itemClassName="p-4 rounded-lg"
            onClick={closeSidebar}
          />
        </div>
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default HeaderNavbar;
