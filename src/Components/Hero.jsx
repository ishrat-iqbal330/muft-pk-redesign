import React from "react";
import Navbar from "./Navbar";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full mx-auto">
      <div className="relative mx-auto h-full min-h-[800px]">
        <div className="absolute inset-0 bg-[url('/doted-bg.jpg')] bg-cover bg-no-repeat opacity-20" />
        <Navbar />
        <div className="relative mt-24 mx-auto w-full h-[800px] flex flex-col items-center justify-center text-center">
          <img
            src="/banner.png"
            alt="Banner"
            className="absolute top-5 left-0 w-full h-full object-cover opacity-85"
          />
          <div className="relative z-20">
            <h2 className="text-4xl font-semibold tracking-tight w-[95vw] md:w-[80vw] md:text-5xl lg:text-6xl lg:w-[70vw] mx-auto">
              Start learning at Pakistan's 2nd Best University, Asli and Nasli Taleem
            </h2>
            <p className="mt-5 text-lg lg:text-xl w-[90vw] text-gray-400 lg:w-[60vw]">
              Accredited by the only recognition that truly matters in the workplace, our programs focus on delivering practical skills. Forget Shakespeare and Mr. Chips;
            </p>
            <button className="bg-gradient-to-r from-[#403663] to-[#2b1f48] text-white px-5 py-3 lg:py-3 lg:px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 mt-5">
              Start Learning
              <ArrowRight className="inline-block ml-2 w-5 lg:w-6" />
            </button>
            <div className="img flex flex-col items-center mt-8 py-2 px-4">
              <img
                src="/coching.jpg"
                alt="CEO"
                className="w-full min-w-[300px] h-[300px] md:min-w-[500px] lg:min-w-[600px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
