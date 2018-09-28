import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    	<h1>Movies Page</h1>
        {movies.map((movie, i) => (
        	<div key={i}>
        		<h2>{movie.title}</h2>
        		<h3>{movie.time}</h3>
        		{movie.genres.map((genre, i) => (<ul key={i}>{genre}</ul>))}
        	</div>
        ))}
    </div>
  );
};

export default Movies;
