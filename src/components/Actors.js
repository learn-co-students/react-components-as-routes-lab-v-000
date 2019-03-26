import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const temp1 = actors
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <div>
          <h3>Name: {actor.name}</h3>
          <h3>Movies: {
              actor.movies.map(movie => (
                <ul>
                  <li>{movie}</li>
                </ul>
              ))
            }</h3>
        </div>) )}
    </div>
  );
};

export default Actors;
