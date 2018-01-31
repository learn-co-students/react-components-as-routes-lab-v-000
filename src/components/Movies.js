import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div className="movie">
      <h1>Movies Page</h1>
      {movies.map((movie, index) => {
        return(
        <div key={index} className="movie">
          <h3>{movie.title}</h3>
          <h3>{movie.time}</h3>
          <h3>{movie.genres.join(', ')}</h3>

        </div>
      )}
    )}
    </div>
  );
};

export default Movies;
