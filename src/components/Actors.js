import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsList = actors.map((actor, idx) =>
    <div key={idx}>
      <h3>Name: {actor.name}</h3>
      <p>Movies:</p>
      <ul>
        {
          actor.movies.map((movie, idx) => <li key={idx}>{movie}</li>)
        }
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
