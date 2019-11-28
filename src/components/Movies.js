import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies()}
    </div>
  );
};

const displayMovies = () => {
  return movies.map(movie => {
    return <div key={movie.title}>
      <h3>{movie.title}</h3>
      <p>Time: {movie.time}, Metascore: {movie.metascore}</p>
      <ul>
        {movie.genres.map(genre => {
          return <li key={genre}>{genre}</li>
        })}
      </ul>
    </div>
  })
}

export default Movies;
