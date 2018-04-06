import React from 'react';
import { actors } from '../data';

class Actors extends React.Component {
  renderActors(actors) {
  	return actors.map((actor,index) => {
  	  return (
  	  	<div key={index}>
  	  	<h3>Name: {actor.name}</h3>
  	  	<p>Movies: </p>
  	  	<ul>
  	  	{this.renderActorsMovies(actor)}
  	  	</ul>
  	  	</div>
  	  );
  	});
  };

  renderActorsMovies(actor) {
  	return actor.movies.map((movie,index) => {
  		return (
  		  <li key={index}>{movie}</li>
  		);
  	});
  };

  render() {
	  return (
	    <div>
	      <h1>Actors Page</h1>
	      {this.renderActors(actors)}
	    </div>
	  );	
  };

};

export default Actors;
