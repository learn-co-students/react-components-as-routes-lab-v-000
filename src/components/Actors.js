import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsHTML = actors.map((actor, index) => {
    return <div key={index}>
        <h1>{actor.name}</h1>
        <ul>{actor.movies.map((movie, index) => {return <li key={index}>{movie}</li>})}</ul>
      </div>
  });

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsHTML}
    </div>
  );
};

export default Actors;
