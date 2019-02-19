import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, i) => (
          <div key={i}>
            <h3>Name: {movie.title}</h3>
            <span>Time:</span> <em>{movie.time}</em>
            <ul>
              {movie.genres.map((genre, i) => (
                <li key={i}>
                  {genre}
                </li>
              ))}
            </ul>
            <hr/>
          </div>
        ))}
    </div>
  );
};

export default Movies;
