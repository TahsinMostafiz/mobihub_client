import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
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
              {/* {appointments.map((appointment, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{appointment.treatment}</td>
                  <td>{appointment.patientName}</td>
                  <td>{appointment.appointmentDate}</td>
                  <td>{appointment.slot}</td>
                  <td>
                    {appointment.price && !appointment.paid && (
                      <Link to={`/dashboard/payment/${appointment._id}`}>
                        <button className="btn btn-error btn-xs text-white">
                          Pay
                        </button>
                      </Link>
                    )}
                    {appointment.price && appointment.paid && (
                      <button className="btn btn-success btn-xs text-white">
                        Paid
                      </button>
                    )}
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
