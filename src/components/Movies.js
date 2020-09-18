import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {returnMovies}
    </div>
  );
};

const returnMovies = movies.map((movie, i) => (
  <div key={i}>
    {movie.title} {movie.time}
    <ul>Genres
      {movie.genres.map((genre, i) => (
        <li>{genre}</li>
      ))}  
    </ul> 
  </div>
))


export default Movies;
