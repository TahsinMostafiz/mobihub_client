import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../../Shared/Loading/Loading";

const ManageProducts = () => {
  const [deletingProduct, setDeletingProduct] = useState(null);
  const deleteCancel = () => {
    setDeletingProduct(null);
  };
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://mobihub-server-nine.vercel.app/products",
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  //Delete Products Function
  const handleDeleteProduct = (product) => {
    fetch(`https://mobihub-server-nine.vercel.app/products/${product._id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Product ${product.name} deleted successfully`);
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2>Manage Products : {products.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>AVATAR</th>
              <th>Product Name</th>
              <th>date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className=" w-20 h-20">
                      <img src={product.img} alt={product.title} />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold text-xs">{product.title}</div>
                </td>
                <td>
                  <div className="font-bold text-xs">{product.postedDate}</div>
                </td>
                <th>
                  <label
                    onClick={() => setDeletingProduct(product)}
                    htmlFor="confirmation-modal"
                    className="btn btn-error btn-xs text-white"
                  >
                    Delete
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingProduct && (
        <ConfirmationModal
          title={`Are you sure you want to delete`}
          message={`If you delete ${deletingProduct.name}, it will not be recovered`}
          handleDeleteProduct={handleDeleteProduct}
          product={deletingProduct}
          confirmButton="Delete"
          deleteCancel={deleteCancel}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageProducts;
