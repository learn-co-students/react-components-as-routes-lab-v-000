import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div key={index}>
          <h3>Name: {actor.name}</h3>
          <p>Movies:</p>
          <ul>
            {actor.movies.map((actor, i) => (
              <li key={i}>{actor}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
