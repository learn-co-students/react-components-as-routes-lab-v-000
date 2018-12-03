import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const actorCards = actors.map((actor,index) => <div>Actor Name:{actor.name} Movies: {actor.movies.map(movie => <ul>{movie}</ul>)}</div>)

  return (
    <div>
      <h1>Actors Page</h1>

      {actorCards}
    </div>
  );
};

export default Actors;
