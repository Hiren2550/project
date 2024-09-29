import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { createUserAsync } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleForm = (data) => {
    const userData = {
      first_name: data.first_name,
      last_name: data.last_name,
      username: data.username,
      email: data.email,
      password: data.password,
    };

    dispatch(createUserAsync(userData));

    reset();
  };
  return (
    <div className="bg-white w-screen font-sans text-gray-900">
      <div className=" ">
        <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="mx-2 py-2 text-center md:mx-auto md:w-2/3 md:py-10">
            <h1 className="mb-1 text-2xl font-black leading-2 sm:text-5xl xl:text-4xl">
              Sign up
            </h1>
          </div>
        </div>
      </div>
      <div className="md:w-2/3 mx-auto w-full pb-16 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl">
        <form
          noValidate
          className="shadow-lg mb-4 rounded-lg border border-gray-100 py-10 px-8"
          onSubmit={handleSubmit(handleForm)}
        >
          <div className="mt-8">
            <label className="text-gray-800 text-xs block mb-2">
              First Name
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                {...register("first_name", {
                  required: {
                    value: true,
                    message: "first name is required",
                  },
                })}
                autoComplete="off"
                className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                placeholder="Enter first name"
              />
            </div>
            <p className="mt-1 text-xs text-red-600">
              {errors.first_name?.message}
            </p>
          </div>
          <div className="mt-8">
            <label className="text-gray-800 text-xs block mb-2">
              Last Name
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                {...register("last_name", {
                  required: {
                    value: true,
                    message: "last name is required",
                  },
                })}
                autoComplete="off"
                className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                placeholder="Enter last name"
              />
            </div>
            <p className="mt-1 text-xs text-red-600">
              {errors.last_name?.message}
            </p>
          </div>

          <div className="mt-8">
            <label className="text-gray-800 text-xs block mb-2">
              User Name
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                {...register("username", {
                  required: {
                    value: true,
                    message: "user name is required",
                  },
                })}
                autoComplete="off"
                className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                placeholder="Enter user name"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                className="w-[18px] h-[18px] absolute right-2"
                viewBox="0 0 24 24"
              >
                <circle cx={10} cy={7} r={6} data-original="#000000" />
                <path
                  d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                  data-original="#000000"
                />
              </svg>
            </div>
            <p className="mt-1 text-xs text-red-600">
              {errors.username?.message}
            </p>
          </div>
          <div className="mt-8">
            <label className="text-gray-800 text-xs block mb-2">Email</label>
            <div className="relative flex items-center">
              <input
                type="text"
                {...register("email", {
                  required: { value: true, message: "email is required" },
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "invalid email",
                  },
                })}
                autoComplete="off"
                className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                placeholder="Enter email"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                className="w-[18px] h-[18px] absolute right-2"
                viewBox="0 0 682.667 682.667"
              >
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000" />
                  </clipPath>
                </defs>
                <g
                  clipPath="url(#a)"
                  transform="matrix(1.33 0 0 -1.33 0 682.667)"
                >
                  <path
                    fill="none"
                    strokeMiterlimit={10}
                    strokeWidth={40}
                    d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                    data-original="#000000"
                  />
                  <path
                    d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                    data-original="#000000"
                  />
                </g>
              </svg>
            </div>
            <p className="mt-1 text-xs text-red-600">{errors.email?.message}</p>
          </div>
          <div className="mt-8">
            <label className="text-gray-800 text-xs block mb-2">Password</label>
            <div className="relative flex items-center">
              <input
                type="password"
                {...register("password", {
                  required: { value: true, message: "password is required" },
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message: `- at least 8 characters\n
                 - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
                 - Can contain special characters`,
                  },
                })}
                autoComplete="new-password"
                className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                placeholder="Enter password"
              />
            </div>
            <p className="mt-1 text-xs text-red-600">
              {errors.password?.message}
            </p>
          </div>
          <div className="mt-8">
            <label className="text-gray-800 text-xs block mb-2">
              Confirm-password
            </label>
            <div className="relative flex items-center">
              <input
                type="password"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "confirm password is required",
                  },
                  validate: (value, formValues) =>
                    value === formValues.password || "password not matching",
                })}
                autoComplete="confirm-password"
                className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                placeholder="Enter confirm password"
              />
            </div>
            <p className="mt-1 text-xs text-red-600">
              {errors.confirmPassword?.message}
            </p>
          </div>

          <div className="flex items-center mt-5">
            <div className="flex-1" />
            <button
              className="cursor-pointer rounded bg-blue-600 py-2 px-8 text-center text-lg font-bold  text-white"
              type="submit"
            >
              Create account
            </button>
          </div>
          <p className="text-gray-800 text-sm mt-8 text-center">
            Already have an account?{" "}
            <Link
              to={"/sign-in"}
              className="text-blue-500 font-semibold hover:underline ml-1"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
