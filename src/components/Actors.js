import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let actorDisplay = actors.map((actor, index) => {
    return (
      <div key={index}>
        <strong>{actor.name}</strong>
        <ul>{actor.movies.map(movie => <li>{movie}</li>)}</ul>
      </div>
    )
  });

  return (
    <div>
      <h1>Actors Page</h1>
      {actorDisplay}
    </div>
  );
};

export default Actors;
