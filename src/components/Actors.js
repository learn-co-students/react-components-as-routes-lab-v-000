import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) =>
        <div key={index}>
          <h3>Actors Name: {actor.name}</h3>
          {actor.movies.map((movie, idx) =>
            <ul key={idx}>
              {movie}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Actors;
