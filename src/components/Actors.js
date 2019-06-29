import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor =>
          <div key = {actor.id}>
            <h3>Name: {actor.name}</h3>
            <p>Movies: {actor.movies}</p><br></br>
          </div>
        )};
    </div>
  );
};

export default Actors;
