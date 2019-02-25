import React from 'react';
import { directors } from '../data';

const createMovies = (director) => {
	return (
		director.movies.map((movie, i) => <li key={i}>{movie}</li>)
	)
}

const createDirectors = () => {
	return (
		directors.map((director, i) => {
			return (
				<div key={i}>
					<h3 key={i}>Director: {director.name}</h3>
					<ul>{createMovies(director)}</ul>
				</div>
			)
		})
	)
}

const Directors = () => {
	return (
		<div>
			<h1>Directors Page</h1>
			{createDirectors()}
		</div>
	);
}

export default Directors
