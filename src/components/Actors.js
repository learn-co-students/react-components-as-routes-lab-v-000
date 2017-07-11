import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let list_actors = actors.map((actor)=>
    <div className="actor">
      <h2>{actor.name}</h2>
      {actor.movies}
    </div>)
  return (
    <div>
      <h1>Actors Page</h1>
      {list_actors}
    </div>
  );
};

export default Actors;
