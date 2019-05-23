import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index) => (
          <div key="index">
            <h1>Movie Name: {movie.title}</h1>
            <h1>Movie Time: {movie.time}</h1>
            <p>
              <ul>
                {movie.genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            </p>
          </div>
        ))
      }
    </div>
  );
};

export default Movies;
