import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import loginBanner from "../../assets/login/login-banner.jpg";
import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";

const SignUp = () => {
  const [text, setText] = useState("");
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

  const buyerText = () => {
    setText("Buyer");
  };
  const sellerText = () => {
    setText("Seller");
  };
  return (
    <>
      <NavBar></NavBar>
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
        <h2 className="text-5xl text-white">Create Account for {text}</h2>
      </div>
      <div className="bg-neutral py-10">
        <div className="flex justify-center items-center">
          <Link to="/signUp/buyer">
            <button
              onClick={buyerText}
              className="btn btn-primary btn-sm text-white border-0 mr-4"
            >
              Buyer
            </button>
          </Link>
          <Link to="/signUp/seller">
            <button
              onClick={sellerText}
              className="btn btn-primary btn-sm bg-accent text-white border-0"
            >
              Seller
            </button>
          </Link>
        </div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SignUp;
