import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, i) =>
        <div key={i}>
          <h1>{movie.title}, {movie.time}</h1>
          <ul>
            {movie.genres.map((genre, i) => <li key={i}>{genre}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Movies;
