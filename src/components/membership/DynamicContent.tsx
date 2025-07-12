import { useState } from "react";
import CommonNavbar from "../../common/CommonNavbar";
import Incubation from "./membershipTabs/Incubation";

const DynamicContent = () => {
  const [activeTab, setActiveTab] = useState("BUSINESS INCUBATION");
  const membershipTabs = [
    { label: "BUSINESS INCUBATION" },
    { label: "STARTUP" },
    { label: "FRANCHISE"},
    { label: "BUSINESS NETWORKING"},
  ].map((tab) => ({
    ...tab,
    isActive: tab.label === activeTab,
    onClick: () => setActiveTab(tab?.label),
  }));
  const renderContent = () => {
    switch (activeTab) {
      case "BUSINESS INCUBATION":
        return <Incubation/>;
      case "STARTUP":
        return <div className="text-center p-5">this is startup page</div>;
      case "FRANCHISE":
        return <div className="text-center p-5">this is franchise page</div>;
      case "BUSINESS NETWORKING":
        return <div className="text-center p-5">this is business networking page</div>;
      default:
        return <div>tab not found</div>;
    }
  };
  return (
    <div className="flex flex-col bg-gray-100 space-y-8 pb-12" >
      <div>
        <CommonNavbar
          tabs={membershipTabs}
          listClassName="flex space-x-6  px-2 py-1"
          itemClassName="text-sm p-2"
          containerClassName="flex justify-center "
        />
      </div>
      <div className=" border w-[90%] mx-auto  bg-gray-100">{renderContent()}</div>
    </div>
  );
};

export default DynamicContent;
