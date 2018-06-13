import React from 'react';
import { actors } from '../data';

const actorsList = actors.map((actor, index) => {
  return (
    <div>
      <h2 key={index}>{actor.name}</h2>
      <p>Movies: {actor.movies.join(", ")}</p>
    </div>
  )
});

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
};

export default Actors;
