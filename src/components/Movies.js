import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      { movies.map(movie => (<div className="movie">{movie.title} {movie.genres} {movie.time} </div>)) }
    </div>
  );
};

export default Movies;
