import React from 'react';
import { actors } from '../data';

// Indy, you are here. all set up
// follow last code along to get this lab

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <div key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map(movie => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
