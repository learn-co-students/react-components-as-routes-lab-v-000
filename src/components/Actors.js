import React from 'react';
import { actors } from '../data';
// import { prependOnceListener } from 'cluster';

const createActors = actor => {
  return(
    <div>
        <h2>Name: {actor.name}</h2>

        Movies:
        <ul>
          {actor.movies.map(movie => { return <li>{movie}</li> })}
        </ul>
    </div>
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => createActors(actor))}
    </div>
  );
};

export default Actors;
