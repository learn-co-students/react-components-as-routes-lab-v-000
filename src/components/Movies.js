import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, idx) => (
        <div key={idx}>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time}</p>
        <h4>Genres</h4>
        <ul>
          {movie.genres.map((genre, idx) => (<li key={idx}>{genre}</li>))}
        </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
