import React from "react";
import { ArrowRight, Timer, YoutubeIcon } from "lucide-react";

const OurCourses = () => {
  const courses = [
    {
      name: "Game Development Course",
      description:
        "Ready to build your own 3D game? This free Unity course has got you covered! Learn the basics, create cool projects, and bring your game ideas to life.",
      image: "/gmae deve.jpg",
      duration: "4.5 hours",
      lessons: "21 Lessons",
    },
    {
      name: "Facebook Ads Full Course",
      description:
        "This course will help you create effective Facebook ads. Learn how to design and run successful campaigns. Let's get your ads on!",
      image: "/facebook ads course.jpg",
      duration: "3 hours",
      lessons: "15 Lessons",
    },
    {
      name: "Social Media Management Course",
      description:
        "This course covers the basics of social media. Build a basic project and get started with social media management. Let's get started!",
      image: "/social media managment.jpg",
      duration: "5 hours",
      lessons: "18 Lessons",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center py-28 px-4 w-full bg-gray-100">
        <h5 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-[90vw] sm:max-w-[70vw] md:max-w-[60vw] text-transparent bg-clip-text bg-gradient-to-r from-[#403663] to-[#2b1f48]">
          Top Free Courses We Offer!
        </h5>
        <p className="text-base sm:text-lg max-w-[95vw] sm:max-w-[80vw] md:max-w-[65vw] lg:max-w-[50vw] text-gray-500 mt-3">
          Explore our most in-demand free courses designed to elevate your
          skills and enhance your career. Discover these popular offerings.
        </p>

        <div className="courses mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {courses.map((course, index) => (
            <div
              key={index}
              className="course flex flex-col justify-between bg-white shadow-lg rounded-lg p-5 w-full h-full max-w-sm"
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-full   h-48 object-cover rounded-lg  lg:max-w-[1000px] "
              />
              <h4 className="text-2xl font-bold mt-3 text-left">
                {course.name}
              </h4>
              <p className="text-gray-500 mt-2 text-left">
                {course.description}
              </p>
              <div className="flex justify-start gap-3 mt-3">
                <div className="flex text-left gap-1">
                  <Timer className="w-6 h-6 text-purple-400" />
                  <p className="text-gray-400">{course.duration}</p>
                </div>
                <span className="flex gap-1">
                  <YoutubeIcon className="w-6 h-6 text-red-400" />
                  <p className="text-gray-400">{course.lessons}</p>
                </span>
              </div>
              <button className="bg-gradient-to-r from-[#403663] to-[#2b1f48] text-white px-5 py-3 shadow-lg transform transition duration-300 hover:scale-105 mt-5">
                Start Learning
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center sm:justify-start lg:justify-end mt-6 group relative w-full max-w-[75vw]">
          {/* Adjusted to justify-start */}
          <p className="text-center sm:text-left lg:text-right text-base  sm:text-lg text-gray-600 mt-3 cursor-pointer group-hover:text-purple-600 transition-colors delay-50 duration-300 pb-2 ">
            View All Courses
            <ArrowRight className="inline-block ml-2 w-5 lg:w-6  text-purple-600 transition-transform duration-300 group-hover:translate-x-1" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
