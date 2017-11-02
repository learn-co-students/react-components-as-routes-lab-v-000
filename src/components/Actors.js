import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
        {actors.map((actor) =>
          <div>
            {actor.name}
            <ul>
              <li>Movies: {actor.movies.join(', ')}</li>
            </ul>
          </div>
        )}
    </div>
  );
};

export default Actors;
