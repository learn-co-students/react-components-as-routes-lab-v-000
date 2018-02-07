import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return <div>
            {actor.name}
            <h2>Movies</h2>
              <ul>
              {actor.movies.map(movie =>
                <li>{movie}</li>)}
              </ul>
          </div>
      })}
    </div>
  );
};

export default Actors;
