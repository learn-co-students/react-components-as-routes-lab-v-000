import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderedMovies = movies.map(movie =>
    <div className="movie">
      Title: {movie.title}<br />
      Time: {movie.time}
      Genres: {movie.genres.join(", ")}
    </div>
  )
  return (
    <div>
      <h1>Movies Page</h1>
      {renderedMovies}
    </div>
  );};

export default Movies;
