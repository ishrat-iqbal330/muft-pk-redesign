import React from "react";
import Navbar from "./Navbar";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full mx-auto">
      <div className="relative max-w-screen-2xl mx-auto h-full min-h-[800px]">
        <div className="absolute inset-0 bg-[url('/doted-bg.jpg')] bg-cover bg-no-repeat opacity-20" />

        <Navbar />
        <div className="relative mt-24 mx-auto w-full h-[800px] flex flex-col items-center justify-center text-center">
          {" "}
          <img
            src="/banner.png"
            alt="Banner"
            className="absolute top-5 left-0 w-full h-full object-cover opacity-85"
          />
          <div className="relative z-20">
            {" "}
            <h2 className="text-4xl font-semibold -tracking-wider leading-2 w-[95vw] text-[#23282E] md:w-[80vw] md:text-5xl lg:text-6xl lg:w-[70vw] mx-auto">
              Start learning at Pakistan's 2nd Best University, Asli and Nasli
              Taleem
            </h2>
            <p className="mt-5 text-lg lg:text-xl text-center mx-auto w-[90vw] text-gray-400 lg:w-[60vw]">
              Accredited by the only recognition that truly matters in the
              workplace, our programs focus on delivering practical skills.
              Forget Shakespeare and Mr. Chips;
            </p>
            <button className="bg-gradient-to-r from-[#403663] to-[#2b1f48] text-white px-5 py-3 lg:py-3 lg:px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 mt-5">
              Start Learning
              <ArrowRight className="inline-block ml-2 w-5 lg:w-6" />
            </button>
            <div className="img flex flex-col items-center mt-8 py-2 px-4">
              <div className="relative w-full max-w-[700px] group">
                {" "}
                <img
                  src="/azad.jpg"
                  alt="CEO"
                  className="w-full min-w-[400px] h-[300px] md:h-[400px] lg:w-[100%] lg:h-[350px] object-cover rounded-lg shadow-lg transition duration-300 ease-in-out transform "
                />
                <p className="absolute bottom-0 w-full bg-black bg-opacity-50 py-2 text-white text-xl text-center transition-all duration-300 ease-in-out">
                  CEO: Azad Chaiwala
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
