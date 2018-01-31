import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div className="actor">
      <h1>Actors Page</h1>
      {actors.map((actor, index) => {
        return(
        <div key={index} className="actor">
          <h3>{actor.name}</h3>
          {actor.movies}
        </div>
      )}
    )}
    </div>
  );
};

export default Actors;
