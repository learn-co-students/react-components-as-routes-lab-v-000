import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const renderActors = actors.map((actor)=> {
    return <div>
            <h2>Name:{actor.name}</h2>
            <h3>Movies:</h3>
            <ul>
              {actor.movies.map(movie => <li>{movie}</li>)}
            </ul>
          </div>
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors}
    </div>
  );
};

export default Actors;
