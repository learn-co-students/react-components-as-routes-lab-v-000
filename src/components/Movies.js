import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <React.Fragment>
      <h1>Movies Page</h1>
      {movies.map(movie =>
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.time}</p>
          <ul>
            {movie.genres.map(genre => <li>{genre}</li>)}
          </ul>
          <p>{movie.metascore}</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default Movies;
