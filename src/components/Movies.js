import React from 'react';
import { movies } from '../data';

const Movies = () => {
	const moviesDisplay = movies.map((movie) => {
		const genresDisplay = movie.genres.map((genre) => <li>{genre}</li>);
		
		return (
			<div className="movie">
				Title: {movie.title} <br/>
				Duration: {movie.time} <br/>
				Metascore: {movie.metascore || 'N/A'} <br/>
				Genres:
				<ul>
					{genresDisplay}
				</ul>
			</div>
		)
	})

	return (
		<div>
			<h1>Movies Page</h1>
			{moviesDisplay}
		</div>
	)
};

export default Movies;

