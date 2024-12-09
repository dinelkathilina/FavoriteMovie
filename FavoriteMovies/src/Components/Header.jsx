import { useState } from "react";
import React from "react";

export const Header = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState([
    { id: 1, name: "Movie 1" },
    { id: 2, name: "Movie 2" },
    { id: 3, name: "Movie 3" },
    { id: 4, name: "Movie 3" },
    { id: 5, name: "Movie 3" },
    { id: 6, name: "Movie 3" },
    { id: 7, name: "Movie 3" },
    { id: 8, name: "Movie 3" },
    { id: 9, name: "Movie 3" },
    { id: 10, name: "Movie 3" },
    { id: 11, name: "Movie 3" },
    { id: 12, name: "Movie 3" },
    { id: 13, name: "Movie 3" },
    { id: 14, name: "Movie 3" },
    { id: 15, name: "Movie 3" },
    { id: 16, name: "Movie 3" },
    { id: 17, name: "Movie 3" },
  ]);

  const handleToggle = () => {
    document.documentElement.classList.toggle("dark");
    setIsChecked(!isChecked);
  };

  const handleFavoritesClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const removeMovie = (id) => {
    setFavoriteMovies(favoriteMovies.filter((movie) => movie.id !== id));
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 m-6">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
          <a href="https://flowbite.com" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              FavoriteMovies
            </span>
          </a>
          <div className="flex items-center lg:order-2 ">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={isChecked}
                onChange={handleToggle}
              />
              <div
                className={`relative w-11 h-6 ${
                  isChecked ? "bg-blue-600" : "bg-gray-200"
                } rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600`}
              ></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 mr-5">
                {isChecked ? "Light Mode" : "Dark Mode"}
              </span>
            </label>

            <button
              onClick={handleFavoritesClick}
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Favorites
            </button>
            <a
              href="#"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Logout
            </a>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    onClick={closeModal} // Close when clicking outside
  >
    {/* Prevent closing modal when clicking inside */}
    <div
      className="bg-white rounded-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto relative"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 focus:outline-none"
        aria-label="Close Modal"
      >
        ✖
      </button>

      {/* Modal Header */}
      <h2 className="text-xl font-semibold mb-4">Favorite Movies</h2>

      {/* Movie List */}
      <ul className="space-y-2">
        {favoriteMovies.map((movie) => (
          <li
            key={movie.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <span>{movie.name}</span>

            <button
              onClick={() => removeMovie(movie.id)}
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
)}


    </header>
  );
};
