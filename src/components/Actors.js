import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div className="actor">
          <p>Name: {actor.name}</p>
          <p>Movies: {actor.movies}</p>
        </div>
      ))}
    </div>
  );
};

export default Actors;
