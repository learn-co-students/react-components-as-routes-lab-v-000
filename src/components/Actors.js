import React from 'react';
import { actors } from '../data';

const actorList = actors.map((actor, index) =>
  <div>
    <li className="actor" key={index}>Name: {actor.name}</li>
    <li>Movies: {actor.movies}</li>
  </div>
);

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>
  );
};

export default Actors;
