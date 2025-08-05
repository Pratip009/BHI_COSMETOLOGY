import React from "react";

const WorkshopEvent = () => {
  return (
    <section className="relative py-16 px-6 md:px-12 bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100 text-gray-900 rounded-3xl shadow-lg overflow-hidden mt-20 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-red-700 uppercase tracking-wide animate-pulse">
            🚨 Urgent: Beauty Career Starter Workshop – Aug 16!
          </h2>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-md">
          <p className="text-lg md:text-xl font-medium mb-6 text-gray-800">
            📅 <strong>Date:</strong> August 16, 2025 &nbsp; | &nbsp; 🕒 <strong>Time:</strong> TBD
          </p>

          <p className="text-lg md:text-xl font-medium mb-6 text-gray-800">
            📍 <strong>Location:</strong> Cosmetology School of Jersey City, 910 Bergen Ave, Floor 3
          </p>

          <p className="text-md md:text-lg text-gray-700 leading-relaxed">
            This <strong>interactive workshop</strong> is designed for future beauty professionals! Meet our expert instructors, explore our cosmetology, barbering, nail tech, and skincare programs, and learn how you can get licensed and start your dream career.
          </p>

          <p className="text-md md:text-lg mt-4 text-gray-700">
            🎉 Light refreshments will be served. <strong>Walk-ins welcome!</strong>
          </p>

          <div className="mt-8 flex justify-center">
            <button className="bg-red-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow hover:bg-red-700 transition duration-300">
              Reserve Your Spot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopEvent;
