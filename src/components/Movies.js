import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const generateMovies = () => {
  	return movies.map(movie => <div><h2>Name: {movie.title}</h2><p>Time: {movie.time}</p><p>Genres:</p><ul>{movie.genres.map(
  		genre => <li>{genre}</li>)}</ul></div>)
  }
  return (
    <div>
        <h1>Movies Page</h1>
        {generateMovies()}
    </div>
  );
};

export default Movies;