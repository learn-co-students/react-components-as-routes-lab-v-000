import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => {return <div key={index}>
        <strong>Name: {movie.title}</strong><br />
        Time: {movie.time} <br />
        Genres:
        <ul>
          {movie.genres.map((genre, index) => {
            return <li>{genre}</li>
          })}
        </ul>
        </div>})}
    </div>
  );
};

export default Movies;
