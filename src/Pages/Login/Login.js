import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBanner from "../../assets/login/login-banner.jpg";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../../Hooks/useToken";

const googleProvider = new GoogleAuthProvider();
const Login = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? loginBanner : "none";
  const { logIn, providerLogin } = useContext(AuthContext);
  const [logInError, setLogInError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // logIn
  const handleLogin = (data) => {
    setLogInError("");
    logIn(data.email, data.password)
      .then(() => {
        // Signed in
        toast.success("User Login Successfully");
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLogInError(errorMessage);
        toast.error(errorCode, errorMessage);
      });
  };

  //Google Login
  const handleGoogleLogIn = () => {
    providerLogin(googleProvider)
      .then(() => {
        toast.success("User Log in Successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

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
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block text-gray-400">
                Email
              </label>
              <input
                {...register("email", {
                  required: "Please provide your registered email address",
                })}
                type="text"
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
                  required: true,
                })}
                type="password"
                name="password"
                id="password"
                className="w-full px-4 py-3 rounded-md border border-accent bg-white text-accent focus:outline-secondary"
              />
              {errors.password && (
                <p role="alert" className="text-orange-700">
                  {errors.password?.message}
                </p>
              )}
              {logInError && <p className="text-orange-700">{logInError}</p>}

              <div className="flex justify-end text-xs text-gray-400 py-2">
                <Link>Forgot Password?</Link>
              </div>
            </div>
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-md text-white bg-accent border font-semibold hover:border-accent hover:bg-white hover:text-accent transition duration-150 ease-out hover:ease-in"
            >
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
              onClick={handleGoogleLogIn}
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
