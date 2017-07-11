import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorShow = actors.map(actor => {
    return (
      <div>
        <h4>Name: {actor.name}</h4>
        <p>Movies:</p>
        <ul>{actor.movies.map(movie => (<li>{movie}</li>))}</ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorShow}
    </div>
  );
};

export default Actors;
