import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let actorsDisplay = actors.map( actor => {
    return (
      <div className="actor">
        {actor.name}
        <ul>
          {actor.movies.map( movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  });
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsDisplay}

    </div>
  );
};

export default Actors;
