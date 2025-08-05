import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../components/Banner";
import AboutBannerImage from "../assets/titlebar_bg.jpg";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div className="pt-24">
        <Banner
          image={AboutBannerImage}
          title="Contact Us"
          data-aos="fade-down"
        />
        <section className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
              {/* Left column - Image + Contact info */}
              <div className="lg:mb-0 mb-10" data-aos="fade-right">
                <div className="group w-full h-full">
                  <div className="relative h-full">
                    <img
                      src="https://pagedone.io/asset/uploads/1696488602.png"
                      alt="ContactUs tailwind section"
                      className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
                    />
                    <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                      Contact us
                    </h1>
                    <div className="absolute bottom-0 w-full lg:p-11 p-5">
                      <div className="bg-white rounded-lg p-6 block">
                        {/* Phone */}
                        <a
                          href="tel:4706011911"
                          className="flex items-center mb-6"
                        >
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M22 16.92V21a1 1 0 0 1-1.09 1A19.79 19.79 0 0 1 3 4.09 1 1 0 0 1 4 3h4.11a1 1 0 0 1 1 .75l1.2 5a1 1 0 0 1-.29.95l-2.2 2.2a16 16 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 .95-.29l5 1.2a1 1 0 0 1 .75 1z"
                              stroke="#4F46E5"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <h5 className="text-black text-base font-normal leading-6 ml-5">
                            201-721-5574
                          </h5>
                        </a>
                        {/* Email */}
                        <a
                          href="mailto:Pagedone1234@gmail.com"
                          className="flex items-center mb-6"
                        >
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
                              stroke="#4F46E5"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="m22 6-10 7L2 6"
                              stroke="#4F46E5"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <h5 className="text-black text-base font-normal leading-6 ml-5">
                            info@csjc.edu
                          </h5>
                        </a>
                        {/* Address */}
                        <a
                          href="https://goo.gl/maps/xyz"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center"
                        >
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 0 1 18 0z"
                              stroke="#4F46E5"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle
                              cx="12"
                              cy="10"
                              r="3"
                              stroke="#4F46E5"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <h5 className="text-black text-base font-normal leading-6 ml-5">
                            591 Summit Ave, Suite 400 ,Jersey City, NJ 07306
                          </h5>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column - Form */}
              <div
                className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl"
                data-aos="fade-left"
              >
                <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">
                  Send Us A Message
                </h2>
                <input
                  type="text"
                  className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                  placeholder="Phone"
                />
                <div className="mb-10">
                  <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
                    Preferred method of communication
                  </h4>
                  <div className="flex">
                    <div className="flex items-center mr-11">
                      <input
                        id="radio-group-1"
                        type="radio"
                        name="radio-group"
                        className="hidden"
                      />
                      <label
                        htmlFor="radio-group-1"
                        className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                      >
                        <span className="border border-gray-300 rounded-full mr-2 w-4 h-4 ml-2"></span>{" "}
                        Email
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="radio-group-2"
                        type="radio"
                        name="radio-group"
                        className="hidden"
                      />
                      <label
                        htmlFor="radio-group-2"
                        className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                      >
                        <span className="border border-gray-300 rounded-full mr-2 w-4 h-4 ml-2"></span>{" "}
                        Phone
                      </label>
                    </div>
                  </div>
                </div>

                <textarea
                  rows={3}
                  className="w-full text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 p-3"
                  placeholder="Message"
                ></textarea>

                <button className="w-full text-white font-manrope font-semibold leading-7 bg-indigo-600 hover:bg-indigo-700 py-3 rounded-full mt-14 transition-all duration-300">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-[90%] h-[400px] mx-auto flex items-center justify-center mb-5"
          data-aos="zoom-in"
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0929579568116!2d-122.4194150846836!3d37.774929279759875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c06b2fd3d%3A0x4e8722c1a9f56788!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1715942742872!5m2!1sen!2sus"
            className="w-full h-full border-0 rounded-xl shadow-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </>
  );
};

export default Contact;
