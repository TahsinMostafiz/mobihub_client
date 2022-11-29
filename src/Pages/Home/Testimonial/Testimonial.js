import React from "react";
import people1 from "../../../assets/testimonial_img/people1.jpg";
import people2 from "../../../assets/testimonial_img/people2.jpg";
import people3 from "../../../assets/testimonial_img/people3.jpg";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Joe Burns",
      title: "National Cricket Team Player",
      details:
        "I recently bought an iPhone from MobiHub. It's really high quality, very affordable and most important, it cuts down e-waste.",
      img: people1,
    },
    {
      id: 2,
      name: "Li Hu",
      title: "Lifestyle Blogger",
      details:
        "Sustainable tech devices for less money - 100% functional & looks brand new!",
      img: people2,
    },
    {
      id: 3,
      name: "Brad Hodge",
      title: "Australian Cricket Coach",
      details:
        "MobiHub is a trusted marketplace for refurbished tech. I've bought my daughter a perfectly functional iPhone, with free delivery & warranty.",
      img: people3,
    },
  ];
  return (
    <div className=" mt-10 mb-20 bg-neutral p-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-5xl text-accent font-bold mb-3">
          What they say <span className="text-primary">about us</span>
        </h2>
        <h5 className="text-base text-secondary font-bold">
          TESTIMONIALS FROM OUR GREATEST CLIENTS
        </h5>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonialData.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
          ></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
