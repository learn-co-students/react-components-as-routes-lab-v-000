import React from "react";
import { movies } from "../data";

const Movies = () => {
  let moviesDiv = movies.map(movie => (
    <div>
      <h2>{movie.title}</h2> Time: {movie.time} <br /> 
      Genres:{" "}
        {movie.genres.map(genre => (
          <ul>{genre}</ul>
        ))}
    </div>
  ));

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesDiv}
    </div>
  );
};

export default Movies;
