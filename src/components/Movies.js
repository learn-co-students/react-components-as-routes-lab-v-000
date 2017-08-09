import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviesList = movies.map( (movie, i) => {
    return (
      <div key={i}>
        <p>{movie.title}</p>
        <p>Duration :{movie.time}</p>
        <p>
          Genres:
          {movie.genres.join(", ")}
        </p>
        {movies.metascore ? <p>Metascore: {movies.metascore}</p> : null}
      </div>)
  })

  return (
    <div>
        <h1>Movies Page</h1>
        {moviesList}
    </div>
  );
};

export default Movies;
