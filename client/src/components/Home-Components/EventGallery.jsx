import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = ["Show all", "Cosmetology", "Esthetics", "Manicuring"];

const EventGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Show all");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const events = [
    {
      id: 1,
      category: "Cosmetology",
      title: "Happy Halloween",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpwz-MOEjjRQVmKPHOHQ8SYLNA7qd4k5h9VQ&s",
    },
    {
      id: 2,
      category: "Cosmetology",
      title: "Mad for Mod",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuCAKIRmYjyfSVcgS7e5kK_QbIFeZjrTs9Dg&s",
    },
    {
      id: 3,
      category: "Esthetics",
      title: "The Four Elements",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvc_ZrmkS4GofN11xuKNuAC-3NNFUf9E82WQ&s",
    },
    {
      id: 4,
      category: "Esthetics",
      title: "Jan Marini Launch",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP9viVhSzrtpXEkFGjpW3a8RxkZDphVVvHPQ&s",
    },
    {
      id: 5,
      category: "Manicuring",
      title: "Vintage Hollywood",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmS4lqkDaZHmPDsPhZnPWBGXBiilTObPj_KQ&s",
    },
  ];

  const filteredEvents =
    selectedCategory === "Show all"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="w-full py-16 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-gray-800" data-aos="fade-up">
        School Events
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10" data-aos="fade-up" data-aos-delay="100">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 border ${
              selectedCategory === cat
                ? "bg-blue-600 text-white border-blue-600 shadow-md"
                : "bg-white text-gray-600 border-gray-300 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Event Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredEvents.map((event, index) => (
          <div
            key={event.id}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 bg-white"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {event.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{event.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventGallery;
