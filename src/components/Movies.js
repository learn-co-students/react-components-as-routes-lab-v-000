import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const allMovies = movies.map(movie => (
    <div>
      <h3>{movie.title}</h3>
      <p>Time: {movie.time}, Metascore: {movie.metascore}</p>
      <h5>Genres: </h5>
      <ul>
        {movie.genres.map(genre => <li>{genre}</li>)}
      </ul>
    </div>
  ))
  return (
    <div>
      <h1>Movies Page</h1>
      {allMovies}
    </div>
  );
};

export default Movies;
