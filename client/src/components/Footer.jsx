import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 text-sm">

        {/* Logo */}
        <div className="col-span-2 flex flex-col items-start">
      
          <h2 className="text-xl font-light tracking-widest">BRIGHT HORIZON <span className="font-bold">INSTITUTE</span></h2>
        </div>

        {/* PROGRAMS */}
        <div>
          <h4 className="font-bold mb-3">PROGRAMS</h4>
          <ul className="space-y-2">
            <li><Link to="#">Cosmetology</Link></li>
            <li><Link to="#">Barbering</Link></li>
            <li><Link to="#">Esthetics</Link></li>
            <li><Link to="#">Nail Technology</Link></li>
          </ul>
        </div>

        {/* STUDENT EXPERIENCE */}
        <div>
          <h4 className="font-bold mb-3">STUDENT EXPERIENCE</h4>
          <ul className="space-y-2">
            <li><Link to="#">Hybrid Online Course Schedules</Link></li>
            <li><Link to="#">Business Training</Link></li>
            <li><Link to="#">Awards, Credentials, & Partnerships</Link></li>
            <li><Link to="#">Accreditation</Link></li>
            <li><Link to="#">Testimonials</Link></li>
          </ul>
        </div>

        {/* STUDENTS & ALUMNI */}
        <div>
          <h4 className="font-bold mb-3">STUDENTS & ALUMNI</h4>
          <ul className="space-y-2">
            <li><Link to="#">Request a Schedule Change</Link></li>
            <li><Link to="#">Request Re-Enrollment</Link></li>
            <li><Link to="#">Request Transcripts</Link></li>
            <li><Link to="#">Job Bulletin</Link></li>
          </ul>
        </div>

        {/* FINANCIAL AID */}
        <div>
          <h4 className="font-bold mb-3">FINANCIAL AID</h4>
          <ul className="space-y-2">
            <li><Link to="#">Plan Your Funding</Link></li>
            <li><Link to="#">Complete Your FAFSA</Link></li>
            <li><Link to="#">Payment Plans</Link></li>
            <li><Link to="#">Scholarships</Link></li>
            <li><Link to="#">Texas Workforce Commission</Link></li>
            <li><Link to="#">Financial Aid FAQ</Link></li>
            <li><Link to="#">Net Price Calculator</Link></li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h4 className="font-bold mb-3">ABOUT</h4>
          <ul className="space-y-2">
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">FAQ</Link></li>
            <li><Link to="#">Blog</Link></li>
            <li><Link to="#">Consumer Disclosures</Link></li>
            <li><Link to="#">Why Avenue Five</Link></li>
            <li><Link to="#">Staff</Link></li>
            <li><Link to="#">Employment</Link></li>
          </ul>
        </div>

        {/* LOCATIONS & SALON */}
        <div>
          <h4 className="font-bold mb-3">LOCATIONS</h4>
          <ul className="space-y-2 mb-4">
            <li><Link to="#">North Austin</Link></li>
            <li><Link to="#">South Austin</Link></li>
            <li><Link to="#">Why Austin?</Link></li>
          </ul>
          <h4 className="font-bold mb-3">SALON & SPA</h4>
          <ul className="space-y-2">
            <li><Link to="#">Menu & Pricing</Link></li>
            <li><Link to="#">Purchase Gift Card</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 text-xs text-gray-400">
        Avenue Five Institute © {new Date().getFullYear()} All Rights Reserved.
        <br />
        <Link to="/privacy-policy" className="underline hover:text-white mt-1 inline-block">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
