import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
      {movies.map(
      (movie, id1) => (
          <div className="movie" key={id1}>
            <p>{movie.title}</p>
            <p>{movie.time}</p>
            <ul>{movie.genres.map( (genre, id2) => <li key={id2}>{genre}</li> )}</ul>
          </div>
        )
      )}
    </div>
  );
};

export default Movies;
