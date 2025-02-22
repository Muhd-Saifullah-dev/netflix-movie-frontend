import React from "react";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="min-h-screen w-full hero-bg bg-cover bg-center flex flex-col">
      <h1>HEllo world</h1>
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4 w-full">
        <Link to="/">
          <img src="/netflix-logo.png" alt="Logo" className="w-32 sm:w-52" />
        </Link>
      </header>

      <div className="flex-1 flex justify-center items-center p-4">
        <div className="w-full max-w-md p-6 sm:p-8 space-y-6 bg-black/60 shadow-md rounded-lg">
          <h1 className="text-center text-white text-2xl sm:text-3xl font-bold mb-4">
            Sign In
          </h1>
          <form className="space-y-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300 block"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                placeholder="you@example.com"
                id="email"
              />
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
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                placeholder="*******"
                id="password"
              />
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white font-semibold w-full py-2 px-2 rounded-md hover:bg-red-700 cursor-pointer"
            >
              Sign In
            </button>
          </form>

          <div className="text-center text-gray-400 gap-2">
           Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-red-500 font-bold hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
