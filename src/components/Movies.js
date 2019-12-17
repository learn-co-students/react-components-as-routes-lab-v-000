import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, i) => {
        return (
          <div className="movie" key={i}>
          {movie.title} - {movie.time} minutes
            <ul>
              {movie.genres.map(genre => {
                return <li key={genre}>{genre}</li>
              })}
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Movies;
