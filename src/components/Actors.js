import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsList = actors.map((actor, i) => {
    return (
      <div key={i}>
      <p>{actor.name}</p>
      <p>
        Movies:
        {actor.movies.join(', ')}
      </p>
    </div>)
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
};

export default Actors;
