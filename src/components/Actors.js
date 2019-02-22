import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsList = actors.map(actor =>
    <div>
      <h3 className="actor">Name: { actor.name }</h3>
      <ul>{actor.movies.map((movie,i) => <li key={i}>{ movie }</li>)}</ul>
    </div>
  )
  return (
    <div>
      <h1>Actors Page</h1>
      { actorsList }
    </div>
  );
};

export default Actors;
