import React from "react";
import Sidebar from "../components/Sidebar";
import PostList from "../components/PostList";

const Homepage = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 flex flex-col ">
      <div className="hidden lg:block md:col-span-1 ">
        <Sidebar />
      </div>
      <div className="col-span-1">
        <PostList />
      </div>
    </div>
  );
};

export default Homepage;
