import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const listActors = actors.map(actor =>
    <div>
      <h3>Name: {actor.name}</h3>
      Movies:<ul>
        {actor.movies.map((movie, index) => <li key={index}>{movie}</li>)}
      </ul>
    </div>
  );

  return (
    <div>
    <h1>Actors Page</h1>
        {listActors}
    </div>
  );
};

export default Actors;
