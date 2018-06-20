import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {actors.map((actor, index)=> {
        <div key={index}>
          <h3>Actor:</h3>
          <h2>{actor.name}</h2>
          <p>Movies:</p>
          <ul>
            {actor.movies.map((movie, index)=> {
              <li key={index}>{movie}</li>
            })}
          </ul>
        </div>
      })}
    </div>
  );
};

export default Actors;
