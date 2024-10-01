import React from "react";
import Createpost from "../components/Createpost";

import Sidebar from "../components/Sidebar";
const Createpostpage = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 flex flex-col">
      <div className="hidden lg:block md:col-span-1 ">
        <Sidebar />
      </div>
      <div className="col-span-1 py-10 ">
        <Createpost />
      </div>
    </div>
  );
};

export default Createpostpage;
