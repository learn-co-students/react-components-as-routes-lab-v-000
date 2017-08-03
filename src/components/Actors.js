import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const actorz = actors.map((actor, index) => {
    return <div key={index}>{actor.name}{actor.movies}</div>
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorz}
    </div>
  );
};

export default Actors;
