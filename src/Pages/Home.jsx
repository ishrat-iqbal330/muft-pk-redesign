import React from "react";

import Hero from "../Components/Hero";
import Brands from "../Components/Brands";
import OurCourses from "../Components/OurCourses";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brands />
      <OurCourses />
    </div>
  );
};

export default Home;
