import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {
        actors.map((actor, idx) => (
          <div key={idx}>
            <h3>Name: { actor.name }</h3>
            <p>Movies:</p>
            <ul>
              {
                actor.movies.map((movies, idx) => (
                  <li key={idx}>{ movies }</li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  );
};

export default Actors;
