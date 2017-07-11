import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let list_movies = movies.map((movie)=>
    <div className="movie">
      <h2>{movie.title}</h2>
      {movie.time}
      {movie.genres}
    </div>)

  return (
    <div>
        <h1>Movies Page</h1>
        {list_movies}
    </div>
  );
};

export default Movies;
