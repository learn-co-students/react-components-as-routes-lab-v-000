import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1> Movies Page </h1>
      {movies.map(movie =>
        <div>
          <p> <strong> Title: </strong> {movie.title} </p>
          <p> <strong> Time: </strong>{movie.time} </p>
            <strong>Genres:</strong>
            {movie.genres.map(genre =>
              <ul> {genre} </ul>
            )}
        </div>
      )}
    </div>
  );
};

export default Movies;
