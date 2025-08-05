import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import VirtualTour from "../components/Home-Components/VirtualTour";
import EventGallery from "../components/Home-Components/EventGallery";
import ScrollToTopButton from "../components/ScrollToTopButton";
import SocialBar from "../components/SocialBar";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import WorkshopHighlight from "../components/Home-Components/WorkshopHighlight";
const HomePage = () => {
  const steps = [
    "Input your address",
    "Choose your services",
    "Select a date and time",
    "Create your account",
    "Get service",
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
    });
  }, []);
  const services = [
    {
      title: "Blowouts, buns, and braids",
      price: "Starting at $60",
      description: "For hair that bounces from thing to thing, just like you.",
      image:
        "https://img.freepik.com/free-photo/pretty-beautiful-girl-lying-with-bright-red-flowers-her-hair-bright-makeup-isolated-white_158538-10539.jpg?w=740",
      buttonText: "Book Hair",
    },
    {
      title: "Nail maintenance",
      price: "Starting at $40",
      description: "Get fresh nails right in your home, hotel, or office.",
      image:
        "https://img.freepik.com/free-photo/vertical-shot-female-hands-wearing-bracelets_181624-15358.jpg?w=740",
      buttonText: "Book Nails",
    },
    {
      title: "Makeup for every moment",
      price: "Starting at $90",
      description: "Face events with confidence—and flawless makeup.",
      image:
        "https://img.freepik.com/free-photo/portrait-model-with-perfect-skin-bright-make-up-big-pink-lips-necklace_273443-2102.jpg?w=740",
      buttonText: "Book Makeup",
    },
  ];
  const features = [
    "Comprehensive, diverse, all-inclusive curriculum",
    "Job placement & career support",
    "Creative opportunities in fashion & editorial",
    "An eco-friendly, cruelty-free brand to be proud of",
  ];
  return (
    <>
      {/* Hero Section with Video */}
      <div className="relative w-full min-h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://images.glamsquad.com/client/www/hero-video-mobile.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-10" />

        {/* Foreground */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-white px-4 py-12 text-center">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-5xl mt-10 text-center sm:min-h-[150px]">
            <Typewriter
              words={[
                "HANDS-ON COSMETOLOGY, ESTHETICS, NAILS, AND BARBERING PROGRAMS IN NEW JERSEY",
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </h1>

          <button className="mt-6 bg-[#ea384d] hover:bg-[#e76c7a] text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-md sm:rounded text-sm sm:text-base">
            VIEW PROGRAMS
          </button>

          <h2 className="mt-6 text-lg sm:text-xl md:text-2xl font-bold">
            NEXT CLASSES START JUNE 2
          </h2>

          <form className="mt-6 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-2 sm:px-4">
            {[
              { type: "text", placeholder: "First Name" },
              { type: "text", placeholder: "Last Name" },
              { type: "email", placeholder: "Email" },
              { type: "tel", placeholder: "Phone" },
            ].map((field, idx) => (
              <input
                key={idx}
                type={field.type}
                placeholder={field.placeholder}
                className="p-3 sm:p-4 rounded-2xl border border-gray-200 bg-white text-black placeholder-gray-500 text-sm sm:text-base 
                 shadow-md hover:shadow-lg focus:shadow-xl 
                 focus:outline-none focus:ring-2 focus:ring-[#2848ff] transition duration-200 ease-in-out transform focus:-translate-y-0.5"
              />
            ))}

            {/* Select Inputs */}
            {[
              ["Program", "Cosmetology", "Barbering"],
              ["Schedule", "Morning", "Evening"],
              ["Location", "Austin", "Round Rock"],
              ["How Did You Hear About Us?", "Google", "Social Media"],
            ].map(([label, ...options], idx) => (
              <select
                key={idx}
                className="p-3 sm:p-4 rounded-2xl border border-gray-200 bg-white text-black text-sm sm:text-base 
                 shadow-md hover:shadow-lg focus:shadow-xl 
                 focus:outline-none focus:ring-2 focus:ring-[#ea384d] transition duration-200 ease-in-out transform focus:-translate-y-0.5"
              >
                <option disabled selected>
                  {label}
                </option>
                {options.map((opt, i) => (
                  <option key={i}>{opt}</option>
                ))}
              </select>
            ))}
          </form>

          <button className="mt-6 bg-[#ea384d] hover:bg-[#e76c7a] text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-md sm:rounded text-sm sm:text-base">
            REQUEST INFO
          </button>
        </div>
      </div>

      {/* Banner Section */}
      <div
        className="bg-[#07218F] text-white text-center py-10 px-4 text-sm sm:text-base"
        data-aos="fade-up"
      >
        <strong className="text-2xl sm:text-3xl font-light block">
          Now offering virtual tours!
        </strong>
        Contact a{" "}
        <Link to="#" className="underline">
          school near you
        </Link>{" "}
        to learn more.
      </div>

      {/* Aveda Culture Section */}
      <section className="bg-white py-12 px-4">
        <h2
          className="text-2xl sm:text-3xl font-light text-center mb-10"
          data-aos="fade-up"
        >
          The Aveda culture
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/60 text-center text-gray-800 text-base sm:text-lg space-y-6 md:space-y-0">
          {features.map((text, index) => (
            <div
              key={index}
              className="px-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Banner */}
      <div
        className="bg-[#1d1d1d] text-white text-center py-10 px-4"
        data-aos="fade-up"
      >
        <strong className="text-2xl sm:text-3xl font-semibold">
          Keeping you safe
        </strong>
        <p className="mt-4 text-base sm:text-xl font-thin leading-relaxed">
          Cosmetology School of New Jersey provide trustworthy, sanitized and
          safety-focused environments to learn, teach and enjoy student
          services.
        </p>
      </div>

      {/* Services Section */}
      <div className="py-12 px-4 max-w-7xl mx-auto text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-10"
          data-aos="fade-up"
        >
          Five-star beauty services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="space-y-4"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <div className="text-left space-y-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-sm text-[#ea384d] font-semibold">
                  {service.price}
                </p>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>

              <div className="relative group shadow-lg overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <button className="border border-white text-white px-4 py-2 text-sm sm:text-base font-semibold rounded-full bg-black/40 hover:bg-white hover:text-black transition shadow-md">
                    {service.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to Book */}
      <div
        className="py-16 px-4 max-w-6xl mx-auto text-center"
        data-aos="fade-up"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8">
          How to book us
        </h2>

        <div
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 mb-8 text-sm sm:text-base font-medium"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-blue-800 font-semibold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{step}</span>
            </div>
          ))}
        </div>

        <button
          className="border border-black text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 font-medium hover:bg-black hover:text-white transition"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Get Started
        </button>
      </div>
      <WorkshopHighlight />
      <VirtualTour />
      <EventGallery />
      <SocialBar />
      <ScrollToTopButton />
    </>
  );
};

export default HomePage;
