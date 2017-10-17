import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie) => (
          <div>
            <h2>{movie.title}</h2>
            <h3>Time: {movie.time}</h3>
            <h3>Genres:</h3> {movie.genres.map((genre) => (
              <ul>
                <li>{genre}</li>
              </ul>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Movies;
