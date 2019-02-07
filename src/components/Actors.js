import React from 'react';
import { actors } from '../data';

const Actors = () => {

	const theActors = actors.map((actor, index) => (
		<div key={index} className="actor">
			<h2 className="actor">{actor.name}</h2>
			<div className="movies">
				{actor.movies.map((movie, jindex) => (
					<p key={`${index}-${jindex}`} className="movie" >{movie}</p>
				))}
			</div>	
		</div>
	))

	return (
		<div>
			<h1>Actors Page</h1>
			{theActors}
		</div>	
	)
}
	

export default Actors;
