import React from 'react';
import { actors } from '../data';

const actorCards = 
  actors.map(actor => {
    return(
      <div key={actor.name}>
        <h3>Name: {actor.name}</h3>
        Movies:
        <ul>
          {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>
      </div>
  )}
)

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorCards}
    </div>
  );
};

export default Actors;
