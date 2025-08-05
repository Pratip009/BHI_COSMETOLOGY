import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ScheduleTour = () => {
  const [formData, setFormData] = useState({
    date: '',
    preferredTime: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    campus: '',
    schedule: '',
    hearAbout: '',
    consent: false,
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="bg-gradient-to-tr from-white to-slate-100 min-h-screen px-4 py-14 md:px-10">
      <h1
        className="text-4xl font-extrabold text-center mb-12 text-gray-800"
        data-aos="fade-down"
      >
        Schedule a <span className="text-blue-600">Virtual Tour</span>
      </h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div data-aos="fade-right">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">
            Discover Avenue Five Institute
          </h2>
          <img
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
            alt="Tour"
            className="w-full rounded-3xl shadow-xl mb-6"
          />
          <div className="space-y-6 text-gray-600 text-base">
            <p>
              Take a virtual or in-person tour to explore our state-of-the-art
              classrooms, dynamic student life, and unique program offerings.
            </p>
            <p>
              <strong className="text-blue-700">Talk to Us:</strong> Connect with
              our admissions team via online chat or our contact form for
              personalized support.
            </p>
            <p>
              <strong className="text-blue-700">Get Started:</strong> Complete
              your online application and submit your documents to begin your
              journey.
            </p>
            <p>
              <strong className="text-blue-700">Experience Firsthand:</strong> See
              our tools, meet instructors, and explore our vibrant campus.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-3xl shadow-2xl space-y-6"
          data-aos="fade-left"
        >
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Book Your Tour
          </h2>

          {/* Calendar Grid */}
          <div>
            <div className="text-center font-semibold mb-2 text-gray-600">
              Select a Date (May 2025)
            </div>
            <div className="grid grid-cols-7 gap-2 text-sm">
              {days.map((day) => (
                <button
                  type="button"
                  key={day}
                  className={`py-2 rounded-lg font-medium shadow-sm transition duration-150 ${
                    formData.date === String(day)
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 hover:bg-blue-100"
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, date: String(day) })
                  }
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <select
            name="preferredTime"
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Preferred Time</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
          </select>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
              data-aos="fade-up"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
              data-aos="fade-up"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
              data-aos="fade-up"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
              data-aos="fade-up"
            />
          </div>

          <select
            name="program"
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
            data-aos="fade-up"
          >
            <option value="">Program of Interest</option>
            <option value="Cosmetology">Cosmetology</option>
            <option value="Esthetics">Esthetics</option>
            <option value="Barbering">Barbering</option>
          </select>

          <select
            name="campus"
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
            data-aos="fade-up"
          >
            <option value="">Preferred Campus</option>
            <option value="Main">Main</option>
            <option value="Downtown">Downtown</option>
          </select>

          <select
            name="schedule"
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
            data-aos="fade-up"
          >
            <option value="">On Campus Schedule</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
          </select>

          <select
            name="hearAbout"
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            data-aos="fade-up"
          >
            <option value="">How Did You Hear About Us?</option>
            <option value="Google">Google</option>
            <option value="Instagram">Instagram</option>
            <option value="Referral">Referral</option>
          </select>

          <label className="flex items-start space-x-2 text-sm text-gray-600" data-aos="fade-up">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1"
              required
            />
            <span>
              By submitting this form, you consent to be contacted by Avenue
              Five Institute. View our{' '}
              <a
                href="https://www.avenuefive.edu/privacy-policy"
                className="text-blue-600 underline"
                target="_blank"
              >
                Privacy Policy
              </a>{' '}
              or call us at{' '}
              <a href="tel:512-968-2835" className="text-blue-600 underline">
                512-968-2835
              </a>.
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold shadow hover:bg-blue-700 transition"
            data-aos="zoom-in-up"
          >
            <FaCheckCircle className="inline-block mr-2 -mt-1" /> Submit Tour Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleTour;
