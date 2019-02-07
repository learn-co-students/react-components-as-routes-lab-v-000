import React from 'react';
import { movies } from '../data';

const Movies = () => {
  
	const theMovies = movies.map((movie, index) => (
		<div key={index} className="movie">
			<h2 className="movie">{movie.title}</h2>
			<p>Run time: {movie.time}</p>
			<div className="genres">
				{movie.genres.map((genre, jindex) => (
					<span key={`${index}-${jindex}`}>{genre} | </span>
				))}
			</div>	
		</div>
	))

	return (
		<div>
			<h1>Movies Page</h1>
			{theMovies}
		</div>	
	)
}

export default Movies;
