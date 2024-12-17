import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserAlt, FaCog, FaPhoneAlt } from "react-icons/fa"; // React Icons (FontAwesome)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handletoggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className="bg-gradient-to-r from-gray-900 via-zinc-800 to-black
  text-white  transition-all duration-300 ease-in-out"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 ">
            {/* logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-semibold text-yellow-500 hover:text-yellow-400 transition-all duration-300">
                Rajesh Enterprises
              </h1>
            </div>

            {/* desktop menu - Only Icons for md+ screens */}
            <div className="hidden md:flex space-x-4 md:space-x-16">
              <Link
                to="/"
                className="flex flex-col items-center hover:text-amber-400 active:text-amber-500 focus:text-amber-500
 transition-all duration-300 ease-in-out"
              >
                <FaHome className="h-6 w-6" /> {/* React Icon */}
                <span className="md:hidden">Home</span>{" "}
                {/* Hide text on md+ screens */}
              </Link>
              <Link
                to="/about"
                className="flex flex-col items-center hover:text-amber-400 active:text-amber-500 focus:text-amber-500
 transition-all duration-300 ease-in-out"
              >
                <FaUserAlt className="h-6 w-6" /> {/* React Icon */}
                <span className="md:hidden">About</span>
              </Link>
              <Link
                to="/service"
                className="flex flex-col items-center hover:text-amber-400 active:text-amber-500 focus:text-amber-500
 transition-all duration-300 ease-in-out"
              >
                <FaCog className="h-6 w-6" /> {/* React Icon */}
                <span className="md:hidden">Services</span>
              </Link>
              <Link
                to="/contact"
                className="flex flex-col items-center hover:text-amber-400 active:text-amber-500 focus:text-amber-500
 transition-all duration-300 ease-in-out"
              >
                <FaPhoneAlt className="h-6 w-6" /> {/* React Icon */}
                <span className="md:hidden">Contact</span>
              </Link>
            </div>

            {/* Mobile Toggle Menu */}
            <div className="md:hidden">
              <button
                onClick={handletoggleMenu}
                className="text-gray-300 hover:text-white focus:outline-none text-2xl transition-all duration-300 ease-in-out"
              >
                {isOpen ? "✖" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Show both icons and text */}
        <div
          className={`md:hidden bg-gradient-to-r from-gray-900 via-zinc-700 to-black ${
            isOpen ? "block" : "hidden"
          } space-y-5 px-4 py-3 pl-5 transition-all duration-300 ease-in-out`}
        >
          <Link
            to="/"
            className="flex items-center space-x-4 hover:text-amber-400 active:text-amber-500 focus:text-amber-500 transition-all duration-300 ease-in-out"
            onClick={handletoggleMenu}
          >
            <FaHome className="h-6 w-6" /> {/* React Icon */}
            <span>Home</span>
          </Link>
          <Link
            to="/about"
            className="flex items-center space-x-4 hover:text-amber-400 active:text-amber-500 focus:text-amber-500 transition-all duration-300 ease-in-out"
            onClick={handletoggleMenu}
          >
            <FaUserAlt className="h-6 w-6" /> {/* React Icon */}
            <span>About</span>
          </Link>
          <Link
            to="/service"
            className="flex items-center space-x-4 hover:text-amber-400 active:text-amber-500 focus:text-amber-500 transition-all duration-300 ease-in-out"
            onClick={handletoggleMenu}
          >
            <FaCog className="h-6 w-6" /> {/* React Icon */}
            <span>Services</span>
          </Link>
          <Link
            to="/contact"
            className="flex items-center space-x-4 hover:text-amber-400 active:text-amber-500 focus:text-amber-500 transition-all duration-300 ease-in-out"
            onClick={handletoggleMenu}
          >
            <FaPhoneAlt className="h-6 w-6" /> {/* React Icon */}
            <span>Contact</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
