import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>

      {actors.map((actor, i) => (
        <div key = {i}>
          <p><strong>Name: {actor.name}</strong></p>
          <p>Movies:</p>
          {actor.movies.map((movie, i) => (
            <li key = {i}>{movie}</li>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Actors;
