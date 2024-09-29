import React from "react";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";

const Profilepage = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 flex flex-col">
      <div className="hidden lg:block md:col-span-1 ">
        <Sidebar />
      </div>
      <div className="col-span-2">
        <Profile />
      </div>
    </div>
  );
};

export default Profilepage;
