import React from 'react';
import { actors } from '../data';

const Actors = () => {
	return (
		<div className='actors'>
		<h1>Actors Page</h1>
			{actors.map(actor =>
				<React.Fragment>
					<h3>{actor.name}</h3>
					<ul>
						{actor.movies.map(movie => 
							<li>{movie}</li>
						)}
					</ul>
				</React.Fragment>
			)}
		</div>
	);
};

export default Actors;
