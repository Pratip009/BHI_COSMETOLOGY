import React from "react";

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 mt-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-700">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {[1, 2, 3].map((item) => (
          <details
            key={item}
            className="group border border-gray-200 rounded-md bg-white shadow-sm [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex items-center justify-between cursor-pointer gap-1.5 p-4 text-gray-900">
              <h3 className="text-lg font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h3>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="block w-5 h-5 shrink-0 group-open:hidden"
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

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hidden w-5 h-5 shrink-0 group-open:block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            </summary>

            <p className="px-4 pb-4 text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
