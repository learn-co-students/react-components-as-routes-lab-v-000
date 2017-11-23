import React from 'react';
import { actors } from '../data';

const Actors = () => {
	const actorsDisplay = actors.map((actor) => {
		const moviesDisplay = actor.movies.map((movie) => <li>{movie}</li>);
		return (
			<div className="actor">
				{actor.name}
				<ul>
					{moviesDisplay}
				</ul>
			</div>
		)
	})

	return (
		<div>
			<h1>Actors Page</h1>
			{actorsDisplay}
		</div>
	)
};

export default Actors;
