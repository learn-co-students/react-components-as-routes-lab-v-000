import React from 'react';
import { actors } from '../data';

const Actors = () => {
 const actorsList = actors.map((actor, i) =>
    <div>
      <h3>Actor</h3>
      <ul>
        <li>{actor.name}</li>
      </ul>      
      <h3>Movies</h3>
      <ul>
        {actor.movies.map((movie, i) => {
          return <li key={i}>{movie}</li>
        })}
      </ul>
    </div>
  );
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
};

export default Actors;
