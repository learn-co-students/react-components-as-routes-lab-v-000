import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, idx) => (
        <div key={idx}>
          <h3>Title: {movie.title}</h3>
          <h3>Runtime: {movie.time}</h3>
          <p>Movies:</p>
            <ul>
              {movie.genres.map((genre, idx) => (
                <li key={idx}>{genre}</li>
              ))}
            </ul>
          </div>
      ))}
    </div>
  );
};

export default Movies;
