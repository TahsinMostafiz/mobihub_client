import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import PhonesCard from "../PhonesCard/PhonesCard";

const Category = () => {
  const [buyerBooking, setBuyerBooking] = useState(null);
  const phones = useLoaderData();
  return (
    <section className="py-16 ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full justify-center ">
        {phones?.map((phone) => (
          <PhonesCard
            key={phone?._id}
            phone={phone}
            setBuyerBooking={setBuyerBooking}
          ></PhonesCard>
        ))}
      </div>
      {buyerBooking && (
        <BookingModal
          buyerBooking={buyerBooking}
          setBuyerBooking={setBuyerBooking}
        ></BookingModal>
      )}
    </section>
  );
};

export default Category;
