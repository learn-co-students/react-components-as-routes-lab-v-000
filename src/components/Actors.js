import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderedActors = actors.map(actor =>
    <div className="actor">
      {actor.name}
      {actor.movies.join(", ")}
    </div>
  )
  return (
    <div>
      <h1>Actors Page</h1>
      {renderedActors}
    </div>
  );
};

export default Actors;
