import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsList = actors.map((actor, index) =>
    <div key={index} className="actor">
      <h2>Name: {actor.name}</h2>
      <ul>
        {actor.movies.map((movie, index) => <li key={index}>{movie}</li>) }
      </ul>
    </div>
  )
  return (
    <div>
      <h1>Actors Page</h1>
        {actorsList}
    </div>
  );
};

export default Actors;
