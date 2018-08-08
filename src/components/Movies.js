import React from 'react';
import { movies } from '../data';

const movieCards = 
  movies.map(movie => {
    return(
      <div key={movie.title}>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        Genres:
        <ul>
          {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
      </div>
  )}
)

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movieCards}
    </div>
  );
};

export default Movies;
