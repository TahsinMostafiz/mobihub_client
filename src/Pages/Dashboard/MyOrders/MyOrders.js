import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <div>
        <div className="flex justify-between items-center py-3">
          <h2 className="text-3xl  font-semibold">My Orders</h2>
          <p className="btn btn-outline">{format(new Date(), "PP")}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>No.</th>
                <th>Orders</th>
                <th>Buyer name</th>
                <th>Orders Date</th>
                <th>Price</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking.name}</td>
                  <td>{booking.buyerName}</td>
                  <td>{booking.bookingDate}</td>
                  <td>${booking.price}</td>
                  <td>{booking.price}</td>
                  {/* <td>
                    {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-error btn-xs text-white">
                          Pay
                        </button>
                      </Link>
                    )}
                    {booking.price && booking.paid && (
                      <button className="btn btn-success btn-xs text-white">
                        Paid
                      </button>
                    )}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
