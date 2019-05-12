import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          {movie.title}
          {movie.time}
          <ul>
            {movie.genres.map((genre,id) => (
              <li key={id}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
export default Movies;
