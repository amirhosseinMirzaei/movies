import { createContext, useState, useEffect, useContext } from "react";

import React from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFaves = localStorage.getItem("favorites");
    if (storedFaves) setFavorites(JSON.parse(storedFaves));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFavorites = (movieId) => {
    setFavorites((prev) => [...prev.filter((movie) => movie.id !== movieId)]);
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };
  const value = {
    favorites,
    addToFavorites,
    removeFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
