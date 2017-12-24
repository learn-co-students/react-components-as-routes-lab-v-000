import React from 'react';
import { directors } from '../data';

const Directors = () => {
		function listMovies(director) {
 		return director.movies.map(movie => <li>{movie}</li>)
 	}

	const listDirectors = directors.map(director => 
		<div className="actor">
			<h4>{director.name}</h4>
				<ol>
					{ listMovies(director) }
				</ol>
		</div>
	)

  return (
    <div>
      <h1>Directors Page</h1>
      {listDirectors}
    </div>
  );
}

export default Directors
