import React from 'react';
import { movies } from '../data';

const movieList = movies.map(movie => <div>{movie.title}, {movie.time} {movie.genres.map(genre => <ul>{genre}</ul>)}</div>)

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
};

export default Movies;
