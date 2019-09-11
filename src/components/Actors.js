import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsHTML = actors.map(actor =>
    <div key={actor}>
      <h4>{actor.name}</h4>
      <ul>
        {actor.movies.map(movie =>
          <li key={movie}>{movie}</li>
        )}
      </ul>
    </div>
  )

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsHTML}
    </div>
  );
};

export default Actors;
