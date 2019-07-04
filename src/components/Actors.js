import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsList = actors.map(actor => {
    return (
      <div key={actor.name} className="actor">
        {actor.name}
        <ul>
          {actor.movies.map(movie => {
            return <li>{movie}</li>
          })}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
};

export default Actors;
