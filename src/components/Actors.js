import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(m =>(
        <div>
          <h2>{m.name}</h2>
          <p>{m.movies.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Actors;
