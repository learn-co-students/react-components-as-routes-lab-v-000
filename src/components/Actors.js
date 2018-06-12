import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const allActors = actors.map((actor, index) => {
   let actorMovies = actor.movies.map((movie, ndx) => {
     return (
       <li key={ndx}>{movie}</li>
       )
   })
  
  return (
    <div key={index} className="actor" >
      <h2>{actor.name}</h2>
      <ul>
      {actorMovies}
      </ul>
    </div> 
    ) 
  })
    
    
  return (
    <div>
      <h1>Actors Page</h1>
      {allActors}
    </div>
  );
};

export default Actors;
