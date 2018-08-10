import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsMap = actors.map(actor => {
    return (
      <div key={actor.name} >
        <h4>{actor.name}</h4>
        <ul>
          {
            actor.movies.map(movie => {
              return <li key={movie}>{movie}</li>
            })
          }
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsMap}
    </div>
  );
};

export default Actors;
