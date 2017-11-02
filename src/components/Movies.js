import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map((movie) =>
          <div>
            <h1>{movie.title}</h1>

            <ul>
              <li>Runtime: {movie.time}</li>
              <li>Genres: {movie.genres.join(', ')}</li>
            </ul>
          </div>
        )}
    </div>
  );
};

export default Movies;
