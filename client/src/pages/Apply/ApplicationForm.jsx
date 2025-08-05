import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    schedule: '',
    location: '',
    howDidYouHear: '',
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // Add your API call or logic here
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8 pt-24" data-aos="fade-up">
      <h2 className="text-2xl font-bold mb-6 text-center" data-aos="fade-down">Application Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4" data-aos="zoom-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="border p-3 rounded w-full"
            value={formData.firstName}
            onChange={handleChange}
            required
            data-aos="fade-right"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="border p-3 rounded w-full"
            value={formData.lastName}
            onChange={handleChange}
            required
            data-aos="fade-left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-3 rounded w-full"
            value={formData.email}
            onChange={handleChange}
            required
            data-aos="fade-right"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="border p-3 rounded w-full"
            value={formData.phone}
            onChange={handleChange}
            required
            data-aos="fade-left"
          />
        </div>

        <select
          name="program"
          value={formData.program}
          onChange={handleChange}
          className="border p-3 rounded w-full"
          required
          data-aos="fade-up"
        >
          <option value="">What Program Are You Interested In?</option>
          <option value="Cosmetology">Cosmetology</option>
          <option value="Esthetics">Esthetics</option>
          <option value="Barbering">Barbering</option>
          <option value="Manicuring">Manicuring</option>
        </select>

        <select
          name="schedule"
          value={formData.schedule}
          onChange={handleChange}
          className="border p-3 rounded w-full"
          required
          data-aos="fade-up"
        >
          <option value="">Preferred Schedule</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
        </select>

        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="border p-3 rounded w-full"
          required
          data-aos="fade-up"
        >
          <option value="">Select Location</option>
          <option value="Main Campus">Main Campus</option>
          <option value="Downtown">Downtown</option>
        </select>

        <input
          type="text"
          name="howDidYouHear"
          placeholder="How Did You Hear About Us?"
          className="border p-3 rounded w-full"
          value={formData.howDidYouHear}
          onChange={handleChange}
          data-aos="fade-up"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full transition-all"
          data-aos="zoom-in-up"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
