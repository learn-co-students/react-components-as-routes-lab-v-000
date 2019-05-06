import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>

    {
      actors.map(actor =>
      <div className="actor">
        <h3>Actor: {actor.name}</h3>
        <h4>Current Movies</h4>
        {
          actor.movies.map(movie =>
          <ul>
            <li>{movie}</li>
          </ul>)
        }
      </div>)
    }

    </div>
  );
};

export default Actors;
