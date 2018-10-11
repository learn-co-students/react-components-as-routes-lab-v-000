import React from 'react';
import { actors } from '../data';

const Actors = () => {
  function generateActorEntry(actor){
    return (
      <div>
        <h3>{actor.name}</h3>
        <ul>{actor.movies.map((movie) => { return <li>{movie}</li>})}</ul>
      </div>
    )
  }
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => {return generateActorEntry(actor)})}
    </div>
  );
};

export default Actors;
