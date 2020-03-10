import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, mindex) => {
        return (
          <div key={mindex}>
            <h3>{movie.title}</h3>
            <p>Time: {movie.time}</p>
            Genres:
              <ul>
                {movie.genres.map((genre, gindex) => {
                  return (
                    <li key={gindex}>{genre}</li>
                  )
                })}
              </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Movies;
