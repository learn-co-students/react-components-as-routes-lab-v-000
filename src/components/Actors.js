import React from 'react';
import { actors } from '../data';

const decoratedActors = actors.map((actor, index) => {
  return (
    <div key={index}
         className="actor">
      <h3>{actor.name}</h3>
      <h4>Movies</h4> 
      <ul>
        {actor.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  )
});

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {decoratedActors}
    </div>
  );
};

export default Actors;
