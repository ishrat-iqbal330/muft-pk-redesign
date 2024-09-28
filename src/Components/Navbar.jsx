import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LucideMenu, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full  mx-auto">
      <nav className="sticky top-0 z-50 flex justify-between items-center py-3 px-5 md:py-4 md:px-6 lg:max-w-screen-2xl  bg-transparent ">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src="/logo-muft.svg" className="lg:w-60 w-40" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="lg:flex hidden gap-7">
          <Link to="/courses" className="nav-link hover:text-purple-800">
            Our Courses
          </Link>
          <Link to="/achievements" className="nav-link hover:text-purple-800">
            Achievements
          </Link>
          <p className="nav-link hover:text-purple-800">Resources</p>
          <Link to="/company" className="nav-link hover:text-purple-800">
            Company
          </Link>
        </ul>

        {/* Contact Button & Menu Icon */}
        <div className="flex gap-5 items-center">
          <button className="bg-gradient-to-r from-[#403663] to-[#2b1f48] text-white px-5 py-3 lg:py-3 lg:px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105  items-center hidden md:flex">
            Contact
            <ArrowRight className="inline-block ml-2 w-5 lg:w-6" />
          </button>
          <div>
            <LucideMenu
              className="lg:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col lg:hidden bg-white shadow-md p-5 space-y-4 mt-4 text-center transition-all duration-400 ease-in-out`}
      >
        <Link to="/courses" className="nav-link hover:text-purple-600">
          Our Courses
        </Link>
        <Link to="/achievements" className="nav-link hover:text-purple-600">
          Achievements
        </Link>
        <p className="nav-link hover:text-purple-600">Resources</p>
        <Link to="/company" className="nav-link hover:text-purple-600">
          Company
        </Link>

        <button className="bg-gradient-to-r from-[#403663] to-[#2b1f48] text-white px-5 py-3 rounded-full shadow-lg transform transition duration-300 hover:scale-105 flex items-center justify-center md:hidden">
          Contact
          <ArrowRight className="inline-block ml-2 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
