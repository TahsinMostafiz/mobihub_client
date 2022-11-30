import React from "react";

const PhonesCard = ({ phone }) => {
  const { title, img, location, price, resalePrice, yearsOfUse } = phone;
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-neutral text-accent">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-md h-72 "
      />
      <div className="mt-2 mb-1">
        <span className="block text-xs font-medium tracking-widest  text-gray-500">
          {location}
        </span>
        <h2 className="block text-xl font-medium text-accent">{title}</h2>
      </div>
      <p className="block text-base font-medium tracking-wide  text-gray-500 mb-2">
        Used : {yearsOfUse}
      </p>
      <p className=" font-medium">
        <span className="text-primary text-xl">${resalePrice}</span>{" "}
        <span className="text-secondary line-through">${price}</span>
      </p>
      <button className="btn btn-primary btn-sm text-white border-primary mt-3">
        Book now
      </button>
    </div>
  );
};

export default PhonesCard;
