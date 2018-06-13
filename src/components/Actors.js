import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, idx) => (
        <div key={idx} className="actor">
          <h3>Name: {actor.name}</h3>
          <h5>Movies:</h5>
          <ul>
            {actor.movies.map((movie, idx) => <li key={idx}>{movie}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
