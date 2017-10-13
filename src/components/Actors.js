import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const actorRender = actors.map(actor => <div>{actor.name} {actor.movies}</div>);
  
  return (
    <div>
      <h1>Actors Page</h1>
      {actorRender}
    </div>
  );
};

export default Actors;
