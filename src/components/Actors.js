import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div className = 'actor'>
      <h1>Actors Page</h1>
      {returnActors}
    </div>
  );
};

const returnActors = actors.map((actor, i) => (
   <div key={i}>
     <h3>Name: {actor.name}</h3>
     <h4>Movies: </h4>
     <ul>
       {actor.movies.map((movie, i) => (
         <li key={i}>{movie}</li>
       ))}
     </ul>
    </div>
))

export default Actors;
