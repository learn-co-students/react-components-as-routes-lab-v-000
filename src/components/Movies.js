import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const listMovies = movies.map((movie) =>
    <div key={movie.title}>
      {movie.title}
      {movie.time}
      {movie.genres.map((genre) => <ul>{genre}</ul>)}
    </div>)
  return (
    <div>
      <h1>Movies Page</h1>
      {listMovies}
    </div>
  );
};

export default Movies;
