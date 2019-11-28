import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {displayActors()}
    </div>
  );
};

const displayActors = () => {
  return actors.map(actor => {
    return <div key={actor.name} className="actor">
      <h3>{actor.name}</h3>
      <ul>
        {actor.movies.map(movie => {
          return <li key={movie}>{movie}</li>
        })}
      </ul>
    </div>
    })
}

export default Actors;
