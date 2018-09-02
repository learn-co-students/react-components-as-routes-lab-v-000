import React from 'react';
import { actors } from '../data';

// const Actor = () => {
//     return actors.map((actor, index) => {<h1 key={index}>Name: {actor.name} Movies: {actor.movies}}
//   )}

const Actors = () => {
  return (
    
    <div className="actors">  
     <h1>Actors Page</h1>
      {actors.map((actor, index) => (
       <div key={index}> 
    <h3>Name: {actor.name}</h3> 
    <h5>Movies:
    <ul> 
    {actor.movies.map((movie, index) => 
      (<li key={index}>{movie}</li>))}
    </ul>
    </h5>
     </div>
  ))}
    </div> 
  
  );
}


export default Actors;
