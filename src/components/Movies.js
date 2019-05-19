import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map((movie, index) =>
          <div>
            <strong>{movie.title}</strong>
            <p>Time: {movie.time}</p>
            <p>Genres:</p>
            <ul>
              {movie.genres.map((genre, index) =>
                <li>{genre}</li>
              )}
            </ul>
          </div>
        )}
    </div>
  );
};

export default Movies;