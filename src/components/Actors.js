import React from 'react';
import { actors } from '../data';



const Actors = () => {
 
  let actor = actors.map(actor => <div className='actor'><h2>Name: {actor.name}</h2><br />Movies:<ul>{actor.movies.map(movie => <li>{movie}</li>)}</ul></div>)



  return (
    <div>
      <h1>Actors Page</h1>
        {actor}
    </div>
  );
};

export default Actors;



