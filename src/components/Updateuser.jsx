import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { selectCurrentUser, update } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import avtar from "../images/avtar.jpg";
import { api } from "../config";
import { VscGlobe } from "react-icons/vsc";

const Updateuser = () => {
  const currentuser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const { token } = currentuser;
  const { user } = currentuser;
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      email: user.email,
    },
  });

  const handleUpdate = async (data) => {
    const userData = {
      first_name: data?.first_name,
      last_name: data?.last_name,
      username: data?.username,
      email: data?.email,
    };
    setLoading(true);
    try {
      const res = await fetch(`${api.url}/users/update`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(userData),
      });
      if (res.ok) {
        const result = await res.json();
        dispatch(update(result.data));
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center mt-20 px-8">
      <form className="max-w-2xl" onSubmit={handleSubmit(handleUpdate)}>
        <div className="flex flex-wrap border shadow rounded-lg p-3 dark:bg-gray-600">
          <h2 className="text-3xl mx-auto text-gray-600 dark:text-gray-300 pb-2">
            Profile
          </h2>
          <div className="flex flex-col gap-2 w-full border-gray-400">
            <img
              className="rounded-full border-gray-300 h-24 w-24 object-cover cursor-pointer self-center mt-2"
              src={avtar}
              alt="Profile"
            />
            <div>
              <label className="text-gray-600 dark:text-gray-400 ">
                First Name
              </label>
              <input
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                {...register("first_name", {
                  required: {
                    value: true,
                    message: "first name is required",
                  },
                })}
                type="text"
              />
              <p className="mt-1 text-xs text-red-600">
                {errors.first_name?.message}
              </p>
            </div>
            <div>
              <label className="text-gray-600 dark:text-gray-400">
                Last Name
              </label>
              <input
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                {...register("last_name", {
                  required: {
                    value: true,
                    message: "last name is required",
                  },
                })}
                type="text"
              />
              <p className="mt-1 text-xs text-red-600">
                {errors.last_name?.message}
              </p>
            </div>
            <div>
              <label className="text-gray-600 dark:text-gray-400">
                User Name
              </label>
              <input
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                {...register("username", {
                  required: {
                    value: true,
                    message: "user name is required",
                  },
                })}
                type="text"
              />
              <p className="mt-1 text-xs text-red-600">
                {errors.username?.message}
              </p>
            </div>
            <div>
              <label className="text-gray-600 dark:text-gray-400">Email</label>
              <input
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                {...register("email", {
                  required: { value: true, message: "email is required" },
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "invalid email",
                  },
                })}
                type="text"
              />
              <p className="mt-1 text-xs text-red-600">
                {errors.email?.message}
              </p>
            </div>

            <div className="flex justify-end">
              <button
                className="py-1.5 px-3 m-1 text-center bg-violet-700 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700"
                type="submit"
              >
                {loading ? "loading" : "Update"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Updateuser;
