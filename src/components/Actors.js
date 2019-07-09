import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
        <h1>Actors Page</h1>
        { actors.map((actor) => 
        <div className = 'actor' >
            <h2>{actor.name}</h2>
            <h3>Movies: {actor.movies.map((name) =>
              <ul> {name} </ul>)}</h3>
        </div>
        )}
    </div>
  );
};

export default Actors;
