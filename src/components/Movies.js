import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie =>
        <div>
          <h4>Movie: {movie.title}</h4>
          <p>Length: {movie.time} minutes</p>
          <ul>
            {movie.genres.map(genre => <li>{genre}</li>)}
          </ul>
          <hr/>
        </div>
      )}
    </div>
  );
};

export default Movies;
