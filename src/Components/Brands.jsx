import React from "react";

const Brands = () => {
  return (
    <div className="w-full flex justify-center items-center mx-auto bg-gradient-to-r from-[#1a0d29] via-[#0d1033] to-[#1a0d29] h-48 sm:h-48 md:h-56 lg:h-52 shadow-lg">
      <div className="brands flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-10 lg:gap-16 px-4 py-2 w-full h-full opacity-80">
        <img
          src="/brand2.png"
          alt="brand2"
          className="w-[20vw] h-[2vw] max-w-[180px] sm:max-w-[150px] md:max-w-[190px]"
        />
        <img
          src="/brand6.png"
          alt="brand6"
          className="w-[18vw] h-auto max-w-[170px] sm:max-w-[140px] md:max-w-[110px]"
        />
        <img
          src="/brand4.png"
          alt="brand4"
          className="w-[16vw] h-auto max-w-[160px] sm:max-w-[130px] md:max-w-[150px]"
        />
        <img
          src="/brand7.png"
          alt="brand7"
          className="w-[18vw] h-auto max-w-[170px] sm:max-w-[140px] md:max-w-[170px]"
        />
      </div>
    </div>
  );
};

export default Brands;
