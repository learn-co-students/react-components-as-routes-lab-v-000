import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsDiv = actors.map((actor, i) => (
    <div key={i}>
      <h2>{actor.name}</h2>
      Movies:
      <ul>
        {actor.movies.map((movie, i) => (
          <li key={i}>{movie}</li>
        ))}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsDiv}
    </div>
  );
};

export default Actors;
