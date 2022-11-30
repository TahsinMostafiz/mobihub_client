import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const BookingModal = ({ booking }) => {
  const { user } = useContext(AuthContext);
  const handleBooking = () => {};
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{booking.title}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-5">
            <input
              type="text"
              defaultValue={`Price : ${booking.resalePrice}`}
              disabled
              className="input font-semibold input-bordered w-full"
            />
            <input
              type="text"
              defaultValue={user?.displayName}
              disabled
              name="pName"
              className="input font-semibold input-bordered w-full focus:outline-secondary"
            />
            <input
              type="Email"
              name="email"
              defaultValue={user?.email}
              disabled
              className="input font-semibold input-bordered w-full focus:outline-secondary"
            />
            <input
              type="text"
              name="phone"
              required
              placeholder="Phone Number"
              className="input font-semibold input-bordered w-full focus:outline-primary"
            />
            <input
              type="submit"
              value="submit"
              className="btn btn-primary text-white w-full"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
