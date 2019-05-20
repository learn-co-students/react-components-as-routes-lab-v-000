import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let list_movies = movies.map((movie, index)=>
    <div className="movie" key={index}>
      <h2>{movie.title}</h2>
      <p>{movie.time}</p>
      <p>{movie.genres}</p>
    </div>)

  return (
    <div>
        <h1>Movies Page</h1>
        {list_movies}
    </div>
  );
};

export default Movies;
