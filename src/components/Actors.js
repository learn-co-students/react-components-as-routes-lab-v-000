import React from 'react';
import { actors } from '../data';

const actorsData = actors.map((actor, index) => {
  return(
    <div key={index}>
      <p>Name: {actor.name}</p>
      <p>Movies:</p>
      <ul>
        {actor.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  );
})

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsData}
    </div>
  );
};

export default Actors;
