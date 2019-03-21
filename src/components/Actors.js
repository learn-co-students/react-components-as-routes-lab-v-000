import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      { actors.map((actor, index) => {
        return (
          <div className="actor" key={index}>
            <h3 className="actorName">Name: {actor.name}</h3>
            Movies:
            <ul className="movies">
              { actor.movies.map(movie => {
                  return <li>{movie}</li>
                })}
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
