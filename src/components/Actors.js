import React from 'react';
import { actors } from '../data';

const Actors = () => {
	const generateActors = () => {
  		return actors.map(actor => <div><h2>Name: {actor.name}</h2><p>Movies:</p><ul>{actor.movies.map(
  		movie => <li>{movie}</li>)}</ul></div>)
  	}
    return (
      <div>
        {/*{code here}*/}
        <h1>Actors Page</h1>
        {generateActors()}
      </div>
    );
  };

export default Actors;