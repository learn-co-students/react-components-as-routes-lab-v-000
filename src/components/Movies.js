import React from 'react';
import { movies } from '../data';

const moviesList = () => {
  return (
    movies.map((movie) => 
        <div>
          <h2>Movie Title: {movie.title}</h2>
          <h2>Running Time: {movie.time}</h2>
          <h2>Movie Genre(s):</h2>
            <ul>
              {movie.genres.map((genre) => <li>{genre}</li>)}
            </ul>
          <h2>Metascore: {movie.metascore}</h2>
          
        </div>
      )
    )
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {moviesList()}
    </div>
  );
};

export default Movies;
