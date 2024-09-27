import React from "react";
import Navbar from "./Navbar";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full mx-auto">
      <div className="relative max-w-screen-2xl mx-auto h-full min-h-[800px]">
        <div className="absolute inset-0 bg-[url('/doted-bg.jpg')] bg-cover bg-no-repeat opacity-20" />

        <Navbar />
        <div className="relative z-10 mt-40 mx-auto">
          <div className=" flex flex-col items-center justify-center text-center w-full  ">
            <h2 className="text-4xl font-semibold -tracking-wider leading-2 w-[95vw] text-[#23282E] md:w-[80vw] md:text-5xl lg:text-6xl lg:w-[70vw]">
              Start learning at Pakistan's 2nd Best University , Asli and Nasli
              Taleem
            </h2>
            <p className="mt-5 text-lg lg:text-xl w-[90vw] text-gray-500 lg:w-[60vw]">Accredited by the only recognition that truly matters in the workplace, our programs focus on delivering practical skills. Forget Shakespeare and Mr. Chips;.</p>

            <button className="bg-gradient-to-r from-[#403663] to-[#2b1f48] text-white px-5 py-3 lg:py-3 lg:px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 mt-5">
              Start Learning
              <ArrowRight className="inline-block ml-2 w-5 lg:w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
