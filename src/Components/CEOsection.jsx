import React from "react";

const CEOsection = () => {
  return (
    <div className="w-full mx-auto">
      <div className="bg-gray-100 py-10 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section (Text) */}
        <div className="left flex flex-col items-center justify-center md:w-1/2 md:items-start">
          <h3 className="text-3xl font-semibold w-full px-4 md:px-0 md:w-full lg:text-4xl">
            Our Founder’s Vision for Free Education
          </h3>
          <p className="text-gray-500 mt-4 w-full px-4 md:px-0 md:w-full lg:text-lg">
            Azad Chaiwala, a Pakistani entrepreneur, is the founder of Muft.pk
            and Chaiwala.com. His mission is to make education accessible to
            everyone, offering free courses that help people learn practical
            skills and improve their lives. With a passion for empowering
            others, Azad is dedicated to creating opportunities for personal and
            professional growth through his platforms.
          </p>
        </div>

        {/* Right Section (Images) */}
        <div className="right flex flex-col items-center justify-center mt-5 md:w-1/2 ">
          <div className="w-full sm:w-[85%] bg-white rounded-3xl px-4 py-4">
            <img
              src="/azad.webp"
              alt="Azad Chaiwala"
              className="rounded-xl w-full md:w-[700px] md:h-[400px] h-auto object-cover"
            />
          </div>

          {/* Secondary Image Positioned Over the Main One */}
          <div className="relative bg-white rounded-3xl px-3 py-4 w-full max-w-[300px] lg:max-w-[300px] md:max-w-[250px] sm:w-[85%] -mt-32 ml-52 sm:-mt-20 md:ml-60 md:-mt-32 lg:-mt-40">
            <img
              src="/AzadChaiwala.webp"
              alt="Azad Chaiwala"
              className="rounded-xl w-full h-auto object-cover"
            />
            <div className="flex flex-col items-center mt-3">
              <h4 className="text-md w-full font-semibold text-[#0d1033] px-1 ">
                Azad Chaiwala
              </h4>
              <p className="text-sm text-gray-400">
                Founder of Muft.pk and Chaiwala.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOsection;
