import React from "react";
import { movies } from "../data";

const Movies = () => {
  const displayGenres = (movie) =>
    movie.genres.map((genre) => <li>{genre}</li>);

  const displayMovies = () =>
    movies.map((movie) => (
      <div>
        <h3>Name: {movie.title}</h3>
        <h4>Time: {movie.time}</h4>
        <h4>Genres:</h4>
        <ul>{displayGenres(movie)}</ul>
      </div>
    ));
  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies()}
    </div>
  );
};

export default Movies;
