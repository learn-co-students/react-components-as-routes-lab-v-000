import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const list = movies.map((movie) => (
    <div>{movie.title} - {movie.time} <br />
      Genres: {movie.genres.map((genre) => (
        <li>{genre}</li>
      ))}
    </div>
  ));
  return (
    <div>
      <h1>Movies Page</h1>
      {list}
    </div>
  );

};

export default Movies;
