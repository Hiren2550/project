import React from "react";
import Sidebar from "../components/Sidebar";
import OtherProfile from "../components/OtherProfile";

const OtherProfilepage = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 flex flex-col">
      <div className="hidden lg:block md:col-span-1 ">
        <Sidebar />
      </div>
      <div className="col-span-2">
        <OtherProfile />
      </div>
    </div>
  );
};

export default OtherProfilepage;
