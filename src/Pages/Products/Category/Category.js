import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import PhonesCard from "../PhonesCard/PhonesCard";

const Category = () => {
  const [booking, setBooking] = useState(null);
  const phones = useLoaderData();
  console.log(phones);
  return (
    <section className="py-16 ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full justify-center ">
        {phones?.map((phone) => (
          <PhonesCard
            key={phone?._id}
            phone={phone}
            setBooking={setBooking}
          ></PhonesCard>
        ))}
      </div>
      {booking && <BookingModal booking={booking}></BookingModal>}
    </section>
  );
};

export default Category;
