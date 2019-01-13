import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
        {actors.map((actor, ind) => (
          <div key={ind}>
            <h3>Name: {actor.name}</h3>
            <h4>Movies: </h4>
              <ul>
                {actor.movies.map((movie, ind) => (
                  <li>{movie}</li>
                ))}
              </ul>
          </div>
        ))}
    </div>
  );
};

export default Actors;
