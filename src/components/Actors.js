import React from 'react';
import { actors } from '../data';

const pretenders = { actors }.actors.map(actor => {
  return (
    <div>
      <h2>{actor.name}</h2>
      <p>Movies:</p>
      <ul>
        {actor.movies.map(movie =>
          <li>{movie}</li>
        )}
      </ul>
    </div>
  )
});

const Actors = () => {
  return (
    <div>
     <h1>Actors Page</h1>
      {pretenders}
    </div>
  );
};

export default Actors;
