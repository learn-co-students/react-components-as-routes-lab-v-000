import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor =>
        <div className="details">
          <h4>Name: {actor.name}</h4>
          <h4>Movies:</h4>
          {actor.movies.map(movie =>
            <ul>
              <li>{movie}</li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Actors;
