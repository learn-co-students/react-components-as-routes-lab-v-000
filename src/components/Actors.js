import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsList = actors.map(actor => {
    const movies = actor.movies.map(movie => {
      return <li>{movie}</li>
    })
    return(
      <div>
        <strong>{actor.name}</strong>
        <ul>
          {movies}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
};

export default Actors;
