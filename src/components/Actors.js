import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
    <h1>Actors Page</h1>
    {actors.map(actor => (
      <div>
      <h3>{actor.name}</h3>
      <ol>
        {actor.movies.map(m => <p>{m}</p>)}
        </ol>
      </div>
    ))}
    </div>
  );
};

export default Actors;
