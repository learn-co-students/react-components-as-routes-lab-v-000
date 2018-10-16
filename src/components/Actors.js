import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map((actor, idx) => (
        <div key={idx}>
          <h2>{actor.name}</h2>
          <h4>Movies:</h4>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;