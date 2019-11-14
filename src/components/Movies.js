import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let movie = movies.map(function(movie) {
    return (
      <div>
        <h2>Name: {movie.title}</h2>
        <p>Time: {movie.time}</p>
        <p>Genres:</p>
        <li>
          {movie.genres}
        </li>
      </div>
    )
  })
  return (
    <div>
        <h1>Movies Page</h1>
        {movie}
    </div>
  );
};

export default Movies;
