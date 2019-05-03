import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => {
        	return (
        	<div key={movie.title}>
        		<h3>{movie.title}</h3>
        		<h6>Running Time: {movie.time} minutes</h6>
        		<h5>Genres:</h5>
        		<ul>
      				{movie.genres.map(genre => {
      					return <li key={genre}>{genre}</li>
      				}
      				)}
      			</ul>
        	</div>
        	)
        }
        )}
    </div>
  );
};

export default Movies;
