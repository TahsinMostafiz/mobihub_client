import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const BuyerSignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleBuyerSignUp = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User create successfully");
        const userInfo = {
          displayName: data.buyerName,
        };
        console.log(userInfo);
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => console.log(err));
      })
      .catch((errors) => {
        const errorMessage = errors.message;
        toast.error(errorMessage);
        setSignUpError(errorMessage);
      });
  };
  return (
    <div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white text-accent shadow-lg mx-auto my-10">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleBuyerSignUp)} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="buyerName" className="block text-gray-400">
              Name
            </label>
            <input
              {...register("buyerName", { required: "Name is required" })}
              type="text"
              name="buyerName"
              id="buyerName"
              className="w-full px-4 py-3 rounded-md border border-accent bg-white text-accent focus:outline-secondary"
            />
            {errors.buyerName && (
              <p className="text-orange-700">{errors.buyerName?.message}</p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-400">
              Email
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-3 rounded-md border border-accent bg-white text-accent focus:outline-secondary"
            />
            {errors.email && (
              <p className="text-orange-700">{errors.email?.message}</p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-400">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password required",
                minLength: {
                  value: 6,
                  message: "Password should be 6 characters or longer",
                },
                pattern: {
                  value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%&@? "])/,
                  message: "Password should be strong",
                },
              })}
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-3 rounded-md border border-accent bg-white text-accent focus:outline-secondary"
            />
            {errors.password && (
              <p className="text-orange-700">{errors.password?.message}</p>
            )}
          </div>
          <button className="block w-full p-3 text-center rounded-md text-white bg-primary border font-semibold hover:border-primary hover:bg-white hover:text-primary transition duration-150 ease-out hover:ease-in">
            Sign Up
          </button>
          {signUpError && <p className="text-orange-700 py-2">{signUpError}</p>}
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
