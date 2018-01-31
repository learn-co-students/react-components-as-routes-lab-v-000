import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div className="actor">
      <h1>Actors Page</h1>
      {actors.map((actor, index) => {
        return (
          <div key={index} className="actor">
            <h2>{actor.name}</h2>
            {actor.movies}
          </div>
        )}
      )}
    </div>
  );
};

export default Actors;
