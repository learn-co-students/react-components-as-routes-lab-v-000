import React from 'react';
import { actors } from '../data';

const actorsList = actors.map((actor, index) => (
    <div>
      {actor.name}
      {actor.movies.map((movie) =>
        <ul>{movie}</ul>)}
    </div>
  ))

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}

    </div>
  );
};

export default Actors;
