import React from 'react';
import { movies } from '../data';

const renderMovies = (movies) => {
  return movies.map((movie, idx) => {
    return (
      <div key={idx}>
        <h2>{movie.title}</h2>
        <p><small>Running Time: {movie.time} minutes</small></p>
        <p>Genres:</p>
        <ul>
          {movie.genres.map((g, idx)=> <li key={idx}>{g}</li>)}
        </ul>
      </div>
    )
  })
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies(movies)}
    </div>
  );
};

export default Movies;
