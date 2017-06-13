import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => 
        <div key={index}>
          Name: {movie.title}
          Time: {movie.time}
          <ul>
            Genres: {movie.genres.map((genre, index) => 
              <li key={index}>{genre}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Movies;
