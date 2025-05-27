import { useState } from "react";
import { call, facebook, insta, linkedin, twitter, youtube, message, logo, lock, sidebarIcon, closeSidebarIcon, } from "../assets";
import CommonNavbar from "./CommonNavbar";

const HeaderNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const HomeTabs = [
    { label: "Home", path: "/" },
    { label: "About", path: "#" },
    { label: "Schemes", path: "#" },
    { label: "Events", path: "#" },
    { label: "Industrial Report", path: "#" },
  ];
  const navbarTabs = [
    { label: "INDUSTRIAL SOLUTION", path: "/category" },
    { label: "PROJECTS REPORTS", path: "#" },
    { label: "EDP", path: "#" },
    { label: "MEMBERSHIP", path: "#" },
    { label: "WORKSHOPS", path: "#" },
    { label: "JOIN US", path: "#" },
  ];


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
 
const closeSidebar = () => {
  setSidebarOpen(false);
}
  return (
    <>
      <div className="bg-[#4a83f7]  ">
        <div className="w-[90%] mx-auto flex justify-between p-2 items-center">
          <div className="flex space-x-6">
            <div className="flex space-x-2 text-white">
              <img src={call} /> <p>91+ 7607655555</p>
            </div>
            <div className="flex space-x-2 text-white">
              <img src={message} /> <p>support@iid.ord.in</p>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <p className="text-white">Follow us: </p>
            <img src={facebook} />
            <img src={twitter} />
            <img src={youtube} />
            <img src={insta} />
            <img src={linkedin} />
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto flex justify-between items-center  p-4">
        <img src={logo} />
        <CommonNavbar tabs={HomeTabs} listClassName="flex justify-center space-x-6" />
        <div className="flex space-x-4 items-center ">
          <p className="hover:text-[#fa8a3f] font-bold">Login</p>
          <p>|</p>
          <p className="hover:text-[#fa8a3f] font-bold">Signup</p>
          <img src={lock} />
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
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-end pr-4 pt-6">
        <img src={closeSidebarIcon} 
        onClick={closeSidebar}
        className="hover:cursor-pointer"
        />
        </div>
        <div className="p-4">
          <CommonNavbar tabs={navbarTabs}  listClassName="flex flex-col space-y-4" onClick={closeSidebar}  />
        </div>
      </div>

      {/* 2️⃣ Conditionally render backdrop only when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default HeaderNavbar;
