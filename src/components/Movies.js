import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieRender = movies.map(movie => <div>{movie.title}{movie.time}{movie.genres}</div>);
  return (
    <div>
        <h1>Movies Page</h1>
        {movieRender}
    </div>
  );
};

export default Movies;
