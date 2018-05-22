import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviesList = movies.map((movie, index) => {
    return(
      <div key={index}>
        <h2>Name: {movie.title}</h2>
        <p><strong>Time: </strong>{movie.time} minutes</p>
        <ul>
          {movie.genres.map((genre, index) => {
            return <li key={index}>{genre}</li>
          })}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesList}
    </div>
  );
};

export default Movies;
