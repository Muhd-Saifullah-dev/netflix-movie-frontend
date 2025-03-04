import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {useAuthStore} from "../store/authUser";

const SignupPage = () => {

 const { Signup,user,loading}= useAuthStore()
 console.log("user info :: ",user)
  const {searchParams}=new URL(document.location)
  const emailvalue=searchParams.get("email")
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, touchedFields },
  } = useForm({
    defaultValues: {
      email: emailvalue || "",
      password: "",
      username: "",
      confirmPassword: "",
    },
  });


  const onSubmit = (data) => {
    console.log("Form Data:", data);
    const {email,password,username }=data
    Signup({email,password,username})
    reset();
  };
  return (
    <div className="min-h-screen w-full hero-bg bg-cover bg-center flex flex-col">
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4 w-full">
        <Link to="/">
          <img src="/netflix-logo.png" alt="Logo" className="w-32 sm:w-52" />
        </Link>
      </header>

      <div className="flex-1 flex justify-center items-center p-4">
        <div className="w-full max-w-md p-6 sm:p-8 space-y-6 bg-black/60 shadow-md rounded-lg">
          <h1 className="text-center text-white text-2xl sm:text-3xl font-bold mb-4">
            Sign Up
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-300 block"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring-1"
                placeholder="John Doe"
                id="username"
                {...register("username", {
                  required: "username is required",
                  minLength: {
                    value: 8,
                    message: "Username must be at least 8 characters",
                  },
                })}
              />
              {touchedFields.username && errors.username && (
                <span className="text-sm mt-1 text-red-500">
                  {errors.username.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300 block"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring-1"
                placeholder="you@example.com"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {touchedFields.email && errors.email && (
                <span className="text-sm mt-1 text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300 block"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring-1"
                placeholder="*******"
                id="password"
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 8,
                    message: "password must be at least 8 character",
                  },
                })}
              />
              {touchedFields.password && errors.password && (
                <span className="text-sm mt-1 text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-300 block"
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring-1"
                placeholder="*******"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) => {
                    const password = getValues("password");
                    if (value !== password) {
                      return "Passwords do not match";
                    }
                    return true;
                  },
                })}
              />
              {touchedFields.confirmPassword && errors.confirmPassword && (
                <span className="text-sm mt-1 text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className={`${loading?"bg-red-500":"bg-red-600"} text-white font-semibold w-full py-2 px-2 rounded-md hover:bg-red-700 cursor-pointer`}
            >
            {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          <div className="text-center text-gray-400 gap-2">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-red-500 font-bold hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
