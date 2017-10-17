import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let actorsList = () => actors.map((actor, index) =>
                                    <div key={index}>{actor.name} {actor.movies.map((movie) => <p>{movie}</p>)}
                                    </div>)
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList()}
    </div>
  );
};

export default Actors;
