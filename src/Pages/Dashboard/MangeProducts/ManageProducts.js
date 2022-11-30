import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../Shared/Loading/Loading";

const ManageProducts = () => {
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/products", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
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
                    // onClick={() => setDeletingDoctor(doctor)}
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
      {/* {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure you want to delete`}
          message={`If you delete ${deletingDoctor.name}, it will not be recovered`}
          handleDeleteDoctor={handleDeleteDoctor}
          doctor={deletingDoctor}
          confirmButton="Delete"
          deleteCancel={deleteCancel}
        ></ConfirmationModal>
      )} */}
    </div>
  );
};

export default ManageProducts;
