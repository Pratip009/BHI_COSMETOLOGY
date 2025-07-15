import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/CSJC Logo.svg";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Top Utility Bar */}
      <div className="bg-[#07218F] text-white text-sm py-2 px-4 flex justify-end items-center space-x-4 font-semibold">
        <a href="tel:512-630-0099" className="border-r border-white pr-4">
          Call Us: 512-630-0099
        </a>
        <Link
          to="/signup"
          className="bg-[#ea384d] hover:bg-[#e76c7a] text-white px-4 py-2 rounded font-bold"
        >
          Sign Up
        </Link>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo} // <-- replace with your actual logo path
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>

          <div className="relative group">
            <button className="hover:text-blue-500">Programs ▾</button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded hidden group-hover:block z-50">
              <Link
                to="/programs/cosmetology"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Cosmetology
              </Link>
              <Link
                to="/programs/barbering"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Barbering
              </Link>
              <Link
                to="/programs/esthetician"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Esthetician
              </Link>
              <Link
                to="/programs/nail-technology"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Nail Technology
              </Link>
              <Link
                to="/programs/full-courses"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Full Courses
              </Link>
            </div>
          </div>

          <Link to="/apply/application-form">Application Form</Link>
          <Link to="/apply/request-tour">Request a Tour</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/salon-services">Salon Services</Link>
          <Link to="/social-media">Social Media Updates</Link>
          <Link to="/faq">FAQ</Link>
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
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>

          <div>
            <span className="block font-semibold mt-2">Programs</span>
            <Link to="/programs/cosmetology">Cosmetology</Link>
            <Link to="/programs/barbering">Barbering</Link>
            <Link to="/programs/esthetician">Esthetician</Link>
            <Link to="/programs/nail-technology">Nail Technology</Link>
            <Link to="/programs/full-courses">Full Courses</Link>
          </div>
          <Link to="/apply/application-form">Application Form</Link>
          <Link to="/apply/request-tour">Request a Tour</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/salon-services">Salon Services</Link>
          <Link to="/social-media">Social Media Updates</Link>
          <Link to="/faq">FAQ</Link>
          <Link
            to="/apply"
            className="block bg-lime-400 text-black text-center py-2 rounded"
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
