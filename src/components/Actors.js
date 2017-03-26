import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log(actors)
  return (
    <div>
      <h1>Actors Page</h1>
      <ul>
        {
          actors.map((actor, i) => {
            return(
              <div key={i}>
                <li>
                  Name: {actor.name}
                  Movies:
                  <ul>
                    {actor.movies.map((movie, i2) => <li key={i2}>{movie}</li>)}
                    
                  </ul>
                </li>
              </div>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Actors;
