import React from "react";
import { Link } from "react-router-dom";
import VirtualTour from "../components/Home-Components/VirtualTour";
import EventGallery from "../components/Home-Components/EventGallery";
import ScrollToTopButton from "../components/ScrollToTopButton";
import SocialBar from "../components/SocialBar";

const HomePage = () => {
  const steps = [
    "Input your address",
    "Choose your services",
    "Select a date and time",
    "Create your account",
    "Get service",
  ];
  const services = [
    {
      title: "Blowouts, buns, and braids",
      price: "Starting at $60",
      description: "For hair that bounces from thing to thing, just like you.",
      image:
        "https://img.freepik.com/free-photo/pretty-beautiful-girl-lying-with-bright-red-flowers-her-hair-bright-makeup-isolated-white_158538-10539.jpg?uid=R91963452&ga=GA1.1.1581216429.1736934459&semt=ais_hybrid&w=740", // replace with actual image
      buttonText: "Book Hair",
    },
    {
      title: "Nail maintenance",
      price: "Starting at $40",
      description: "Get fresh nails right in your home, hotel, or office.",
      image:
        "https://img.freepik.com/free-photo/vertical-shot-female-hands-wearing-bracelets_181624-15358.jpg?uid=R91963452&ga=GA1.1.1581216429.1736934459&semt=ais_hybrid&w=740", // replace with actual image
      buttonText: "Book Nails",
    },
    {
      title: "Makeup for every moment",
      price: "Starting at $90",
      description: "Face events with confidence—and flawless makeup.",
      image:
        "https://img.freepik.com/free-photo/portrait-model-with-perfect-skin-bright-make-up-big-pink-lips-necklace_273443-2102.jpg?uid=R91963452&ga=GA1.1.1581216429.1736934459&semt=ais_hybrid&w=740", // replace with actual image
      buttonText: "Book Makeup",
    },
  ];
  return (
    <>
      {/* Hero Section with Video */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source
            src="https://images.glamsquad.com/client/www/hero-video-mobile.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-4xl">
            HANDS-ON COSMETOLOGY, ESTHETICS, NAILS, AND BARBERING PROGRAMS IN
            NEW JERSEY
          </h1>

          <button className="mt-6 bg-[#ea384d] hover:bg-[#e76c7a] text-white font-bold py-3 px-6 rounded">
            VIEW PROGRAMS
          </button>

          <h2 className="mt-8 text-2xl md:text-3xl font-bold">
            NEXT CLASSES START JUNE 2
          </h2>

          {/* Inquiry Form */}
          <form className="mt-6 w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 rounded text-black"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 rounded text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded text-black"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="p-3 rounded text-black"
            />

            <select className="p-3 rounded text-black">
              <option>Program</option>
              <option>Cosmetology</option>
              <option>Barbering</option>
            </select>
            <select className="p-3 rounded text-black">
              <option>Schedule</option>
              <option>Morning</option>
              <option>Evening</option>
            </select>
            <select className="p-3 rounded text-black">
              <option>Location</option>
              <option>Austin</option>
              <option>Round Rock</option>
            </select>
            <select className="p-3 rounded text-black">
              <option>How Did You Hear About Us?</option>
              <option>Google</option>
              <option>Social Media</option>
            </select>
          </form>

          <button className="mt-6 bg-[#ea384d] hover:bg-[#e76c7a] text-white font-bold py-3 px-6 rounded">
            REQUEST INFO
          </button>
        </div>
      </div>

      {/* Banner Section */}
      <div className="bg-[#07218F] text-white text-center py-10 px-2 text-sm">
        <strong className="text-[32px] font-light">
          Now offering virtual tours!
        </strong>
        <br /> Contact a{" "}
        <Link to="#" className="underline">
          school near you
        </Link>{" "}
        to learn more.
      </div>

      {/* Aveda Culture Section */}
      <section className="bg-white py-12 px-4">
        <h2 className="text-3xl font-light text-center mb-10">
          The Aveda culture
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/60 text-center text-gray-800 text-lg space-y-6 md:space-y-0">
          <div className="px-4">
            <p>
              Comprehensive,
              <br />
              diverse, all-inclusive
              <br />
              curriculum
            </p>
          </div>
          <div className="px-4">
            <p>
              Job placement &<br />
              career support
            </p>
          </div>
          <div className="px-4">
            <p>
              Creative
              <br />
              opportunities in
              <br />
              fashion & editorial
            </p>
          </div>
          <div className="px-4">
            <p>
              An eco-friendly,
              <br />
              cruelty-free brand to
              <br />
              be proud of
            </p>
          </div>
        </div>
      </section>
      <div className="bg-[#1d1d1d] text-white text-center py-10 px-2 text-sm">
        <strong className="text-[32px] font-semibold">Keeping you safe</strong>

        <p className="mt-4 text-[22px] font-thin leading-relaxed">
          Aveda Institutes provide trustworthy, sanitized and safety-focused{" "}
          <br />
          environments to learn, teach and enjoy student services.
        </p>
      </div>

      <div className="py-12 px-4 max-w-7xl mx-auto text-center font-sans">
        <h2 className="text-4xl font-extrabold mb-10 tracking-tight font-display">
          Five-star beauty services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="space-y-4">
              <div className="text-left space-y-1">
                <h3 className="text-2xl font-semibold tracking-wide text-gray-800 font-serif">
                  {service.title}
                </h3>
                <p className="text-md text-[#ea384d] font-semibold">
                  {service.price}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="relative group shadow-lg overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <button className="border border-white text-white px-6 py-2 font-semibold tracking-wide rounded-full bg-black/40 backdrop-blur hover:bg-white hover:text-black transition duration-300 ease-in-out shadow-md">
                    {service.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          How to book us
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 text-lg font-medium">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-blue-800 font-semibold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{step}</span>
            </div>
          ))}
        </div>

        <button className="border border-black px-6 py-3 font-medium hover:bg-black hover:text-white transition duration-300">
          Get Started
        </button>
      </div>
      <VirtualTour/>
      <EventGallery/>
      <SocialBar />
      <ScrollToTopButton />

    </>
  );
};

export default HomePage;
