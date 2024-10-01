import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { SlCallIn } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { logOut } from "../features/auth/authSlice";
const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <>
      {/* component */}

      <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[380px] overflow-y-auto text-center bg-gray-900">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <Link to={"/"}>
              <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
            </Link>
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">HS</h1>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]" />
        </div>

        <Link to={"/"}>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <IoHomeOutline size={28} />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Home
            </span>
          </div>
        </Link>

        <Link to={"/profile"}>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <CgProfile size={28} />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Profile
            </span>
          </div>
        </Link>
        <Link to={"/create-post"}>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <IoIosAddCircleOutline size={28} />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Create Post
            </span>
          </div>
        </Link>
        <Link to={"/about"}>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <IoIosInformationCircleOutline size={28} />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              About us
            </span>
          </div>
        </Link>
        <Link to={"/contact"}>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <SlCallIn size={22} />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Contact us
            </span>
          </div>
        </Link>

        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          onClick={() => dispatch(logOut())}
        >
          <CiLogout size={28} />

          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Logout
          </span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
