import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const allMovies = movies.map((movie, index) =>
    <div key={index}>
      <h3>{movie.title}</h3>
      <h3>{movie.time} minutes</h3>
      <h3>Genres:</h3>
      <ul>
        {movie.genres.map(genre => <li>{genre}</li>)}
      </ul>
    </div>)
  return (
    <div>
      <h1>Movies Page</h1>
      {allMovies}
    </div>
  );
};

export default Movies;
