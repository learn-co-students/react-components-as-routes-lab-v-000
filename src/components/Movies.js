import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(
        (movie, idx1) => (
          <div className="movie" key={idx1}>
            <p>{movie.title}</p>
            <p>{movie.time}</p>
            <ul>{movie.genres.map( (genre, idx2) => <li key={idx2}>{genre}</li> )}</ul>
          </div>
        )
      )}
    </div>
  );
};

export default Movies;
