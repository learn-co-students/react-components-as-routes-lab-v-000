import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log(actors)
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map(actor=>
        <div className='actor'>
          <h2>{actor.name}</h2>
          <h3>{actor.movies}</h3>
          </div>
      )}
    </div>
  );
};

export default Actors;
