import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const actorsDetails = actors.map(actor => 
      <div>
        Name: {actor.name}
        Movies: <ul>{actor.movies.map(movie => <li>{movie}</li>)}</ul>
      </div>
    )

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsDetails}
    </div>
  );
};

export default Actors;
