import React from "react";
import { movies } from "../data";

const movieList = movies.map(movie => {
  let genres = movie.genres.map(genre => <ul>{genre}</ul>);
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>Time: {movie.time} minutes</p>
      {genres}
    </div>
  );
});

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
};

export default Movies;
