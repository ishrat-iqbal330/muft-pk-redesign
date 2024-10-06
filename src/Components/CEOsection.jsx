import React from "react";

const CEOsection = () => {
  return (
    <div className="w-full mx-auto bg-gray-100 py-10 px-4 md:px-12 flex flex-col justify-around items-center ">
      <div className="left ">
        <h3 className="text-3xl font-semibold w-[90vw]">
          Our Founder’s Vision for Free Education
        </h3>
        <p className="text-gray-500 mt-4 w-[85vw]">
          Azad Chaiwala, a Pakistani entrepreneur, is the founder of Muft.pk and
          Chaiwala.com. His mission is to make education accessible to everyone,
          offering free courses that help people learn practical skills and
          improve their lives. With a passion for empowering others, Azad is
          dedicated to creating opportunities for personal and professional
          growth through his platforms.
        </p>
      </div>
      <div className="right mt-5 ">
        <div className="w-[49vw] bg-white rounded-3xl px-4 py-4" >
          <img src="/azad.webp" alt="" width={"500px"} height={"500px"} className="rounded-xl" />
        </div>
        <div className="w-[90vw] bg-white rounded-3xl">
          <img
            src="/AzadChaiwala.webp"
            alt=""
            width={"300px"}
            height={"300px"}
          />
          <h4>Azad Chaiwala</h4>
          <p>Founder of Muft.pk and Chaiwala.com</p>
        </div>
      </div>
    </div>
  );
};

export default CEOsection;
