import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { format } from "date-fns";

const BookingModal = ({ buyerBooking, setBuyerBooking }) => {
  const { user } = useContext(AuthContext);
  const { title, resalePrice } = buyerBooking;
  const date = format(new Date(), "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = resalePrice;
    const bName = form.bName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const booking = {
      bookingDate: date,
      name: title,
      buyerName: bName,
      phone,
      email,
      price,
    };
    console.log(booking);
    setBuyerBooking(null);
  };
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
          <h3 className="text-lg font-bold">{title}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-5">
            <input
              type="text"
              name="price"
              defaultValue={`Price : ${resalePrice}`}
              disabled
              className="input font-semibold input-bordered w-full"
            />
            <input
              type="text"
              defaultValue={user?.displayName}
              disabled
              name="bName"
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
