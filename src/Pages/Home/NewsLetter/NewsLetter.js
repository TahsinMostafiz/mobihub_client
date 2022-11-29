import React from "react";

const NewsLetter = () => {
  return (
    <div className="p-6 py-12 bg-primary text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-4xl lg:text-5xl tracking-tighter font-bold">
            Subscribe Newsletter
          </h2>
          <div className="space-x-2 text-center py-2 lg:py-0">
            <span className="font-bold text-lg">
              Sign up to receive 15% off your first order
            </span>
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
