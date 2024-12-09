import React, { useState } from "react";
import axios from "axios";
import { MovieCard } from "./MovieCard"; // Adjust the path based on your file structure

export const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const token = localStorage.getItem("token"); // Retrieve token for authentication
      const response = await axios.get(`https://localhost:7151/movies/search`, {
        params: { query },
        headers: { Authorization: `Bearer ${token}` },
      });
      setMovies(response.data); // Set movies from API response
    } catch (err) {
      if (err.response) {
        setError(err.response.data || "Error occurred during search.");
      } else {
        setError("Network error or server not reachable.");
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <form onSubmit={handleSearch}>
        <div className="relative">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Movies..."
            className="block w-full p-5 pl-14 text-lg text-gray-900 border rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-3 rounded-full"
          >
            Search
          </button>
        </div>
      </form>
      {error && <p className="text-red-600 mt-4">{error}</p>}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.release_date.substring(0, 4)}
              rating={movie.vote_average || "N/A"} // Handle missing ratings
              poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              overview={movie.overview}
            />
          ))
        ) : (
          query && <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
};
