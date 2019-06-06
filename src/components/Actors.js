import React from 'react';
import { actors } from '../data';

export default class Actors extends React.Component {
	allActors = () => {
		// return actors.map((actor) => <div className="actor">name{actors.name}</div>);
	};
	// fetch('../src/data.js').then((response) => response.json()).then((response) => console.log(response));

	render() {
		return (
			<React.Fragment>
				<h1>Actors Page</h1>
				{actors.map((actor) => (
					<div key="actor" className="actor">
						<h1>{actor.name}</h1>
						<h3>Movies</h3>
						{actor.movies}
					</div>
				))}
			</React.Fragment>
		);
	}
}

// export default Actors;
