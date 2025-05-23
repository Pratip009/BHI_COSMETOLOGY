import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import AboutBannerImage from "../assets/titlebar_bg.jpg";
import Banner from "../components/Banner";
const mediaItems = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    size: "large",
    alt: "Students in classroom",
  },
  {
    id: 2,
    type: "video",
    src: "https://videos.pexels.com/video-files/3181676/3181676-uhd_2560_1440_25fps.mp4",
    size: "small",
    alt: "Student presentation video",
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80",
    size: "small",
    alt: "School hallway",
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    size: "medium",
    alt: "Student working on project",
  },
  {
    id: 5,
    type: "video",
    src: "https://videos.pexels.com/video-files/3181733/3181733-uhd_2560_1440_25fps.mp4",
    size: "large",
    alt: "School event video",
  },
  {
    id: 6,
    type: "image",
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    size: "small",
    alt: "Group of students",
  },
  {
    id: 7,
    type: "image",
    src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
    size: "medium",
    alt: "Student studying",
  },
  {
    id: 8,
    type: "image",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    size: "small",
    alt: "School library",
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState("image"); // "image" or "video"
  const [modalImage, setModalImage] = useState(null); // for fullscreen image modal

  const filteredItems = mediaItems.filter((item) => item.type === filter);

  // Function to close modal
  const closeModal = () => setModalImage(null);

  // Function to download the image
  const downloadImage = (url, filename) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename || "downloaded-image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-24">
      <Banner image={AboutBannerImage} title="Gallery" />
      <div className="max-w-7xl mx-auto p-6 pt-12">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-8 text-center">
          School Gallery
        </h1>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {["image", "video"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full font-semibold transition
              ${
                filter === f
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-indigo-100"
              }`}
            >
              {f === "image" ? "Photos" : "Videos"}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gridAutoRows: "150px",
          }}
        >
          {filteredItems.map(({ id, type, src, size, alt }) => {
            let colSpan = 1;
            let rowSpan = 1;

            if (type === "image") {
              if (size === "large") {
                colSpan = 2;
                rowSpan = 2;
              } else if (size === "medium") {
                colSpan = 2;
                rowSpan = 1;
              }
            } else {
              colSpan = 2;
              rowSpan = 2;
            }

            return (
              <div
                key={id}
                className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer flex flex-col"
                style={{
                  gridColumn: `span ${colSpan}`,
                  gridRow: `span ${rowSpan}`,
                }}
              >
                {type === "image" ? (
                  <>
                    <img
                      src={src}
                      alt={alt}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                      loading="lazy"
                      onClick={() => setModalImage({ src, alt })}
                      style={{ userSelect: "none" }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent px-3 py-2 text-white text-sm font-semibold">
                      {alt}
                    </div>
                  </>
                ) : (
                  <>
                    <video
                      controls
                      className="w-full object-cover rounded-lg"
                      style={{ height: "250px" }}
                      preload="metadata"
                      title={alt}
                    >
                      <source src={src} type="video/mp4" />
                      Sorry, your browser doesn't support embedded videos.
                    </video>
                    <div className="mt-2 px-2 text-center font-semibold text-gray-700">
                      {alt}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Fullscreen Modal for Image */}
        {modalImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            {/* Stop click propagation on image container to avoid closing modal when clicking buttons */}
            <div
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalImage.src}
                alt={modalImage.alt}
                className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
                draggable={false}
              />

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
                aria-label="Close Image"
              >
                <IoMdClose />
              </button>

              {/* Download Button */}
              <button
                onClick={() => downloadImage(modalImage.src, modalImage.alt)}
                className="absolute top-2 right-12 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
                aria-label="Download Image"
              >
                <IoMdDownload />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
