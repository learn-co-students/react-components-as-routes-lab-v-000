import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie =>
      <div>
        Title: {movie.title}<br />
        Time: {movie.time}<br />
        Genres:
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul><br />
      </div>)}
    </div>
  );
};

export default Movies;
