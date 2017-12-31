import React from 'react';
import { actors } from '../data';

const listItems = actors.map((actor, index) =>
  <div key={index}>
    <h3>{actor.name}</h3>
    <ul>{actor.movies.map((movie, ind) =>
      <li key={ind}>{movie}</li>)}
    </ul>
  </div>
)

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {listItems}
    </div>
  );
};

export default Actors;
