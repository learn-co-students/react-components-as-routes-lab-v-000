import React from 'react';
import { actors } from '../data';

const Actors = () => {


  const actorList = actors.map((actor) => {
    return <div className="actor">{actor.name}
      
      <ul>{actor.movies}</ul>
    </div>
  })
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actorList}
    </div>
  );
};

export default Actors;
