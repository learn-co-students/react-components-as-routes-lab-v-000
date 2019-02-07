import React from 'react';
import { directors } from '../data';

const Directors = () => {
  
	const theDirectors = directors.map((director, index) => (
		<div key={index} className="director">
			<h2 className="director">{director.name}</h2>
			<div className="movies">
				{director.movies.map((movie, jindex) => (
					<p key={`${index}-${jindex}`}>{movie}</p>
				))}
			</div>	
		</div>
	))

	return (
		<div>
			<h1>Directors Page</h1>
			{theDirectors}
		</div>	
	)
}

export default Directors
