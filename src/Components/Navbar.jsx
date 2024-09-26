import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LucideMenu, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full mx-auto">
      <nav className="flex justify-between items-center py-3 px-3 lg:max-w-screen-2xl mx-auto">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src="/logo-muft.svg" className="lg:w-60 w-40" />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="lg:flex hidden gap-7">
          <Link to="/courses">Our Courses</Link>
          <Link to="/achievements">Achievements</Link>
          <p>Resources</p>
          <Link to="/company">Company</Link>
        </ul>

        {/* Contact Button & Menu Icon */}
        <div className="flex gap-5 items-center">
          <button className="bg-[#403663] text-white px-4 py-2 lg:py-3 lg:px-5 rounded-full lg:flex items-center hidden md:flex">
            Contact
            <ArrowRight className="inline-block ml-2 w-10 rounded-full" />
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
        } flex-col lg:hidden bg-white shadow-md p-5 space-y-4 mt-4 text-center transition-all duration-300 ease-in-out`}
      >
        <Link to="/courses" className="hover:text-purple-600">
          Our Courses
        </Link>
        <Link to="/achievements" className="hover:text-purple-600">
          Achievements
        </Link>
        <p className="hover:text-purple-600">Resources</p>
        <Link to="/company" className="hover:text-purple-600">
          Company
        </Link>
        <button className="bg-[#403663] text-white px-4 py-2 lg:py-3 lg:px-5 rounded-full">
          Contact
          <ArrowRight className="inline-block ml-2 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
