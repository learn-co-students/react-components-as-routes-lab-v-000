import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const moviesList = movies && movies.map((movie, i) =>
    <div key={i}>
      Title: {movie.title}
      <br></br>
      Length: {movie.time}
      <br></br>
      Genres: {movie.genres}
      <br></br>
      <br></br>
    </div>
  )

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesList}
    </div>
  );
};

export default Movies;
