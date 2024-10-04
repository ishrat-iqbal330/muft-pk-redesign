import React from "react";

const FeaturedCourses = () => {
  return (
    <div className="w-full mx-auto bg-white py-10 px-4 md:px-12 ">
      <div className="flex flex-col items-center bg-gradient-to-r from-[#1a0d29] via-[#0d1033] to-[#1a0d29] text-white px-6 py-8 mt-8 rounded-xl w-full max-w-[90vw] h-[500px] mx-auto">
        <h2 className="text-2xl font-semibold text-center w-full min-w-[300px] md:text-3xl lg:text-4xl mt-10">
          Explore Our Highlighted Courses
        </h2>
        <p className="text-center text-gray-300 mt-4 text-sm md:text-base lg:w-[48vw]">
          Check out our top courses to learn new skills and gain knowledge!
          Start your journey today and unlock your potential! Whether you want
          to improve your job skills.
        </p>
      </div>
      <div className="cards grid place-content-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[80vw] w-full mx-auto relative bottom-56 left-0 right-0 ">
        <div className="card px-4 py-6 bg-white shadow-lg rounded-xl">
          <img
            src="/googleadds.webp"
            alt="Google Ads Course"
            className="rounded-xl w-full h-[210px] object-cover shadow-sm"
          />
          <div className="card-body mt-4">
            <div className="flex justify-between">
              <p className="text-sm text-gray-400">9691 Students</p>
              <p className="text-sm text-gray-400">2.8 hours</p>
            </div>
            <h2 className="text-xl font-semibold">Google Ads Course</h2>
            <p>Google Ads Pro course for beginners</p>
          </div>
        </div>
        <div className="hidden  px-4 py-6 bg-white shadow-lg rounded-xl  lg:block">
          <img
            src="/pythonpro.webp"
            alt="Python Free Course"
            className="rounded-xl w-full h-[210px] object-cover shadow-sm"
          />
          <div className="card-body mt-4">
            <div className="flex justify-between">
              <p className="text-sm text-gray-400">2458 Students</p>
              <p className="text-sm text-gray-400">9.2 hours</p>
            </div>
            <h2 className="text-xl font-semibold">Python Free Course</h2>
            <p>Python advanced programming course</p>
          </div>
        </div>
        <div className="card hidden  px-4 py-6 bg-white shadow-lg rounded-xl sm:block lg:block">
          <img
            src="/cyber-security.webp"
            alt="Cyber Security Course"
            className="rounded-xl w-full h-[210px] object-cover shadow-sm"
          />
          <div className="card-body mt-4">
            <div className="flex justify-between">
              <p className="text-sm text-gray-400">1615 Students</p>
              <p className="text-sm text-gray-400">15.5 hours</p>
            </div>
            <h2 className="text-xl font-semibold">Cyber Security Course</h2>
            <p>Cyber Security course with real-life projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
