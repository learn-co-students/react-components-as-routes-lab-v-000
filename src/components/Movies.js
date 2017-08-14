import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviesDiv = movies.map((movie, index) => (
    <div key={index}>
      <h1>Movie: {movie.title}</h1>
      <p>Time: {movie.time}</p>
      <p>Genres:</p>
      <ul>
        {movie.genres.map((genre, index) => ( <li key={index}>{genre}</li>))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesDiv}
    </div>
  );
};

export default Movies;
