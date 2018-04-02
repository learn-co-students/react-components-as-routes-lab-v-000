import React from 'react';
import { directors } from '../data';

const Directors = () => {
	const directorsDivs = directors.map(director => 
		<div className="director">
			<h3>{director.name}</h3>
			<h4>Movies</h4>
			<ul>
				{director.movies.map(movie=> <li>{movie}</li>)}
			</ul>
		</div>)

  return (
    <div>
      <h1>Directors Page</h1>
			{directorsDivs}
    </div>
  );
}

export default Directors
