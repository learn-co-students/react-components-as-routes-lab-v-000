import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      { actors.map((actor, index) =>
        <div className="actor">
          Name: {actor.name}
          Movies:
          <ul>
            {actor.movies.map((movie, index) =>
              <li key={index}>{movie}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Actors;
