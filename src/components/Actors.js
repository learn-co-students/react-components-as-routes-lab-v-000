import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const Actors = actors.map((actor, index) => (
    <div key={index}>
      <h3>{actor.name}</h3>
      <h3>Movies:</h3>
      <ul>
        {actor.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  ))
  return (
    <div>
      <h1>Actors Page</h1>
      {Actors}
    </div>
  );
};

export default Actors;
