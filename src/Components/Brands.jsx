import React from "react";

const Brands = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto  bg-gradient-to-r from-[#1a0d29] via-[#0d1033] to-[#1a0d29] h-48 sm:h-48 md:h-56 lg:h-64 shadow-lg">
      <div className="brands flex flex-wrap justify-around items-center mx-auto px-1 sm:px-10 md:px-10 w-full h-full opacity-75">
        <img
          src="/brand1.png"
          alt="brand1"
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-auto max-w-[120px] sm:max-w-[100px] md:max-w-[150px] lg:max-w-[200px]"
        />
        <img
          src="/brand2.png"
          alt="brand2"
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-auto max-w-[150px] sm:max-w-[100px] md:max-w-[180px] lg:max-w-[220px]"
        />
        <img
          src="/brand3.png"
          alt="brand3"
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-auto max-w-[150px] sm:max-w-[100px] md:max-w-[180px] lg:max-w-[220px]"
        />
        <img
          src="/brand4.png"
          alt="brand4"
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-auto max-w-[120px] sm:max-w-[100px] md:max-w-[150px] lg:max-w-[200px]"
        />
        <img
          src="/brand5.png"
          alt="brand5"
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-auto max-w-[120px] sm:max-w-[100px] md:max-w-[150px] lg:max-w-[200px]"
        />
      </div>
    </div>
  );
};

export default Brands;
