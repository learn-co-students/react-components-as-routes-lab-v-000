import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviesList = movies.map((movie, i) =>
    <div key={i} className="movie">
      <h2>Name: {movie.title}</h2>
      Time: {movie.time}
      <ul>
        {movie.genres.map((genre, i) => <li key={i}>{genre}</li>) }
      </ul>
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
