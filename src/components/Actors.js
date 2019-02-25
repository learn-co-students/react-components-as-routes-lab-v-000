import React from 'react';
import { actors } from '../data';

const createMovies = (actor) => {
	return (
		actor.movies.map((movie, i) => <li key={i}>{movie}</li>)
	)
}

const createActors = () => {
	return (
		actors.map((actor, i) => {
			return (
				<div key={i}>
					<h3 className='actor'>Name: {actor.name}</h3>
					<ul>{createMovies(actor)}</ul>
				</div>
			)
		})
	)
}

const Actors = () => {
	return (
		<div>
			<h1>Actors Page</h1>
			{createActors()}
		</div>
	);
};

export default Actors;
