import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor =>
        <div>
          <h2>{actor.name}</h2>
          <p>{actor.movies}</p>
        </div>
      )}
    </div>
  );
};

export default Actors;
