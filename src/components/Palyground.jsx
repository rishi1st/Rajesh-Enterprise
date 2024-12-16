import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserAlt, FaCog, FaPhoneAlt } from "react-icons/fa"; // React Icons (FontAwesome)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">MySite</h1>
          </div>

          {/* Desktop Menu - Only Icons for md+ screens */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="flex flex-col items-center hover:text-blue-400">
              <FaHome className="h-6 w-6" /> {/* React Icon */}
              <span className="md:hidden">Home</span> {/* Hide text on md+ screens */}
            </Link>
            <Link to="/about" className="flex flex-col items-center hover:text-blue-400">
              <FaUserAlt className="h-6 w-6" /> {/* React Icon */}
              <span className="md:hidden">About</span>
            </Link>
            <Link to="/service" className="flex flex-col items-center hover:text-blue-400">
              <FaCog className="h-6 w-6" /> {/* React Icon */}
              <span className="md:hidden">Services</span>
            </Link>
            <Link to="/contact" className="flex flex-col items-center hover:text-blue-400">
              <FaPhoneAlt className="h-6 w-6" /> {/* React Icon */}
              <span className="md:hidden">Contact</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Show both icons and text */}
      <div
        className={`md:hidden bg-gray-700 ${isOpen ? "block" : "hidden"} space-y-2 px-4 py-3`}
      >
        <Link to="/" className="flex items-center space-x-2 hover:text-blue-400" onClick={toggleMenu}>
          <FaHome className="h-6 w-6" /> {/* React Icon */}
          <span>Home</span>
        </Link>
        <Link to="/about" className="flex items-center space-x-2 hover:text-blue-400" onClick={toggleMenu}>
          <FaUserAlt className="h-6 w-6" /> {/* React Icon */}
          <span>About</span>
        </Link>
        <Link to="/service" className="flex items-center space-x-2 hover:text-blue-400" onClick={toggleMenu}>
          <FaCog className="h-6 w-6" /> {/* React Icon */}
          <span>Services</span>
        </Link>
        <Link to="/contact" className="flex items-center space-x-2 hover:text-blue-400" onClick={toggleMenu}>
          <FaPhoneAlt className="h-6 w-6" /> {/* React Icon */}
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
