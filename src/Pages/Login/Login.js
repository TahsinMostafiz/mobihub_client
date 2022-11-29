import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import loginBanner from "../../assets/login/login-banner.jpg";

const Login = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? loginBanner : "none";

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div
        className="py-20 text-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: "100%",
        }}
      >
        <h2 className="text-5xl text-white">Log In</h2>
      </div>
      <div className="bg-neutral py-10">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white text-accent shadow-lg mx-auto my-10">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block text-gray-400">
                Email
              </label>
              <input
                type="text"
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

              <div className="flex justify-end text-xs text-gray-400 py-2">
                <Link>Forgot Password?</Link>
              </div>
            </div>
            <button className="block w-full p-3 text-center rounded-md text-white bg-accent border font-semibold hover:border-accent hover:bg-white hover:text-accent transition duration-150 ease-out hover:ease-in">
              LOG IN
            </button>
          </form>
          <p className="text-xs text-center sm:px-6 text-gray-400">
            New to Doctors Portal?
            <Link to="/signUp" className="underline text-secondary">
              Create new account
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
              className="w-full px-4 py-3 rounded-md border border-accent bg-white text-accent"
            >
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
