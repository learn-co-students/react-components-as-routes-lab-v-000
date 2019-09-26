import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies);
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, key) => ( 
        <div key={key}>{movie.title} {movie.time}
        <ul>
        {movie.genres.map((genre, key) => (
          <li key={key}>{genre}</li>
        ))}
      </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
