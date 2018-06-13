import React from 'react';
import { movies } from '../data';

const moviesList = movies.map((movie, index) => {
  return (
    <div>
      <h2 key={index}>{movie.title}</h2>
      <p>Genres: {movie.genres.join(", ")}</p>
      <p>Running Time: {movie.time} minutes</p>
      {movie.metascore ? <p>Metascore: {movie.metascore}</p> : null }
    </div>
  )
});

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {moviesList}
    </div>
  );
};

export default Movies;
