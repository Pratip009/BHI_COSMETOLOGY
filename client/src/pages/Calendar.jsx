import React, { useState, useMemo } from "react";
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

import {
  FaCalendarAlt,
  FaListUl,
  FaMapMarkerAlt,
  FaTags,
  FaArrowLeft,
  FaArrowRight,
  FaUndoAlt,
} from "react-icons/fa";

const locales = { "en-US": enUS };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    id: 1,
    title: "Summer Classes Begin",
    start: new Date(2025, 5, 10, 9, 0),
    end: new Date(2025, 5, 10, 12, 0),
    description: "Start of summer classes for all departments.",
    location: "NY",
    type: "Course Topic",
  },
  {
    id: 2,
    title: "Orientation Day",
    start: new Date(2025, 5, 25, 10, 0),
    end: new Date(2025, 5, 25, 15, 0),
    description:
      "Welcome session for new students, campus tour, and meet the faculty.",
    location: "NJ",
    type: "Seminar Topic",
  },
  {
    id: 3,
    title: "Mid-Term Exams",
    start: new Date(2025, 7, 15, 8, 0),
    end: new Date(2025, 7, 18, 17, 0),
    description: "Mid-term exams covering all subjects. Check your exam schedule.",
    location: "NY",
    type: "Course Topic",
  },
  {
    id: 4,
    title: "Graduation Day",
    start: new Date(2025, 8, 30, 14, 0),
    end: new Date(2025, 8, 30, 18, 0),
    description: "Celebrate your success! Ceremony starts at 2 PM in the auditorium.",
    location: "NJ",
    type: "Seminar Topic",
  },
];

