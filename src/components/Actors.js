import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsList = actors.map((actor, index)=>{
    return(
      <div key={index} className="actor">
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map((movie, i) => <li key={i}>{movie}</li>)}
        </ul>  
      </div>
    );
  });

  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
};

export default Actors;