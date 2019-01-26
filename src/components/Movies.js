import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map( movie => 
        <div key={movie.title}>
          <h3>{movie.title}</h3>
          <h4>Running Time: {movie.time}</h4>
          <h4>Metascore: {movie.metascore}</h4>
          <h4>Genres:</h4>
          <ul>
            {movie.genres.map( movie => <li key={movie}>{movie}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Movies;
