import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie =>
        <div>
          <h4>Title:{movie.title}</h4>
          <h4>Genres:</h4>{movie.genres.map(genre =>
            <ul>
              <li>{genre}</li>
            </ul>)}
          <h4>Run time:{movie.time}</h4>
        </div>
      )}
    </div>
  );
};

export default Movies;
