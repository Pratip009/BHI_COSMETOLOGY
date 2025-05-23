import React from "react";
import {
  FaAirbnb,
  FaAmazon,
  FaQuora,
  FaHubspot,
  FaCameraRetro,
} from "react-icons/fa";

// Define brands (no color needed now since all are metallic)
const brands = [
  { name: "Airbnb", icon: <FaAirbnb /> },
  { name: "Canon", icon: <FaCameraRetro /> },
  { name: "Quora", icon: <FaQuora /> },
  { name: "HubSpot", icon: <FaHubspot /> },
  { name: "Amazon", icon: <FaAmazon /> },
];

const loopedBrands = [...brands, ...brands];

const BrandShowcase = () => {
  return (
    <div className="w-full overflow-hidden py-12 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="animate-scroll flex whitespace-nowrap gap-20 text-6xl text-[#a0a0a0]">
          {loopedBrands.map((brand, index) => (
            <div
              key={index}
              className="cursor-pointer transition-transform hover:scale-110 duration-300 shadow-[0_4px_20px_rgba(160,160,160,0.2)] hover:text-[#d3d3d3]"
              title={brand.name}
              style={{
                textShadow: "1px 1px 3px rgba(200,200,200,0.4)",
                color: "#b0b0b0",
              }}
            >
              {brand.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandShowcase;
