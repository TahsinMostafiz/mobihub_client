import React from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import toast from "react-hot-toast";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const date = format(new Date(), "PP");
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleAddProduct = (data) => {
    const image = data.img[0];
    const formData = new FormData();

    formData.append("image", image);
    //save image to image bb
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const product = {
            category_id: data.category,
            title: data.name,
            img: imgData.data.url,
            price: data.oPrice,
            resalePrice: data.rPrice,
            yearsOfUse: data.used,
            location: data.location,
            postedDate: date,
            condition: data.condition,
            phone: data.number,
          };

          // save doctor information to database
          fetch("https://mobihub-server-nine.vercel.app/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              //navigate("/dashboard/manageProducts");
            });
        }
      });
  };
  return (
    <div className="w-full max-w-lg p-8 space-y-3 rounded-xl bg-white text-accent shadow-lg mx-auto my-10">
      <h1 className="text-2xl font-bold text-center">App Product</h1>
      <form onSubmit={handleSubmit(handleAddProduct)} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block text-gray-400">
            Product Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            name="name"
            id="name"
            className="w-full px-4 py-3 rounded-md border border-accent bg-white text-accent focus:outline-primary"
          />
          {errors.name && (
            <p className="text-orange-700">{errors.name?.message}</p>
          )}
        </div>
        {/* Price */}
        <div className="flex gap-2 ">
          <div className="space-y-1 text-sm w-full">
            <label htmlFor="rPrice" className="block text-gray-400">
              Resale price
            </label>
            <input
              {...register("rPrice", { required: "Resale price is required" })}
              type="text"
              name="rPrice"
              id="rPrice"
              className="w-full px-4 py-3 rounded-md border border-accent bg-white text-accent focus:outline-primary"
            />
            {errors.rPrice && (
              <p className="text-orange-700">{errors.rPrice?.message}</p>
            )}
          </div>
          <div className="space-y-1 text-sm w-full">
            <label htmlFor="oPrice" className="block text-gray-400">
              Original price
            </label>
            <input
              {...register("oPrice", {
                required: "Original price is required",
              })}
              type="text"
              name="oPrice"
              id="oPrice"
              className="w-full px-4 py-3 rounded-md border border-accent bg-white text-accent focus:outline-primary"
            />
            {errors.oPrice && (
              <p className="text-orange-700">{errors.oPrice?.message}</p>
            )}
          </div>
        </div>
        <div className="flex gap-2 ">
          <div className="space-y-1 text-sm w-full">
            <label htmlFor="condition" className="block text-gray-400">
              Condition (good, fair)
            </label>
            <input
              {...register("condition", {
                required: "condition is required",
              })}
              type="text"
              name="condition"
              id="condition"
              className="w-full px-4 py-3 rounded-md border border-accent bg-white text-accent focus:outline-primary"
            />
            {errors.condition && (
              <p className="text-orange-700">{errors.condition?.message}</p>
            )}
          </div>
          <div className="space-y-1 text-sm w-full">
            <label htmlFor="location" className="block text-gray-400">
              Location
            </label>
            <input
              {...register("location", {
                required: "location is required",
              })}
              type="text"
              name="location"
              id="location"
              className="w-full px-4 py-3 rounded-md border border-accent bg-white text-accent focus:outline-primary"
            />
            {errors.location && (
              <p className="text-orange-700">{errors.location?.message}</p>
            )}
          </div>
        </div>

        <div className="flex gap-2 ">
          <div className="space-y-1 text-sm w-full">
            <label htmlFor="category" className="block text-gray-400">
              Product category (like : 01,09,10...)
            </label>
            <input
              {...register("category", {
                required: "category is required",
              })}
              type="text"
              name="category"
              id="category"
              className="w-full px-4 py-3 rounded-md border border-accent bg-white text-accent focus:outline-primary"
            />
            {errors.category && (
              <p className="text-orange-700">{errors.category?.message}</p>
            )}
          </div>
          <div className="space-y-1 text-sm w-full">
            <label htmlFor="used" className="block text-gray-400">
              Used duration
            </label>
            <input
              {...register("used", {
                required: "How long you used",
              })}
              type="text"
              name="used"
              id="used"
              className="w-full px-4 py-3 rounded-md border border-accent bg-white text-accent focus:outline-primary"
            />
            {errors.used && (
              <p className="text-orange-700">{errors.used?.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-1 text-sm">
          <label htmlFor="number" className="block text-gray-400">
            Mobile number
          </label>
          <input
            {...register("number", { required: "number is required" })}
            type="text"
            name="number"
            id="number"
            className="w-full px-4 py-3 rounded-md border border-accent bg-white text-accent focus:outline-primary"
          />
          {errors.number && (
            <p className="text-orange-700">{errors.number?.message}</p>
          )}
        </div>

        <div className="space-y-1 text-sm">
          <label htmlFor="img" className="block text-gray-400">
            Image
          </label>
          <input
            {...register("img", { required: "Image is required" })}
            type="file"
            name="img"
            id="img"
            className="w-full px-4 py-3 rounded-md border border-accent bg-white text-accent focus:outline-primary"
          />
          {errors.name && (
            <p className="text-orange-700">{errors.img?.message}</p>
          )}
        </div>
        <button className="block w-full p-3 text-center rounded-md text-white bg-primary border font-semibold hover:border-primary hover:bg-white hover:text-primary transition duration-150 ease-out hover:ease-in">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
