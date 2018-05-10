import React from 'react';
import { actors } from '../data';

const actordiv = actors.map((actor, index)=> (
    <div className='actor' key={index}>
      {actor.name}
      <ul>
        {actor.movies.map((movie,index)=><li key={index}>{movie}</li>)}
      </ul>
    </div>
  
  ))
    
    


const Actors = () => {
  
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      { actordiv }
    </div>
  );
};

export default Actors;
