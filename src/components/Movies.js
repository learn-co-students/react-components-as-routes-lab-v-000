import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, key) =>
        <div className="movie" key={key}>
          <h2>Title: {movie.title}</h2>
          <p>Time: {movie.time}</p>
          <ul>
            {movie.genres.map((genre, key) =>
              <li key={key}>{genre}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Movies;
