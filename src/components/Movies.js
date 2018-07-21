import React from 'react';
import { movies } from '../data';

const moviesContent = movies.map((movie, idx) => (
  <div key={idx}>
    <h3>Name: {movie.title}</h3>
    <p>Time: {movie.time}</p>
    <p>Genres:</p>
    <ul>
      {movie.genres.map((genre, idx) => (
        <li key={idx}>{genre}</li>
      ))}
    </ul>
  </div>
))

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesContent}
    </div>
  );
};

export default Movies;
