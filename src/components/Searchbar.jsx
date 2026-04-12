import React from "react";

const Searchbar = () => {
  return (
    <div>
      <form action="" className="w-full flex gap-5 px-5">
        <div className="relative w-[90%]">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>

          <input
            type="text"
            className="w-full pl-12 pr-4 py-2 rounded-full bg-stone-200 outline-0 text-gray-500"
            placeholder="Search any recipe"
          />
        </div>

        <button className="bg-purple-800 rounded-md text-white font-semibold px-10 py-2 active:scale-95">
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
