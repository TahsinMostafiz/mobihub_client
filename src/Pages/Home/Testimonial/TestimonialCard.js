import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { name, img, title, details } = testimonial;
  return (
    <div className="rounded-lg shadow-lg bg-white p-5">
      <div>
        <p className="text-base text-accent mb-5">{details}</p>
      </div>
      <div className="flex gap-5 items-center">
        <div className="">
          <img src={img} alt="" className=" w-20 h-20 rounded-full" />
        </div>
        <div>
          <h3 className="text-2xl text-accent font-bold mb-1">{name}</h3>
          <p className="text-lg text-accent font-semibold ">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
