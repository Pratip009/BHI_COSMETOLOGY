import React, { useState } from "react";
import HairImage from "../assets/hair.jpg";
import SkinImage from "../assets/wax.jpg";
import NailsImage from "../assets/nail.jpg";

const tabs = ["Hair Services", "Skin & Waxing", "Nail Services"];

const tabBackgrounds = {
  "Hair Services": HairImage,
  "Skin & Waxing": SkinImage,
  "Nail Services": NailsImage,
};

const SalonServices = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="pt-24 font-custom bg-white min-h-screen">
      {/* Tab Switcher */}
      <div className="py-10 px-4 md:px-20 bg-gradient-to-br from-white to-blue-50">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl font-bold text-[#07218F] font-lobster mb-3">
            Student Salon Services
          </h2>
          <p className="text-gray-700 text-lg font-medium">
            Affordable, professional services performed by students under the
            supervision of licensed instructors.
          </p>
        </div>

        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 shadow-sm ${
                activeTab === tab
                  ? "bg-[#07218F] text-white shadow-md scale-105"
                  : "bg-white text-[#07218F] border border-blue-100 hover:bg-blue-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Background Banner (now smaller and below tabs) */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <img
          src={tabBackgrounds[activeTab]}
          alt={activeTab}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-lobster drop-shadow-lg text-center px-4">
            {activeTab}
          </h1>
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-10 px-4 md:px-20 bg-gradient-to-br from-white to-blue-50">
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl p-8 md:p-12 text-gray-800 max-w-5xl mx-auto space-y-6">
          {activeTab === "Hair Services" && (
            <>
              <SectionTitle title="Haircuts and Styling" />
              <ServiceItem title="Women's Haircut + Shampoo + Blow-Dry" price="from $25" />
              <ServiceItem title="Men's Haircut" price="from $20" />
              <ServiceItem title="Children's Haircut (12 & under)" price="$15" />
              <ServiceItem title="Bang or Beard Trim" price="$10" />
              <ServiceItem title="Shampoo & Blow-Dry" price="$30" />
              <ServiceItem title="Flat Iron or Curls (add-on)" price="$10" />
              <ServiceItem title="Updos / Special Occasion Styling" price="$45 per hour" />

              <SectionTitle title="Color and Chemical Services" />
              <ServiceItem title="Single Process Color" price="from $40" />
              <ServiceItem title="Partial Highlights" price="from $60" />
              <ServiceItem title="Full Highlights" price="from $80" />
              <ServiceItem title="Balayage / Ombre" price="from $100" />
              <ServiceItem title="Perm" price="from $60" />
              <ServiceItem title="Relaxer" price="from $55" />
              <ServiceItem title="Keratin Smoothing Treatment" price="$285" />

              <SectionTitle title="Hair Treatments" />
              <ServiceItem title="Deep Conditioning" price="$15" />
              <ServiceItem title="Scalp Therapy" price="$23" />
              <ServiceItem title="Metal Detox (add-on with color)" price="$23" />
            </>
          )}

          {activeTab === "Skin & Waxing" && (
            <>
              <SectionTitle title="Facials" />
              <ServiceItem title="Express Facial (30 minutes)" price="$25" />
              <ServiceItem title="Full Facial (60 minutes)" price="$40" />
              <ServiceItem title="Signature Hydrafacial" price="$100" />
              <ServiceItem title="Deluxe Hydrafacial" price="$125" />
              <ServiceItem title="Platinum Hydrafacial" price="$150" />

              <SectionTitle title="Waxing Services" />
              <ServiceItem title="Brow, Lip, or Chin" price="$11 each" />
              <ServiceItem title="Full Face" price="$30+" />
              <ServiceItem title="Underarm" price="$18" />
              <ServiceItem title="Bikini" price="$30" />
              <ServiceItem title="Brazilian" price="$55" />
              <ServiceItem title="Half Leg" price="$30" />
              <ServiceItem title="Full Leg" price="$45" />
              <ServiceItem title="Half Arm" price="$18" />
              <ServiceItem title="Full Arm" price="$45" />
            </>
          )}

          {activeTab === "Nail Services" && (
            <>
              <SectionTitle title="Nail Services" />
              <ServiceItem title="Classic Manicure" price="from $15" />
              <ServiceItem title="Gel Manicure" price="$28" />
              <ServiceItem title="Polish Change" price="$8" />
            </>
          )}

          {/* Call to Action */}
          <div className="mt-10 text-center">
            <a
              href="#"
              className="inline-block bg-[#07218F] hover:bg-blue-600 text-white text-lg px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
            >
              Book Now
            </a>
            <p className="text-sm text-gray-600 mt-2">
              Phone: (201) XXX-XXXX | Mon–Fri: 9AM–6PM | Sat: 9AM–2PM
            </p>
          </div>

          {/* Policies */}
          <div className="text-sm text-gray-500 mt-8 border-t pt-4">
            <ul className="list-disc pl-5 space-y-1">
              <li>All services are performed by students under licensed instructors.</li>
              <li>Prices may vary based on individual needs and student level.</li>
              <li>Deposits may be required for advanced facials or corrective color.</li>
              <li>No refunds after services. Adjustments allowed within 48 hours.</li>
              <li>Walk-ins welcome as availability allows. Appointments recommended.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({ title, price }) => (
  <div className="flex justify-between items-center border-b border-gray-200 py-3">
    <span className="text-gray-700">{title}</span>
    <span className="font-bold text-[#07218F]">{price}</span>
  </div>
);

const SectionTitle = ({ title }) => (
  <h3 className="text-2xl font-bold text-[#07218F] border-b border-blue-200 pb-2 mt-6">
    {title}
  </h3>
);

export default SalonServices;
