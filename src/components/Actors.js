import React from 'react';
import { actors } from '../data';

const actorList = () => {
  return (
    actors.map((actor) => 
        <div className="actor">
          <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie) => <li>{movie}</li>)}
            </ul>
        </div>
      )
    )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorList()}
    </div>
  );
};

export default Actors;
