import React from "react";
import ReactTimeAgo from "react-time-ago";

const PhonesCard = ({ phone, setBooking }) => {
  const { title, img, location, price, resalePrice, yearsOfUse } = phone;
  const date = new Date();
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-neutral text-accent">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-md h-72 "
      />
      <div className="mt-2 mb-1">
        <div className="flex justify-between">
          <span className="block text-xs font-medium tracking-widest  text-gray-500">
            {location}
          </span>
          <p className="font-medium text-gray-500 text-xs">
            <ReactTimeAgo date={date} locale="en-US" />
          </p>
        </div>
        <h2 className="block text-xl font-medium text-accent">{title}</h2>
      </div>
      <p className="block text-base font-medium tracking-wide  text-gray-500 mb-2">
        Used : {yearsOfUse}
      </p>
      <p className=" font-medium">
        <span className="text-primary text-xl">${resalePrice}</span>{" "}
        <span className="text-secondary line-through">${price}</span>
      </p>
      <label
        onClick={() => setBooking(phone)}
        htmlFor="booking-modal"
        className="btn btn-primary btn-sm text-white border-primary mt-3"
      >
        Book now
      </label>
    </div>
  );
};

export default PhonesCard;
