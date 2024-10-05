import React from "react";

const CEOsection = () => {
  return (
    <div className="w-full mx-auto bg-gray-100 py-10 px-4 md:px-12 flex flex-col justify-around items-center ">
      <div className="left ">
        <h3>Our Founder’s Vision for Free Education</h3>
        <p>
          Azad Chaiwala, a Pakistani entrepreneur, is the founder of Muft.pk and
          Chaiwala.com. His mission is to make education accessible to everyone,
          offering free courses that help people learn practical skills and
          improve their lives. With a passion for empowering others, Azad is
          dedicated to creating opportunities for personal and professional
          growth through his platforms.
        </p>
      </div>
      <div className="right">
        <img src="/azad.webp" alt="" width={"500px"} height={"500px"} />
      </div>
    </div>
  );
};

export default CEOsection;
