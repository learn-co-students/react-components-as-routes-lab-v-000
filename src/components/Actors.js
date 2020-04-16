import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div className='actor'>
      {/*{code here}*/}
      <h1>Actors Page</h1>

     {actors.map(actor => {
        return <div>
                  <b>Name: {actor.name}</b>
              <ul>
                Movies: <li> {actor.movies} </li> 
            </ul>
        </div>
      })}
    </div>
  );
};

export default Actors;
