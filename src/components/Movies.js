import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => (
	        <div className="movie">
	       		<h3>{movie.title}</h3>
	       		<h4>{movie.time}</h4>
	       		{movie.genres.map(genre => (
					<ul>{genre}</ul>
	       		))}
	        </div>

        ))}
    </div>
  );
};

export default Movies;
