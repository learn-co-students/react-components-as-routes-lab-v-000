import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const movieDivs = movies.map(movie => (
    <div>
      <h4>{movie.title}</h4>
      <p>{movie.time}</p>
      <ul>
        {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Movies Page</h1>
      {movieDivs}
    </div>
  );
};

export default Movies;
