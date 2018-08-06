import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div className="movies">
      <h1>Movies Page</h1>
        {movies.map((movie, index) => (
          <div className="movie" key={index}>
            <h3>{movie.title}</h3>
            <p>{movie.time}</p>
            <ul>
              {movie.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
