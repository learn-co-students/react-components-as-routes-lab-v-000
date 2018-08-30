import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsDiv = actors.map(actor => <li>
    <div className="actor"> {actor.name} <br/>
    {actor.movies.map(movie=> <h3>{movie}</h3>)}
    </div></li>)
  return (
    <div>
      <h1>Actors Page</h1>
      <ul>
      {actorsDiv}
      </ul>
    </div>
  );
};

export default Actors;
