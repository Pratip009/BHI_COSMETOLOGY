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
    }, 200);
    setTimeoutId(id);
  };

  return (
    <header className="w-full fixed top-0 z-50 font-sans overflow-x-hidden max-w-full">
      {/* Top Bar */}
      <div className="bg-[#07218F] text-white text-xs sm:text-sm py-2 px-2 sm:px-3 flex justify-between sm:justify-end items-center flex-wrap gap-y-2 font-semibold max-w-full overflow-x-hidden">
        <a
          href="tel:201-721-5574"
          className="sm:pr-3 text-center w-full sm:w-auto break-words"
        >
          Call Us: 201-721-5574
        </a>
        <Link
          to="/signup"
          className="bg-[#ea384d] hover:bg-[#e76c7a] text-white px-2 py-1 sm:px-3 sm:py-2 rounded font-bold transition-colors text-center w-full sm:w-auto"
        >
          Sign Up
        </Link>
      </div>

      {/* Navbar */}
      <div className="bg-white shadow-md w-full px-2 sm:px-4 py-3 sm:py-4 overflow-x-hidden max-w-full">
        <div className="max-w-full mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-8 sm:h-10 w-auto object-contain max-w-[120px]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-wrap space-x-3 lg:space-x-5 text-sm font-medium items-center">
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
                <div className="absolute left-0 -mt-1 pt-2 w-40 bg-white shadow-md rounded z-50">
                  {[
                    ["cosmetology", "Cosmetology"],
                    ["barbering", "Barbering"],
                    ["esthetician", "Esthetician"],
                    ["nail-technology", "Nail Tech"],
                    ["full-courses", "Full Courses"],
                  ].map(([path, label]) => (
                    <Link
                      key={path}
                      to={`/programs/${path}`}
                      className="block px-3 py-2 hover:bg-gray-100 transition-colors break-words"
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
              Application
            </Link>
            <Link
              to="/apply/request-tour"
              className="hover:text-blue-500 transition-colors"
            >
              Request Tour
            </Link>
            <Link
              to="/calendar"
              className="hover:text-blue-500 transition-colors"
            >
              Calendar
            </Link>
            <Link
              to="/gallery"
              className="hover:text-blue-500 transition-colors"
            >
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
              Social Updates
            </Link>
            <Link to="/faq" className="hover:text-blue-500 transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800">
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-2 py-3 max-h-[80vh] overflow-y-auto overflow-x-hidden w-full max-w-full">
          {[
            ["/", "Home"],
            ["/about", "About Us"],
            ["/contact", "Contact"],
          ].map(([to, label]) => (
            <Link
              key={to}
              to={to}
              className="block hover:text-blue-500 transition-colors py-1 break-words"
            >
              {label}
            </Link>
          ))}

          {/* Mobile Dropdown */}
          <div>
            <span className="block font-semibold mt-2">Programs</span>
            {[
              ["cosmetology", "Cosmetology"],
              ["barbering", "Barbering"],
              ["esthetician", "Esthetician"],
              ["nail-technology", "Nail Tech"],
              ["full-courses", "Full Courses"],
            ].map(([path, label]) => (
              <Link
                key={path}
                to={`/programs/${path}`}
                className="block hover:text-blue-500 transition-colors py-1 break-words"
              >
                {label}
              </Link>
            ))}
          </div>

          {[
            ["/apply/application-form", "Application"],
            ["/apply/request-tour", "Request Tour"],
            ["/calendar", "Calendar"],
            ["/gallery", "Gallery"],
            ["/salon-services", "Salon Services"],
            ["/social-media", "Social Updates"],
            ["/faq", "FAQ"],
          ].map(([to, label]) => (
            <Link
              key={to}
              to={to}
              className="block hover:text-blue-500 transition-colors py-1 break-words"
            >
              {label}
            </Link>
          ))}

          <Link
            to="/apply"
            className="block bg-lime-400 text-black text-center py-2 rounded hover:bg-lime-500 transition-colors font-semibold mt-2"
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;