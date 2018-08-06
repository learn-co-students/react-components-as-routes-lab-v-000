import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div className="actors">
      <h1>Actors Page</h1>
        {actors.map((actor, index) => (
          <div className="actor" key={index}>
            <h3>{actor.name}</h3>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Actors;
