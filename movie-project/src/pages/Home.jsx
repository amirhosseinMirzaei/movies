import "../css/Home.css";

import { MovieCard } from "../components/MovieCard";
import { useState } from "react";
export const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {
      id: 1,
      title: "John Wick",
      release_date: "2020",
    },
    {
      id: 2,
      title: "Terminator",
      release_date: "2020",
    },
    {
      id: 3,
      title: "Fall",
      release_date: "2020",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};
