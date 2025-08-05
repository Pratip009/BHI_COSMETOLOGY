import React, { useEffect } from "react";
import missionImg from "../../assets/Education-scene-1.jpg";
import valuesImg from "../../assets/Product-Image-1-768x493.jpg";
import chooseUsImg from "../../assets/Product-package-beauty-shot-1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const items = [
  {
    title: "MISSION",
    description:
      "To empower students with industry-ready education in cosmetology, esthetics, and more—fostering creativity and lifelong success.",
    image: missionImg,
  },
  {
    title: "VALUES",
    description:
      "We embrace integrity, inclusion, and innovation—creating a growth-focused and inclusive environment for every learner.",
    image: valuesImg,
  },
  {
    title: "WHY CHOOSE US",
    description:
      "Hands-on training, expert faculty, and a legacy of alumni success set us apart as a leader in beauty education.",
    image: chooseUsImg,
  },
];

const MissionAndValues = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl font-bold uppercase" data-aos="fade-up">
          Mission & Values
        </h2>
        <div className="mb-6" />

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flip-card"
              tabIndex={0}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="flip-card-inner">
                {/* FRONT */}
                <div
                  className="flip-card-front"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <h3>{item.title}</h3>
                </div>

                {/* BACK */}
                <div className="flip-card-back">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionAndValues;
