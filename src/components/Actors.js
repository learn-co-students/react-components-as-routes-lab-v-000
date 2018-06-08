import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsList = actors.map((actor, index) => {
    return(<div key={index}>
      <p>{actor.name}</p>
      <ul>
      {actor.movies.map((movie, index) => {
        return <li key={index}>{movie}</li>
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
