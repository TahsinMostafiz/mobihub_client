import React, { useState, useEffect } from "react";
import banner from "../../../assets/banner/banner2.jpg";
import phone from "../../../assets/banner/banner.jpg";
import { FaStar } from "react-icons/fa";

const Banner = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? banner : "none";

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
    <header
      className="hero py-16 bg-accent"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "100%",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse text-white">
        <img src={phone} className="lg:w-1/2" alt="" />
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            COMPARE DEALS <br /> ON REFURBISHED <br /> &{" "}
            <span className="text-primary">PRE-OWNED </span>PHONES
          </h1>
          <p className="pt-6 font-medium">
            Sustainable devices, trusted quality. We're refreshing the way you
            buy tech.
          </p>
          <div className="flex  ">
            <p className="pb-6 font-medium">
              300,000+ customers | Excellent on
            </p>
            <div className="flex ">
              <span>
                <FaStar />
              </span>
              <span className="font-bold text-primary">Trustpilot</span>
            </div>
          </div>
          <button className="btn btn-primary bg-white border-0 text-primary">
            Get Started
          </button>
          <div className=" mt-10 lg:mt-40 grid md:grid-cols-3 justify-center items-center">
            <p className=" font-bold">12 Months Warranty</p>
            <p className=" font-bold mt-3 md:mt-0">Certified Sellers</p>
            <p className=" font-bold mt-3 md:mt-0">30 Days Free Returns</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
