import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviesHTML = movies.map((movie, index) => {
    return <div key={index}>
        <h1>{movie.title}</h1>
        <h2>Time: {movie.time}</h2>
        <ul>{movie.genres.map((genre, index) => {return <li key={index}>{genre}</li>})}</ul>
      </div>
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesHTML}
    </div>
  );
};

export default Movies;
