import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
      	return (
      		<div key={actor.name} className="actor">
      			<h3>Actor: {actor.name}</h3>
      			<h5>Movies</h5>
      			<ul>
      			{actor.movies.map(movie => {
      				return (
      				<li key={movie}>{movie}</li>
      				)
      			}
      			)}
      			</ul>
      		</div>
      	)
      })}
    </div>
  );
};

export default Actors;


 