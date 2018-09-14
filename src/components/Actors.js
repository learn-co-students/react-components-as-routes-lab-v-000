import React from 'react';
import { actors } from '../data';

const rednerActors = (actors) => {
  return actors.map((actor, idx) => {
    return (
      <div key={idx}>
        <h2>{actor.name}</h2>
        <p>Movies:</p>
        <ul>
          {actor.movies.map((m, i) => <li key={i}>{m}</li>)}
        </ul>
      </div>
    )
  })
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {rednerActors(actors)}
    </div>
  );
};

export default Actors;
