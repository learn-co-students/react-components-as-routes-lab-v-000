import React from 'react';
import { actors } from '../data';

const movieList = (movies) => {
	return movies.map( movie => <li>{movie}</li>)
}

const actorDivs = (actors) => {
	return actors.map( (actor, i) => {
		
		return <div className="actor" key={i}>
			<h3>{actor.name}</h3>
			<ul>{movieList(actor.movies)}</ul>
		</div>
	})
}

const Actors = () => {
  return (
    <div>
    	<h1>Actors Page</h1>
      	{actorDivs(actors)}
    </div>
  );
};

export default Actors;
