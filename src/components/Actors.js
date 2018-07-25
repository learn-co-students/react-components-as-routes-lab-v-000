import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {
        	actors.map((actor, i) => (
        	<div key={i}>
              <h3>Name: {actor.name}</h3>
              <p>movies:</p> 
              {actor.movies.map((movie, i) => (<p>{movie}</p>))}
            </div>
        	))
        }
    </div>
  );
};

export default Actors;
