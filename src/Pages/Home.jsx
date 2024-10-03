import React from "react";

import Hero from "../Components/Hero";
import Brands from "../Components/Brands";
import OurCourses from "../Components/OurCourses";
import Navbar from "../Components/Navbar";
import FeaturedCourses from "../Components/FeaturedCourses";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brands />
      <OurCourses />
      <FeaturedCourses />
      <Footer />
    </div>
  );
};

export default Home;
