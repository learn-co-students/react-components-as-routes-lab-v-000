import React from 'react';
import { actors } from '../data';

const Actors = () => {
	const actorsDivs = actors.map(actor=> 
		<div className="actor">
			<h3>{actor.name}</h3>
			<h4>Movies</h4>
			<ul>
				{actor.movies.map(movie=> <li>{movie}</li>)}
			</ul>
		</div>);

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsDivs}
    </div>
  );
};

export default Actors;
