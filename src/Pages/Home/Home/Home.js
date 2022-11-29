import React from "react";
import AdvertisedItems from "../AdvertisedItems/AdvertisedItems";
import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter/NewsLetter";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AdvertisedItems></AdvertisedItems>
      <Testimonial></Testimonial>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
