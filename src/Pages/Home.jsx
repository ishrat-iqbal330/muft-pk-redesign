import React from "react";

import Hero from "../Components/Hero";
import Brands from "../Components/Brands";
import OurCourses from "../Components/OurCourses";
import Navbar from "../Components/Navbar";
import FeaturedCourses from "../Components/FeaturedCourses";
import Footer from "../Components/Footer";
import CEOsection from "../Components/CEOsection";
import FAQS from "../Components/FAQS";

const Home = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <Hero />
      <Brands />
      <OurCourses />
      <FeaturedCourses />
      <CEOsection />
      <FAQS className="mt-10" />
      <Footer />
    </div>
  );
};

export default Home;
