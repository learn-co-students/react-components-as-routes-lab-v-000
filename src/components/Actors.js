import React from 'react';
import { actors } from '../data';

const renderActors = () => {
  return actors.map(actor => {
    return <div key={actor.name}>
      {actor.name}
      <ul>
        {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
  })
}


const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