export default function Calendar() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewMode, setViewMode] = useState("calendar"); // "calendar" or "list"
  const [filters, setFilters] = useState({ location: "", type: "" });
  const [currentDate, setCurrentDate] = useState(new Date());

  const formatDateTime = (date) => format(date, "EEEE, MMMM do yyyy, h:mm a");

  // Filter events by location and type
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const locationMatch = filters.location ? event.location === filters.location : true;
      const typeMatch = filters.type ? event.type === filters.type : true;
      return locationMatch && typeMatch;
    });
  }, [filters]);

  // Location filter buttons
  const locationOptions = ["NY", "NJ"];
  // Type filter buttons
  const typeOptions = ["Course Topic", "Seminar Topic"];

  return (
    <div className="max-w-6xl mx-auto my-16 p-10 bg-white rounded-3xl shadow-xl font-sans">
      <h1 className="text-5xl font-extrabold text-indigo-700 mb-12 text-center tracking-wider drop-shadow-md">
        Academic Calendar
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {/* Location Filter */}
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-indigo-600" size={22} />
          {locationOptions.map((loc) => (
            <button
              key={loc}
              onClick={() =>
                setFilters((f) => ({
                  ...f,
                  location: f.location === loc ? "" : loc,
                }))
              }
              className={`px-5 py-2 rounded-full border-2 font-semibold transition-colors duration-300
                ${
                  filters.location === loc
                    ? "bg-indigo-600 text-white border-indigo-700 shadow-lg"
                    : "bg-white text-indigo-600 border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
                }`}
              aria-pressed={filters.location === loc}
            >
              {loc}
            </button>
          ))}
          {/* Clear Location */}
          {filters.location && (
            <button
              onClick={() => setFilters((f) => ({ ...f, location: "" }))}
              className="ml-3 text-gray-400 hover:text-indigo-600 transition"
              title="Clear location filter"
              aria-label="Clear location filter"
            >
              <FaUndoAlt size={20} />
            </button>
          )}
        </div>

        {/* Type Filter */}
        <div className="flex items-center gap-3">
          <FaTags className="text-indigo-600" size={22} />
          {typeOptions.map((type) => (
            <button
              key={type}
              onClick={() =>
                setFilters((f) => ({
                  ...f,
                  type: f.type === type ? "" : type,
                }))
              }
              className={`px-5 py-2 rounded-full border-2 font-semibold transition-colors duration-300
                ${
                  filters.type === type
                    ? "bg-indigo-600 text-white border-indigo-700 shadow-lg"
                    : "bg-white text-indigo-600 border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
                }`}
              aria-pressed={filters.type === type}
            >
              {type}
            </button>
          ))}
          {/* Clear Type */}
          {filters.type && (
            <button
              onClick={() => setFilters((f) => ({ ...f, type: "" }))}
              className="ml-3 text-gray-400 hover:text-indigo-600 transition"
              title="Clear type filter"
              aria-label="Clear type filter"
            >
              <FaUndoAlt size={20} />
            </button>
          )}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-6 ml-6">
          <button
            onClick={() => setViewMode("calendar")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold shadow-md transition
              ${
                viewMode === "calendar"
                  ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-700"
              }`}
            title="Calendar View"
            aria-pressed={viewMode === "calendar"}
          >
            <FaCalendarAlt size={20} />
            Calendar
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold shadow-md transition
              ${
                viewMode === "list"
                  ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-700"
              }`}
            title="List View"
            aria-pressed={viewMode === "list"}
          >
            <FaListUl size={20} />
            List
          </button>
        </div>
      </div>

      {/* Calendar View */}
      {viewMode === "calendar" && (
        <div className="rounded-xl border border-gray-300 shadow-lg overflow-hidden">
          {/* Custom toolbar with navigation */}
          <div className="flex items-center justify-between bg-indigo-50 px-8 py-4 border-b border-indigo-300 select-none">
            <div className="flex items-center gap-5">
              <button
                onClick={() => setCurrentDate(new Date())}
                title="Today"
                className="text-indigo-700 hover:text-indigo-900 transition-transform duration-200 hover:scale-110"
                aria-label="Go to today"
              >
                <FaUndoAlt size={22} />
              </button>
              <button
                onClick={() => {
                  const prev = new Date(currentDate);
                  prev.setMonth(prev.getMonth() - 1);
                  setCurrentDate(prev);
                }}
                title="Previous Month"
                className="text-indigo-700 hover:text-indigo-900 transition-transform duration-200 hover:scale-110"
                aria-label="Go to previous month"
              >
                <FaArrowLeft size={22} />
              </button>
              <button
                onClick={() => {
                  const next = new Date(currentDate);
                  next.setMonth(next.getMonth() + 1);
                  setCurrentDate(next);
                }}
                title="Next Month"
                className="text-indigo-700 hover:text-indigo-900 transition-transform duration-200 hover:scale-110"
                aria-label="Go to next month"
              >
                <FaArrowRight size={22} />
              </button>
            </div>
            <h2 className="text-indigo-900 font-semibold text-xl tracking-wide">
              {format(currentDate, "MMMM yyyy")}
            </h2>
            <div style={{ width: 96 }}></div> {/* spacer for symmetry */}
          </div>

          <BigCalendar
            localizer={localizer}
            events={filteredEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
            onSelectEvent={(event) => setSelectedEvent(event)}
            popup
            date={currentDate}
            onNavigate={(date) => setCurrentDate(date)}
            toolbar={false} // hide default toolbar, we have custom
            eventPropGetter={(event) => ({
              style: {
                backgroundColor: event.type === "Course Topic" ? "#6366f1" : "#8b5cf6",
                borderRadius: "6px",
                color: "white",
                border: "none",
                padding: "2px 6px",
                fontWeight: "600",
              },
            })}
          />
        </div>
      )}

      {/* List View */}
      {viewMode === "list" && (
        <div className="space-y-5 max-h-[600px] overflow-y-auto border border-gray-300 rounded-xl p-8 shadow-lg bg-indigo-50">
          {filteredEvents.length === 0 ? (
            <p className="text-center text-gray-600 italic">No events found.</p>
          ) : (
            filteredEvents
              .slice()
              .sort((a, b) => a.start - b.start)
              .map((event) => (
                <div
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className="cursor-pointer p-6 border border-indigo-300 rounded-lg bg-white hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setSelectedEvent(event);
                  }}
                  aria-label={`View details for ${event.title}`}
                >
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-2 tracking-wide">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">{event.description}</p>
                  <p className="text-sm text-indigo-600 font-medium mb-1">
                    <strong>Date:</strong> {formatDateTime(event.start)} - {formatDateTime(event.end)}
                  </p>
                  <p className="text-sm text-indigo-600 font-medium">
                    <strong>Location:</strong> {event.location} &nbsp; | &nbsp;{" "}
                    <strong>Type:</strong> {event.type}
                  </p>
                </div>
              ))
          )}
        </div>
      )}

      {/* Event Details Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6 z-50"
          onClick={() => setSelectedEvent(null)}
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-indigo-600 transition text-2xl font-bold"
              aria-label="Close modal"
            >
              ×
            </button>
            <h2
              id="modal-title"
              className="text-3xl font-extrabold mb-4 text-indigo-700 tracking-wide"
            >
              {selectedEvent.title}
            </h2>
            <p id="modal-description" className="mb-5 text-gray-800 leading-relaxed">
              {selectedEvent.description}
            </p>
            <p className="text-indigo-700 font-semibold mb-2">
              <strong>Start:</strong> {formatDateTime(selectedEvent.start)}
            </p>
            <p className="text-indigo-700 font-semibold mb-6">
              <strong>End:</strong> {formatDateTime(selectedEvent.end)}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Location:</strong> {selectedEvent.location}
            </p>
            <p className="text-gray-700">
              <strong>Type:</strong> {selectedEvent.type}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
