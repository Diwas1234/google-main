import React from "react";

const SearchBar = () => {
  return (
    <div className="flex sm:flex-col md:flex-row gap-10 items-center px-20 py-6">
      <div>
        <img
          className="h-8"
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google Logo"
        />
      </div>
      <div className="flex items-center bg-white border border-gray-300 rounded-full p-2 shadow-md max-w-lg">
        <input
          className="flex-grow outline-none text-lg px-2"
          type="text"
          defaultValue="mercedes"
        />
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 focus:outline-none">
            &#x2715; {/* Close Icon */}
          </button>
          <button className="text-blue-500 focus:outline-none">
            &#x1F3A4; {/* Microphone Icon */}
          </button>
          <button className="text-blue-500 focus:outline-none">
            &#x1F50D; {/* Search Icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
