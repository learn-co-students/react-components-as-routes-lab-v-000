import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>

      {movies.map((movie, index) => (
        <div key={index}>
          <h3>Title: {movie.title}</h3>
          <p>Time: {movie.time}</p>
          <p>Genres:</p>
          <ul>
            {movie.genres.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
          <p>Metascore:{movie.metascore}</p>
        </div>
      ))}


    </div>
  );
};

export default Movies;
