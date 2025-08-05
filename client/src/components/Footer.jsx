import React from "react";
import { Link } from "react-router-dom";
import footerImg from "../assets/footer.png";
const Footer = () => {
  return (
    <footer
      className="relative text-white py-12"
      style={{
        backgroundImage: `url(${footerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-sm">
        {/* Logo / Brand */}
        <div className="col-span-2 flex flex-col items-start">
          <h2 className="text-xl font-light tracking-widest">
            COSMETOLOGY SCHOOL OF <span className="font-bold">NEW JERSEY</span>
          </h2>
          <p className="mt-3 text-gray-400">
            Empowering future professionals in cosmetology, barbering, and
            beauty.
          </p>
        </div>

        {/* PROGRAMS */}
        <div>
          <h4 className="font-bold mb-3">PROGRAMS</h4>
          <ul className="space-y-2">
            <li>
              <Link to="#">Cosmetology</Link>
            </li>
            <li>
              <Link to="#">Barbering</Link>
            </li>
            <li>
              <Link to="#">Esthetics</Link>
            </li>
            <li>
              <Link to="#">Nail Technology</Link>
            </li>
          </ul>
        </div>

        {/* FINANCIAL AID */}
        <div>
          <h4 className="font-bold mb-3">FINANCIAL AID</h4>
          <ul className="space-y-2">
            <li>
              <Link to="#">Plan Your Funding</Link>
            </li>
            <li>
              <Link to="#">Payment Plans</Link>
            </li>
            <li>
              <Link to="#">Scholarships</Link>
            </li>
            <li>
              <Link to="#">Financial Aid FAQ</Link>
            </li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h4 className="font-bold mb-3">ABOUT</h4>
          <ul className="space-y-2">
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="#">FAQ</Link>
            </li>
            <li>
              <Link to="#">Staff</Link>
            </li>
            <li>
              <Link to="#">Careers</Link>
            </li>
          </ul>
        </div>

        {/* LOCATIONS & SALON */}
        <div>
          <h4 className="font-bold mb-3">LOCATIONS</h4>
          <ul className="space-y-2 mb-4">
            <li>
              <Link to="#">Austin</Link>
            </li>
            <li>
              <Link to="#">Round Rock</Link>
            </li>
          </ul>
          <h4 className="font-bold mb-3">SALON & SPA</h4>
          <ul className="space-y-2">
            <li>
              <Link to="#">Menu & Pricing</Link>
            </li>
            <li>
              <Link to="#">Gift Cards</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 text-xs text-gray-400">
        © {new Date().getFullYear()} Bright Horizon Institute. All rights
        reserved.
        <br />
        <Link
          to="/privacy-policy"
          className="underline hover:text-white mt-1 inline-block"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
