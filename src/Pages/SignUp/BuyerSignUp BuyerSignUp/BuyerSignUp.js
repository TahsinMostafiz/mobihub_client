import React from "react";
import { Link } from "react-router-dom";

const BuyerSignUp = () => {
  return (
    <div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white text-accent shadow-lg mx-auto my-10">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-gray-400">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-4 py-3 rounded-md border border-accent bg-white text-accent focus:outline-secondary"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-3 rounded-md border border-accent bg-white text-accent focus:outline-secondary"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-3 rounded-md border border-accent bg-white text-accent focus:outline-secondary"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-md text-white bg-primary border font-semibold hover:border-primary hover:bg-white hover:text-primary transition duration-150 ease-out hover:ease-in">
            Sign Up
          </button>
        </form>
        <p className="text-xs text-center sm:px-6 text-gray-400">
          Already have an account?{" "}
          <Link to="/logIn" className="underline text-red-400">
            Please Log In
          </Link>
        </p>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-2xl text-accent">OR</p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            aria-label="Log in with Google"
            className="w-full px-4 py-3 rounded-md border border-primary bg-white text-primary font-semibold hover:border-primary hover:bg-primary hover:text-white transition duration-150 ease-out hover:ease-in"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyerSignUp;
