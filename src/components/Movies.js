import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>
        Movies Page
      </h1>
      {movies.map((movie, key) =>
        <div key={key}>
          <h3>
        {movie.title}
          </h3>
        {movie.time}
          <ul>
            {movie.genres.map((genre,key) => <li key={key}>{genre}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Movies;
