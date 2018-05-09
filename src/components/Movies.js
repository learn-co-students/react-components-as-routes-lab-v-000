import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const movieDetails = movies.map((movie, index) => (
    <div className="movie" key={index}>
      Title: {movie.title} - Time: {movie.time}
      <p>
        Genre:
        <ul>
          {movie.genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </p>
    </div>
  ))
  return (
    <div>
      <h1>Movies Page</h1>
      {movieDetails}
    </div>
  );
};

export default Movies;
