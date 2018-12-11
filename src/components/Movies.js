import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie =>
        <div className="movie" key={movie.title}>
          <h2>{movie.title}</h2>
          <h3>Runtime: {movie.time} minutes</h3>
          <ul><h3>Genres:</h3>
            {movie.genres.map(genre =>
              <li>{genre}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Movies;
