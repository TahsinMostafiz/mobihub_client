import React from "react";
import { useLoaderData } from "react-router-dom";
import PhonesCard from "../PhonesCard/PhonesCard";

const Category = () => {
  const phones = useLoaderData();
  console.log(phones);
  return (
    <div className="py-16 ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full justify-center ">
        {phones?.map((phone) => (
          <PhonesCard key={phone?._id} phone={phone}></PhonesCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
