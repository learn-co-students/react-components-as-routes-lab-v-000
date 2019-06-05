import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div className="movie">
      <h1>Movies Page</h1>
        {movies.map((movie, index) => (
          <div key={index}>
            <h2>Name: {movie.title}</h2>
              <p>Time: {movie.time}</p>
              <p>Genres: {movie.genres}</p>
              <p>Metascore: {movie.metascore}</p>
          </div>
        ))}
    </div>
  );
};

export default Movies;
