import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviesList = movies.map((movie, index) =>
    <div key={index} className="movie">
      <h2>Name: {movie.title}</h2>
      Time: {movie.time}
      <ul>
        {movie.genres.map((genre, index) => <li key={index}>{genre}</li>) }
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
