import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div className="actor">
         <h1>Actors Page</h1>
            {actors.map((actor, index) => (
              <div key={index}>
                <h2> Name: {actor.name}</h2>
                <p> Movies: </p>
                  <ul>
                    {actor.movies.map((movie, index) => (
                      <li key={index}>{index +1 }: {movie}</li>
                    ))}
                  </ul>
              </div>
            ))}
    </div>
  );
};

export default Actors;
