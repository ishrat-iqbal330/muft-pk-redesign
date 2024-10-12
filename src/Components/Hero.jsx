import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full mx-auto">
      <div className="relative mx-auto h-full min-h-[1000px] lg:min-h-[700px]">
        <div className="absolute inset-0 bg-[url('/doted-bg.webp')] bg-cover bg-no-repeat opacity-20" />

        <div className="relative pt-28 mx-auto w-full h-[800px] flex flex-col items-center justify-center text-center">
          <img
            src="/banner (1).webp"
            alt="Banner"
            className="absolute top-5 left-0 w-full h-full object-cover opacity-60"
          />

          <div className="relative z-20 pt-40 md:pt-0">
            <h2 className="text-4xl font-semibold tracking-tight w-[95vw] md:w-[80vw] md:text-5xl lg:text-6xl lg:w-[70vw] mx-auto">
              Start learning at Pakistan's 2nd Best University, Asli and Nasli
              Taleem
            </h2>
            <p className="mt-5 text-center text-lg lg:text-xl w-[90vw] text-gray-400 lg:w-[60vw]">
              Accredited by the only recognition that truly matters in the
              workplace, our programs focus on delivering practical skills.
              Forget Shakespeare and Mr. Chips.
            </p>
            <button className="bg-gradient-to-r from-[#403663] to-[#2b1f48] text-white px-5 py-3 lg:py-3 lg:px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 mt-5">
              Start Free Trial
              <ArrowRight className="inline-block ml-2 w-5 lg:w-6" />
            </button>

            {/* Updated Image and Text Section without gaps */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-10 px-3 mb-4">
              {/* First image with text */}
              <div className="relative flex flex-col items-center ">
                <img
                  src="/hero222.webp"
                  alt="Online Course 1"
                  className="w-full min-w-[300px] h-[300px] md:w-[400px] md:h-[300px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col justify-end text-left px-4 py-3 bg-black bg-opacity-40 rounded-lg">
                  <p className="text-white text-lg md:text-xl font-semibold">
                    Ultimate Python Course
                  </p>
                  <p className="text-white text-sm md:text-base">
                    Enroll now for free
                  </p>
                </div>
              </div>

              {/* Second image with text */}
              <div className="relative flex flex-col items-center">
                <img
                  src="/team.webp"
                  alt="Online Course 2"
                  className="w-full min-w-[300px] h-[300px] md:w-[400px] md:h-[300px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col justify-end text-left px-4 py-3 bg-black bg-opacity-40 rounded-lg">
                  <p className="text-white text-lg md:text-xl font-semibold">
                    MERN Stack Development
                  </p>
                  <p className="text-white text-sm md:text-base">
                    Complete course{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
