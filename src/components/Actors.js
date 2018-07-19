import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsList = actors.map( a => <div>
    <h3> {a.name} </h3>
    <ul> {a.movies.map( movie => <li> {movie} </li>)} </ul>
    </div>
  )
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
};

export default Actors;
