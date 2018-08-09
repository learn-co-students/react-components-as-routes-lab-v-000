import React from 'react';
import { actors } from '../data';

const Actors = ({actors=[]}) => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => {
        <div key={index} className="actor">
          <h3>Name: {actor.name}</h3>
          <p>Movies:</p>
          <ul>
            {actors.movies.map((movie, index) => <li key={index}>{movie}</li>)}
          </ul>
        </div>
      })}
    </div>
  );
};

export default Actors;
