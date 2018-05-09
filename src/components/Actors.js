import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>
        Actors Page
      </h1>
      {actors.map((actor,key) =>
      <div key={key}>
        <h3>{actor.name}</h3>
        <ul>
        {actor.movies.map((movie,key) => <li key={key}>{movie}</li>)}
        </ul>
        </div>
        )}
    </div>
  );
};

export default Actors;
