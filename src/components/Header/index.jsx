import React from "react";
import { Link } from "react-router-dom";
const index = () => {
  return (
    <header className="mb-10 flex justify-between  items-center">
      <Link to="/" className="flex items-center">
        <img
          src="/netflix_logo.svg"
          className="max-w-[120px] cursor-pointer"
          alt="Netflix Logo"
        />
        <div className="flex items-center ml-2">
          <span className="text-white font-bold tracking-wider">Trailer</span>
          <svg
            className="ml-2 w-6 h-6 text-red-600"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </Link>
      <Link
        to="/watchlist"
        className="flex items-center bg-transparent text-white text-lg font-semibold rounded-md px-4 py-2 transition duration-300 hover:bg-white hover:text-gray-800 transform hover:scale-105"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M3 4h18v2H3zm0 5h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
        </svg>
        <span>Watchlist</span>
      </Link>
    </header>
  );
};

export default index;
