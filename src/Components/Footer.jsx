import React from "react";

const Footer = () => {
  return (
    <div className="w-full mx-auto relative mt-20">
      <div className="bg-gradient-to-r from-[#1a0d29] via-[#0d1033] to-[#1a0d29] text-white p-6 pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row  items-start md:items-center mb-12">
            <h4 className="text-4xl font-bold mb-3 md:mb-0">Muft.pk</h4>
            <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-full md:max-w-[500px] ">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent border-b border-gray-600 p-2 flex-grow md:w-64 focus:outline-none focus:border-white mr-4"
              />
              <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition duration-300 mt-4 md:mt-0 w-full md:w-auto">
                Enter
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-400">
            <p>©2024 Copyright Azad Chaiwala. All Rights Reserved.</p>
            <div className="flex flex-col md:flex-row mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-6">
              <span>About us</span>
              <span>Command Center</span>
              <span>Our content</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-purple-300 px-4 sm:px-8 lg:max-w-[80vw] py-6 md:py-12 w-full mx-auto z-20 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-2xl md:text-4xl font-bold max-w-[70%] lg:max-w-[50%] lg:text-4xl mb-6 md:mb-0 text-center md:text-left">
            Upgrade your skills by subscribing to our courses
          </h3>
          <button className="bg-gradient-to-r from-[#403663] to-[#2b1f48] text-white px-5 py-3 lg:py-3 lg:px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
            Let's talk with us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
