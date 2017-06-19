import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div className="movie">
          <p>Title: {movie.title}</p>
          <p>Time: {movie.time} minutes</p>
          <p>Genres: {movie.genres}</p>
          <p>Metascore: {movie.metascore}</p>
        </div>
      ))}
    </div>
  );
};

export default Movies;
