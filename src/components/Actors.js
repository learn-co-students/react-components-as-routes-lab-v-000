import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(
        (actor, idx1) => (
          <div className="actor" key={idx1}>
            <p>{actor.name}</p>
            <ul>{actor.movies.map( (movie, idx2) => <li key={idx2}>{movie}</li> )}</ul>
          </div>
        )
      )}
    </div>
  );
};

export default Actors;
