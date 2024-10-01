import React from "react";
import Updateuser from "../components/Updateuser";
import Sidebar from "../components/Sidebar";

const UpdateUserpage = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 flex flex-col ">
      <div className="hidden lg:block md:col-span-1 ">
        <Sidebar />
      </div>

      <div className="col-span-1">
        <Updateuser />
      </div>
    </div>
  );
};

export default UpdateUserpage;
