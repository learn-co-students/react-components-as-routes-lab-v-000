import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorMovies = (actor) => actor.movies.map((movie) => <li>{movie}</li>);

  let actorDivs = actors.map((actor, index) =>
    <div key={index}>
      <h4>Name: {actor.name}</h4>
      <p>Movies:</p>
      <ul>
        {actorMovies(actor)}
      </ul>
    </div>
  );

  return (
    <div>
      <h1>Actors Page</h1>
      {actorDivs}
    </div>
  );
};

export default Actors;
