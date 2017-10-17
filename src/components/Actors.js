import React from 'react';
import { actors } from '../data';

const Actors = (props) => {
  const actorsDiv = actors.map((actor, index )=> (
    <div key={index}>
    <h2>{actor.name}</h2>
      {actor.movies.map((movie, index) => (<h3 key={index}>{movie}</h3>))}
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
