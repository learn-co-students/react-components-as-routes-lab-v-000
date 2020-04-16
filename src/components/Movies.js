import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log({movies})
  return (
    <div>
    <h1>Movies Page</h1>
    {movies.map(movie => {
      return(
        <div>

        <p>Movie: {movie.title}</p>
          <p>Time: {movie.time}</p>
          Genres: {movie.genres}
      </div>
    )})}
    </div>
  );
};

export default Movies;
