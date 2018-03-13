import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieDiv = movies.map((movie, i) => (
    <div key={i}>
      <h2>{movie.title}</h2>
      <p>Minutes: {movie.time}</p>
      Genres:
      <ul>
        {movie.genres.map((genre, i) => (
          <li key={i}>{genre}</li>
        ))}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Movies Page</h1>
      {movieDiv}
    </div>
  );
};

export default Movies;
