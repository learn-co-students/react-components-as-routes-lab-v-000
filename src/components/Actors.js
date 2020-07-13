import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
        {actors.map(actor => {
          return(
            <div>
              {actor.name}
              <ul>
              {actor.movies.map(movies => <li>{movies}</li>)}
              </ul>
            </div>
          )
        })}
    </div>
  );
};

export default Actors;
