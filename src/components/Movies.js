import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie =>
        <div>
          <strong>{movie.title}</strong>: {movie.time} mins
          <ul>
            {movie.genres.map(genre => <li>{genre}</li>)}
          </ul>
          <hr />
        </div>
      )}
    </div>
  );
};

export default Movies;
