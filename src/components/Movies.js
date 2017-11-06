import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => (
      	<div>
      	<p>{movie.title}</p>
      	<p>Time: {movie.time}</p>
      	<ul>{movie.genres.map((genre) => (
      		<li>{genre}</li>
      		))}</ul>
      	<p>Metascore: {movie.metascore}</p>

      	</div>
      	)
      	)}
    </div>
  );
};

export default Movies;
