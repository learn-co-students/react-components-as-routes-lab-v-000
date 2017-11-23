import React from 'react';
import { actors } from '../data';

console.log(actors)

const Actors = () => {
  const actorList = actors.map((actor, key) => {
    return <div className="actor" key={key}>{actor.name}
      <ul>
        {actor.movies.map((movie, i) => <li key="{i}">{movie}</li>)}
      </ul>
    </div>
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}

    </div>
  );
};

export default Actors;
