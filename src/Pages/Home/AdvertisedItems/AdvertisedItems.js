import React from "react";

import phoneImg from "../../../assets/mobile_img/oneplus.jpg";

import { Link } from "react-router-dom";
const AdvertisedItems = () => {
  return (
    <div className="p-6 py-12 bg-primary text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-evenly">
          <div className="lg:ml-40">
            <div className="text-6xl tracking-tighter font-bold mb-4">
              <span> UP TO 40% DISCOUNT</span> <br />{" "}
              <span className="mt-3">PHONES COLLECTION</span>
            </div>
            <Link>
              <button className="btn btn-primary bg-white text-primary border-white">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="space-x-2 text-center py-2 lg:py-0">
            <img
              src={phoneImg}
              className="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedItems;
