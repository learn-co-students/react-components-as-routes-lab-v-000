import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsJSX = actors.map((actor, index) => (
    <div key={index}>
      <h3>Name: {actor.name}</h3>
      <p>Movies:</p>
      <ul>
        {actor.movies.map((movie, i) => (<li key={i}>{movie}</li>))}
      </ul>
    </div>
  ))

  return (
    <div className="actors">
      <h1>Actors Page</h1>
      {actorsJSX}
    </div>
  );
};

export default Actors;
