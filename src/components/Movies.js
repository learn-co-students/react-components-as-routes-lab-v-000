import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {movies.map((movie, index)=> {
          <div key={index}>
            <h1>{movie.title}</h1>
            <p>{movie.time}</p>
            <p>Genres:</p>
            <ul>
              {movie.genres.map((genre, index)=> {
                <li key={index}>{genre}</li>
              })}
            </ul>
          </div>
        })}
    </div>
  );
};

export default Movies;
