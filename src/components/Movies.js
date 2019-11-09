import React from 'react';
import { movies } from '../data';

const mappedMovies = movies.map(movie => {
  const genres = movie.genres.map(genre => <li>{genre}</li>);
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.time}</p>
      <ul>{genres}</ul>
    </div>
  );
});

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {mappedMovies}
    </div>
  );
};

export default Movies;
