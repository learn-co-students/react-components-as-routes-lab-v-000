import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
    <h1>Actors Page</h1>
    {actors.map(actor =>
    <div>
    <strong>{actor.name}</strong>
    <br/>
    Movies:
    <br/>
    {actor.movies.map(movie =>
      <ul>{movie}</ul>)}
    </div>)}
      {/*{code here}*/}
    </div>
  );
};

export default Actors;
