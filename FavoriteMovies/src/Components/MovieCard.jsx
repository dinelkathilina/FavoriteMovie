import React from "react";

export const MovieCard = ({ title, year, rating, poster, overview }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
      <a href="#">
        <img
          className="p-8 rounded-t-lg w-auto h-auto object-cover"
          src={poster}
          alt={`${title} poster`}
        />
        
      </a>
      <div className="flex items-center justify-between mt-2.5 mb-5">
        <span className="bg-blue-100 text-blue-800 text-s font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
          {rating}
        </span>
        <a
          href="#"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to Favorites
        </a>
      </div>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title} ( {year})
          </h5>
        </a>
        <p className="text-white mt-2 text-sm italic">{overview}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            
          </span>
        </div>
      </div>
    </div>
  );
};
