import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieShow = movies.map(movie => {
    return (
      <div>
        <h4>Name: {movie.title}</h4>
        <p>Time: {movie.time}</p>
        <p>Genres:</p>
        <ul>{movie.genres.map(genre => (<li>{genre}</li>))}</ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {movieShow}
    </div>
  );
};

export default Movies;
