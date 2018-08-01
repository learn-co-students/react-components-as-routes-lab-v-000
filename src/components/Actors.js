import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
        {actors.map(
          (actor, id1) => (
            <div className="actor" key={id1}>
              <p>{actor.name}</p>
              <ul>{actor.movies.map( (movie, id2) => <li key={id2}>{movie}</li> )}</ul>
            </div>
          )
        )}
    </div>
  );
};

export default Actors;
