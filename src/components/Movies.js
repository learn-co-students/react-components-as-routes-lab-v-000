import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => <div key={movie.id}>
          <h3>Title: {movie.title} </h3> 
          <h4> Duration: {movie.time} min </h4>
          Genres: {movie.genres.map(genre => <li> {genre} </li>)} 
        </div>)}
    </div>
  );
};

export default Movies;
