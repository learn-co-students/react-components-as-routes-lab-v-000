import React from 'react';
import { actors } from '../data';

const actorList = actors.map(actor => {
  const movies = actor.movies.map(movie => <ul>{movie}</ul>)
  return <div>
    <h3>{actor.name}</h3>
    {movies}
  </div>;
})

const Actors = () => {
  return (
    <div>
    <h1>Actors Page</h1>
      {actorList}
    </div>
  );
};

export default Actors;