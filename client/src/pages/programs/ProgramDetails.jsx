import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/programsDetails.json";
import fallbackImage from "../../assets/fallback.avif";
import aid from "../../assets/financialaid.jpg";
import admission from "../../assets/admission.jpg";
import product from "../../assets/product.png";
import signature from "../../assets/barbar.jpg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/insta.png";
import google from "../../assets/google.png";
import tiktok from "../../assets/tiktok.png";
import website from "../../assets/websites.png";
import photography from "../../assets/photo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

const slugToCourseName = (slug) => {
  if (slug === "full-courses") return "Full Courses Package"; // special case
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
};
const slides = [
  {
    image: facebook, // replace with real URLs or imports
    alt: "Beauty Slide 1",
  },
  {
    image: instagram,
    alt: "Beauty Slide 2",
  },
  {
    image: google, // replace with real URLs or imports
    alt: "Beauty Slide 3",
  },
  {
    image: tiktok,
    alt: "Beauty Slide 4",
  },
  {
    image: website, // replace with real URLs or imports
    alt: "Beauty Slide 5",
  },
  {
    image: photography, // replace with real URLs or imports
    alt: "Beauty Slide 5",
  },
];
const features = [
  {
    title: "FINANCIAL AID",
    image: aid,
    paragraph:
      "With the help of financial assistance, school can be affordable for just about anyone! Financial Aid is available to those who qualify and there are many affordable ways to finance your future. We can provide payment plans for those who do not wish to apply for financial aid, or are not eligible. Our financial aid staff is here to assist you through this entire process.",
  },
  {
    title: "ADMISSIONS",
    image: admission,
    paragraph:
      "To begin your journey at Bright Horizon Institute, explore the programs available at our North Austin and South Austin campuses. We offer comprehensive cosmetology, esthetics, makeup artistry, and nail technology training tailored to fit diverse career goals and schedules. Once you’ve identified the program that aligns with your aspirations, fill out our contact form or call 512-630-0099 to connect with an admissions advisor who will guide you through enrollment.",
  },
  {
    title: "PRODUCT DIVERSITY",
    image: product,
    paragraph:
      "At Bright Horizon Institute, students benefit from hands-on experience with a wide variety of professional products from leading brands. This exposure helps students develop the expertise needed to choose the best tools and products for their clients, enhancing their skills in hair styling, scalp care, textured hair, nail care, and more. Learning from multiple product lines not only broadens students' understanding but also prepares them for the diverse needs of the beauty industry, making our graduates stand out.",
  },
  {
    title: "SIGNATURE SCHOOL",
    image: signature,
    paragraph:
      "Bright Horizon's international brand power continues to inspire salon professionals to realize their full potential and find their place in this exciting industry. Take your skills to the next level and get started with a brand known around the world!",
  },
];
const ProgramDetails = () => {
  const { id } = useParams();
  const courseName = slugToCourseName(id);
  const [isPlaying, setIsPlaying] = useState(false);
  const course = data.courses.find(
    (c) => c.courseName.toLowerCase() === courseName.toLowerCase()
  );

  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!course) {
    return <div>Course not found</div>;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="pt-24">
      {/* booking part */}
      <div
        className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `url(${course.image})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold" data-aos="fade-up">
            {course.courseName}
          </h1>
          <p
            className="text-xl md:text-2xl font-semibold mt-4"
            data-aos="fade-up"
          >
            Graduate In As Little As <br />
            <span
              className="text-white font-bold text-3xl md:text-4xl"
              data-aos="fade-up"
            >
              {course.duration}
            </span>
          </p>

          <button
            className="mt-6 px-6 py-3 bg-lime-400 text-black font-semibold hover:bg-lime-300"
            data-aos="fade-right"
          >
            SCHEDULE A TOUR
          </button>

          <h2
            className="mt-10 text-2xl md:text-3xl font-bold"
            data-aos="fade-left"
          >
            NEXT CLASSES START {course.classStart}
          </h2>

          {/* Form */}
          <form className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto w-full">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 text-black"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 text-black"
            />
            <input type="tel" placeholder="Phone" className="p-3 text-black" />

            <select className="p-3 text-black">
              <option>Courses</option>
              <option>Esthetics</option>
              <option>Barbering</option>
              <option>Nail Technology</option>
              <option>Cosmetology</option>
              <option>Full Courses Package</option>

              {/* Add more options */}
            </select>
            <select className="p-3 text-black">
              <option>Schedule</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
            <select className="p-3 text-black">
              <option>Location</option>
              <option>New Jersey</option>
            </select>
            <select className="p-3 text-black">
              <option>How Did You Hear About Us?</option>
              <option>Facebook</option>
              <option>Instagram</option>
              <option>Friends</option>
            </select>
          </form>

          <button className="mt-6 px-6 py-3 bg-lime-400 text-black font-bold hover:bg-lime-300">
            REQUEST INFO
          </button>
        </div>
      </div>
      {/* course details part  */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Video Area */}
          <div className="relative w-full md:w-1/2" data-aos="fade-right">
            {!isPlaying && (
              <>
                <video
                  src={course.courseDescriptionHeadVideo}
                  poster={fallbackImage} // fallback if available
                  className="w-full rounded-xl shadow-xl"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  <div className="bg-lime-400 p-5 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="black"
                      viewBox="0 0 24 24"
                      className="w-8 h-8"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </>
            )}
            {isPlaying && (
              <video
                src={course.courseDescriptionHeadVideo}
                controls
                autoPlay
                className="w-full rounded-xl shadow-xl"
              />
            )}
          </div>

          {/* Right: Text Content */}
          <div
            className="w-full md:w-1/2 text-center md:text-left"
            data-aos="fade-left"
          >
            <h2 className="text-4xl font-extrabold leading-snug mb-6 text-gray-800">
              {course.courseDescriptionHead.toUpperCase()}
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              {course.courseDescription}
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
                LEARN MORE
              </button>
              <button className="bg-lime-200 hover:bg-lime-300 text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
                I HAVE A QUESTION
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Distance learning */}
      <section className="py-20 px-4 sm:px-6 lg:px-24 bg-white">
        <div
          className="flex flex-col lg:flex-row items-start gap-12"
          data-aos="fade-up"
        >
          {/* Left Card */}
          <div className="bg-white p-10 shadow-2xl rounded-xl w-full lg:w-2/3 transition duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#7B624C] mb-6 uppercase tracking-wide">
              {course.flexibleLearningHeading}
            </h2>
            <p className="text-gray-800 mb-6 leading-relaxed text-base">
              {course.flexibleLearningDesc}
            </p>

            <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-105">
              LEARN MORE
            </button>
          </div>

          {/* Right Card */}
          <div className="bg-gradient-to-br from-[#7B624C] to-[#5A4433] text-white p-10 rounded-xl shadow-xl w-full lg:w-1/3">
            <div className="space-y-8">
              <div className="border-l-4 border-lime-300 pl-4">
                <h3 className="text-lg font-bold text-lime-300 mb-1">
                  Your Morning™
                </h3>
                <p className="text-sm">{course.morningTime}</p>
              </div>
              <div className="border-l-4 border-lime-300 pl-4">
                <h3 className="text-lg font-bold text-lime-300 mb-1">
                  Your Afternoon™
                </h3>
                <p className="text-sm">{course.afternoonTime}</p>
              </div>
              <div className="border-l-4 border-lime-300 pl-4">
                <h3 className="text-lg font-bold text-lime-300 mb-1">
                  Your Evening™
                </h3>
                <p className="text-sm">{course.eveningTime}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4boxes */}
      <div className="w-full bg-white py-10">
        <div
          className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-aos="fade-left"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer h-80"
            >
              {/* Background image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-500" />

              {/* Title */}
              <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg z-10 group-hover:opacity-0 transition-opacity duration-300">
                {feature.title}
              </h3>

              {/* Paragraph Overlay */}
              <div className="absolute inset-0 px-5 py-6 text-center flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <p className="text-white text-sm leading-relaxed">
                  {feature.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* FAQ */}
      <div className="w-full bg-white py-16 px-6 md:px-20">
        <h2
          className="text-4xl font-extrabold mb-6 text-gray-800 flex items-center justify-center"
          data-aos="fade-right"
        >
          WHAT YOU WILL LEARN
        </h2>
        <p
          className="text-gray-600 text-lg mb-6 text-center"
          data-aos="fade-left"
        >
          Our program and facilities have been strategically designed based on
          the proven working knowledge of master educators and beauty industry
          professionals. Avenue Five Institute’s student-centered approach gives
          you plenty of opportunity for interactive, activity-based learning.
          Taught by experienced educators, Avenue Five Institute’s hybrid
          learning environment allows students to combine interactive online
          curriculum covering cosmetology theory and techniques with practical
          experience in a simulated salon environment, working under the
          supervision of a skilled instructor.{" "}
        </p>
        <div className="max-w-full mx-auto px-4 py-8">
          {course.faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 shadow border border-gray-200 rounded overflow-hidden"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} // <-- AOS direction
            >
              {/* Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center bg-lime-400 px-6 py-4 font-semibold text-left text-black"
              >
                <span>{faq.title.toUpperCase()}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-sm" />
                ) : (
                  <FaChevronDown className="text-sm" />
                )}
              </button>

              {/* Description with transition */}
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] py-4 px-6"
                    : "max-h-0 px-6"
                } overflow-hidden bg-white`}
              >
                <p className="text-gray-800 text-sm leading-relaxed">
                  {faq.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-extrabold mb-6 text-gray-800 flex items-center justify-center" data-aos="fade-up">
          AND MUCH MORE!
        </h2>
      </div>
      {/* ads */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center" >
        {/* Left Slider */}
        <div className="w-full" data-aos="zoom-in">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full rounded-xl shadow-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Content */}
        <div className="space-y-6" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase">
            Beauty as a Business
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            At Bright Horizon Institute, we understand that success in the
            beauty industry requires more than just technical skills—it also
            demands a strong online presence. Through our Beauty As A Business
            (BAAB) program, students learn how to market themselves using social
            media platforms like Instagram, Google, and TikTok. This curriculum
            teaches essential digital marketing skills such as building a
            personal brand, creating professional content, and engaging with
            clients online. By integrating these tools into your education,
            Bright Horizon Institute ensures you're prepared to thrive in
            today’s beauty industry.
          </p>

          {/* Buttons */}
          <div className="flex gap-4" data-aos="fade-up">
            <button className="bg-lime-400 hover:bg-lime-500 transition font-bold px-6 py-3 text-black rounded shadow">
              LEARN MORE
            </button>
            <button className="bg-lime-400 hover:bg-lime-500 transition font-bold px-6 py-3 text-black rounded shadow">
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
      {/* why choose us */}
      <div className="w-full bg-white py-16 px-6 md:px-20">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800 flex items-center justify-center" data-aos="fade-up">
          WHY CHOOSE US ?
        </h2>
        <p className="text-gray-600 text-lg mb-6 text-center" data-aos="fade-right">
          Attending an accredited cosmetology school like Bright Horizon
          Institute ensures you receive a high standard of education that meets
          rigorous industry benchmarks. Accreditation by recognized agencies
          such as the National Accrediting Commission of Career Arts and
          Sciences (NACCAS) signifies that the institution adheres to quality
          standards in curriculum, faculty qualifications, and student support
          services. This enhances the credibility of your credentials, qualifies
          you for financial aid opportunities, and prepares you for state
          licensure exams. Choosing an accredited school gives you confidence in
          the education you receive and better prospects for a successful career
          in the beauty industry.
        </p>
      </div>
    </div>
  );
};

export default ProgramDetails;
