import React from "react";
import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import { MovieCard } from "../components/MovieCard";

const Favorites = () => {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie}></MovieCard>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favorite movies yet</h2>
      <p>Start adding movies to your favorites and they will appera here</p>
    </div>
  );
};

export default Favorites;
