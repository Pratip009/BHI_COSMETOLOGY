import React from "react";
import Banner from "../components/Banner"; // adjust path
import AboutBannerImage from "../assets/titlebar_bg.jpg";
import AboutSection from "../components/About-Component/AboutSection";
import BrandShowcase from "../components/About-Component/BrandShowcase";
import TestimonialSlider from "../components/About-Component/TestimonialSlider";
import MissionAndValues from "../components/About-Component/MissionAndValues";

const About = () => {
  return (
    <>
      <div className="pt-24">
        <Banner image={AboutBannerImage} title="About Us" />

        <div className="px-4 md:px-10 pb-16 max-w-7xl mx-auto text-gray-800">
          <AboutSection />
          {/* <BrandShowcase /> */}
          <TestimonialSlider />
          <MissionAndValues />
        </div>
      </div>
    </>
  );
};

export default About;
