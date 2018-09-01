import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const array = movies;
  return (
    <div>
      <h1>Movies Page</h1>
      {array.map(movie => {
        return (
          <div>
            <p>{movie.title}</p>
            <p>{movie.time}</p>
            <ul>
              {movie.genres.map(genre => {
                return (
                  <li>{genre}</li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
