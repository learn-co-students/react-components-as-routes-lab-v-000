import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let actorsDiv = actors.map(actor => (
    <div className="actor">
      <h2>{actor.name}</h2>
      Movies: {" "} 
        {actor.movies.map(movie => (
          <ul>{movie}</ul>
        ))}
    </div>
  ))

  return (
    <div>
      <h1>Actors Page</h1>
        {actorsDiv}
    </div>
  );
};

export default Actors;
