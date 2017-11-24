import React from 'react';
import { actors } from '../data';

let actorsData = actors.map((actor, index) => {
  return (
    <div key={index}>
      <h3>Name: {actor.name}</h3>
      <p>Movies:</p>
      <ul>
        {actor.movies.map((movie, index) => <li key={index}>{movie}</li>)}
      </ul>
    </div>
  );
});

const Actors = () => {
  return (
    <div>
    <h1>Actors Page</h1>
    {actorsData}
  </div>
  );
};

export default Actors;
