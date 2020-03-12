import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie,index)=>
        <div key={movie.title}>
        <h2>{movie.title}</h2>
        <h3>Runtime: {movie.time} minutes</h3>
        <h4>Genres:</h4>
        <ul>
          {movie.genres.map((genre)=>
            <li>{genre}</li>
          )}
        </ul>
        </div>
      )}
    </div>
  );
};

export default Movies;
