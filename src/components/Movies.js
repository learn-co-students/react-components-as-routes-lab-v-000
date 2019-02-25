import React from 'react';
import { movies } from '../data';

const createMovie = (movie, i) => {
	return (
		<div key={movie.title} >
			<h3>{movie.title}</h3>
			<p>Time: {movie.time}</p>
			<p>Genres:</p>
			<ul>
				{movie.genres.map((genre, i) => {
					return (
						<li key={i}>{genre}</li>
					)
				})}
			</ul>
		</div>
	)
}

const createMovies = () => {
	return (movies.map(movie => createMovie(movie)))
}

const Movies = () => {
	return (
		<div>
			<h1>Movies Page</h1>
			{createMovies()}
		</div>
	);
};

export default Movies;
