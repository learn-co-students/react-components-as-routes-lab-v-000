import React from 'react';
import { actors } from '../data';
import moviesLi from '../mappers/movies';

const Actors = () => {
  const actorDivs = actors.map((actor, index) => {
    return (
      <div key={index}>
        {actor.name}
        <ul>
          {moviesLi(actor.movies)}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorDivs}
    </div>
  );
};

export default Actors;
