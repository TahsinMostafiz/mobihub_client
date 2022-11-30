import React from "react";
import { Link } from "react-router-dom";

const CategoriesCard = ({ category }) => {
  const { name, banner, id } = category;
  return (
    <Link to={`/category/${id}`}>
      <div className="max-w-xs shadow-md bg-neutral text-accent hover:scale-110 transition-all ease-in-out hover:text-primary">
        <img src={banner} alt="" className=" w-full  h-72 bg-neutral " />
        <div className="py-4 px-2">
          <h2 className="text-2xl font-semibold tracking-wide ">-{name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default CategoriesCard;
