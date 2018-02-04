import React from 'react';
import { actors } from '../data'; 

const actor = actors.map((actor, index) => { 
  return <div>{actor.name}{actor.movies.map(movie => movie)}</div>
})

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actor}
    </div>
  );
};

export default Actors;
