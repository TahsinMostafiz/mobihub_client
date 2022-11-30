import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../Shared/Loading/Loading";
import CategoriesCard from "./CategoriesCard";

const ProductsCategories = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className=" md:flex gap-5 py-16 ">
      <div className="p-5 text-center">
        <h2 className=" text-3xl font-bold md:text-4xl lg:text-5xl">
          Categories
          <div className="divider"></div>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full justify-center ">
        {categories?.map((category) => (
          <CategoriesCard
            key={category.id}
            category={category}
          ></CategoriesCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsCategories;
