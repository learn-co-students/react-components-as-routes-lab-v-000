import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      { actors.map((actor, idx) =>
        <div key={ idx }>
          <h2>{ actor.name }</h2>
          <ul>
            { actor.movies.map((mov, idx) =>
              <li key={ idx }>{ mov }</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Actors;
