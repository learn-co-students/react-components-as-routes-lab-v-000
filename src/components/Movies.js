import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map( (movie) => (
        <div className='movie'>
          <h2>Name: {movie.title}</h2>
          <span>Time: {movie.time}</span>
          <br /><br />
          <span>Genres</span>
          <ul>
            {movie.genres.map( (genre) => (
              <li>{genre}</li>
            ))}
          </ul>

        </div>
      ))}
    </div>
  );
};

export default Movies;
