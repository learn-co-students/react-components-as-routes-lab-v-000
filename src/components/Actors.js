import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor =>
      	<div className="actor" key={actor.name}>
      	  <p><strong>Name: {actor.name}</strong></p>
      	  <p>Movies:</p>
      	  <ul>
      	    {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
      	  </ul>
      	</div>
      )}
    </div>
  );
};

export default Actors;

/*
// Actors component should:
// - first render one <h1 /> with the text 'Actors Page' inside of a <div />
// - render a <div /> with a className of 'actor' for each actor
// - Each <div> should contain the actor's name and an <ul> for each of their movies
*/