import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "https://media.istockphoto.com/id/2162414272/photo/young-black-woman-perfecting-her-makeup-for-prom.webp?a=1&b=1&s=612x612&w=0&k=20&c=Gbi8OCNkwlQ4cKje4aCi_8iTmwPgp8MX8P0UWeoP68k=",
  "https://media.istockphoto.com/id/1261302799/photo/portrait-of-beautiful-young-woman-making-make-up-looking-in-the-mirror-and-applying-cosmetic.jpg?s=612x612&w=0&k=20&c=Qe8FRF0ljLzeY_5ly8VkJenOv95VIEWmh7BJFPWLyd0=",
  "https://media.istockphoto.com/id/1340302535/photo/beautiful-indian-woman-getting-ready-to-a-wedding-reception-at-the-beauty-parlor.jpg?s=612x612&w=0&k=20&c=GzhivtaqLIDXBQ69R0DlIOfwY4aOYUI67gxWKTM3ooA=",
];

const VirtualTour = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-center font-sans">
      <h2
        className="text-3xl md:text-4xl font-extrabold mb-8"
        data-aos="fade-up"
      >
        Virtual Tour
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* YouTube Video */}
        <div className="w-full aspect-video" data-aos="fade-right">
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Cosmetology Virtual Tour"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* 3D Image Slider */}
        <div className="w-full" data-aos="fade-left">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Navigation, Pagination]}
            className="w-full max-w-md"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className="rounded-xl overflow-hidden">
                <img
                  src={img}
                  alt={`Tour ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
