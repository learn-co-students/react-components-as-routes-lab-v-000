import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const movieList = movies.map((movie, index) =>

    <div>
      <h3>{movie.title} - {movie.time} min.</h3>

      <ul>
        {movie.genres.map((genre, index) =>
        <li key={index}>{genre}</li>)}
      </ul>
    </div>

  )

  return (
    <div>
      <h1>Movies Page</h1>
      { movieList }
    </div>
  );
};

export default Movies;
