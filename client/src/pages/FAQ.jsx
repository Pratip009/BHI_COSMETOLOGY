import React, { useState } from "react";

const faqs = [
  {
    question: "What programs are offered at Cosmetology School of Jersey City?",
    answer:
      "We offer: Cosmetology (1200 hours), Barbering (900 hours), Skin Care Specialty (600 hours), Nail Technology (300 hours), Teacher Training (600 hours), and a Refresher Course (250 hours).",
  },
  {
    question: "How long does each program take to complete?",
    answer:
      "Program durations vary based on schedule. For example, full-time Cosmetology students typically complete the course in 10 months; part-time students may take up to 19 months. A full breakdown can be provided upon request.",
  },
  {
    question: "Are evening or weekend classes available?",
    answer:
      "Yes. We offer both day and evening class options, as well as limited Saturday hours to accommodate different schedules.",
  },
  {
    question: "Can I schedule a campus tour before enrolling?",
    answer:
      "Absolutely. We encourage prospective students to visit the campus. Please reach out to schedule a tour.",
  },
  {
    question: "What are the admissions requirements?",
    answer:
      "Applicants must be at least 17 years old, have proof of high school completion (or equivalent), a valid photo ID, and provide six passport-style photos.",
  },
  {
    question: "Do you offer financial assistance or scholarships?",
    answer:
      "While we are not currently eligible for Title IV federal financial aid, we do offer internal scholarships and flexible payment plans.",
  },
  {
    question: "Is the school licensed?",
    answer:
      "Yes, we are fully licensed by the New Jersey State Board of Cosmetology and Hairstyling.",
  },
  {
    question: "Do you assist with job placement after graduation?",
    answer:
      "Yes. We provide career support including resume assistance, interview preparation, and access to job leads through our industry partnerships.",
  },
  {
    question: "How frequently do classes begin?",
    answer:
      "We operate on a rolling admissions basis. New class start dates are scheduled regularly throughout the year.",
  },
  {
    question: "What is the difference between Cosmetology and Skin Care Specialty?",
    answer:
      "The Cosmetology program includes training in hair, skin, and nails, preparing students for a broad range of services. The Skin Care Specialty program focuses exclusively on esthetics, including facials, hair removal, and makeup.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 mt-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-700">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md bg-white shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 text-left text-gray-900 cursor-pointer"
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m-3-3h6"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-4 pb-4 text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
