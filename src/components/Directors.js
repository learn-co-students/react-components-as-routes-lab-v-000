import React from 'react';
import { directors } from '../data';

const Directors = () => {
  
	const theDirectors = directors.map((director, index) => (
		<div key={index} className="director">
			<h2 className="director">{director.name}</h2>
			<p className="movies">
				{director.movies.map((movie, jindex) => (
					<span key={`${index}-${jindex}`}>{movie}</span>
				))}
			</p>	
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
