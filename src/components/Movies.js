import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie =>
          <div>
            <h3><strong>{movie.title}</strong></h3>
            <p>{movie.time}</p>
            <p>{movie.metascore}</p>
            <ul>{movie.genres.map(genre => <li>{genre}</li>)}</ul>
          </div>
      )}
    </div>
  );
};

export default Movies;
