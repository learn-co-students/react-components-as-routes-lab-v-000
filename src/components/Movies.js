import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie =>
      <div>
        <h2>Title: {movie.title}</h2>
        <p>Run Time: {movie.time}</p>
        Genres: {movie.genres.map(genre => <li>{genre}</li>)}
      </div>)}
    </div>
  );
};

export default Movies;
