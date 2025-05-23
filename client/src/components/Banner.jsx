import React from "react";

const Banner = ({ image, title, height = "h-80" }) => {
  return (
    <div
      className={`relative w-full ${height} bg-cover bg-center flex items-center justify-center`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Text */}
      <h1
        className="
          relative z-10
          text-white
          text-4xl md:text-6xl
          
          italic
          tracking-wide
          drop-shadow-xl
          select-none
          px-4
          
        "
        // style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        {title}
      </h1>
    </div>
  );
};

export default Banner;
