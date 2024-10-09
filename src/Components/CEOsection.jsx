import React from "react";

const CEOsection = () => {
  return (
    <div className="w-full  mx-auto bg-gray-100 py-10 px-4 md:px-12 flex flex-col justify-around items-center ">
      <div className="left flex flex-col items-center justify-center  ">
        <h3 className="text-3xl font-semibold w-[98vw] px-4 ">
          Our Founder’s Vision for Free Education
        </h3>
        <p className="text-gray-500 mt-4 w-[98vw] px-4 ">
          Azad Chaiwala, a Pakistani entrepreneur, is the founder of Muft.pk and
          Chaiwala.com. His mission is to make education accessible to everyone,
          offering free courses that help people learn practical skills and
          improve their lives. With a passion for empowering others, Azad is
          dedicated to creating opportunities for personal and professional
          growth through his platforms.
        </p>
      </div>
      <div className="right mt-5  ">
        <div className="w-[90vw] sm:w-[85vw] bg-white rounded-3xl px-4 py-4">
          <img
            src="/azad.webp"
            alt=""
            // width={"570px"}
            // height={"500px"}
            className="rounded-xl"
          />
        </div>
        <div className="w-[40vw] sm:w-[50vw] bg-white rounded-3xl px-3 py-4 relative top-[-100px] sm:top-[-150px] left-[7px]">
          <img
            src="/AzadChaiwala.webp"
            alt=""
            // width={""}
            // height={""}
            className="rounded-xl"
          />
          <div className="flex gap-1 flex-col items-center mt-3 ">
            <h4 className="text-md font-semibold text-[#0d1033] w-full px-2">
              Azad Chaiwala
            </h4>
            <p className="text-sm text-gray-400 w-full px-2">
              {" "}
              Founder of Muft.pk and Chaiwala.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOsection;
