import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, i)=>(
        <div key={i}>
          {actor.name}
          {actor.movies.map((movie, index)=>(
            <ul>
              <li key={index}>
                {movie}
              </li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Actors;
