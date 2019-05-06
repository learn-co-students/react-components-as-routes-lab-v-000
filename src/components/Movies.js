import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>

    {
      movies.map(movie =>
      <div>
        <h3>Movie Title: {movie.title}</h3>
        <h4>Movie Time: {movie.time}</h4>
        <h4>Movie Genres</h4>
        {
          movie.genres.map(genre =>

          <ul>
            <li>{genre}</li>
          </ul>)
        }
      </div>)
    }
    </div>
  );
};

export default Movies;
