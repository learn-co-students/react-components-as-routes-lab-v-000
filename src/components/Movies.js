import React from 'react';
import { movies } from '../data';

const Movies = function() {
  return <div><h1>Movies Page</h1>
    {movies.map((movie) => 
      <div>
        Title: {movie.title} Time: {movie.time} Genres: {movie.genres.map((genre) => 
        <li>{genre}</li>)}
      </div>
    )}
  </div>
}


export default Movies;
