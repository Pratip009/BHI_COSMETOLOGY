import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/CSJC Logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setShowDropdown(false);
    }, 200); // 200ms delay before closing
    setTimeoutId(id);
  };

  return (
    <header className="w-full fixed top-0 z-50 font-sans">
      {/* Top Utility Bar */}
      <div className="bg-[#07218F] text-white text-sm py-2 px-4 flex justify-end items-center space-x-4 font-semibold">
        <a href="tel:512-630-0099" className="border-r border-white pr-4">
          Call Us: 512-630-0099
        </a>
        <Link
          to="/signup"
          className="bg-[#ea384d] hover:bg-[#e76c7a] text-white px-4 py-2 rounded font-bold transition-colors"
        >
          Sign Up
        </Link>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium items-center">
          <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>

          {/* Dropdown Menu */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-blue-500 transition-colors flex items-center">
              Programs <span className="ml-1">▾</span>
            </button>
            {showDropdown && (
              <div className="absolute left-0 -mt-1 pt-2 w-48 bg-white shadow-md rounded z-50">
                <Link
                  to="/programs/cosmetology"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  Cosmetology
                </Link>
                <Link
                  to="/programs/barbering"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  Barbering
                </Link>
                <Link
                  to="/programs/esthetician"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  Esthetician
                </Link>
                <Link
                  to="/programs/nail-technology"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  Nail Technology
                </Link>
                <Link
                  to="/programs/full-courses"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  Full Courses
                </Link>
              </div>
            )}
          </div>

          <Link to="/apply/application-form" className="hover:text-blue-500 transition-colors">Application Form</Link>
          <Link to="/apply/request-tour" className="hover:text-blue-500 transition-colors">Request a Tour</Link>
          <Link to="/calendar" className="hover:text-blue-500 transition-colors">Calendar</Link>
          <Link to="/gallery" className="hover:text-blue-500 transition-colors">Gallery</Link>
          <Link to="/salon-services" className="hover:text-blue-500 transition-colors">Salon Services</Link>
          <Link to="/social-media" className="hover:text-blue-500 transition-colors">Social Media Updates</Link>
          <Link to="/faq" className="hover:text-blue-500 transition-colors">FAQ</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 space-y-2 text-sm font-medium">
          <Link to="/" className="block hover:text-blue-500 transition-colors">Home</Link>
          <Link to="/about" className="block hover:text-blue-500 transition-colors">About Us</Link>
          <Link to="/contact" className="block hover:text-blue-500 transition-colors">Contact</Link>

          <div>
            <span className="block font-semibold mt-2">Programs</span>
            <Link to="/programs/cosmetology" className="block hover:text-blue-500 transition-colors">Cosmetology</Link>
            <Link to="/programs/barbering" className="block hover:text-blue-500 transition-colors">Barbering</Link>
            <Link to="/programs/esthetician" className="block hover:text-blue-500 transition-colors">Esthetician</Link>
            <Link to="/programs/nail-technology" className="block hover:text-blue-500 transition-colors">Nail Technology</Link>
            <Link to="/programs/full-courses" className="block hover:text-blue-500 transition-colors">Full Courses</Link>
          </div>
          <Link to="/apply/application-form" className="block hover:text-blue-500 transition-colors">Application Form</Link>
          <Link to="/apply/request-tour" className="block hover:text-blue-500 transition-colors">Request a Tour</Link>
          <Link to="/calendar" className="block hover:text-blue-500 transition-colors">Calendar</Link>
          <Link to="/gallery" className="block hover:text-blue-500 transition-colors">Gallery</Link>
          <Link to="/salon-services" className="block hover:text-blue-500 transition-colors">Salon Services</Link>
          <Link to="/social-media" className="block hover:text-blue-500 transition-colors">Social Media Updates</Link>
          <Link to="/faq" className="block hover:text-blue-500 transition-colors">FAQ</Link>
          <Link
            to="/apply"
            className="block bg-lime-400 text-black text-center py-2 rounded hover:bg-lime-500 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;