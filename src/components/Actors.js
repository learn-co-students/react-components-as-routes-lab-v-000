import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const list = actors.map((actor, index) => (
    <div key={index} className="actor">
      <h1>{actor.name}</h1>
      {actor.movies.map(movie => (
        <ul>
          <li>{movie}</li>
        </ul>
      ))}
    </div>
  ));
  
  return (
    <div>
      <h1>Actors Page</h1>
      {list}
    </div>
  );
};

export default Actors;
