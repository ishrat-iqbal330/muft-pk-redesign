import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LucideMenu, ArrowRight, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Detect current route
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Dropdown state

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown open/close
  };

  // Detect if it's the home page or not and adjust navbar behavior
  useEffect(() => {
    const isHomePage = location.pathname === "/"; // Set sticky only on landing page
    setIsSticky(isHomePage);

    // Optional: Add event listener for sticky behavior on scroll if needed
    if (isHomePage) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`w-full mx-auto ${
        isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""
      }`}
    >
      <nav className="flex items-center justify-between py-3 px-5 md:py-4 md:px-6 lg:max-w-screen-2xl bg-transparent">
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
            Success Stories
          </Link>

          <Link to="/company" className="nav-link hover:text-purple-800">
            Company
          </Link>
          <div className="relative inline-block text-left dropdown">
            {/* Trigger button for dropdown */}
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between  "
              aria-expanded={isOpen}
            >
              Resources <ChevronDown className="w-5 h-5" />
            </button>
            {isOpen && (
              <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                <div className="py-2">
                  <a
                    href="https://www.youtube.com/channel/UCM5QNdoIefx6eumjPk8ZTMw"
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-purple-500 "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube
                  </a>
                  <a
                    href="https://www.facebook.com/AzadChaiwala/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-purple-500 "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            )}
          </div>
        </ul>

        {/* Contact Button & Menu Icon */}
        <div className="flex gap-5 items-center">
          <button className="bg-gradient-to-r from-[#403663] to-[#2b1f48] text-white px-5 py-3 lg:py-3 lg:px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 items-center hidden md:flex">
            Contact
            <ArrowRight className="inline-block ml-2 w-5 lg:w-6" />
          </button>
          <LucideMenu
            className="lg:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col lg:hidden bg-white shadow-md p-5 space-y-4 text-center transition-all duration-400 ease-in-out`}
      >
        <Link to="/courses" className="nav-link hover:text-purple-600">
          Our Courses
        </Link>
        <Link to="/achievements" className="nav-link hover:text-purple-600">
          Achievements
        </Link>

        {/* Resources in mobile view */}
        <button
          onClick={toggleDropdown}
          className="nav-link hover:text-purple-600"
        >
          Resources
        </button>
        {isOpen && (
          <div className="bg-white py-2 rounded-lg shadow-md">
            <a
              href="https://www.youtube.com"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <a
              href="https://www.facebook.com"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        )}

        <Link to="/company" className="nav-link hover:text-purple-600">
          Company
        </Link>

        <button className="bg-gradient-to-r from-[#403663] to-[#2b1f48] text-white px-5 py-3 rounded-full shadow-lg transform transition duration-300 hover:scale-105 flex items-center justify-center">
          Contact
          <ArrowRight className="inline-block ml-2 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
