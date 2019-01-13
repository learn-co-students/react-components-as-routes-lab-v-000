import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map((movie, ind) => (
          <div key={ind}>
            <h3>Name: {movie.title}</h3>
            <h4>Time: {movie.time}</h4>
            <h4>Genres: </h4>
              <ul>
                {movie.genres.map((genre, ind) => (
                  <li>{genre}</li>
                ))}
              </ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
