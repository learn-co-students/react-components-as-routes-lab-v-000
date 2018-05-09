import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const actorDetails = actors.map((actor, index) => (
    <div className="actor" key={index}>
      Name: {actor.name}
      <p>
        Movies: 
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
      </p>
    </div>
  ))

  return (
    <div>
      <h1>Actors Page</h1>
      {actorDetails}
    </div>
  );
};

export default Actors;
