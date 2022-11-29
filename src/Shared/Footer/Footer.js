import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className=" px-10 py-14 bg-accent text-white">
        <div className="container grid grid-cols-1 mx-auto gap-x-3 gap-y-8  md:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium text-gray-400">Quick Links</h2>
            <div className="flex flex-col space-y-2 text-sm ">
              <Link to="/">Home</Link>
              <Link to="/">Blog</Link>
              <Link to="/">Log In</Link>
              <Link to="/">Sign Up</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium text-gray-400">Our Information</h2>
            <div className="flex flex-col space-y-2 text-sm ">
              <Link to="/">Privacy policy</Link>
              <Link to="/">Terms of service</Link>
              <Link to="/">Shipping Policy</Link>
              <Link to="/">Warranty & refunds</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium text-gray-400">Store Information.</h2>
            <div className="flex flex-col space-y-2 text-sm ">
              <Link to="/">123 Street, Old Trafford, New South London, UK</Link>
              <Link to="/">Phone/Fax : 0123456789</Link>
              <Link to="/">Email : demo@example.com</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-6 text-sm">
        <span className="text-gray-400">
          © Copyright 2022. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
