import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let list_actors = actors.map((actor, index)=>
    <div className="actor" key={index}>
      <h2>{actor.name}</h2>
      <p>{actor.movies}</p>
    </div>)
  return (
    <div>
      <h1>Actors Page</h1>
      {list_actors}
    </div>
  );
};

export default Actors;
