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
      <div className="bg-[#07218F] text-white text-xs sm:text-sm py-2 px-3 sm:px-4 flex justify-between sm:justify-end items-center flex-wrap gap-y-2 font-semibold">
        <a
          href="tel:201-721-5574"
          className=" sm:pr-4 text-center w-full sm:w-auto"
        >
          Call Us: 201-721-5574
        </a>
        <Link
          to="/signup"
          className="bg-[#ea384d] hover:bg-[#e76c7a] text-white px-3 py-1 sm:px-4 sm:py-2 rounded font-bold transition-colors text-center w-full sm:w-auto"
        >
          Sign Up
        </Link>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-wrap space-x-4 lg:space-x-6 text-sm font-medium items-center">
          <Link to="/" className="hover:text-blue-500 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-500 transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-blue-500 transition-colors">
            Contact
          </Link>

          {/* Dropdown */}
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
                {[
                  ["cosmetology", "Cosmetology"],
                  ["barbering", "Barbering"],
                  ["esthetician", "Esthetician"],
                  ["nail-technology", "Nail Technology"],
                  ["full-courses", "Full Courses"],
                ].map(([path, label]) => (
                  <Link
                    key={path}
                    to={`/programs/${path}`}
                    className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/apply/application-form"
            className="hover:text-blue-500 transition-colors"
          >
            Application Form
          </Link>
          <Link
            to="/apply/request-tour"
            className="hover:text-blue-500 transition-colors"
          >
            Request a Tour
          </Link>
          <Link
            to="/calendar"
            className="hover:text-blue-500 transition-colors"
          >
            Calendar
          </Link>
          <Link to="/gallery" className="hover:text-blue-500 transition-colors">
            Gallery
          </Link>
          <Link
            to="/salon-services"
            className="hover:text-blue-500 transition-colors"
          >
            Salon Services
          </Link>
          <Link
            to="/social-media"
            className="hover:text-blue-500 transition-colors"
          >
            Social Media Updates
          </Link>
          <Link to="/faq" className="hover:text-blue-500 transition-colors">
            FAQ
          </Link>
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
        <div className="md:hidden bg-white shadow-lg px-4 py-4 max-h-[80vh] overflow-y-auto space-y-2 text-sm font-medium">
          {[
            ["/", "Home"],
            ["/about", "About Us"],
            ["/contact", "Contact"],
          ].map(([to, label]) => (
            <Link
              key={to}
              to={to}
              className="block hover:text-blue-500 transition-colors"
            >
              {label}
            </Link>
          ))}

          <div>
            <span className="block font-semibold mt-2">Programs</span>
            {[
              ["cosmetology", "Cosmetology"],
              ["barbering", "Barbering"],
              ["esthetician", "Esthetician"],
              ["nail-technology", "Nail Technology"],
              ["full-courses", "Full Courses"],
            ].map(([path, label]) => (
              <Link
                key={path}
                to={`/programs/${path}`}
                className="block hover:text-blue-500 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {[
            ["/apply/application-form", "Application Form"],
            ["/apply/request-tour", "Request a Tour"],
            ["/calendar", "Calendar"],
            ["/gallery", "Gallery"],
            ["/salon-services", "Salon Services"],
            ["/social-media", "Social Media Updates"],
            ["/faq", "FAQ"],
          ].map(([to, label]) => (
            <Link
              key={to}
              to={to}
              className="block hover:text-blue-500 transition-colors"
            >
              {label}
            </Link>
          ))}

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
