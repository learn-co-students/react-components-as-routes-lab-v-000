import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {console.log("movies:", movies)}
      {movies.forEach((movie) => {
        <div>
          <h2>{movie.title}</h2>
          <p></p>
          <p></p>
          <ul>

          </ul>
        </div>
      })}
    </div>
  );
};

export default Movies;
