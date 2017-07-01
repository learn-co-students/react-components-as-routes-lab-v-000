import React from 'react';
import { movies } from '../data';

const decoratedMovies = movies.map((movie, index) => {
  return (
    <div key={index} className="movie">
      <h3>Name: {movie.title}</h3>
      <p>Time: {movie.time}</p>
      <p>Genres:</p>
      <ul>
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  )
})


const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {decoratedMovies}
    </div>
  );
};

export default Movies;
