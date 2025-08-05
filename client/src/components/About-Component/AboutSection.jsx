import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import aboutImg from "../../assets/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  "State-Approved Curriculum",
  "Hands-On Practical Training",
  "Mentorship by Experienced Instructors",
  "Salon-Readiness Skills",
  "Career Guidance & Support",
  "Workforce Development Focus",
  "Diverse Student Community",
  "Confidence-Building Education",
];

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div
        className="md:w-1/2 rounded-xl overflow-hidden shadow-md"
        data-aos="fade-right"
      >
        <img
          src={aboutImg}
          alt="About"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Content */}
      <div className="md:w-1/2 text-gray-800" data-aos="fade-left">
        <h2 className="text-3xl font-bold uppercase mb-2">About Us</h2>
        <div className="w-16 h-1 bg-blue-500 mb-6" />

        <p className="mb-4 text-gray-600 leading-relaxed">
          At Cosmetology School of Jersey City, our mission is to equip students
          with the skills, professionalism, and confidence required to succeed
          in the beauty industry. We provide a comprehensive educational
          experience that includes technical training, salon-readiness, and
          career guidance. Our programs are designed not only to meet state
          licensure requirements, but to ensure graduates are fully prepared to
          thrive in real-world salon environments.
        </p>
        <p className="mb-6 text-gray-600 leading-relaxed">
          With a strong focus on mentorship, hands-on instruction, and workforce
          development, we are proud to serve a diverse student population and
          support their growth from classroom to career.
        </p>

        <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-blue-600"
            >
              <FaCheck className="text-blue-500" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        {/* Book Appointment Button */}
        <button className="relative inline-block px-8 py-3 font-semibold text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg group hover:from-purple-600 hover:to-blue-600 overflow-hidden">
          <span className="absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out transform translate-x-full group-hover:translate-x-0 bg-white opacity-10 rounded-full"></span>
          <span className="relative z-10">Book Appointment</span>
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
