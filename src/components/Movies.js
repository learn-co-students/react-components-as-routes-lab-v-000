import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
          {movies.map((movie, index) => {
            return <div><ul key={index}>Title: {movie.title} <br/> Time: {movie.time} <br/> Genres: {movie.genres}</ul></div>
          })}
    </div>
  );
};

export default Movies;
