import React from "react";
import Sidebar from "../components/Sidebar";
import About from "../components/About";

const Aboutpage = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 flex flex-col">
      <div className="hidden lg:block md:col-span-1 ">
        <Sidebar />
      </div>
      <div className="col-span-2">
        <About />
      </div>
    </div>
  );
};

export default Aboutpage;
