import React from 'react';
import { directors } from '../data';

const Directors = () => {
	return (
		// <div>
		<React.Fragment>
			<h1>Directors Page</h1>
			{directors.map((director) => (
				<div key="director" className="director">
					<h1>{director.name}</h1>
					<h3>Movies</h3>
					{director.movies}
				</div>
			))}
		</React.Fragment>
		// </div>
	);
};

export default Directors;
