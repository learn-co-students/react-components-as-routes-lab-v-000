import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const allActors = actors.map(actor => (
    <div>
      <h3>{actor.name}</h3>
      <h5>Movies: </h5>
      <ul>
      {actor.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Actors Page</h1>
      {allActors}
    </div>
  );
};

export default Actors;
