import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, idx) => {
        	return (
        	        	<div key={idx}>
        	        		<h1><strong>Name: {movie.title}</strong></h1>
        	        		<h2>Time: {movie.time}</h2>
        	        		<h2>Genres:</h2>
        	        		<ul>
        	        			{movie.genres.map((genre, idx) => {
        	        				return <li key={idx}>{genre}</li>;
        	        			})}
        	        		</ul>
        	    		</div>)
        })}
    </div>
  );
};

export default Movies;
