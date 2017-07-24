import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let actorJSX = actors.map((actor, index) => (<div key={index}>{actor.name}
    <ul>movies: {actor.movies.join(', ')}</ul></div>
  ))
  return (
    <div>
    <h1>Actors Page</h1>
      {actorJSX}
    </div>
  );
};

export default Actors;
