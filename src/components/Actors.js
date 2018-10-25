import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
    <h1>Actors Page</h1>
    {actors.map(actor =>
      <div class="actor">
        <h4>{actor.name}</h4>
        {actor.movies.map((movie, index) =>
          <li key={index}>{movie}</li>)}
      </div>)}
    </div>
  );
};

export default Actors;
