import React from "react";

import Hero from "../Components/Hero";
import Brands from "../Components/Brands";
import OurCourses from "../Components/OurCourses";
import Navbar from "../Components/Navbar";
import FeaturedCourses from "../Components/FeaturedCourses";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brands />
      <OurCourses />
      <FeaturedCourses />
    </div>
  );
};

export default Home;
