import React from 'react';
import { directors } from '../data';

const Directors = () => {

	const directorsDisplay = directors.map((director) => {
		const moviesDisplay = director.movies.map((movie) => <li>{movie}</li>);
		return (
			<div className="director">
				Name: {director.name}
				<ul>
					{moviesDisplay}
				</ul>
			</div>
		)
	})	

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsDisplay}
    </div>
  );
}

export default Directors
