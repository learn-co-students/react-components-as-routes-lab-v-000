import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
      {movies.map(movie =>
        <div key={movie.id}>
         <h3>Title: {movie.title}</h3>
         <p> Time : {movie.time}</p>
         <p> Genres : {movie.genres}</p>
        </div>
      )};
    </div>
  );
};

export default Movies;
