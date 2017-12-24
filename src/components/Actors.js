import React from 'react';
import { actors } from '../data';

const Actors = () => {

 	function listMovies(actor) {
 		return actor.movies.map(movie => <li>{movie}</li>)
 	}

	const listActors = actors.map(actor => 
		<div className="actor">
			<h4>{actor.name}</h4>
				<ol>
					{ listMovies(actor) }
				</ol>
		</div>
	)
	

	
  return (
    <div>
      <h1>Actors Page</h1>
      {listActors}
		</div>
  );
};

export default Actors;
