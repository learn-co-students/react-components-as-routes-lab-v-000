import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsDiv = actors.map((actor, index) => (
    <div key={index}>
      <h1>{actor.name}</h1>
      <ul>
        {actor.movies.map((movie, index) => ( <li>{movie}</li> ))}
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
