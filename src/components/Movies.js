import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div className='movies'>
      <h1>Movies Page</h1>
      {movies.map(movie => (
        <div className="movie">
          <h3>{movie.title}, {movie.time}</h3>
          <ul>
            {movie.genres.map(genre => (
              <li>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;