import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="bg-white w-full fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                id="logo"
                className="h-8 sm:h-10 md:h-12 w-auto"
                src="/logo.png"
                alt="Logo"
              />
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8">
              <a
                className="text-sm lg:text-base text-gray-500 font-medium hover:text-gray-900 transition duration-300"
              >
                HOME
              </a>
              <a
                className="text-sm lg:text-base text-gray-500 font-medium hover:text-gray-900 transition duration-300"
              >
                COLLEGE TEACHING INTERNS
              </a>
              <a
                className="text-sm lg:text-base text-gray-500 font-medium hover:text-gray-900 transition duration-300"
              >
                COLLEGES
              </a>
              <a
                className="text-sm lg:text-base text-gray-500 font-medium hover:text-gray-900 transition duration-300"
              >
                OUR TEAM
              </a>
              <a
                className="text-sm lg:text-base text-gray-500 font-medium hover:text-gray-900 transition duration-300"
              >
                CONTACT
              </a>
            </div>

            {/* Login Button */}
            <div className="hidden md:block">
              <Link to="/login">
              <button className="bg-[#009879] text-sm lg:text-base text-white px-4 py-2 rounded-md hover:bg-[#008069] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#009879]">
                Login
              </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "max-h-screen opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition duration-300"
              >
                Home
              </a>
              <a
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition duration-300"
              >
                College Teaching Interns
              </a>
              <a
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition duration-300"
              >
                Colleges
              </a>
              <a
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition duration-300"
              >
                Our Team
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition duration-300"
              >
                Contact
              </a>
              <Link to="/login">
              <button className="w-full mt-4 bg-[#009879] text-white px-4 py-2 rounded-md hover:bg-[#008069] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#009879]">
                Login
              </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Add padding to prevent content from going under fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;
