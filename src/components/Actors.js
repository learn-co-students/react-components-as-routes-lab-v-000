import React from 'react';
import { actors } from '../data';

const getChildren = (movies) => {
  return movies.map((movie) =>
    <ul>{movie}</ul>)
}

const actorsList = actors.map((actor, index) => (
    <div>{actor.name}{getChildren(actor.movies)}</div>
  ))

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}

    </div>
  );
};

export default Actors;
